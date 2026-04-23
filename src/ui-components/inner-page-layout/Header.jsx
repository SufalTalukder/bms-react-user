import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { useCategories } from "../../context/CategoryContext";
import { useSubCategories } from "../../context/SubCategoryContext";
import { useLanguages } from "../../context/LanguageContext";

function MenuItemSkeleton() {
    return (
        <li style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 22px" }}>
            {/* Image circle */}
            <div style={{
                width: "35px",
                height: "35px",
                borderRadius: "50%",
                flexShrink: 0,
                background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
                backgroundSize: "200% 100%",
                animation: "hdr-shimmer 1.4s infinite",
            }} />
            {/* Name line */}
            <div style={{
                height: "12px",
                width: "200px",
                borderRadius: "5px",
                background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
                backgroundSize: "200% 100%",
                animation: "hdr-shimmer 1.4s infinite 0.1s",
            }} />
        </li>
    );
}

const SKELETON_COUNT = 5;

export default function Header() {

    const { user } = useUser();
    const token = sessionStorage.getItem("accessToken");

    const { categoriesList, defaultCategoryImage, loading: catLoading } = useCategories();
    const { subCategoriesList, defaultSubCategoryImage, loading: subCatLoading } = useSubCategories();
    const { languagesList, defaultLanguageImage, loading: langLoading } = useLanguages();

    return (
        <header id="header" className="header-default header-search header-uppercase header-style-2">
            <style>{`
                @keyframes hdr-shimmer {
                    0%   { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
            `}</style>

            {/* Header Top */}
            <div className="header-top line-bt">
                <div className="container">
                    <div className="row wrapper-header align-items-center">
                        <div className="col-md-4 col-3 d-xl-none">
                            <Link to="#mobileMenu" className="mobile-menu" data-bs-toggle="offcanvas" aria-controls="mobileMenu">
                                <i className="icon icon-categories1" />
                            </Link>
                        </div>
                        <div className="col-xl-3 col-md-4 col-6">
                            <Link to="/" className="logo-header">
                                <img src="/assets/images/logo/logo.svg" alt="logo" className="logo" />
                            </Link>
                        </div>
                        <div className="col-xl-5 d-none d-xl-block text-center">
                            <div className="tf-form-search">
                                <form className="form-search">
                                    <input type="text" placeholder="Search product" tabIndex={-1} aria-required="true" required="" />
                                    <button type="submit" className="btn-search"><i className="icon icon-search" /></button>
                                </form>
                                <div className="search-suggests-results">
                                    <div className="search-suggests-results-inner">
                                        <ul>
                                            <li>
                                                <Link className="search-result-item" to="/product-details">
                                                    <div className="img-box">
                                                        <img className="lazyload" data-src="/assets/images/products/book/book9.jpg" src="/assets/images/products/book/book9.jpg" alt="img" />
                                                    </div>
                                                    <div className="box-content">
                                                        <p className="title link">Enceladus</p>
                                                        <div className="price"><span className="price">$60.00</span></div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="search-result-item" to="/product-details">
                                                    <div className="img-box">
                                                        <img className="lazyload" data-src="/assets/images/products/book/book10.jpg" src="/assets/images/products/book/book10.jpg" alt="img" />
                                                    </div>
                                                    <div className="box-content">
                                                        <p className="title link">Het Raadsel Van De Zee</p>
                                                        <div className="price">$55.00</div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="search-result-item" to="/product-details">
                                                    <div className="img-box">
                                                        <img className="lazyload" data-src="/assets/images/products/book/book11.jpg" src="/assets/images/products/book/book11.jpg" alt="img" />
                                                    </div>
                                                    <div className="box-content">
                                                        <p className="title link">Notes From A Young Chef</p>
                                                        <div className="price">$65.00</div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="search-result-item" to="/product-details">
                                                    <div className="img-box">
                                                        <img className="lazyload" data-src="/assets/images/products/book/book12.jpg" src="/assets/images/products/book/book12.jpg" alt="img" />
                                                    </div>
                                                    <div className="box-content">
                                                        <p className="title link">All This & More</p>
                                                        <div className="price">$70.00</div>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-3">
                            <ul className="nav-icon d-flex justify-content-end align-items-center">
                                <li className="nav-search d-xl-none d-flex">
                                    <Link to="#search" data-bs-toggle="modal" data-bs-target="#search" className="nav-icon-item">
                                        <i className="icon icon-search" />
                                    </Link>
                                </li>
                                {(user || token) && (
                                    <li className="nav-wishlist">
                                        <Link to="/my-account?marketplace=Vineta" className="nav-icon-item">
                                            <i className="icon icon-user" />
                                            <span className="text d-none d-xl-block" />
                                        </Link>
                                    </li>
                                )}
                                {(!user || !token) && (
                                    <li className="nav-account">
                                        <Link to="#login" data-bs-toggle="offcanvas" data-bs-target="#login" className="nav-icon-item">
                                            <i className="icon icon-user" />
                                            <span className="text d-none d-xl-block" />
                                        </Link>
                                    </li>
                                )}
                                {(user || token) && (
                                    <li className="nav-wishlist">
                                        <Link to="/wish-list?marketplace=Vineta" className="nav-icon-item">
                                            <i className="icon icon-heart" />
                                            <span className="text d-none d-xl-block" />
                                        </Link>
                                    </li>
                                )}
                                {(user || token) && (
                                    <li className="nav-cart">
                                        <Link to="/cart-list?marketplace=Vineta" className="nav-icon-item">
                                            <i className="icon icon-cart" />
                                            <span className="text d-none d-xl-block" />
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Header Bottom */}
            <div className="header-bottom d-none d-xl-block line-bt">
                <div className="container">
                    <div className="wrapper-header-bottom style-2">
                        <div className="inner-left">

                            {/* Topics */}
                            <div className="tf-mega-categories">
                                <Link to="#" className="categories-title">
                                    <i className="icon icon-categories" />browse topics
                                </Link>
                                <ul className="mega-categories rgb-primary" style={{ maxHeight: "350px", overflowY: "scroll" }}>
                                    {catLoading
                                        ? Array.from({ length: SKELETON_COUNT }).map((_, i) => <MenuItemSkeleton key={i} />)
                                        : categoriesList.map((item, index) => (
                                            <li key={index}>
                                                <Link to={`/product-default/topics/${item?.category_slug}?eid=${item?.event_id}&marketplace=Vineta`} className="cate-item">
                                                    <div className="img"><img src={item?.category_image ?? defaultCategoryImage} alt="topics" /></div>
                                                    <span className="name-cate">{item?.category_name}</span>
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                            {/* Authors */}
                            <div className="tf-mega-categories">
                                <Link to="#" className="categories-title">
                                    <i className="icon icon-categories" />browse authors
                                </Link>
                                <ul className="mega-categories rgb-primary" style={{ maxHeight: "350px", overflowY: "scroll" }}>
                                    {subCatLoading
                                        ? Array.from({ length: SKELETON_COUNT }).map((_, i) => <MenuItemSkeleton key={i} />)
                                        : subCategoriesList.map((item, index) => (
                                            <li key={index}>
                                                <Link to={`/product-default/authors/${item?.sub_category_slug}?eid=${item?.event_id}&marketplace=Vineta`} className="cate-item">
                                                    <div className="img"><img src={item?.sub_category_image ?? defaultSubCategoryImage} alt="authors" /></div>
                                                    <span className="name-cate">{item?.sub_category_name}</span>
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                            {/* Languages */}
                            <div className="tf-mega-categories">
                                <Link to="#" className="categories-title">
                                    <i className="icon icon-categories" />browse languages
                                </Link>
                                <ul className="mega-categories rgb-primary" style={{ maxHeight: "350px", overflowY: "scroll" }}>
                                    {langLoading
                                        ? Array.from({ length: SKELETON_COUNT }).map((_, i) => <MenuItemSkeleton key={i} />)
                                        : languagesList.map((item, index) => (
                                            <li key={index}>
                                                <Link to={`/product-default/languages/${item?.language_slug}?eid=${item?.event_id}&marketplace=Vineta`} className="cate-item">
                                                    <div className="img"><img src={item?.language_image ?? defaultLanguageImage} alt="languages" /></div>
                                                    <span className="name-cate">{item?.language_name}</span>
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                            {/* Browse all */}
                            <div className="tf-mega-categories">
                                <Link to="/product-default?marketplace=Vineta" className="categories-title">
                                    <i className="icon icon-categories" />browse all
                                </Link>
                            </div>

                            <nav className="box-navigation text-center">
                                <ul className="box-nav-menu">
                                    <li className="menu-item" />
                                    <li className="menu-item" />
                                    <li className="menu-item" />
                                    <li className="menu-item position-relative" />
                                </ul>
                            </nav>
                        </div>

                        <div className="box-phone">
                            <div className="box-icon bg-light-orange-6">
                                <i className="icon icon-head-phone" />
                            </div>
                            <Link to="tel:123456789" className="text-xl fw-medium">+1 123 456 789</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}