import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IconBoxSwiper from "../../reusable-components/IconBoxSwiper";
import PageLayout from "../../PageLayout";
import { useCategories } from "../../context/CategoryContext";
import { useSubCategories } from "../../context/SubCategoryContext";
import { useLanguages } from "../../context/LanguageContext";

const ITEMS_PER_PAGE = 6;

function CollectionSkeletonCard() {
    return (
        <div className="wg-cls style-abs2 style-lg">
            {/* Image block */}
            <div
                style={{
                    width: "100%",
                    aspectRatio: "5/6",
                    borderRadius: "20px",
                    background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
                    backgroundSize: "200% 100%",
                    animation: "pd-shimmer 1.4s infinite",
                }}
            />
            {/* Name line below image */}
            <div className="cls-content text-center" style={{ marginTop: "14px" }}>
                <div
                    style={{
                        height: "16px",
                        width: "55%",
                        margin: "0 auto",
                        borderRadius: "6px",
                        background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
                        backgroundSize: "200% 100%",
                        animation: "pd-shimmer 1.4s infinite 0.1s",
                    }}
                />
            </div>
        </div>
    );
}

function CollectionSkeletonGrid() {
    return (
        <div className="flat-wrap-cls tf-grid-layout tf-col-2 xl-col-3">
            {Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
                <CollectionSkeletonCard key={i} />
            ))}
        </div>
    );
}

function HeadingSkeleton() {
    return (
        <div
            style={{
                height: "20px",
                width: "120px",
                marginBottom: "20px",
                borderRadius: "6px",
                background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
                backgroundSize: "200% 100%",
                animation: "pd-shimmer 1.4s infinite",
            }}
        />
    );
}

export default function ProductDefaultView() {

    const { categoriesList, defaultCategoryImage, loading: catLoading } = useCategories();
    const { subCategoriesList, defaultSubCategoryImage, loading: subCatLoading } = useSubCategories();
    const { languagesList, defaultLanguageImage, loading: langLoading } = useLanguages();

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
                        <Link to="#" className="pagination-item" onClick={(e) => { e.preventDefault(); setPage(p => p - 1); }}>
                            <i className="icon-arr-left" />
                        </Link>
                    </li>
                )}
                {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
                    <li key={p} className={page === p ? "active" : ""}>
                        {page === p ? (
                            <div className="pagination-item">{p}</div>
                        ) : (
                            <Link to="#" className="pagination-item" onClick={(e) => { e.preventDefault(); setPage(p); }}>
                                {p}
                            </Link>
                        )}
                    </li>
                ))}
                {page < pages && (
                    <li>
                        <Link to="#" className="pagination-item" onClick={(e) => { e.preventDefault(); setPage(p => p + 1); }}>
                            <i className="icon-arr-right2" />
                        </Link>
                    </li>
                )}
            </ul>
        );
    };

    const renderCollectionGrid = (list, defaultImage, page, setPage, basePath, idKey, nameKey, slugKey, eventKey, imageKey) => (
        <div className="flat-wrap-cls tf-grid-layout tf-col-2 xl-col-3">
            {paginate(list, page).map((item) => (
                <div key={item[idKey]} className="wg-cls style-abs2 style-lg hover-img">
                    <Link
                        to={`${basePath}/${item[slugKey]}?eid=${item[eventKey]}&marketplace=Vineta`}
                        className="image-wrap relative"
                        style={{ backgroundColor: "#f5f5f5", borderRadius: "20px" }}
                    >
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
                        <span className="tf-overlay" />
                    </Link>
                    <div className="cls-content text-center">
                        <Link
                            to={`${basePath}/${item[slugKey]}?eid=${item[eventKey]}&marketplace=Vineta`}
                            className="text-type text-xl-2 fw-medium link"
                        >
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
            <style>{`
                @keyframes pd-shimmer {
                    0%   { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
            `}</style>

            <section className="tf-page-title">
                <div className="container">
                    <div className="box-title text-center">
                        <h4 className="title">All Collections</h4>
                        <div className="breadcrumb-list">
                            <Link className="breadcrumb-item" to="/">Home</Link>
                            <div className="breadcrumb-item dot"><span /></div>
                            <div className="breadcrumb-item current">Collections</div>
                        </div>
                        <p className="desc text-md text-main">
                            Discover our carefully curated collections, where timeless elegance meets modern style.
                        </p>
                    </div>
                </div>
            </section>

            {/* Topics / Categories */}
            <section className="flat-spacing-24">
                <div className="container">
                    {catLoading ? (
                        <>
                            <HeadingSkeleton />
                            <CollectionSkeletonGrid />
                        </>
                    ) : categoriesList?.length > 0 && (
                        <>
                            <h5 className="mb-20">TOPICS</h5>
                            {renderCollectionGrid(
                                categoriesList, defaultCategoryImage,
                                categoryPage, setCategoryPage,
                                "/product-default/topics",
                                "category_id", "category_name", "category_slug", "event_id", "category_image"
                            )}
                        </>
                    )}
                </div>
            </section>

            {/* Authors / Sub-Categories */}
            <section className="flat-spacing-24">
                <div className="container">
                    {subCatLoading ? (
                        <>
                            <HeadingSkeleton />
                            <CollectionSkeletonGrid />
                        </>
                    ) : subCategoriesList?.length > 0 && (
                        <>
                            <h5 className="mb-20">AUTHORS</h5>
                            {renderCollectionGrid(
                                subCategoriesList, defaultSubCategoryImage,
                                subCategoryPage, setSubCategoryPage,
                                "/product-default/authors",
                                "sub_category_id", "sub_category_name", "sub_category_slug", "event_id", "sub_category_image"
                            )}
                        </>
                    )}
                </div>
            </section>

            {/* Languages */}
            <section className="flat-spacing-24">
                <div className="container">
                    {langLoading ? (
                        <>
                            <HeadingSkeleton />
                            <CollectionSkeletonGrid />
                        </>
                    ) : languagesList?.length > 0 && (
                        <>
                            <h5 className="mb-20">LANGUAGES</h5>
                            {renderCollectionGrid(
                                languagesList, defaultLanguageImage,
                                languagePage, setLanguagePage,
                                "/product-default/languages",
                                "language_id", "language_name", "language_slug", "event_id", "language_image"
                            )}
                        </>
                    )}
                </div>
            </section>

            <IconBoxSwiper />
        </PageLayout>
    );
}