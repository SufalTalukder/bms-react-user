import { useEffect, useRef, useState, useCallback } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import IconBoxSwiper from "./IconBoxSwiper";
import PageLayout from "../PageLayout";
import { fetchProductsBySubCategoryId } from "../api/sub-category-api";
import { useSubCategories } from "../context/SubCategoryContext";
import { fetchWishlistStatusByProductAndUser, manageWishlist } from "../api/product-api";
import toast from "react-hot-toast";

const DEFAULT_IMAGE = "/assets/images/cls-categories/book/fiction.png";

function SkeletonCard({ layout = "grid" }) {
    if (layout === "list") {
        return (
            <div className="skeleton-card-list">
                <div className="skeleton-img skeleton-pulse" />
                <div className="skeleton-info">
                    <div className="skeleton-line skeleton-pulse" style={{ width: "60%", height: 18 }} />
                    <div className="skeleton-line skeleton-pulse" style={{ width: "30%", height: 16, marginTop: 8 }} />
                    <div className="skeleton-line skeleton-pulse" style={{ width: "90%", height: 12, marginTop: 12 }} />
                    <div className="skeleton-line skeleton-pulse" style={{ width: "80%", height: 12, marginTop: 6 }} />
                    <div className="skeleton-swatches">
                        {[1, 2, 3].map((s) => <div key={s} className="skeleton-swatch skeleton-pulse" />)}
                    </div>
                    <div className="skeleton-btn skeleton-pulse" />
                </div>
            </div>
        );
    }
    return (
        <div className="skeleton-card-grid">
            <div className="skeleton-img skeleton-pulse" />
            <div className="skeleton-line skeleton-pulse" style={{ width: "70%", height: 16, marginTop: 12 }} />
            <div className="skeleton-line skeleton-pulse" style={{ width: "40%", height: 14, marginTop: 6 }} />
            <div className="skeleton-swatches">
                {[1, 2, 3].map((s) => <div key={s} className="skeleton-swatch skeleton-pulse" />)}
            </div>
        </div>
    );
}

function getSkeletonCount(layout, colsClass) {
    const w = typeof window !== "undefined" ? window.innerWidth : 1200;
    if (layout === "list") return w < 576 ? 3 : w < 992 ? 4 : 5;
    const cols = colsClass === "tf-col-2" ? 2 : colsClass === "tf-col-3" ? 3 : 4;
    if (w < 576) return 2;
    if (w < 768) return cols === 4 ? 4 : cols;
    return cols * 2;
}

const SORT_OPTIONS = [
    { value: "best-selling", label: "Best selling" },
    { value: "a-z", label: "Alphabetically, A-Z" },
    { value: "z-a", label: "Alphabetically, Z-A" },
    { value: "price-low-high", label: "Price, low to high" },
    { value: "price-high-low", label: "Price, high to low" },
];

function sortProducts(products, sortValue) {
    const list = [...products];
    switch (sortValue) {
        case "a-z": return list.sort((a, b) => (a.product_name || "").localeCompare(b.product_name || ""));
        case "z-a": return list.sort((a, b) => (b.product_name || "").localeCompare(a.product_name || ""));
        case "price-low-high": return list.sort((a, b) => Number(a.product_price || 0) - Number(b.product_price || 0));
        case "price-high-low": return list.sort((a, b) => Number(b.product_price || 0) - Number(a.product_price || 0));
        default: return list;
    }
}

