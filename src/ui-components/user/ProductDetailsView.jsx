import { useCallback, useEffect, useRef, useState } from "react";
import PageLayout from "../../PageLayout";
import { Link, useLocation, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ProductGallery from "../../reusable-components/ProductGallery";
import IconBoxSwiper from "../../reusable-components/IconBoxSwiper";
import {
    fetchProductDetailsByProductSlug,
    addRecentlyViewedProduct,
    fetchRecentlyViewedProducts,
    fetchWishlistStatusByProductAndUser,
    manageWishlist,
    manageCart,
    fetchCartStatusByProductAndUser,
} from "../../api/product-api";
import toast from "react-hot-toast";

const RV_SKELETON_COUNT = 5;
const DEFAULT_IMG = "/assets/images/products/book/book9.jpg";

const Skeleton = ({ className = "", style = {} }) => (
    <div
        className={`skeleton-shimmer ${className}`}
        style={{
            background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s infinite",
            borderRadius: "4px",
            ...style,
        }}
    />
);

const BreadcrumbSkeleton = () => (
    <div className="breadcrumb-sec">
        <div className="container">
            <div className="breadcrumb-wrap">
                <div className="breadcrumb-list" style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    <Skeleton style={{ width: 40, height: 16 }} />
                    <Skeleton style={{ width: 6, height: 6, borderRadius: "50%" }} />
                    <Skeleton style={{ width: 120, height: 16 }} />
                </div>
            </div>
        </div>
    </div>
);

const ProductInfoSkeleton = () => (
    <div className="tf-product-info-list">
        <div className="tf-product-heading">
            <Skeleton style={{ width: 80, height: 14, marginBottom: 10 }} />
            <Skeleton style={{ width: "70%", height: 28, marginBottom: 12 }} />
            <Skeleton style={{ width: 160, height: 16, marginBottom: 14 }} />
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 14 }}>
                <Skeleton style={{ width: 80, height: 28 }} />
                <Skeleton style={{ width: 80, height: 28 }} />
                <Skeleton style={{ width: 60, height: 22 }} />
            </div>
            <Skeleton style={{ width: 140, height: 16, marginBottom: 8 }} />
            <Skeleton style={{ width: "100%", height: 10, marginBottom: 16 }} />
        </div>
        <div className="tf-product-variant">
            <Skeleton style={{ width: 100, height: 16, marginBottom: 10 }} />
            <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                {[1, 2, 3].map(i => <Skeleton key={i} style={{ width: 32, height: 32, borderRadius: "50%" }} />)}
            </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", gap: 12 }}>
                <Skeleton style={{ width: 120, height: 48 }} />
                <Skeleton style={{ flex: 1, height: 48 }} />
            </div>
            <Skeleton style={{ width: "100%", height: 48 }} />
        </div>
    </div>
);

const GallerySkeleton = () => (
    <div>
        <Skeleton style={{ width: "100%", paddingTop: "120%", marginBottom: 12 }} />
        <div style={{ display: "flex", gap: 10 }}>
            {[1, 2, 3, 4].map(i => <Skeleton key={i} style={{ flex: 1, paddingTop: "25%" }} />)}
        </div>
    </div>
);

function RVSkeletonCard() {
    return (
        <div className="card-product style-2">
            <div
                className="card-product-wrapper rv-shimmer"
                style={{ width: "100%", paddingBottom: "125%", position: "relative" }}
            />
            <div className="card-product-info" style={{ paddingTop: "10px" }}>
                <div className="rv-shimmer" style={{ height: "14px", width: "75%", marginBottom: "8px" }} />
                <div className="rv-shimmer" style={{ height: "12px", width: "40%", animationDelay: "0.1s" }} />
            </div>
        </div>
    );
}

function RVEmptyState() {
    return (
        <div style={{ textAlign: "center", padding: "48px 20px", color: "#999" }}>
            <div style={{ fontSize: "44px", marginBottom: "10px" }}>🕐</div>
            <p style={{ fontSize: "15px", fontWeight: 500 }}>No recently viewed products yet.</p>
            <p style={{ fontSize: "13px", marginTop: "6px" }}>Products you view will appear here.</p>
        </div>
    );
}

