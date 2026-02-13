import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const iconBoxes = [
    {
        icon: "icon-shipping",
        title: "Free Shipping",
        desc: "Enjoy free delivery on all orders",
    },
    {
        icon: "icon-gift",
        title: "Gift Package",
        desc: "Perfectly packaged for gifting",
    },
    {
        icon: "icon-return",
        title: "Easy Returns",
        desc: "Within 14 days for a return",
    },
    {
        icon: "icon-support",
        title: "Support Online",
        desc: "Outstanding premium support",
    },
];

export default function IconBoxSwiper() {
    return (
        <div className="flat-spacing-37 line-top">
            <div className="container">
                <Swiper
                    modules={[Pagination]}
                    slidesPerView={1}
                    spaceBetween={12}
                    speed={800}
                    preventInteractionOnTransition={false}
                    touchStartPreventDefault={false}
                    pagination={{
                        el: ".sw-pagination-iconbox",
                        clickable: true,
                    }}
                    breakpoints={{
                        575: { slidesPerView: 2, spaceBetween: 12 },
                        992: { slidesPerView: 3, spaceBetween: 24 },
                        1200: { slidesPerView: 4, spaceBetween: 24 },
                    }}
                    className="tf-swiper wow fadeInUp"
                >
                    {iconBoxes.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="tf-icon-box style-3">
                                <div className="box-icon">
                                    <i className={`icon ${item.icon}`}></i>
                                </div>
                                <div className="content">
                                    <div className="title">{item.title}</div>
                                    <p className="desc">{item.desc}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Pagination for Mobile */}
                <div className="d-flex d-xl-none sw-dot-default sw-pagination-iconbox justify-content-center"></div>
            </div>
        </div>
    );
}