export default function SubCategoryWiseProductsList() {

    const { slug } = useParams();
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const marketplace = query.get("marketplace");
    const eventId = query.get("eid");
    const { subCategoriesList } = useSubCategories();
    const resolvedSubCategory = subCategoriesList?.find((sc) => sc.sub_category_slug === slug);
    const subCategoryId = resolvedSubCategory?.sub_category_id ?? null;
    const subCategoryName = resolvedSubCategory?.sub_category_name ?? "Products";
    const userData = sessionStorage.getItem("user") ?? null;
    const userId = userData ? JSON.parse(userData)?.user_id : null;

    const [productsList, setProductsList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [layout, setLayout] = useState("grid");
    const [colsClass, setColsClass] = useState("tf-col-4");
    const [sortValue, setSortValue] = useState("best-selling");
    const [sortOpen, setSortOpen] = useState(false);
    const [skeletonCount, setSkeletonCount] = useState(8);
    const prevSlugRef = useRef(null);

    // Wishlist state
    const [wishlistMap, setWishlistMap] = useState({});
    const [wishlistLoadingMap, setWishlistLoadingMap] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0);
        const update = () => setSkeletonCount(getSkeletonCount(layout, colsClass));
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, [layout, colsClass]);

    useEffect(() => {
        if (!slug) return;
        if (!subCategoriesList?.length) return;
        if (prevSlugRef.current === slug) return;
        if (!resolvedSubCategory) {
            setError(`Subcategory not found.`);
            return;
        }
        prevSlugRef.current = slug;
        document.title = `${subCategoryName} - BMS Book Store`;
        loadProducts(subCategoryId, eventId);
    }, [slug, subCategoryId, eventId, subCategoriesList]);

    const loadAllWishlistStatuses = useCallback(async (productList) => {
        if (!userId || !productList?.length) return;

        await Promise.all(
            productList.map(async (p) => {
                try {
                    const res = await fetchWishlistStatusByProductAndUser({
                        product_id: p.product_id,
                        user_id: userId,
                    });
                    const status = res?.data?.data?.add_to_wishlist_status ?? 'NO';
                    setWishlistMap(prev => ({ ...prev, [p.product_id]: status }));
                } catch (err) {
                    if (err?.response?.status === 404) {
                        setWishlistMap(prev => ({ ...prev, [p.product_id]: 'NO' }));
                    }
                }
            })
        );
    }, [userId]);

    const loadProducts = async (sCatId, eventId) => {
        try {
            setLoading(true);
            setError(null);
            setProductsList([]);
            const res = await fetchProductsBySubCategoryId({ sub_category_id: sCatId, event_id: eventId });
            const fetched = res?.data?.data || [];
            setProductsList(fetched);
            await loadAllWishlistStatuses(fetched);
        } catch (err) {
            if (err?.response?.status === 404) return [];
            console.error("Error loading products: ", err);
            setError("Failed to load products. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleWishlistToggle = async (productId) => {
        if (!userId) {
            toast.error("Please log in to manage your wishlist.");
            return;
        }
        if (wishlistLoadingMap[productId] || !productId) return;

        setWishlistLoadingMap(prev => ({ ...prev, [productId]: true }));
        try {
            await manageWishlist({ product_id: productId, user_id: userId });

            setWishlistMap(prev => {
                const current = prev[productId] ?? 'NO';
                return { ...prev, [productId]: current === 'NO' ? 'YES' : 'NO' };
            });

            toast.success(
                (wishlistMap[productId] ?? 'NO') === 'NO'
                    ? "Added to wishlist."
                    : "Removed from wishlist."
            );
        } catch (err) {
            console.error("Wishlist toggle failed:", err?.response?.data?.message || err?.message);
            toast.error("Failed to update wishlist. Please try again.");
        } finally {
            setWishlistLoadingMap(prev => ({ ...prev, [productId]: false }));
        }
    };

    useEffect(() => {
        if (!sortOpen) return;
        const handler = () => setSortOpen(false);
        document.addEventListener("click", handler);
        return () => document.removeEventListener("click", handler);
    }, [sortOpen]);

    const sortedProducts = sortProducts(productsList, sortValue);
    const currentSortLabel = SORT_OPTIONS.find((o) => o.value === sortValue)?.label || "Best selling";

    const handleLayoutChange = useCallback((newLayout, newCols) => {
        setLayout(newLayout);
        if (newCols) setColsClass(newCols);
    }, []);

    return (
        <PageLayout>
            {/* <!-- Section Product --> */}
            <section className="flat-spacing-24">
                <style>{`
                @keyframes skeletonPulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
                .skeleton-pulse { background:#e9e9e9; border-radius:6px; animation:skeletonPulse 1.5s ease-in-out infinite; }
                .skeleton-card-grid { display:flex; flex-direction:column; }
                .skeleton-card-grid .skeleton-img { width:100%; aspect-ratio:3/4; border-radius:8px; }
                .skeleton-card-list { display:flex; gap:20px; padding:16px 0; border-bottom:1px solid #f0f0f0; }
                .skeleton-card-list .skeleton-img { flex-shrink:0; width:180px; height:230px; border-radius:8px; }
                .skeleton-info { flex:1; display:flex; flex-direction:column; }
                .skeleton-line { border-radius:4px; }
                .skeleton-swatches { display:flex; gap:8px; margin-top:12px; }
                .skeleton-swatch { width:22px; height:22px; border-radius:50%; }
                .skeleton-btn { width:120px; height:36px; border-radius:4px; margin-top:16px; }
                .skeleton-grid-wrapper { display:grid; gap:20px; grid-template-columns:repeat(4,1fr); }
                @media(max-width:991px){ .skeleton-grid-wrapper{grid-template-columns:repeat(3,1fr)} .skeleton-card-list .skeleton-img{width:140px;height:180px} }
                @media(max-width:767px){ .skeleton-grid-wrapper{grid-template-columns:repeat(2,1fr)} .skeleton-card-list .skeleton-img{width:110px;height:140px} }
                @media(max-width:480px){ .skeleton-grid-wrapper{grid-template-columns:repeat(2,1fr);gap:12px} }
                @keyframes fadeInUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
                .card-product{animation:fadeInUp 0.35s ease both}
                .card-product:nth-child(2){animation-delay:.05s} .card-product:nth-child(3){animation-delay:.10s}
                .card-product:nth-child(4){animation-delay:.15s} .card-product:nth-child(5){animation-delay:.20s}
                .card-product:nth-child(6){animation-delay:.25s} .card-product:nth-child(7){animation-delay:.30s}
                .card-product:nth-child(8){animation-delay:.35s}
                .product-state{width:100%;padding:60px 20px;text-align:center;color:#999;font-size:15px}
                .product-state button{margin-top:16px;padding:10px 24px;background:#222;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:14px}
                .product-state button:hover{background:#444}
            `}</style>

                <div className="container">
                    <div className="tf-shop-control">
                        <div className="tf-group-filter">
                            <Link to="#filterShop" data-bs-toggle="offcanvas" aria-controls="filterShop" className="tf-btn-filter">
                                <span className="icon icon-filter"></span><span className="text">Filter</span>
                            </Link>
                            <div
                                className="tf-dropdown-sort"
                                data-bs-toggle="dropdown"
                                onClick={(e) => { e.stopPropagation(); setSortOpen((v) => !v); }}
                            >
                                <div className="btn-select">
                                    <span className="text-sort-value">{currentSortLabel}</span>
                                    <span className="icon icon-arr-down"></span>
                                </div>
                                {sortOpen && (
                                    <div className="dropdown-menu show" onClick={(e) => e.stopPropagation()}>
                                        {SORT_OPTIONS.map((opt) => (
                                            <div
                                                key={opt.value}
                                                className={`select-item${sortValue === opt.value ? " active" : ""}`}
                                                data-sort-value={opt.value}
                                                onClick={() => { setSortValue(opt.value); setSortOpen(false); }}
                                            >
                                                <span className="text-value-item">{opt.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        <ul className="tf-control-layout">
                            <li
                                className={`tf-view-layout-switch sw-layout-list list-layout${layout === "list" ? " active" : ""}`}
                                data-value-layout="list"
                                onClick={() => handleLayoutChange("list", null)}
                            >
                                <div className="item icon-list"><span></span><span></span></div>
                            </li>
                            <li
                                className={`tf-view-layout-switch sw-layout-2${layout === "grid" && colsClass === "tf-col-2" ? " active" : ""}`}
                                data-value-layout="tf-col-2"
                                onClick={() => handleLayoutChange("grid", "tf-col-2")}
                            >
                                <div className="item icon-grid-2"><span></span><span></span></div>
                            </li>
                            <li
                                className={`tf-view-layout-switch sw-layout-3${layout === "grid" && colsClass === "tf-col-3" ? " active" : ""}`}
                                data-value-layout="tf-col-3"
                                onClick={() => handleLayoutChange("grid", "tf-col-3")}
                            >
                                <div className="item icon-grid-3"><span></span><span></span><span></span></div>
                            </li>
                            <li
                                className={`tf-view-layout-switch sw-layout-4${layout === "grid" && colsClass === "tf-col-4" ? " active" : ""}`}
                                data-value-layout="tf-col-4"
                                onClick={() => handleLayoutChange("grid", "tf-col-4")}
                            >
                                <div className="item icon-grid-4"><span></span><span></span><span></span><span></span></div>
                            </li>
                        </ul>
                    </div>

                    <div className="wrapper-control-shop">
                        <div className="meta-filter-shop">
                            <div id="product-count-grid" className="count-text">
                                {!loading && sortedProducts.length > 0 && (
                                    <>{sortedProducts.length} item{sortedProducts.length !== 1 ? "s" : ""} in <strong>{subCategoryName}</strong></>
                                )}
                            </div>
                            <div id="product-count-list" className="count-text"></div>
                            <div id="applied-filters"></div>
                            <button id="remove-all" className="remove-all-filters" style={{ display: "none" }}>
                                <i className="icon icon-close"></i> Clear all filter
                            </button>
                        </div>

                        {/* ── Error ── */}
                        {error && !loading && (
                            <div className="product-state">
                                <p>{error}</p>
                                <button onClick={() => { prevSlugRef.current = null; loadProducts(subCategoryId); }}>
                                    Try Again
                                </button>
                            </div>
                        )}

                        {/* ── List layout ── */}
                        <div className="tf-list-layout wrapper-shop" id="listLayout" style={{ display: layout === "list" ? "block" : "none" }}>

                            {loading && layout === "list" && (
                                <div style={{
                                    height: "14px", width: "200px", borderRadius: "5px", marginBottom: "0px",
                                    background: "linear-gradient(90deg,#f0f0f0 25%,#e0e0e0 50%,#f0f0f0 75%)",
                                    backgroundSize: "200% 100%", animation: "wl-shimmer 1.4s infinite",
                                }} />
                            )}

                            {loading && layout === "list" &&
                                Array.from({ length: skeletonCount }).map((_, i) => <SkeletonCard key={i} layout="list" />)
                            }

                            {!loading && !error && layout === "list" && sortedProducts.length === 0 && (
                                <div className="product-state">No products found for this author.</div>
                            )}

                            {!loading && !error && sortedProducts.map((product, idx) => (
                                <div
                                    key={product?.product_id || idx}
                                    className={`loadItem card-product style-list pb-4 ${product?.product_stock === "IN_STOCK" ? "" : "out-of-stock"}`}
                                    data-availability={product?.product_stock === "IN_STOCK" ? "In stock" : "Out of stock"}
                                >
                                    <div className="card-product-wrapper" style={{ backgroundColor: "#f5f5f5" }}>
                                        <Link to={`/product-details/${product?.product_slug}?eid=${product?.event_id}&marketplace=Vineta`} className="product-img">
                                            <img
                                                className="img-product ls-is-cached lazyload"
                                                data-src={product?.product_image ?? DEFAULT_IMAGE}
                                                src={product?.product_image ?? DEFAULT_IMAGE}
                                                alt={product?.product_name}
                                            />
                                            <img
                                                className="img-hover ls-is-cached lazyload"
                                                data-src={product?.product_hover_image ?? product?.product_image ?? DEFAULT_IMAGE}
                                                src={product?.product_hover_image ?? product?.product_image ?? DEFAULT_IMAGE}
                                                alt={product?.product_name}
                                            />
                                        </Link>
                                        {product.product_code && (
                                            <div className="on-sale-wrap">
                                                <span className="on-sale-item">{'Code: #' + product?.product_code}</span>
                                                <span className="on-sale-item" style={{ backgroundColor: "rgba(44, 163, 21, 0.1)", color: "#1d770b" }}>{'Available Items: ' + product?.product_availability}</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="card-product-info">
                                        <div className="info-list">
                                            <Link to={`/product-details/${product?.product_id}?eid=${product?.event_id}&marketplace=Vineta`} className="name-product link fw-medium text-md">
                                                {product?.product_name}
                                            </Link>
                                            <p className="price-wrap fw-medium text-md">
                                                <span className="price-new">${Number(product?.product_price || 0).toFixed(2)}</span>
                                                {product?.product_old_price && (
                                                    <span className="price-old">${Number(product?.product_old_price).toFixed(2)}</span>
                                                )}
                                            </p>
                                            {product?.product_details && (
                                                <p className="desc text-sm text-main text-line-clamp-2">
                                                    {product?.product_details}
                                                </p>
                                            )}
                                        </div>
                                        <div className="list-product-btn">
                                            <Link to="#shoppingCart" data-bs-toggle="offcanvas" className="tf-btn btn-main-product add-to-cart animate-btn">
                                                Add To Cart
                                            </Link>
                                            <Link
                                                to="#"
                                                className={`box-icon wishlist hover-tooltip ${wishlistLoadingMap[product.product_id] ? 'disabled' : ''}`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleWishlistToggle(product.product_id);
                                                }}
                                            >
                                                {wishlistLoadingMap[product.product_id] ? (
                                                    <>
                                                        <span className="icon icon-loading">...</span>
                                                        <span className="tooltip">Updating...</span>
                                                    </>
                                                ) : (wishlistMap[product.product_id] ?? 'NO') === 'NO' ? (
                                                    <>
                                                        <span className="icon icon-heart2" />
                                                        <span className="tooltip">Add to Wishlist</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span className="icon icon-trash" />
                                                        <span className="tooltip">Remove Wishlist</span>
                                                    </>
                                                )}
                                            </Link>
                                            <Link to="#quickView" data-bs-toggle="modal" className="box-icon hover-tooltip quickview">
                                                <span className="icon icon-view"></span>
                                                <span className="tooltip">Quick View</span>
                                            </Link>
                                            <Link to="#compare" data-bs-toggle="modal" aria-controls="compare" className="box-icon compare hover-tooltip">
                                                <span className="icon icon-compare"></span>
                                                <span className="tooltip">Add to Compare</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* ── Grid layout ── */}
                        <div className={`wrapper-shop tf-grid-layout ${colsClass}`} id="gridLayout" style={{ display: layout === "grid" ? "" : "none" }}>

                            {loading && layout === "grid" && (
                                <div style={{
                                    height: "14px", width: "200px", borderRadius: "5px", marginBottom: "0px",
                                    background: "linear-gradient(90deg,#f0f0f0 25%,#e0e0e0 50%,#f0f0f0 75%)",
                                    backgroundSize: "200% 100%", animation: "wl-shimmer 1.4s infinite",
                                }} />
                            )}

                            {loading && layout === "grid" && (
                                <div className="skeleton-grid-wrapper" style={{ gridColumn: "1 / -1" }}>
                                    {Array.from({ length: skeletonCount }).map((_, i) => <SkeletonCard key={i} layout="grid" />)}
                                </div>
                            )}

                            {!loading && !error && layout === "grid" && sortedProducts.length === 0 && (
                                <div className="product-state" style={{ gridColumn: "1 / -1" }}>
                                    No products found for this author.
                                </div>
                            )}

                            {!loading && !error && sortedProducts.map((product, idx) => (
                                <div
                                    key={product?.product_id || idx}
                                    className={`loadItem card-product grid card-product-size ${product?.product_stock === "IN_STOCK" ? "" : "out-of-stock"}`}
                                    data-availability={product?.product_stock === "IN_STOCK" ? "In stock" : "Out of stock"}
                                >
                                    <div className="card-product-wrapper" style={{ backgroundColor: "#f5f5f5" }}>
                                        <Link to={`/product-details/${product?.product_slug}?eid=${product?.event_id}&marketplace=Vineta`} className="product-img">
                                            <img
                                                className="img-product ls-is-cached lazyload"
                                                data-src={product?.product_image ?? DEFAULT_IMAGE}
                                                src={product?.product_image ?? DEFAULT_IMAGE}
                                                alt={product?.product_name}
                                            />
                                            <img
                                                className="img-hover ls-is-cached lazyload"
                                                data-src={product?.product_hover_image ?? product?.product_image ?? DEFAULT_IMAGE}
                                                src={product?.product_hover_image ?? product?.product_image ?? DEFAULT_IMAGE}
                                                alt={product?.product_name}
                                            />
                                        </Link>
                                        {product?.product_code && (
                                            <div className="on-sale-wrap d-flex flex-column align-items-start">
                                                <span className="on-sale-item">{'Code: #' + product?.product_code}</span>
                                                <span className="on-sale-item" style={{ backgroundColor: "rgba(44, 163, 21, 0.1)", color: "#1d770b" }}>{'Available Items: ' + product?.product_availability}</span>
                                            </div>
                                        )}
                                        <ul className="list-product-btn">
                                            <li>
                                                <Link to="#shoppingCart" data-bs-toggle="offcanvas" className="box-icon hover-tooltip tooltip-left">
                                                    <span className="icon icon-cart2"></span>
                                                    <span className="tooltip">Add to Cart</span>
                                                </Link>
                                            </li>
                                            <li className="wishlist">
                                                <Link
                                                    to="#"
                                                    className={`box-icon hover-tooltip tooltip-left ${wishlistLoadingMap[product.product_id] ? 'disabled' : ''}`}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handleWishlistToggle(product.product_id);
                                                    }}
                                                >
                                                    {wishlistLoadingMap[product.product_id] ? (
                                                        <>
                                                            <span className="icon icon-loading">...</span>
                                                            <span className="tooltip">Updating...</span>
                                                        </>
                                                    ) : (wishlistMap[product.product_id] ?? 'NO') === 'NO' ? (
                                                        <>
                                                            <span className="icon icon-heart2" />
                                                            <span className="tooltip">Add to Wishlist</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span className="icon icon-trash" />
                                                            <span className="tooltip">Remove Wishlist</span>
                                                        </>
                                                    )}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#quickView" data-bs-toggle="modal" className="box-icon quickview hover-tooltip tooltip-left">
                                                    <span className="icon icon-view"></span>
                                                    <span className="tooltip">Quick View</span>
                                                </Link>
                                            </li>
                                            <li className="compare">
                                                <Link to="#compare" data-bs-toggle="modal" aria-controls="compare" className="box-icon hover-tooltip tooltip-left">
                                                    <span className="icon icon-compare"></span>
                                                    <span className="tooltip">Add to Compare</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-product-info">
                                        <Link to={`/product-details/${product?.product_slug}?eid=${product?.event_id}&marketplace=Vineta`} className="name-product link fw-medium text-md">
                                            {product?.product_name}
                                        </Link>
                                        <p className="price-wrap fw-medium">
                                            <span className="price-new">${Number(product?.product_price || 0).toFixed(2)}</span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
            {/* <!-- Iconbox --> */}

            <IconBoxSwiper />
            {/* <!-- /Iconbox --> */}
        </PageLayout>
    );
}