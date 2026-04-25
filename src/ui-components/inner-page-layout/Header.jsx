import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { useCategories } from "../../context/CategoryContext";
import { useSubCategories } from "../../context/SubCategoryContext";
import { useLanguages } from "../../context/LanguageContext";
import { useState, useRef, useEffect, useCallback } from "react";
import { searchProductsByKeyword } from "../../api/product-api";

function MenuItemSkeleton() {
    return (
        <li style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 22px" }}>
            <div style={{
                width: "35px", height: "35px", borderRadius: "50%", flexShrink: 0,
                background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
                backgroundSize: "200% 100%", animation: "hdr-shimmer 1.4s infinite",
            }} />
            <div style={{
                height: "12px", width: "200px", borderRadius: "5px",
                background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
                backgroundSize: "200% 100%", animation: "hdr-shimmer 1.4s infinite 0.1s",
            }} />
        </li>
    );
}

function SearchSkeleton() {
    return (
        <>
            {[1, 2, 3].map((i) => (
                <li key={i}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 12px" }}>
                        <div style={{
                            width: 44, height: 56, borderRadius: 4, flexShrink: 0,
                            background: "linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%)",
                            backgroundSize: "200% 100%", animation: "hdr-shimmer 1.4s infinite",
                        }} />
                        <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                            <div style={{
                                height: 13, width: "65%", borderRadius: 4,
                                background: "linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%)",
                                backgroundSize: "200% 100%", animation: "hdr-shimmer 1.4s infinite",
                            }} />
                            <div style={{
                                height: 12, width: "30%", borderRadius: 4,
                                background: "linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%)",
                                backgroundSize: "200% 100%", animation: "hdr-shimmer 1.4s infinite 0.1s",
                            }} />
                        </div>
                    </div>
                </li>
            ))}
        </>
    );
}

const SKELETON_COUNT = 5;
const DEBOUNCE_MS = 400;
const MIN_CHARS = 3;