function RVErrorState({ onRetry }) {
    return (
        <div style={{ textAlign: "center", padding: "60px 20px", color: "#c0392b" }}>
            <div style={{ fontSize: "48px", marginBottom: "12px" }}>⚠️</div>
            <p style={{ fontSize: "16px", fontWeight: 500 }}>Failed to load recently viewed products.</p>
            <button
                onClick={onRetry}
                style={{
                    marginTop: "14px",
                    padding: "8px 24px",
                    borderRadius: "6px",
                    border: "1px solid #c0392b",
                    background: "transparent",
                    color: "#c0392b",
                    cursor: "pointer",
                    fontWeight: 600,
                }}
            >
                Try Again
            </button>
        </div>
    );
}

function RVProductCard({ item }) {
    const name = item.product_name ?? "Untitled";
    const slug = item.product_slug ?? "#";
    const price = item.product_price != null ? parseFloat(item.product_price) : null;
    const imgSrc = item.product_image ?? DEFAULT_IMG;
    const eventId = item.p_event_id ?? "";

    return (
        <div className="card-product style-2">
            <div className="card-product-wrapper">
                <Link to={`/product-detail/${slug}?eid=${eventId}`} className="product-img">
                    <img className="img-product" src={imgSrc} alt={name} onError={e => { e.currentTarget.src = DEFAULT_IMG; }} />
                    <img className="img-hover" src={imgSrc} alt={name} onError={e => { e.currentTarget.src = DEFAULT_IMG; }} />
                </Link>
                <ul className="list-product-btn">
                    <li>
                        <Link to="#shoppingCart" data-bs-toggle="offcanvas" className="box-icon hover-tooltip">
                            <span className="icon icon-cart2" /><span className="tooltip">Add to Cart</span>
                        </Link>
                    </li>
                    <li className="wishlist">
                        <Link to="#" className="box-icon hover-tooltip">
                            <span className="icon icon-heart2" /><span className="tooltip">Add to Wishlist</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#quickView" data-bs-toggle="modal" className="box-icon hover-tooltip">
                            <span className="icon icon-view" /><span className="tooltip">Quick View</span>
                        </Link>
                    </li>
                    <li className="compare">
                        <Link to="#compare" data-bs-toggle="modal" className="box-icon hover-tooltip">
                            <span className="icon icon-compare" /><span className="tooltip">Add to Compare</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="card-product-info">
                <Link to={`/product-detail/${slug}?eid=${eventId}`} className="name-product link fw-medium text-md">
                    {name}
                </Link>
                <p className="price-wrap fw-medium">
                    {price !== null && <span className="price-new">${price.toFixed(2)}</span>}
                </p>
            </div>
        </div>
    );
}

const getImageUrl = (imagePath) => {
    if (!imagePath) return "/assets/images/products/placeholder.jpg";
    if (imagePath.startsWith("http")) return imagePath;
    return `/storage/${imagePath}`;
};

const StarRating = ({ rating = 5, count }) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    return (
        <div className="product-rate">
            <div className="list-star">
                {[...Array(5)].map((_, i) => (
                    <i key={i} className={
                        i < fullStars ? "icon icon-star"
                            : hasHalf && i === fullStars ? "icon icon-star-half"
                                : "icon icon-star-o"
                    } />
                ))}
            </div>
            {count !== undefined && <span className="count-review">({count} reviews)</span>}
        </div>
    );
};

