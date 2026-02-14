import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";

export default function HeaderBannerSwiper() {
    return (
        <section className="tf-slideshow slider-space3 slider-default slider-control-img slider-container flat-spacing-4 pb-0">
            <div className="container">
                <Swiper
                    modules={[Pagination, Autoplay, EffectFade]}
                    slidesPerView={1}
                    loop={true}
                    speed={1000}
                    effect="fadeInLeft"
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        el: ".sw-pagination-slider",
                        clickable: true,
                    }}
                    className="tf-sw-slideshow"
                >
                    {/* Slide 1 */}
                    <SwiperSlide>
                        <div className="slider-wrap">
                            <div className="image">
                                <img
                                    src="/assets/images/slider/book/book1.jpg"
                                    alt="slider"
                                />
                            </div>
                            <div className="box-content">
                                <div className="row">
                                    <div className="col-lg-6 col-md-8 col-sm-6">
                                        <div className="content-slider">
                                            <div className="box-title-slider">
                                                <h2 className="heading display-xl-2 fw-semibold text-white">
                                                    Turn the page to <br className="d-none d-xl-block" />
                                                    something new
                                                </h2>
                                                <p className="sub text-md text-white">
                                                    Discover bestselling novels, timeless classics, and hidden gems —
                                                    all in one place.
                                                </p>
                                            </div>
                                            <div className="box-btn-slider">
                                                <Link
                                                    to="/product-default"
                                                    className="tf-btn btn-white fw-semibold animate-btn animate-dark"
                                                >
                                                    Shop Collection
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 2 */}
                    <SwiperSlide>
                        <div className="slider-wrap">
                            <div className="image">
                                <img
                                    src="/assets/images/slider/book/book1.jpg"
                                    alt="slider"
                                />
                            </div>
                            <div className="box-content">
                                <div className="row">
                                    <div className="col-lg-6 col-md-8 col-sm-6">
                                        <div className="content-slider">
                                            <div className="box-title-slider">
                                                <h2 className="heading display-xl-2 fw-semibold text-white">
                                                    Turn the page to <br className="d-none d-xl-block" />
                                                    something new
                                                </h2>
                                                <p className="sub text-md text-white">
                                                    Discover bestselling novels, timeless classics, and hidden gems —
                                                    all in one place.
                                                </p>
                                            </div>
                                            <div className="box-btn-slider">
                                                <Link
                                                    to="/product-default"
                                                    className="tf-btn btn-white fw-semibold animate-btn animate-dark"
                                                >
                                                    Shop Collection
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Pagination */}
                    <div className="wrap-pagination">
                        <div className="sw-dots border-white medium sw-pagination-slider justify-content-center"></div>
                    </div>
                </Swiper>
            </div>
        </section>
    );
}
