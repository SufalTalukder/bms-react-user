import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Zoom } from "swiper/modules";

const productImages = [
    // BLACK
    {
        color: "black",
        size: "small",
        src: "/assets/images/products/fashion/women-black-1.jpg",
    },
    {
        color: "black",
        size: "medium",
        src: "/assets/images/products/fashion/women-black-2.jpg",
    },
    {
        color: "black",
        size: "large",
        src: "/assets/images/products/fashion/women-black-3.jpg",
    },
    {
        color: "black",
        size: "extra large",
        src: "/assets/images/products/fashion/women-black-4.jpg",
    },

    // ORANGE
    {
        color: "orange",
        size: "small",
        src: "/assets/images/products/fashion/fs-orange1.jpg",
    },
    {
        color: "orange",
        size: "medium",
        src: "/assets/images/products/fashion/fs-orange2.jpg",
    },

    // GREEN
    {
        color: "green",
        size: "large",
        src: "/assets/images/products/fashion/fs-green1.jpg",
    },
    {
        color: "green",
        size: "extra large",
        src: "/assets/images/products/fashion/fs-green2.jpg",
    },
];

export default function ProductGallery() {

    return (
        <div className="product-thumbs-slider">
            <div style={{ display: "flex", gap: "20px" }}>
                {/* Thumbnail Swiper */}
                <Swiper
                    direction="vertical"
                    slidesPerView={4}
                    spaceBetween={10}
                    navigation
                    modules={[Navigation, Thumbs]}
                    className="thumb-swiper"
                    style={{ width: "100px", height: "500px" }}
                >
                    {productImages.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={img.src}
                                alt={`${img.color}-${img.size}`}
                                style={{
                                    width: "100%",
                                    cursor: "pointer",
                                    borderRadius: "6px",
                                }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Main Swiper */}
                <Swiper
                    modules={[Navigation, Thumbs, Zoom]}
                    navigation
                    zoom
                    className="main-swiper"
                    style={{ width: "500px", height: "500px" }}
                >
                    {productImages.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className="swiper-zoom-container">
                                <img
                                    src={img.src}
                                    alt={`${img.color}-${img.size}`}
                                    style={{ width: "100%", borderRadius: "8px" }}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
