import { useEffect, useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { fetchProductsByFeaturedType } from "../api/product-api";

const TABS = [
    {
        key: "newArrival",
        label: "New Arrivals",
        payload: { best_seller: "NO", new_arrival: "YES", deal: "NO" },
    },
    {
        key: "seller",
        label: "Best Sellers",
        payload: { best_seller: "YES", new_arrival: "NO", deal: "NO" },
    },
    {
        key: "deals",
        label: "Deals",
        payload: { best_seller: "NO", new_arrival: "NO", deal: "YES" },
    },
];

function SkeletonCard() {
    return (
        <div className="card-product style-3 style-center style-book style-primary style-border-3 none-hover-img">
            <div className="card-product-wrapper skeleton-wrapper">
                <div
                    className="skeleton-img"
                    style={{
                        width: "100%",
                        aspectRatio: "3/4",
                        borderRadius: "8px",
                        background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
                        backgroundSize: "200% 100%",
                        animation: "shimmer 1.4s infinite",
                    }}
                />
            </div>
            <div className="card-product-info text-center" style={{ padding: "12px 8px" }}>
                <div
                    style={{
                        height: "14px",
                        width: "70%",
                        margin: "0 auto 10px",
                        borderRadius: "6px",
                        background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
                        backgroundSize: "200% 100%",
                        animation: "shimmer 1.4s infinite",
                    }}
                />
                <div
                    style={{
                        height: "12px",
                        width: "40%",
                        margin: "0 auto 14px",
                        borderRadius: "6px",
                        background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
                        backgroundSize: "200% 100%",
                        animation: "shimmer 1.4s infinite",
                    }}
                />
                <div
                    style={{
                        height: "36px",
                        width: "80%",
                        margin: "0 auto",
                        borderRadius: "6px",
                        background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
                        backgroundSize: "200% 100%",
                        animation: "shimmer 1.4s infinite",
                    }}
                />
            </div>
        </div>
    );
}

function ProductCard({ product }) {
    const imageUrl = product.product_image
        ? `/storage/${product.product_image}`
        : "/assets/images/products/book/placeholder.jpg";

    const hasDiscount =
        product.discount_price && product.discount_price < product.product_price;

    return (
        <div className="card-product style-3 style-center style-book style-primary style-border-3 none-hover-img">
            <div className="card-product-wrapper">
                <Link to={`/product-details/${product.product_slug}?eid=${product?.p_event_id}&marketplace=Vineta`} className="product-img">
                    <img
                        className="img-product lazyload"
                        src={imageUrl}
                        alt={product.product_name}
                    />
                </Link>
                <ul className="list-product-btn">
                    <li>
                        <Link to="#" className="box-icon hover-tooltip wishlist box-shadow1">
                            <span className="icon icon-heart2"></span>
                            <span className="tooltip">Add to Wishlist</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="#quickView"
                            data-bs-toggle="modal"
                            className="box-icon hover-tooltip quickview box-shadow1"
                        >
                            <span className="icon icon-view"></span>
                            <span className="tooltip">Quick View</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="#compare"
                            data-bs-toggle="modal"
                            aria-controls="compare"
                            className="box-icon hover-tooltip compare box-shadow1"
                        >
                            <span className="icon icon-compare"></span>
                            <span className="tooltip">Add to Compare</span>
                        </Link>
                    </li>
                </ul>
                {hasDiscount && (
                    <div className="on-sale-wrap">
                        <span className="on-sale-item">
                            {Math.round(
                                ((product.product_price - product.discount_price) /
                                    product.product_price) *
                                100
                            )}
                            % Off
                        </span>
                    </div>
                )}
            </div>
            <div className="card-product-info text-center">
                <Link
                    to={`/product-details/${product.product_slug}?eid=${product?.p_event_id}&marketplace=Vineta`}
                    className="name-product link fw-medium text-md"
                >
                    {product.product_name}
                </Link>
                <p className="price-wrap fw-medium">
                    {hasDiscount ? (
                        <>
                            <span className="price-new">${Number(product.discount_price).toFixed(2)}</span>
                            <span className="price-old">${Number(product.product_price).toFixed(2)}</span>
                        </>
                    ) : (
                        <span className="price-new text-dark">
                            ${Number(product.product_price).toFixed(2)}
                        </span>
                    )}
                </p>
                <Link
                    to="#shoppingCart"
                    data-bs-toggle="offcanvas"
                    className="tf-btn mt_10 fw-semibold"
                >
                    <span className="text-md fw-medium">Add to Cart</span>
                </Link>
            </div>
        </div>
    );
}

function EmptyState({ tabLabel }) {
    return (
        <div
            style={{
                textAlign: "center",
                padding: "60px 20px",
                color: "#888",
            }}
        >
            <div style={{ fontSize: "48px", marginBottom: "12px" }}>📚</div>
            <p style={{ fontSize: "16px", fontWeight: 500 }}>
                No products found for <strong>{tabLabel}</strong>.
            </p>
            <p style={{ fontSize: "13px", marginTop: "6px" }}>
                Check back soon — new titles are added regularly!
            </p>
        </div>
    );
}

function ErrorState({ onRetry }) {
    return (
        <div style={{ textAlign: "center", padding: "60px 20px", color: "#c0392b" }}>
            <div style={{ fontSize: "48px", marginBottom: "12px" }}>⚠️</div>
            <p style={{ fontSize: "16px", fontWeight: 500 }}>Failed to load products.</p>
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

export default function FeaturedProductsTab() {

    const [activeTab, setActiveTab] = useState(TABS[0].key);
    const [cache, setCache] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const hasFetched = useRef(false);

    const currentTab = TABS.find((t) => t.key === activeTab);

    const loadProducts = useCallback(
        async (tab, force = false) => {
            if (!force && cache[tab.key] !== undefined) return;

            setLoading(true);
            setError(false);

            try {
                const res = await fetchProductsByFeaturedType(tab.payload);
                const products = res?.data?.data ?? [];
                setCache((prev) => ({ ...prev, [tab.key]: products }));
            } catch (err) {
                if (err?.response?.status === 404) {
                    setCache((prev) => ({ ...prev, [tab.key]: [] }));
                } else {
                    setError(true);
                }
            } finally {
                setLoading(false);
            }
        },
        [cache]
    );

    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;
        loadProducts(TABS[0]);
    }, []);

    const handleTabClick = (tab) => {
        setActiveTab(tab.key);
        loadProducts(tab);
    };

    const handleRetry = () => loadProducts(currentTab, true);

    const products = cache[activeTab];

    return (
        <>
            {/* Shimmer keyframe injected once */}
            <style>{`
                @keyframes shimmer {
                    0%   { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
            `}</style>

            <section>
                <div className="container">
                    <div className="flat-animate-tab">
                        {/* Header */}
                        <div className="flat-title mb_5 style-between wow fadeInUp">
                            <h3 className="display-lg-2 title text-center fw-semibold text-dark-10">
                                Featured Products
                            </h3>
                            <ul className="menu-tab-line style-md3" role="tablist">
                                {TABS.map((tab) => (
                                    <li key={tab.key} className="nav-tab-item" role="presentation">
                                        <button
                                            className={`tab-link${activeTab === tab.key ? " active" : ""}`}
                                            role="tab"
                                            aria-selected={activeTab === tab.key}
                                            onClick={() => handleTabClick(tab)}
                                            style={{
                                                background: "none",
                                                border: "none",
                                                cursor: "pointer",
                                                padding: 0,
                                            }}
                                        >
                                            {tab.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Content */}
                        <div className="tab-content">
                            <div className="tab-pane active show" role="tabpanel">
                                {/* Loading skeleton */}
                                {loading && (
                                    <div className="tf-grid-layout lg-gap-24 tf-col-2 md-col-3 xl-col-4">
                                        {Array.from({ length: 8 }).map((_, i) => (
                                            <SkeletonCard key={i} />
                                        ))}
                                    </div>
                                )}

                                {/* Error */}
                                {!loading && error && (
                                    <ErrorState onRetry={handleRetry} />
                                )}

                                {/* Empty */}
                                {!loading && !error && products?.length === 0 && (
                                    <EmptyState tabLabel={currentTab?.label} />
                                )}

                                {/* Products */}
                                {!loading && !error && products?.length > 0 && (
                                    <div className="tf-grid-layout lg-gap-24 tf-col-2 md-col-3 xl-col-4">
                                        {products.map((product) => (
                                            <ProductCard
                                                key={product.product_id}
                                                product={product}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}