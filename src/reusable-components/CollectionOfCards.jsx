import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
    {
        img: "/assets/images/cls-categories/book/book1.jpg",
        title: "Books That <br /> Move You",
    },
    {
        img: "/assets/images/cls-categories/book/book2.jpg",
        title: "Read. Dream. <br /> Repeat.",
    },
    {
        img: "/assets/images/cls-categories/book/book3.jpg",
        title: "Where Every <br /> Page Belongs",
    },
];

export default function CollectionOfCards() {
    return (
        <div className="flat-spacing-6">
            <div className="container">
                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={1}
                    spaceBetween={12}
                    speed={800}
                    slidesPerGroup={1}
                    observer={true}
                    observeParents={true}
                    navigation={{
                        nextEl: ".nav-next-cls",
                        prevEl: ".nav-prev-cls",
                    }}
                    pagination={{
                        el: ".sw-pagination-cls",
                        clickable: true,
                    }}
                    breakpoints={{
                        768: { slidesPerView: 2, spaceBetween: 24, slidesPerGroup: 2 },
                        1200: { slidesPerView: 3, spaceBetween: 24, slidesPerGroup: 3 },
                    }}
                    className="tf-swiper"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="s-cls style-absolute hover-img abs-left-center">
                                <div className="image img-style">
                                    <img
                                        src={slide.img}
                                        alt="category"
                                        className="lazyload"
                                    />
                                </div>
                                <div className="content">
                                    <div className="box-title">
                                        <h6
                                            className="fw-semibold display-xs-2"
                                            dangerouslySetInnerHTML={{ __html: slide.title }}
                                        />
                                    </div>
                                    <div className="box-btn">
                                        <Link to="/shop-default" className="tf-btn btn-primary animate-btn">
                                            <span className="text-sm">Shop Now</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Pagination for Mobile */}
                <div className="d-flex d-xl-none sw-dot-default sw-pagination-cls justify-content-center"></div>
            </div>
        </div>
    );
}
