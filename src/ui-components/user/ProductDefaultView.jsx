import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IconBoxSwiper from "../../reusable-components/IconBoxSwiper";
import PageLayout from "../../PageLayout";
import { useCategories } from "../../context/CategoryContext";
import { useSubCategories } from "../../context/SubCategoryContext";
import { useLanguages } from "../../context/LanguageContext";

const ITEMS_PER_PAGE = 6;

export default function ProductDefaultView() {

    const { categoriesList, defaultCategoryImage } = useCategories();
    const { subCategoriesList, defaultSubCategoryImage } = useSubCategories();
    const { languagesList, defaultLanguageImage } = useLanguages();

    const [categoryPage, setCategoryPage] = useState(1);
    const [subCategoryPage, setSubCategoryPage] = useState(1);
    const [languagePage, setLanguagePage] = useState(1);

    useEffect(() => {
        document.title = "All Collections - BMS Book Store";
    }, []);

    const paginate = (list, page) => {
        const start = (page - 1) * ITEMS_PER_PAGE;
        return list.slice(start, start + ITEMS_PER_PAGE);
    };

    const totalPages = (list) => Math.ceil(list.length / ITEMS_PER_PAGE);

    const renderPagination = (list, page, setPage) => {
        const pages = totalPages(list);
        if (pages <= 1) return null;
        return (
            <ul className="wg-pagination">
                {page > 1 && (
                    <li>
                        <Link
                            to="#"
                            className="pagination-item"
                            onClick={(e) => { e.preventDefault(); setPage((prev) => prev - 1); }}
                        >
                            <i className="icon-arr-left"></i>
                        </Link>
                    </li>
                )}
                {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
                    <li key={p} className={page === p ? "active" : ""}>
                        {page === p ? (
                            <div className="pagination-item">{p}</div>
                        ) : (
                            <Link
                                to="#"
                                className="pagination-item"
                                onClick={(e) => { e.preventDefault(); setPage(p); }}
                            >
                                {p}
                            </Link>
                        )}
                    </li>
                ))}
                {page < pages && (
                    <li>
                        <Link
                            to="#"
                            className="pagination-item"
                            onClick={(e) => { e.preventDefault(); setPage((prev) => prev + 1); }}
                        >
                            <i className="icon-arr-right2"></i>
                        </Link>
                    </li>
                )}
            </ul>
        );
    };

    const renderCollectionGrid = (list, defaultImage, page, setPage, basePath, idKey, nameKey, imageKey) => (
        <div className="flat-wrap-cls tf-grid-layout tf-col-2 xl-col-3">
            {paginate(list, page).map((item) => (
                <div key={item[idKey]} className="wg-cls style-abs2 style-lg hover-img">
                    <Link to={`${basePath}/${item[idKey]}`} className="image-wrap relative">
                        <div className="image img-style">
                            <img
                                src={item[imageKey] ?? defaultImage}
                                data-src={item[imageKey] ?? defaultImage}
                                alt={item[nameKey]}
                                className="lazyload"
                            />
                        </div>
                        <div className="cls-btn text-center">
                            <button className="tf-btn btn-white hover-dark">View all</button>
                        </div>
                        <span className="tf-overlay"></span>
                    </Link>
                    <div className="cls-content text-center">
                        <Link to={`${basePath}/${item[idKey]}`} className="text-type text-xl-2 fw-medium link">
                            {item[nameKey]}
                        </Link>
                    </div>
                </div>
            ))}
            {renderPagination(list, page, setPage)}
        </div>
    );

    return (
        <PageLayout>
            <section className="tf-page-title">
                <div className="container">
                    <div className="box-title text-center">
                        <h4 className="title">All Collections</h4>
                        <div className="breadcrumb-list">
                            <Link className="breadcrumb-item" to="/">Home</Link>
                            <div className="breadcrumb-item dot"><span></span></div>
                            <div className="breadcrumb-item current">Collections</div>
                        </div>
                        <p className="desc text-md text-main">
                            Discover our carefully curated collections, where timeless elegance meets modern style.
                        </p>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            {categoriesList?.length > 0 && (
                <section className="flat-spacing-24">
                    <div className="container">
                        <h5 className="mb-20">TOPICS</h5>
                        {renderCollectionGrid(
                            categoriesList,
                            defaultCategoryImage,
                            categoryPage,
                            setCategoryPage,
                            "/product-default/category",
                            "category_id",
                            "category_name",
                            "category_image"
                        )}
                    </div>
                </section>
            )}

            {/* Sub-Categories Section */}
            {subCategoriesList?.length > 0 && (
                <section className="flat-spacing-24">
                    <div className="container">
                        <h5 className="mb-20">AUTHORS</h5>
                        {renderCollectionGrid(
                            subCategoriesList,
                            defaultSubCategoryImage,
                            subCategoryPage,
                            setSubCategoryPage,
                            "/product-default/sub-category",
                            "sub_category_id",
                            "sub_category_name",
                            "sub_category_image"
                        )}
                    </div>
                </section>
            )}

            {/* Languages Section */}
            {languagesList?.length > 0 && (
                <section className="flat-spacing-24">
                    <div className="container">
                        <h5 className="mb-20">LANGUAGES</h5>
                        {renderCollectionGrid(
                            languagesList,
                            defaultLanguageImage,
                            languagePage,
                            setLanguagePage,
                            "/product-default/language",
                            "language_id",
                            "language_name",
                            "language_image"
                        )}
                    </div>
                </section>
            )}

            <IconBoxSwiper />
        </PageLayout>
    );
}