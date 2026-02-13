import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reviews = [
    {
        stars: 5,
        title: "Perfect htmlFor Every Reading Session!",
        review:
            "I bought the packing cubes and tech pouch — both were game changers! Great quality and super organized.",
        author: "James T.",
        authorImg: "/assets/images/testimonial/author/author-mega-elec1.jpg",
        productImg: "/assets/images/products/book/book1.jpg",
        productName: "Packing Cubes",
        productPrice: "$150.00",
    },
    {
        stars: 5,
        title: "Fast Delivery, Beautiful Books",
        review:
            "My order arrived in just 2 days. The book covers look elegant, the paper feels premium, and the content is exactly what I wanted. I’ll definitely shop again!",
        author: "Vincent P.",
        authorImg: "/assets/images/testimonial/author/author-mega-elec2.jpg",
        productImg: "/assets/images/products/book/book2.jpg",
        productName: "Travel Wallet",
        productPrice: "$450.00",
    },
    {
        stars: 5,
        title: "Exactly What I Was Looking For",
        review:
            "The bookmark and small bookshelf made my reading corner so much cozier. Highly satisfied and will recommend to friends!",
        author: "Michael R.",
        authorImg: "/assets/images/testimonial/author/author-mega-elec3.jpg",
        productImg: "/assets/images/products/book/book3.jpg",
        productName: "Neck Pillow",
        productPrice: "$150.00",
    },
];

export default function CustomerReviewsSwiper() {
    return (
        <section className="flat-spacing-3 pt-0">
            <div className="container">
                <div className="flat-title-2 wow fadeInUp">
                    <h3 className="display-lg-2 title text-center fw-semibold text-dark-10">
                        Customer Reviews
                    </h3>
                </div>

                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={1}
                    spaceBetween={12}
                    speed={800}
                    slidesPerGroup={1}
                    navigation={{
                        nextEl: ".nav-next-testimonial",
                        prevEl: ".nav-prev-testimonial",
                    }}
                    pagination={{
                        el: ".sw-pagination-testimonial",
                        clickable: true,
                    }}
                    breakpoints={{
                        577: { slidesPerView: 2, spaceBetween: 12, slidesPerGroup: 2 },
                        1200: { slidesPerView: 3, spaceBetween: 24, slidesPerGroup: 4 },
                    }}
                    className="tf-swiper"
                >
                    {reviews.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="wg-testimonial style-2 type-2">
                                <div className="content">
                                    <div className="content-top">
                                        <div className="list-star-default">
                                            {Array.from({ length: item.stars }).map((_, idx) => (
                                                <i key={idx} className="icon-star text-orange"></i>
                                            ))}
                                        </div>

                                        <p className="text-sm fw-medium">{item.title}</p>
                                        <p className="text-review text-md text-main">{item.review}</p>

                                        <div className="box-author">
                                            <div className="avt">
                                                <img src={item.authorImg} alt="author" />
                                            </div>
                                            <p className="name-author text-sm fw-medium">{item.author}</p>
                                        </div>
                                    </div>

                                    <span className="br-line d-block"></span>

                                    <div className="bot">
                                        <div className="box-avt">
                                            <div className="avatar radius-4">
                                                <img src={item.productImg} alt="product" />
                                            </div>

                                            <div className="box-price">
                                                <Link
                                                    to="/product-detail"
                                                    className="link name-item text-md fw-medium"
                                                >
                                                    {item.productName}
                                                </Link>
                                                <p className="price text-md fw-medium">
                                                    {item.productPrice}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="box-btn d-none d-md-block">
                                            <Link
                                                to="/product-detail"
                                                className="tf-btn-icon text-primary line-primary"
                                            >
                                                <i className="icon icon-arrow-top-left"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Pagination for Mobile */}
                <div className="d-flex d-xl-none sw-dot-default sw-pagination-testimonial justify-content-center"></div>
            </div>
        </section>
    );
}
