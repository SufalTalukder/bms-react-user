import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useCallback, useEffect, useRef, useState } from "react";
import { fetchProductsByFeaturedType } from "../api/product-api";

function SkeletonCard() {
    return (
        <div className="card-product style-3 style-primary none-hover-img">
            <div
                className="card-product-wrapper asp-ratio-0"
                style={{ position: "relative", overflow: "hidden" }}
            >
                {/* Image placeholder */}
                <div
                    style={{
                        width: "100%",
                        paddingBottom: "140%",
                        background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
                        backgroundSize: "200% 100%",
                        animation: "shimmer 1.4s infinite",
                        borderRadius: "8px",
                    }}
                />
            </div>
            <div
                className="card-product-info text-center pb-0"
                style={{ padding: "12px 8px 0" }}
            >
                {/* Title placeholder */}
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
                {/* Price placeholder */}
                <div
                    style={{
                        height: "12px",
                        width: "45%",
                        margin: "0 auto 12px",
                        borderRadius: "6px",
                        background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
                        backgroundSize: "200% 100%",
                        animation: "shimmer 1.4s infinite 0.1s",
                    }}
                />
                {/* Button placeholder */}
                <div
                    style={{
                        height: "36px",
                        width: "90%",
                        margin: "0 auto",
                        borderRadius: "6px",
                        background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
                        backgroundSize: "200% 100%",
                        animation: "shimmer 1.4s infinite 0.2s",
                    }}
                />
            </div>

            {/* Keyframes injected once via a style tag */}
            <style>{`
                @keyframes shimmer {
                    0%   { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
            `}</style>
        </div>
    );
}

function EmptyState() {
    return (
        <div style={{ textAlign: "center", padding: "60px 20px", color: "#888" }}>
            <div style={{ fontSize: "48px", marginBottom: "12px" }}>📚</div>
            <p style={{ fontSize: "16px", fontWeight: 500 }}>
                No featured deal products found.
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

const SKELETON_COUNT = 6;
const defaultImg = "/assets/images/products/book/book9.jpg";

export default function FeaturedProductsSwiper() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const hasFetched = useRef(false);
    const payload = { best_seller: "NO", new_arrival: "NO", deal: "YES" };

    const loadProducts = useCallback(async () => {
        setLoading(true);
        setError(false);
        try {
            const res = await fetchProductsByFeaturedType(payload);
            const fetched = res?.data?.data ?? [];
            setProducts(fetched);
        } catch (err) {
            if (err?.response?.status === 404) setProducts([]);
            else setError(true);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;
        loadProducts();
    }, [loadProducts]);

    const renderContent = () => {
        if (error) return <ErrorState onRetry={loadProducts} />;
        if (loading) {
            return (
                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={2}
                    spaceBetween={12}
                    breakpoints={{
                        768: { slidesPerView: 3, spaceBetween: 12 },
                        1200: { slidesPerView: 4, spaceBetween: 24 },
                        1440: { slidesPerView: 6, spaceBetween: 24 },
                    }}
                    className="tf-swiper"
                >
                    {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
                        <SwiperSlide key={`skeleton-${i}`}>
                            <SkeletonCard />
                        </SwiperSlide>
                    ))}
                </Swiper>
            );
        }

        if (!products.length) return <EmptyState />;

        return (
            <>
                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={2}
                    spaceBetween={12}
                    speed={800}
                    slidesPerGroup={2}
                    navigation={{
                        nextEl: ".nav-next-featured",
                        prevEl: ".nav-prev-featured",
                    }}
                    pagination={{
                        el: ".sw-pagination-featured",
                        clickable: true,
                    }}
                    breakpoints={{
                        768: { slidesPerView: 3, spaceBetween: 12, slidesPerGroup: 3 },
                        1200: { slidesPerView: 4, spaceBetween: 24, slidesPerGroup: 4 },
                        1440: { slidesPerView: 6, spaceBetween: 24, slidesPerGroup: 4 },
                    }}
                    className="tf-swiper wow fadeInUp"
                >
                    {products.map((p) => {
                        const name = p.product_name ?? "Untitled";
                        const slug = p.product_slug ?? "#";
                        const eventId = p.p_event_id ?? "";
                        const imgSrc = p.product_image ? p.product_image : defaultImg;
                        const price = p.product_price != null
                            ? `₹${parseFloat(p.product_price).toFixed(2)}`
                            : null;
                        const isDeal = p.deal === "YES";
                        const saleLabel = isDeal ? "Deal" : null;

                        return (
                            <SwiperSlide key={p.product_id}>
                                <div className="card-product style-3 style-primary none-hover-img">
                                    <div className="card-product-wrapper asp-ratio-0">
                                        <Link to={`/product-details/${slug}?eid=${eventId}&marketplace=Vineta`} className="product-img">
                                            <img
                                                className="img-product"
                                                src={imgSrc}
                                                alt={name}
                                                onError={(e) => { e.currentTarget.src = defaultImg; }}
                                            />
                                        </Link>

                                        {saleLabel && (
                                            <div className="on-sale-wrap pos2">
                                                <span className="on-sale-item">{saleLabel}</span>
                                            </div>
                                        )}

                                        <ul className="list-product-btn">
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
                                                    className="box-icon hover-tooltip compare box-shadow1"
                                                >
                                                    <span className="icon icon-compare"></span>
                                                    <span className="tooltip">Add to Compare</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="card-product-info text-center pb-0">
                                        <Link
                                            to={`/product-detail/${slug}?eid=${eventId}&marketplace=Vineta`}
                                            className="name-product link fw-medium text-md"
                                        >
                                            {name}
                                        </Link>

                                        <p className="price-wrap fw-medium">
                                            {price && <span className="price-new">{price}</span>}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

                {/* Mobile pagination dots */}
                <div className="d-flex d-xl-none sw-dot-default sw-pagination-featured justify-content-center" />
            </>
        );
    };

    return (
        <section className="flat-spacing-6">
            <div className="container">
                <div className="flat-title-2 wow fadeInUp">
                    <h3 className="display-lg-2 title text-center fw-semibold text-dark-10">
                        Deal Products
                    </h3>
                </div>
                {renderContent()}
            </div>
        </section>
    );
}