export default function Header() {

    const { user } = useUser();
    const token = sessionStorage.getItem("accessToken");

    const { categoriesList, defaultCategoryImage, loading: catLoading } = useCategories();
    const { subCategoriesList, defaultSubCategoryImage, loading: subCatLoading } = useSubCategories();
    const { languagesList, defaultLanguageImage, loading: langLoading } = useLanguages();

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [searchLoading, setSearchLoading] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [noResults, setNoResults] = useState(false);

    const debounceTimer = useRef(null);
    const searchWrapperRef = useRef(null);
    const abortRef = useRef(null);

    useEffect(() => {
        const handler = (e) => {
            if (searchWrapperRef.current && !searchWrapperRef.current.contains(e.target)) {
                setShowSuggestions(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const handleSearchInput = useCallback((e) => {
        const val = e.target.value;
        setSearchQuery(val);
        setNoResults(false);

        if (debounceTimer.current) clearTimeout(debounceTimer.current);

        if (val.trim().length < MIN_CHARS) {
            setSuggestions([]);
            setShowSuggestions(false);
            setSearchLoading(false);
            return;
        }

        setSearchLoading(true);
        setShowSuggestions(true);

        debounceTimer.current = setTimeout(async () => {
            if (abortRef.current) abortRef.current.abort();
            abortRef.current = new AbortController();

            try {
                const res = await searchProductsByKeyword(val.trim());
                if (res.data?.success === "Success") {
                    setSuggestions(res.data?.data || []);
                    setNoResults(false);
                } else {
                    setSuggestions([]);
                    setNoResults(true);
                }
            } catch (err) {
                if (err?.response?.status === 404) {
                    setSuggestions([]);
                    setNoResults(true);
                }
            } finally {
                setSearchLoading(false);
            }
        }, DEBOUNCE_MS);
    }, []);

    const handleClear = () => {
        setSearchQuery("");
        setSuggestions([]);
        setShowSuggestions(false);
        setNoResults(false);
        if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };

    const handleSuggestionClick = () => {
        setShowSuggestions(false);
        setSearchQuery("");
        setSuggestions([]);
    };

    return (
        <header id="header" className="header-default header-search header-uppercase header-style-2">
            <style>{`
                @keyframes hdr-shimmer {
                    0%   { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
                .search-suggests-results { display: none; }
                .search-suggests-results.active { display: block; }
                .search-no-result {
                    padding: 20px 16px;
                    text-align: center;
                    color: #999;
                    font-size: 13px;
                }
                .search-result-item {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 8px 12px;
                    transition: background 0.15s;
                }
                .search-result-item:hover { background: #fafafa; }
                .search-clear-btn {
                    position: absolute;
                    right: 52px;
                    top: 50%;
                    transform: translateY(-50%);
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: #999;
                    font-size: 14px;
                    padding: 4px;
                    line-height: 1;
                    display: flex;
                    align-items: center;
                }
                .search-clear-btn:hover { color: #333; }
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

                        {/* ── Search ── */}
                        <div className="col-xl-5 d-none d-xl-block text-center">
                            <div className="tf-form-search" ref={searchWrapperRef}>
                                <form
                                    className="form-search"
                                    style={{ position: "relative" }}
                                    onSubmit={(e) => e.preventDefault()}
                                >
                                    <input
                                        type="text"
                                        placeholder={`Search for products, brands and more`}
                                        value={searchQuery}
                                        onChange={handleSearchInput}
                                        onFocus={() => {
                                            if (suggestions.length > 0 || noResults) setShowSuggestions(true);
                                        }}
                                        autoComplete="off"
                                        aria-label="Search products"
                                        aria-expanded={showSuggestions}
                                    />

                                    {/* Clear button */}
                                    {searchQuery.length > 0 && (
                                        <button
                                            type="button"
                                            className="search-clear-btn"
                                            onClick={handleClear}
                                            aria-label="Clear search"
                                        >
                                            <i className="icon icon-close" />
                                        </button>
                                    )}

                                    <button type="submit" className="btn-search">
                                        {searchLoading
                                            ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                                            : <i className="icon icon-search" />
                                        }
                                    </button>
                                </form>

                                {/* ── Suggestions dropdown ── */}
                                <div className={`search-suggests-results${showSuggestions ? " active" : ""}`}>
                                    <div className="search-suggests-results-inner">
                                        <ul>
                                            {searchLoading && <SearchSkeleton />}

                                            {!searchLoading && noResults && (
                                                <li className="search-no-result">
                                                    No products found for "<strong>{searchQuery}</strong>"
                                                </li>
                                            )}

                                            {!searchLoading && suggestions.map((product) => (
                                                <li key={product.product_id}>
                                                    <Link
                                                        className="search-result-item"
                                                        to={`/product-details/${product.product_slug}?eid=${product.event_id}&marketplace=Vineta`}
                                                        onClick={handleSuggestionClick}
                                                    >
                                                        <div className="img-box" style={{ flexShrink: 0 }}>
                                                            <img
                                                                src={product.product_image || "/assets/images/cls-categories/book/fiction.png"}
                                                                alt={product.product_name}
                                                                style={{ width: 44, height: 56, objectFit: "cover", borderRadius: 4 }}
                                                            />
                                                        </div>
                                                        <div className="box-content">
                                                            <p className="title link" style={{ fontSize: 13, marginBottom: 4 }}>
                                                                {product.product_name}
                                                            </p>
                                                            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                                                {product.sub_category_name && (
                                                                    <span style={{
                                                                        fontSize: 10, background: "#e8f0fe", color: "#1a56db",
                                                                        padding: "1px 6px", borderRadius: 4, fontWeight: 600
                                                                    }}>
                                                                        {product.sub_category_name}
                                                                    </span>
                                                                )}
                                                                {product.language_name && (
                                                                    <span style={{
                                                                        fontSize: 10, background: "#fef3c7", color: "#92400e",
                                                                        padding: "1px 6px", borderRadius: 4, fontWeight: 600
                                                                    }}>
                                                                        {product.language_name}
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </li>
                                            ))}
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

            {/* Header Bottom — untouched */}
            <div className="header-bottom d-none d-xl-block line-bt">
                <div className="container">
                    <div className="wrapper-header-bottom style-2">
                        <div className="inner-left">
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