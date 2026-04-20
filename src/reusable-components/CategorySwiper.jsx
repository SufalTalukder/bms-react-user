import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useCategories } from "../context/CategoryContext";

export default function CategorySwiper() {

    const { categoriesList, defaultCategoryImage, loading } = useCategories();

    if (loading) return <p>Loading…</p>;

    return (
        <section>
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
                    {categoriesList.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="wg-cls style-circle hover-img">
                                <Link to={`/product-default/topics/${item?.category_slug}?eid=${item?.event_id}&marketplace=Vineta`} className="bg-grey-4 image img-style d-block">
                                    <img src={item?.category_image ?? defaultCategoryImage} alt="categories" />
                                </Link>
                                <div className="cls-content text-center">
                                    <Link to={`/product-default/topics/${item?.category_slug}?eid=${item?.event_id}&marketplace=Vineta`} className="link text-lg fw-medium">
                                        {item?.category_name}
                                    </Link>
                                    <span className="count text-sm">{item?.count}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Pagination (Mobile) */}
                <span className="d-flex d-xl-none sw-dot-default sw-pagination-categories justify-content-center"></span>
            </div>
        </section>
    );
}
