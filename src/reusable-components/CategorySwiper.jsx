import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useCategories } from "../context/CategoryContext";

function CategorySkeletonCard() {
    return (
        <div className="wg-cls style-circle">
            {/* Circle image placeholder */}
            <div
                style={{
                    width: "100%",
                    aspectRatio: "1/1",
                    borderRadius: "50%",
                    background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
                    backgroundSize: "200% 100%",
                    animation: "cat-shimmer 1.4s infinite",
                }}
            />
            <div className="cls-content text-center" style={{ marginTop: "12px" }}>
                {/* Name placeholder */}
                <div
                    style={{
                        height: "14px",
                        width: "65%",
                        margin: "0 auto 8px",
                        borderRadius: "6px",
                        background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
                        backgroundSize: "200% 100%",
                        animation: "cat-shimmer 1.4s infinite",
                    }}
                />
                {/* Count placeholder */}
                <div
                    style={{
                        height: "11px",
                        width: "35%",
                        margin: "0 auto",
                        borderRadius: "6px",
                        background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
                        backgroundSize: "200% 100%",
                        animation: "cat-shimmer 1.4s infinite 0.1s",
                    }}
                />
            </div>
        </div>
    );
}

const SKELETON_COUNT = 6;

export default function CategorySwiper() {

    const { categoriesList, defaultCategoryImage, loading } = useCategories();

    return (
        <section>
            <style>{`
                @keyframes cat-shimmer {
                    0%   { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
            `}</style>

            <div className="container">
                <div className="flat-title-2 wow fadeInUp">
                    <h3 className="display-lg-2 title text-center fw-semibold text-dark-10">
                        Categories
                    </h3>
                </div>

                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={2}
                    spaceBetween={12}
                    speed={800}
                    slidesPerGroup={2}
                    observer={true}
                    observeParents={true}
                    navigation={{
                        nextEl: ".nav-next-categories",
                        prevEl: ".nav-prev-categories",
                    }}
                    pagination={{
                        el: ".sw-pagination-categories",
                        clickable: true,
                    }}
                    breakpoints={{
                        575: { slidesPerView: 3, spaceBetween: 12, slidesPerGroup: 2 },
                        768: { slidesPerView: 4, spaceBetween: 24, slidesPerGroup: 3 },
                        1200: { slidesPerView: 5, spaceBetween: 40, slidesPerGroup: 3 },
                        1440: { slidesPerView: 6, spaceBetween: 64, slidesPerGroup: 3 },
                    }}
                    className="tf-swiper wow fadeInUp"
                >
                    {loading
                        ? Array.from({ length: SKELETON_COUNT }).map((_, i) => (
                            <SwiperSlide key={`skeleton-${i}`}>
                                <CategorySkeletonCard />
                            </SwiperSlide>
                        ))
                        : categoriesList.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="wg-cls style-circle hover-img">
                                    <Link
                                        to={`/product-default/topics/${item?.category_slug}?eid=${item?.event_id}&marketplace=Vineta`}
                                        className="bg-grey-4 image img-style d-block"
                                    >
                                        <img
                                            src={item?.category_image ?? defaultCategoryImage}
                                            alt="categories"
                                        />
                                    </Link>
                                    <div className="cls-content text-center">
                                        <Link
                                            to={`/product-default/topics/${item?.category_slug}?eid=${item?.event_id}&marketplace=Vineta`}
                                            className="link text-lg fw-medium"
                                        >
                                            {item?.category_name}
                                        </Link>
                                        <span className="count text-sm">{item?.count}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

                {/* Pagination (Mobile) */}
                <span className="d-flex d-xl-none sw-dot-default sw-pagination-categories justify-content-center" />
            </div>
        </section>
    );
}