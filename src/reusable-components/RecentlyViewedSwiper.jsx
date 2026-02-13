import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const products = [
    {
        name: "Turtleneck T-shirt",
        price: 80,
        oldPrice: 100,
        img1: "/assets/images/products/fashion/product-5.jpg",
        img2: "/assets/images/products/fashion/product-22.jpg",
        badge: "20% Off",
    },
    {
        name: "Loose Fit Tee",
        price: 65,
        img1: "/assets/images/products/fashion/product-12.jpg",
        img2: "/assets/images/products/fashion/product-39.jpg",
        badge: "Trending",
        badgeClass: "trending",
    },
    {
        name: "Crop T-shirt",
        price: 45,
        img1: "/assets/images/products/fashion/product-11.jpg",
        img2: "/assets/images/products/fashion/product-7.jpg",
        badge: "20% Off",
        countdown: true,
    },
    {
        name: "Short Sleeve Sweat",
        price: 130,
        img1: "/assets/images/products/fashion/product-31.jpg",
        img2: "/assets/images/products/fashion/product-13.jpg",
        badge: "Limited",
        badgeClass: "limited",
    },
    {
        name: "Breeze Soft Tee",
        price: 50,
        oldPrice: 70,
        img1: "/assets/images/products/fashion/product-30.jpg",
        img2: "/assets/images/products/fashion/product-10.jpg",
    },
];

export default function RecentlyViewed() {
    return (
        <section className="flat-spacing pt-0">
            <div className="container">
                <div className="flat-title wow fadeInUp">
                    <h4 className="title">Recently Viewed</h4>
                </div>

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
                        {products.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="card-product style-2">
                                    <div className="card-product-wrapper">
                                        <Link to="/product-detail" className="product-img">
                                            <img className="img-product" src={item.img1} alt={item.name} />
                                            <img className="img-hover" src={item.img2} alt={item.name} />
                                        </Link>

                                        {/* Buttons */}
                                        <ul className="list-product-btn">
                                            <li>
                                                <Link to="#" className="box-icon hover-tooltip">
                                                    <span className="icon icon-cart2"></span>
                                                    <span className="tooltip">Add to Cart</span>
                                                </Link>
                                            </li>
                                            <li className="wishlist">
                                                <Link to="#" className="box-icon hover-tooltip">
                                                    <span className="icon icon-heart2"></span>
                                                    <span className="tooltip">Add to Wishlist</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="box-icon hover-tooltip">
                                                    <span className="icon icon-view"></span>
                                                    <span className="tooltip">Quick View</span>
                                                </Link>
                                            </li>
                                            <li className="compare">
                                                <Link to="#" className="box-icon hover-tooltip">
                                                    <span className="icon icon-compare"></span>
                                                    <span className="tooltip">Add to Compare</span>
                                                </Link>
                                            </li>
                                        </ul>

                                        {/* Badge */}
                                        {item.badge && (
                                            <div className="on-sale-wrap">
                                                <span className={`on-sale-item ${item.badgeClass || ""}`}>
                                                    {item.badge}
                                                </span>
                                            </div>
                                        )}

                                        {/* Countdown (left exactly like template) */}
                                        {item.countdown && (
                                            <div className="countdown-box">
                                                <div
                                                    className="js-countdown"
                                                    data-timer="1007500"
                                                    data-labels="D :,H :,M :,S"
                                                ></div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="card-product-info">
                                        <Link
                                            to="/product-detail"
                                            className="name-product link fw-medium text-md"
                                        >
                                            {item.name}
                                        </Link>

                                        <p className="price-wrap fw-medium">
                                            <span className="price-new">${item.price.toFixed(2)}</span>
                                            {item.oldPrice && (
                                                <span className="price-old">
                                                    ${item.oldPrice.toFixed(2)}
                                                </span>
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Pagination (Mobile) */}
                    <div className="d-flex d-xl-none sw-dot-default sw-pagination-viewed justify-content-center"></div>

                    {/* Navigation (Desktop) */}
                    <div className="d-none d-xl-flex swiper-button-next nav-swiper nav-next-viewed"></div>
                    <div className="d-none d-xl-flex swiper-button-prev nav-swiper nav-prev-viewed"></div>
                </div>
            </div>
        </section>
    );
}
