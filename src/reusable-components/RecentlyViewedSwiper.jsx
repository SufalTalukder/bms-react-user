import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link, useParams, useLocation } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import { fetchRecentlyViewedProducts } from "../api/product-api";

const SKELETON_COUNT = 5;
const DEFAULT_IMG = "/assets/images/products/book/book9.jpg";

function SkeletonCard() {
    return (
        <>
            {/* Inject keyframes once */}
            <style>{`
                @keyframes rv-shimmer {
                    0%   { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
                .rv-shimmer {
                    background: linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%);
                    background-size: 200% 100%;
                    animation: rv-shimmer 1.4s infinite;
                    border-radius: 6px;
                }
            `}</style>

            <div className="card-product style-2">
                {/* Image area */}
                <div
                    className="card-product-wrapper rv-shimmer"
                    style={{ width: "100%", paddingBottom: "125%", position: "relative" }}
                />

                {/* Info area */}
                <div className="card-product-info" style={{ paddingTop: "10px" }}>
                    {/* Product name */}
                    <div
                        className="rv-shimmer"
                        style={{ height: "14px", width: "75%", marginBottom: "8px" }}
                    />
                    {/* Price */}
                    <div
                        className="rv-shimmer"
                        style={{ height: "12px", width: "40%", animationDelay: "0.1s" }}
                    />
                </div>
            </div>
        </>
    );
}

function EmptyState() {
    return (
        <div style={{ textAlign: "center", padding: "48px 20px", color: "#999" }}>
            <div style={{ fontSize: "44px", marginBottom: "10px" }}>🕐</div>
            <p style={{ fontSize: "15px", fontWeight: 500 }}>No recently viewed products yet.</p>
            <p style={{ fontSize: "13px", marginTop: "6px" }}>
                Products you view will appear here.
            </p>
        </div>
    );
}

function ErrorState({ onRetry }) {
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

function ProductCard({ item }) {
    const name = item.product_name ?? "Untitled";
    const slug = item.product_slug ?? "#";
    const price = item.product_price != null
        ? parseFloat(item.product_price)
        : null;
    const imgSrc = item.product_image ?? DEFAULT_IMG;

    return (
        <div className="card-product style-2">
            <div className="card-product-wrapper">
                <Link to={`/product-detail/${slug}`} className="product-img">
                    <img
                        className="img-product"
                        src={imgSrc}
                        alt={name}
                        onError={(e) => { e.currentTarget.src = DEFAULT_IMG; }}
                    />
                    {/* Hover image — same src if no second image available */}
                    <img
                        className="img-hover"
                        src={imgSrc}
                        alt={name}
                        onError={(e) => { e.currentTarget.src = DEFAULT_IMG; }}
                    />
                </Link>

                {/* Action buttons */}
                <ul className="list-product-btn">
                    <li>
                        <Link
                            to="#shoppingCart"
                            data-bs-toggle="offcanvas"
                            className="box-icon hover-tooltip"
                        >
                            <span className="icon icon-cart2" />
                            <span className="tooltip">Add to Cart</span>
                        </Link>
                    </li>
                    <li className="wishlist">
                        <Link to="#" className="box-icon hover-tooltip">
                            <span className="icon icon-heart2" />
                            <span className="tooltip">Add to Wishlist</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="#quickView"
                            data-bs-toggle="modal"
                            className="box-icon hover-tooltip"
                        >
                            <span className="icon icon-view" />
                            <span className="tooltip">Quick View</span>
                        </Link>
                    </li>
                    <li className="compare">
                        <Link
                            to="#compare"
                            data-bs-toggle="modal"
                            className="box-icon hover-tooltip"
                        >
                            <span className="icon icon-compare" />
                            <span className="tooltip">Add to Compare</span>
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Info */}
            <div className="card-product-info">
                <Link
                    to={`/product-detail/${slug}`}
                    className="name-product link fw-medium text-md"
                >
                    {name}
                </Link>

                <p className="price-wrap fw-medium">
                    {price !== null && (
                        <span className="price-new">${price.toFixed(2)}</span>
                    )}
                </p>
            </div>
        </div>
    );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function RecentlyViewed() {

    const { slug } = useParams();
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const marketplace = query.get("marketplace");
    const eventId = query.get("eid");
    const userId = sessionStorage.getItem("user_id") ?? null;

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const hasFetched = useRef(false);

    const loadRecentlyViewedProducts = useCallback(async () => {
        if (!userId) {
            setLoading(false);
            return;
        }
        setLoading(true);
        setError(false);
        try {
            const res = await fetchRecentlyViewedProducts(userId);
            const fetched = res?.data?.data ?? [];
            setProducts(fetched);
        } catch (err) {
            if (err?.response?.status === 404) {
                setProducts([]);
            } else {
                setError(true);
            }
        } finally {
            setLoading(false);
        }
    }, [userId]);

    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;
        loadRecentlyViewedProducts();
    }, [loadRecentlyViewedProducts]);

    const renderSlides = () => {
        if (loading) {
            return Array.from({ length: SKELETON_COUNT }).map((_, i) => (
                <SwiperSlide key={`skeleton-${i}`}>
                    <SkeletonCard />
                </SwiperSlide>
            ));
        }

        return products.map((item) => (
            <SwiperSlide key={item.product_id ?? item.recently_viewed_id}>
                <ProductCard item={item} />
            </SwiperSlide>
        ));
    };

    // If no login, don't show recent products
    if (!userId) return null;

    return (
        <section className="flat-spacing pt-0">
            <div className="container">
                <div className="flat-title wow fadeInUp">
                    <h4 className="title">Recently Viewed</h4>
                </div>

                {/* Error state */}
                {error && !loading && (
                    <ErrorState onRetry={loadRecentlyViewedProducts} />
                )}

                {/* Empty state */}
                {!error && !loading && products.length === 0 && <EmptyState />}

                {/* Swiper — render for loading skeletons OR real products */}
                {(loading || (!error && products.length > 0)) && (
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
                            {renderSlides()}
                        </Swiper>

                        {/* Mobile pagination */}
                        <div className="d-flex d-xl-none sw-dot-default sw-pagination-viewed justify-content-center" />

                        {/* Desktop navigation — only meaningful when real slides exist */}
                        {!loading && (
                            <>
                                <div className="d-none d-xl-flex swiper-button-next nav-swiper nav-next-viewed" />
                                <div className="d-none d-xl-flex swiper-button-prev nav-swiper nav-prev-viewed" />
                            </>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}