export default function ProductDetailsView() {

    const { slug } = useParams();
    const { search } = useLocation();
    const eventId = new URLSearchParams(search).get("eid");
    const userData = sessionStorage.getItem("user") ?? null;
    const userId = userData ? JSON.parse(userData)?.user_id : null;

    // Product state
    const [productDetails, setProductDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1);

    // Wishlist state
    const [addToWishlistStatus, setAddToWishlistStatus] = useState('NO');
    const [wishlistLoading, setWishlistLoading] = useState(false);

    // Cart state
    const [addToCartStatus, setAddToCartStatus] = useState('NO');
    const [cartLoading, setCartLoading] = useState(false);

    // Recently Viewed state
    const [rvProducts, setRvProducts] = useState([]);
    const [rvLoading, setRvLoading] = useState(false);
    const [rvError, setRvError] = useState(false);
    const recentlyAddedRef = useRef(false);

    useEffect(() => { document.title = "Product Details"; }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (productDetails?.product_name) {
            document.title = `${productDetails.product_name} - BMS Book Store`;
        }
    }, [productDetails?.product_name]);

    useEffect(() => {
        if (!slug || !eventId) return;
        recentlyAddedRef.current = false;
        loadProductDetails(slug, eventId);
    }, [slug, eventId]);

    const loadProductDetails = async (productSlug, eid) => {
        setLoading(true);
        setError(null);
        setProductDetails(null);
        try {
            const res = await fetchProductDetailsByProductSlug({ product_slug: productSlug, event_id: eid });
            const data = res?.data?.data || null;
            setProductDetails(data);
        } catch (err) {
            console.error("Error fetching product details:", err);
            setError("Failed to load product details. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const loadWishlistStatus = useCallback(async (productId, userId) => {
        if (!productId || !userId) return;
        try {
            const res = await fetchWishlistStatusByProductAndUser({ product_id: productId, user_id: userId });
            setAddToWishlistStatus(res?.data?.data?.add_to_wishlist_status ?? 'NO');
        } catch (err) {
            if (err?.response?.status === 404) {
                setAddToWishlistStatus('NO');
            } else {
                console.warn("Failed to fetch wishlist status:", err?.response?.data?.message || err?.message);
            }
        }
    }, []);

    // FETCH CART STATUS ON LOAD
    const loadCartStatus = useCallback(async (productId, userId) => {
        if (!productId || !userId) return;
        try {
            const res = await fetchCartStatusByProductAndUser({ product_id: productId, user_id: userId });
            setAddToCartStatus(res?.data?.data?.add_to_cart_status ?? 'NO');
        } catch (err) {
            if (err?.response?.status === 404) {
                setAddToCartStatus('NO');
            } else {
                console.warn("Failed to fetch cart status:", err?.response?.data?.message || err?.message);
            }
        }
    }, []);

    useEffect(() => {
        loadWishlistStatus(productDetails?.product_id, userId);
        loadCartStatus(productDetails?.product_id, userId);
    }, [productDetails?.product_id, userId, loadWishlistStatus, loadCartStatus]);

    const handleCartAction = async () => {
        if (!userId) {
            toast.error("Please log in to manage your cart.");
            return;
        }
        if (cartLoading || !productDetails?.product_id) return;

        const action = addToCartStatus === 'NO' ? 'add' : 'remove';

        setCartLoading(true);
        try {
            const res = await manageCart({
                product_id: productDetails.product_id,
                user_id: userId,
                action,
            });

            if (res.data?.status === 'Success') {
                setAddToCartStatus(prev => prev === 'NO' ? 'YES' : 'NO');
                toast.success(action === 'add' ? "Added to cart." : "Removed from cart.");
            } else {
                toast.error(res.data?.message || "Failed to update cart.");
            }
        } catch (err) {
            console.error("Cart toggle failed:", err?.response?.data?.message || err?.message);
            toast.error("Failed to update cart. Please try again.");
        } finally {
            setCartLoading(false);
        }
    };

    const handleWishlistAction = async () => {
        if (!userId) {
            toast.error("Please log in to manage your wishlist.");
            return;
        }
        if (wishlistLoading || !product?.product_id) return;
        setWishlistLoading(true);
        try {
            await manageWishlist({
                product_id: product.product_id,
                user_id: userId,
            });
            setAddToWishlistStatus(prev => (prev === 'NO' ? 'YES' : 'NO'));
            toast.success(addToWishlistStatus === 'NO' ? "Added to wishlist." : "Removed from wishlist.");
        } catch (err) {
            console.error("Wishlist toggle failed:", err?.response?.data?.message || err?.message);
            alert("Failed to update wishlist. Please try again.");
        } finally {
            setWishlistLoading(false);
        }
    };

    const loadRecentlyViewedProducts = useCallback(async () => {
        if (!userId) return;
        setRvLoading(true);
        setRvError(false);
        try {
            const res = await fetchRecentlyViewedProducts(userId);
            const fetched = res?.data?.data ?? [];
            setRvProducts(fetched);
        } catch (err) {
            if (err?.response?.status === 404) {
                setRvProducts([]);
            } else {
                setRvError(true);
            }
        } finally {
            setRvLoading(false);
        }
    }, [userId]);

    const recordRecentlyViewed = useCallback(async (productId) => {
        if (!productId || !userId) return;
        try {
            await addRecentlyViewedProduct({ product_id: productId, user_id: userId });
        } catch (err) {
            console.warn(
                "[RecentlyViewed] Record failed:",
                err?.response?.data?.message || err?.message
            );
        } finally {
            await loadRecentlyViewedProducts();
        }
    }, [userId, loadRecentlyViewedProducts]);

    useEffect(() => {
        const productId = productDetails?.product_id;
        if (!productId || !userId || recentlyAddedRef.current) return;

        recentlyAddedRef.current = true;
        recordRecentlyViewed(productId);

    }, [productDetails?.product_id, userId, recordRecentlyViewed]);

    const handleQuantityChange = (delta) => {
        setQuantity(prev => {
            const next = prev + delta;
            if (next < 1) return 1;
            if (productDetails?.product_stock && next > productDetails.product_stock) {
                return productDetails.product_stock;
            }
            return next;
        });
    };

    const handleQuantityInput = (e) => {
        const val = parseInt(e.target.value, 10);
        if (!isNaN(val) && val >= 1) {
            setQuantity(Math.min(val, productDetails?.product_stock || val));
        }
    };

    const product = productDetails;
    const productName = product?.product_name || "Product";
    const productBrand = product?.product_brand || "";
    const productPrice = parseFloat(product?.product_price) || 0;
    const productImage = getImageUrl(product?.product_image);
    const productCode = product?.product_code || product?.product_slug || "";
    const boundType = product?.bound_type || "";
    const bookSize = product?.book_size || "";
    const categoryName = product?.category_name || "";
    const subCategoryName = product?.sub_category_name || "";
    const languageName = product?.language_name || "";
    const productDetails_ = product?.product_details || "";
    const isInStock = product?.product_stock === "IN_STOCK";
    const stockCount = product?.product_availability || 0;
    const discountPercent = null;

    const renderRvSlides = () => {
        if (rvLoading) {
            return Array.from({ length: RV_SKELETON_COUNT }).map((_, i) => (
                <SwiperSlide key={`rv-skeleton-${i}`}><RVSkeletonCard /></SwiperSlide>
            ));
        }
        return rvProducts.map(item => (
            <SwiperSlide key={item.product_id ?? item.recently_viewed_id}>
                <RVProductCard item={item} />
            </SwiperSlide>
        ));
    };

    return (
        <PageLayout>
            <style>{`
                @keyframes shimmer {
                    0%   { background-position: -200% 0; }
                    100% { background-position:  200% 0; }
                }
                @keyframes rv-shimmer {
                    0%   { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
                .skeleton-shimmer { display: block; }
                .rv-shimmer {
                    background: linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%);
                    background-size: 200% 100%;
                    animation: rv-shimmer 1.4s infinite;
                    border-radius: 6px;
                }
            `}</style>

            {/* Breadcrumb */}
            {loading ? (
                <BreadcrumbSkeleton />
            ) : (
                <div className="breadcrumb-sec">
                    <div className="container">
                        <div className="breadcrumb-wrap">
                            <div className="breadcrumb-list">
                                <Link className="breadcrumb-item" to="/">Home</Link>
                                {categoryName && (
                                    <>
                                        <div className="breadcrumb-item dot"><span /></div>
                                        <Link className="breadcrumb-item" to={`/product-default/topics/${product?.category_slug}?eid=${product?.c_event_id}&marketplace=Vineta`}>
                                            {categoryName}
                                        </Link>
                                    </>
                                )}
                                {subCategoryName && (
                                    <>
                                        <div className="breadcrumb-item dot"><span /></div>
                                        <Link className="breadcrumb-item" to={`/product-default/authors/${product?.sub_category_slug}?eid=${product?.sc_event_id}&marketplace=Vineta`}>
                                            {subCategoryName}
                                        </Link>
                                    </>
                                )}
                                {languageName && (
                                    <>
                                        <div className="breadcrumb-item dot"><span /></div>
                                        <Link className="breadcrumb-item" to={`/product-default/languages/${product?.language_slug}?eid=${product?.l_event_id}&marketplace=Vineta`}>
                                            {languageName}
                                        </Link>
                                    </>
                                )}
                                <div className="breadcrumb-item dot"><span /></div>
                                <div className="breadcrumb-item current">{productName}</div>
                            </div>
                            <div className="breadcrumb-prev-next">
                                <Link to="#" className="breadcrumb-prev"><i className="icon icon-arr-left" /></Link>
                                <Link to="/product-default?marketplace=Vineta" className="breadcrumb-back"><i className="icon icon-shop" /></Link>
                                <Link to="#" className="breadcrumb-next"><i className="icon icon-arr-right2" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Product Main */}
            <section className="flat-single-product">
                <div className="tf-main-product section-image-zoom">
                    <div className="container">

                        {error && !loading && (
                            <div className="alert alert-danger text-center py-4" role="alert">
                                <p className="mb-2">{error}</p>
                                <button
                                    className="tf-btn btn-primary animate-btn"
                                    onClick={() => loadProductDetails(slug, eventId)}
                                >
                                    Retry
                                </button>
                            </div>
                        )}

                        {!loading && !error && !product && (
                            <div className="text-center py-5">
                                <h4>Product Not Found</h4>
                                <p className="text-main-4">The product you're looking for doesn't exist or has been removed.</p>
                                <Link to="/product-default?marketplace=Vineta" className="tf-btn btn-primary animate-btn mt-3">
                                    Browse Products
                                </Link>
                            </div>
                        )}

                        {(loading || product) && !error && (
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="tf-product-media-wrap sticky-top">
                                        {loading ? <GallerySkeleton /> : (
                                            <ProductGallery mainImage={productImage} productName={productName} />
                                        )}
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="tf-zoom-main" />
                                    <div className="tf-product-info-wrap other-image-zoom">
                                        {loading ? <ProductInfoSkeleton /> : (
                                            <div className="tf-product-info-list">

                                                <div className="tf-product-heading">
                                                    {productBrand && <span className="brand-product">{productBrand}</span>}
                                                    <h5 className="product-name fw-medium">{productName}</h5>
                                                    <StarRating rating={5} count={0} />

                                                    <div className="product-price">
                                                        <div className={`display-sm price-new${discountPercent ? " price-on-sale" : ""}`}>
                                                            ${productPrice.toFixed(2)}
                                                        </div>
                                                        {discountPercent && (
                                                            <>
                                                                <div className="display-sm price-old">
                                                                    ${(productPrice / (1 - discountPercent / 100)).toFixed(2)}
                                                                </div>
                                                                <span className="badge-sale">{discountPercent}% Off</span>
                                                            </>
                                                        )}
                                                    </div>

                                                    <div className="product-stock">
                                                        <span className={`stock ${isInStock ? "in-stock" : "out-stock"}`}>
                                                            {isInStock ? "In Stock" : "Out of Stock"}
                                                        </span>
                                                        {stockCount > 0 && stockCount <= 10 && (
                                                            <>
                                                                <svg className="icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                                    <path d="M15.2759 10.9242C15.2556 10.6149 14.9236 10.4281 14.6488 10.5714C14.4098 10.6961 13.6603 11.0196 13.0698 11.0196C12.6156 11.0196 12.3132 10.8694 12.3132 10.1362C12.3132 8.12636 15.0124 6.52078 12.6056 3.51218C12.3295 3.16719 11.773 3.41746 11.8469 3.85238C11.8484 3.86145 11.9887 4.77182 11.5632 5.27582C11.3635 5.51218 11.061 5.62711 10.6384 5.62711C9.17454 5.62711 9.27646 1.94027 11.1223 0.795793C11.5328 0.541367 11.2702 -0.0948905 10.8012 0.0119845C10.683 0.0387033 7.88684 0.701328 6.39105 3.62798C5.28035 5.80099 5.88191 7.29977 6.32116 8.39418C6.71371 9.3722 6.89283 9.81857 6.01364 10.4273C5.68251 10.6566 5.42618 10.6328 5.42618 10.6328C4.60384 10.6328 3.82489 9.42402 3.59437 8.95879C3.40712 8.57837 2.83721 8.67311 2.78314 9.09372C2.75993 9.27457 2.24057 13.5513 4.51026 16.1312C5.76076 17.5525 7.50054 18.0581 9.40742 17.9948C11.1702 17.9357 12.5768 17.3395 13.5883 16.2228C15.4639 14.152 15.2844 11.0549 15.2759 10.9242Z" fill="#F2721C" />
                                                                </svg>
                                                                <span className="text-dark">Only {stockCount} left!</span>
                                                            </>
                                                        )}
                                                    </div>

                                                    {stockCount > 0 && stockCount <= 20 && (
                                                        <div className="product-progress-sale">
                                                            <div className="title-hurry-up">
                                                                <span className="text-primary fw-medium">HURRY UP!</span>{" "}
                                                                Only <span className="count">{stockCount}</span> items left!
                                                            </div>
                                                            <div className="progress-sold">
                                                                <div
                                                                    className="value"
                                                                    style={{ width: `${Math.min(100, Math.round((stockCount / 50) * 100))}%` }}
                                                                    data-progress={Math.round((stockCount / 50) * 100)}
                                                                />
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>

                                                {boundType && (
                                                    <div className="tf-product-variant">
                                                        <div className="variant-picker-item">
                                                            <div className="variant-picker-label">
                                                                Book Type: <span className="variant-picker-label-value">{boundType}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {productDetails_ && (
                                                    <div className="tf-product-description" style={{ marginBottom: "16px" }}>
                                                        <p className="text-md text-main-4" style={{
                                                            display: "-webkit-box",
                                                            WebkitLineClamp: 3,
                                                            WebkitBoxOrient: "vertical",
                                                            overflow: "hidden",
                                                        }}>
                                                            {productDetails_}
                                                        </p>
                                                    </div>
                                                )}

                                                <div className="tf-product-total-quantity">
                                                    <div className="group-btn">
                                                        {isInStock ? (
                                                            <Link
                                                                to="#"
                                                                className={`tf-btn animate-btn btn-add-to-cart ${cartLoading ? "disabled" : ""}`}
                                                                style={{ pointerEvents: cartLoading ? "none" : "auto" }}
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    handleCartAction();
                                                                }}
                                                            >
                                                                {cartLoading ? (
                                                                    <>
                                                                        <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true" />
                                                                        <span>Updating...</span>
                                                                    </>
                                                                ) : addToCartStatus === 'NO' ? (
                                                                    <>
                                                                        <i className="icon add icon-cart2" />
                                                                        <span>Add to cart</span>
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <i className="icon remove icon-trash" />
                                                                        <span>Remove from cart</span>
                                                                    </>
                                                                )}
                                                            </Link>
                                                        ) : (
                                                            <button className="tf-btn animate-btn" disabled>Out of Stock</button>
                                                        )}
                                                    </div>
                                                    {isInStock && (
                                                        <>
                                                            <Link to="/checkout" className="tf-btn btn-primary w-100 animate-btn">Buy it now</Link>
                                                            <Link to="/checkout" className="more-choose-payment link">More payment options</Link>
                                                        </>
                                                    )}
                                                </div>

                                                <div className="tf-product-extra-link">
                                                    <Link
                                                        to="#"
                                                        className={`product-extra-icon link btn-add-wishlist ${wishlistLoading ? "disabled" : ""}`}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleWishlistAction();
                                                        }}
                                                    >
                                                        {wishlistLoading ? (
                                                            <>
                                                                <i className="icon icon-loading">...</i>
                                                                <span>Updating...</span>
                                                            </>
                                                        ) : addToWishlistStatus === 'NO' ? (
                                                            <>
                                                                <i className="icon add icon-heart" />
                                                                <span className="add">Add to wishlist</span>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <i className="icon remove icon-trash" />
                                                                <span className="remove">Remove from wishlist</span>
                                                            </>
                                                        )}
                                                    </Link>

                                                    <Link to="#compare" data-bs-toggle="modal" className="product-extra-icon link">
                                                        <i className="icon icon-compare2" />Compare
                                                    </Link>
                                                    <Link to="#askQuestion" data-bs-toggle="modal" className="product-extra-icon link">
                                                        <i className="icon icon-ask" />Ask a question
                                                    </Link>
                                                    <Link to="#shareSocial" data-bs-toggle="modal" className="product-extra-icon link">
                                                        <i className="icon icon-share" />Share
                                                    </Link>
                                                </div>

                                                <ul className="tf-product-cate-sku text-md">
                                                    {productCode && <li className="item-cate-sku"><span className="label">SKU:</span><span className="value">{"#" + productCode}</span></li>}
                                                    {categoryName && <li className="item-cate-sku"><span className="label">Topic:</span><span className="value">{categoryName}</span></li>}
                                                    {subCategoryName && <li className="item-cate-sku"><span className="label">Author:</span><span className="value">{subCategoryName}</span></li>}
                                                    {languageName && <li className="item-cate-sku"><span className="label">Language:</span><span className="value">{languageName}</span></li>}
                                                    {bookSize && <li className="item-cate-sku"><span className="label">Book Size:</span><span className="value">{bookSize}</span></li>}
                                                </ul>

                                                <div className="tf-product-trust-seal text-center">
                                                    <p className="text-md text-dark-2 text-seal fw-medium">Guarantee Safe Checkout:</p>
                                                    <ul className="list-card">
                                                        {["Visa", "DinersClub", "Mastercard", "Stripe", "PayPal", "GooglePay", "ApplePay"].map(card => (
                                                            <li key={card} className="card-item">
                                                                <img src={`/assets/images/payment/${card}.png`} alt={card} />
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="tf-product-delivery-return">
                                                    <div className="product-delivery">
                                                        <div className="icon icon-car2" />
                                                        <p className="text-md">Estimated delivery: <span className="fw-medium">3–5 days international</span></p>
                                                    </div>
                                                    <div className="product-delivery">
                                                        <div className="icon icon-shipping3" />
                                                        <p className="text-md">Free shipping on <span className="fw-medium">all orders over $150</span></p>
                                                    </div>
                                                </div>

                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Sticky ATC Bar */}
                {!loading && product && (
                    <div className="tf-sticky-btn-atc">
                        <div className="container">
                            <div className="tf-height-observer w-100 d-flex align-items-center">
                                <div className="tf-sticky-atc-product d-flex align-items-center">
                                    <div className="tf-sticky-atc-img">
                                        <img className="lazyload" src={productImage} alt={productName} />
                                    </div>
                                    <div className="tf-sticky-atc-title fw-5 d-xl-block d-none">{productName}</div>
                                </div>
                                <div className="tf-sticky-atc-infos">
                                    <div className="tf-sticky-atc-btns">
                                        <div className="tf-product-info-quantity">
                                            <div className="wg-quantity">
                                                <button className="btn-quantity minus-btn" onClick={() => handleQuantityChange(-1)}>-</button>
                                                <input className="quantity-product font-4" type="text" name="number" value={quantity} onChange={handleQuantityInput} />
                                                <button className="btn-quantity plus-btn" onClick={() => handleQuantityChange(1)}>+</button>
                                            </div>
                                        </div>
                                        <Link to="#shoppingCart" data-bs-toggle="offcanvas" className="tf-btn animate-btn d-inline-flex justify-content-center">
                                            Add to cart
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* Accordions */}
            <section className="flat-spacing pt-0">
                <div className="container">
                    {loading ? (
                        [1, 2, 3].map(i => (
                            <div key={i} className="widget-accordion wd-product-descriptions" style={{ marginBottom: 8 }}>
                                <div style={{ padding: "16px 0", display: "flex", justifyContent: "space-between" }}>
                                    <Skeleton style={{ width: 140, height: 18 }} />
                                    <Skeleton style={{ width: 18, height: 18 }} />
                                </div>
                            </div>
                        ))
                    ) : product ? (
                        <>
                            {productDetails_ && (
                                <div className="widget-accordion wd-product-descriptions">
                                    <div className="accordion-title collapsed" data-bs-target="#description" data-bs-toggle="collapse" aria-expanded="false" role="button">
                                        <span>Description</span><span className="icon icon-arrow-down" />
                                    </div>
                                    <div id="description" className="collapse">
                                        <div className="accordion-body widget-desc">
                                            <p className="text-md">{productDetails_}</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="widget-accordion wd-product-descriptions">
                                <div className="accordion-title collapsed" data-bs-target="#addInformation" data-bs-toggle="collapse" aria-expanded="false" role="button">
                                    <span>Additional Information</span><span className="icon icon-arrow-down" />
                                </div>
                                <div id="addInformation" className="collapse">
                                    <div className="accordion-body">
                                        <table className="tb-info-product text-md">
                                            <tbody>
                                                {productBrand && <tr className="tb-attr-item"><th className="tb-attr-label">Brand</th><td className="tb-attr-value"><p>{productBrand}</p></td></tr>}
                                                {categoryName && <tr className="tb-attr-item"><th className="tb-attr-label">Topic</th><td className="tb-attr-value"><p>{categoryName}</p></td></tr>}
                                                {subCategoryName && <tr className="tb-attr-item"><th className="tb-attr-label">Author</th><td className="tb-attr-value"><p>{subCategoryName}</p></td></tr>}
                                                {languageName && <tr className="tb-attr-item"><th className="tb-attr-label">Language</th><td className="tb-attr-value"><p>{languageName}</p></td></tr>}
                                                {productCode && <tr className="tb-attr-item"><th className="tb-attr-label">Product Code</th><td className="tb-attr-value"><p>{"#" + productCode}</p></td></tr>}
                                                <tr className="tb-attr-item">
                                                    <th className="tb-attr-label">Availability</th>
                                                    <td className="tb-attr-value"><p style={{ color: isInStock ? "green" : "red" }}>{isInStock ? "In Stock" : "Out of Stock"}</p></td>
                                                </tr>
                                                {stockCount > 0 && <tr className="tb-attr-item"><th className="tb-attr-label">Stock</th><td className="tb-attr-value"><p>{stockCount} units</p></td></tr>}
                                                {bookSize && <tr className="tb-attr-item"><th className="tb-attr-label">Book Size</th><td className="tb-attr-value"><p>{bookSize}</p></td></tr>}
                                                {boundType && <tr className="tb-attr-item"><th className="tb-attr-label">Bound Type</th><td className="tb-attr-value"><p>{boundType}</p></td></tr>}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="widget-accordion wd-product-descriptions">
                                <div className="accordion-title collapsed" data-bs-target="#returnPolicies" data-bs-toggle="collapse" aria-expanded="false" role="button">
                                    <span>Return Policies</span><span className="icon icon-arrow-down" />
                                </div>
                                <div id="returnPolicies" className="collapse">
                                    <div className="accordion-body">
                                        <p className="text-md">
                                            We accept returns within 30 days of purchase. Items must be unused and in original condition.
                                            Please contact our support team to initiate a return.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="widget-accordion wd-product-descriptions">
                                <div className="accordion-title collapsed" data-bs-target="#reviews" data-bs-toggle="collapse" aria-expanded="false" role="button">
                                    <span>Reviews</span><span className="icon icon-arrow-down" />
                                </div>
                                <div id="reviews" className="collapse">
                                    <div className="accordion-body wd-customer-review">
                                        <div className="review-heading">
                                            <h6 className="title">Customer Reviews</h6>
                                            <p className="text-md text-main-4">No reviews yet. Be the first to review this product!</p>
                                            <Link href="#form-review" className="tf-btn btn-dark2 animate-btn">Write a review</Link>
                                        </div>
                                        <div className="review-section">
                                            <form id="form-review" action="#" className="form-review">
                                                <h6 className="title">Write a Review</h6>
                                                <p className="note text-md text-main-4">Your email address will not be published. Required fields are marked *</p>
                                                <div className="box-rating">
                                                    <span className="text-md">Your rating *</span>
                                                    <div className="list-rating-check">
                                                        {[5, 4, 3, 2, 1].map(star => (
                                                            <span key={star}>
                                                                <input type="radio" id={`star${star}`} name="rate" value={star} />
                                                                <label htmlFor={`star${star}`} title={`${star} star`} />
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="group-2-ip">
                                                    <input type="text" placeholder="Name *" />
                                                    <input type="email" placeholder="Email *" />
                                                </div>
                                                <textarea name="note" id="note" placeholder="Your review *" />
                                                <div className="check-save">
                                                    <input type="checkbox" className="tf-check" id="checksave" />
                                                    <label htmlFor="checksave" className="label text-md">Save my name and email for the next time I comment.</label>
                                                </div>
                                                <button type="submit" className="tf-btn animate-btn">Submit</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : null}
                </div>
            </section>

            {/* Recently Viewed */}
            {userId && (
                <section className="flat-spacing pt-0">
                    <div className="container">
                        <div className="flat-title wow fadeInUp">
                            <h4 className="title">Recently Viewed</h4>
                        </div>

                        {/* Error state */}
                        {rvError && !rvLoading && (
                            <RVErrorState onRetry={loadRecentlyViewedProducts} />
                        )}

                        {/* Empty state */}
                        {!rvError && !rvLoading && rvProducts.length === 0 && <RVEmptyState />}

                        {/* Swiper — shown while loading skeletons OR when real products exist */}
                        {(rvLoading || (!rvError && rvProducts.length > 0)) && (
                            <div className="fl-control-sw2 wrap-pos-nav sw-over-product wow fadeInUp">
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    slidesPerView={2}
                                    spaceBetween={12}
                                    speed={800}
                                    slidesPerGroup={2}
                                    observer
                                    observeParents
                                    navigation={{
                                        nextEl: ".nav-next-viewed",
                                        prevEl: ".nav-prev-viewed",
                                    }}
                                    pagination={{
                                        el: ".sw-pagination-viewed",
                                        clickable: true,
                                    }}
                                    breakpoints={{
                                        768: { slidesPerView: 3, spaceBetween: 12, slidesPerGroup: 3 },
                                        1200: { slidesPerView: 4, spaceBetween: 24, slidesPerGroup: 4 },
                                    }}
                                    className="tf-swiper wrap-sw-over"
                                >
                                    {renderRvSlides()}
                                </Swiper>

                                {/* Mobile pagination */}
                                <div className="d-flex d-xl-none sw-dot-default sw-pagination-viewed justify-content-center" />

                                {/* Desktop navigation arrows — only when real slides are present */}
                                {!rvLoading && (
                                    <>
                                        <div className="d-none d-xl-flex swiper-button-next nav-swiper nav-next-viewed" />
                                        <div className="d-none d-xl-flex swiper-button-prev nav-swiper nav-prev-viewed" />
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </section>
            )}

            <IconBoxSwiper />
        </PageLayout>
    );
}