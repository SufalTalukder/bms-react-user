import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [
    {
        img: "/assets/images/products/book/book9.jpg",
        name: "Enceladus",
        newPrice: "$80.00",
        oldPrice: "$100.00",
        sale: "20% Off",
    },
    {
        img: "/assets/images/products/book/book10.jpg",
        name: "Het Raadsel Van De Zee",
        newPrice: "$80.00",
        oldPrice: null,
        sale: null,
    },
    {
        img: "/assets/images/products/book/book11.jpg",
        name: "Enceladus",
        newPrice: "$70.00",
        oldPrice: null,
        sale: null,
    },
    {
        img: "/assets/images/products/book/book12.jpg",
        name: "All This & More",
        newPrice: "$60.00",
        oldPrice: "$70.00",
        sale: "10% Off",
    },
    {
        img: "/assets/images/products/book/book13.jpg",
        name: "Delivery Girl",
        newPrice: "$82.00",
        oldPrice: null,
        sale: null,
    },
    {
        img: "/assets/images/products/book/book14.jpg",
        name: "Voice Of Ancestors",
        newPrice: "$90.00",
        oldPrice: null,
        sale: null,
    },
];

export default function FeaturedProductsSwiper() {
    return (
        <section className="flat-spacing-6">
            <div className="container">
                <div className="flat-title-2 wow fadeInUp">
                    <h3 className="display-lg-2 title text-center fw-semibold text-dark-10">
                        Featured Products
                    </h3>
                </div>

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
                    {products.map((p, index) => (
                        <SwiperSlide key={index}>
                            <div className="card-product style-3 style-primary none-hover-img">
                                <div className="card-product-wrapper asp-ratio-0">
                                    <Link to="/product-detail" className="product-img">
                                        <img
                                            className="img-product"
                                            src={p.img}
                                            alt="image-product"
                                        />
                                    </Link>

                                    {p.sale && (
                                        <div className="on-sale-wrap pos2">
                                            <span className="on-sale-item">{p.sale}</span>
                                        </div>
                                    )}

                                    <ul className="list-product-btn">
                                        <li>
                                            <Link
                                                to="#"
                                                className="box-icon hover-tooltip wishlist box-shadow1"
                                            >
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
                                                className="box-icon hover-tooltip compare box-shadow1"
                                            >
                                                <span className="icon icon-compare"></span>
                                                <span className="tooltip">Add to Compare</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="card-product-info text-center pb-0">
                                    <Link to="/product-detail" className="name-product link fw-medium text-md">
                                        {p.name}
                                    </Link>
                                    <p className="price-wrap fw-medium">
                                        <span className="price-new">{p.newPrice}</span>
                                        {p.oldPrice && (
                                            <span className="price-old">{p.oldPrice}</span>
                                        )}
                                    </p>

                                    <Link
                                        to="#shoppingCart"
                                        data-bs-toggle="offcanvas"
                                        className="tf-btn rgb-primary mt_10"
                                    >
                                        <span className="text-md fw-medium">Add to Cart</span>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Pagination for Mobile */}
                <div className="d-flex d-xl-none sw-dot-default sw-pagination-featured justify-content-center"></div>
            </div>
        </section>
    );
}
