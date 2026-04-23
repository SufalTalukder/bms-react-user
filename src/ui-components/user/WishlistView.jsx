import { Link } from "react-router-dom";
import PageLayout from "../../PageLayout";
import { useCallback, useEffect, useRef, useState } from "react";
import { fetchWishlistProductsByUser, manageWishlist } from "../../api/product-api";
import toast from "react-hot-toast";

const DEFAULT_IMG = "/assets/images/products/book/book9.jpg";
const SKELETON_COUNT = 8;
const ITEMS_PER_PAGE = 8;

function WishlistSkeletonCard() {
    return (
        <div className="card-product style-wishlist style-3 card-product-size" style={{ position: "relative" }}>
            <div style={{
                width: "20px", height: "20px", borderRadius: "50%",
                position: "absolute", top: "10px", right: "10px", zIndex: 1,
                background: "linear-gradient(90deg,#f0f0f0 25%,#e0e0e0 50%,#f0f0f0 75%)",
                backgroundSize: "200% 100%", animation: "wl-shimmer 1.4s infinite",
            }} />
            <div className="card-product-wrapper">
                <div style={{
                    width: "100%", aspectRatio: "3/4", borderRadius: "8px",
                    background: "linear-gradient(90deg,#f0f0f0 25%,#e0e0e0 50%,#f0f0f0 75%)",
                    backgroundSize: "200% 100%", animation: "wl-shimmer 1.4s infinite",
                }} />
            </div>
            <div className="card-product-info" style={{ paddingTop: "12px" }}>
                <div style={{
                    height: "14px", width: "75%", borderRadius: "5px", marginBottom: "10px",
                    background: "linear-gradient(90deg,#f0f0f0 25%,#e0e0e0 50%,#f0f0f0 75%)",
                    backgroundSize: "200% 100%", animation: "wl-shimmer 1.4s infinite 0.1s",
                }} />
                <div style={{
                    height: "12px", width: "40%", borderRadius: "5px",
                    background: "linear-gradient(90deg,#f0f0f0 25%,#e0e0e0 50%,#f0f0f0 75%)",
                    backgroundSize: "200% 100%", animation: "wl-shimmer 1.4s infinite 0.15s",
                }} />
            </div>
        </div>
    );
}

function EmptyState() {
    return (
        <div style={{ textAlign: "center", padding: "60px 20px", color: "#888", gridColumn: "1 / -1" }}>
            <div style={{ fontSize: "48px", marginBottom: "12px" }}>📚</div>
            <p style={{ fontSize: "16px", fontWeight: 500 }}>Your wishlist is empty.</p>
            <p style={{ fontSize: "13px", marginTop: "6px" }}>Browse our store and add products you love!</p>
            <Link
                to="/product-default?marketplace=Vineta"
                className="tf-btn btn-primary animate-btn"
                style={{ display: "inline-block", marginTop: "16px" }}
            >
                Browse Products
            </Link>
        </div>
    );
}

function ErrorState({ onRetry }) {
    return (
        <div style={{ textAlign: "center", padding: "60px 20px", color: "#c0392b", gridColumn: "1 / -1" }}>
            <div style={{ fontSize: "48px", marginBottom: "12px" }}>⚠️</div>
            <p style={{ fontSize: "16px", fontWeight: 500 }}>Failed to load your wishlist.</p>
            <button
                onClick={onRetry}
                style={{
                    marginTop: "14px", padding: "8px 24px", borderRadius: "6px",
                    border: "1px solid #c0392b", background: "transparent",
                    color: "#c0392b", cursor: "pointer", fontWeight: 600,
                }}
            >
                Try Again
            </button>
        </div>
    );
}

function WishlistCard({ item, onRemove, removing }) {

    const name = item.product_name ?? "Untitled";
    const slug = item.product_slug ?? "#";
    const price = item.product_price != null ? parseFloat(item.product_price) : null;
    const img = item.product_image ?? DEFAULT_IMG;
    const eventId = item.p_event_id ?? "";

    return (
        <div className="card-product style-wishlist style-3 card-product-size">
            <i
                className={`icon ${removing ? "icon-loading" : "icon-close"} remove`}
                style={{ cursor: removing ? "not-allowed" : "pointer", opacity: removing ? 0.5 : 1 }}
                onClick={() => !removing && onRemove()}
                title="Remove from wishlist"
            />
            <div className="card-product-wrapper">
                <Link to={`/product-details/${slug}?eid=${eventId}&marketplace=Vineta`} className="product-img">
                    <img
                        className="img-product lazyload"
                        src={img}
                        alt={name}
                        onError={(e) => { e.currentTarget.src = DEFAULT_IMG; }}
                    />
                    <img
                        className="img-hover lazyload"
                        src={img}
                        alt={name}
                        onError={(e) => { e.currentTarget.src = DEFAULT_IMG; }}
                    />
                </Link>
                <ul className="list-product-btn">
                    <li>
                        <Link to="#shoppingCart" data-bs-toggle="offcanvas" className="box-icon hover-tooltip">
                            <span className="icon icon-cart2" />
                            <span className="tooltip">Add to Cart</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#quickView" data-bs-toggle="modal" className="box-icon hover-tooltip quickview">
                            <span className="icon icon-view" />
                            <span className="tooltip">Quick View</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#compare" data-bs-toggle="modal" className="box-icon hover-tooltip compare">
                            <span className="icon icon-compare" />
                            <span className="tooltip">Add to Compare</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="card-product-info">
                <Link
                    to={`/product-details/${slug}?eid=${eventId}&marketplace=Vineta`}
                    className="name-product link fw-medium text-md"
                >
                    {name}
                </Link>
                {price !== null && (
                    <p className="price-wrap fw-medium">
                        <span className="price-new">${price.toFixed(2)}</span>
                    </p>
                )}
            </div>
        </div>
    );
}

function Pagination({ currentPage, totalPages, onPageChange }) {
    if (totalPages <= 1) return null;
    return (
        <ul className="wg-pagination" style={{ gridColumn: "1 / -1" }}>
            {currentPage > 1 && (
                <li>
                    <Link to="#" className="pagination-item"
                        onClick={(e) => { e.preventDefault(); onPageChange(currentPage - 1); }}>
                        <i className="icon-arr-left" />
                    </Link>
                </li>
            )}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <li key={page} className={currentPage === page ? "active" : ""}>
                    {currentPage === page ? (
                        <div className="pagination-item">{page}</div>
                    ) : (
                        <Link to="#" className="pagination-item"
                            onClick={(e) => { e.preventDefault(); onPageChange(page); }}>
                            {page}
                        </Link>
                    )}
                </li>
            ))}
            {currentPage < totalPages && (
                <li>
                    <Link to="#" className="pagination-item"
                        onClick={(e) => { e.preventDefault(); onPageChange(currentPage + 1); }}>
                        <i className="icon-arr-right2" />
                    </Link>
                </li>
            )}
        </ul>
    );
}

export default function WishlistView() {

    const userData = sessionStorage.getItem("user") ?? null;
    const userId = userData ? JSON.parse(userData)?.user_id : null;

    const [wishlistItems, setWishlistItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [removingMap, setRemovingMap] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const hasFetched = useRef(false);

    const totalPages = Math.ceil(wishlistItems.length / ITEMS_PER_PAGE);
    const pagedItems = wishlistItems.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    useEffect(() => {
        document.title = "My Wishlist - BMS Book Store";
    }, []);

    const loadWishlistOfUser = useCallback(async () => {
        if (!userId) { setLoading(false); return; }
        setLoading(true);
        setError(null);
        try {
            const res = await fetchWishlistProductsByUser(userId);
            setWishlistItems(res?.data?.data ?? []);
            setCurrentPage(1);
        } catch (err) {
            if (err?.response?.status === 404) {
                setWishlistItems([]);
            } else {
                console.error("Error loading wishlist:", err);
                setError(true);
            }
        } finally {
            setLoading(false);
        }
    }, [userId]);

    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;
        loadWishlistOfUser();
    }, [loadWishlistOfUser]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    const removeWishlistItem = async (productId) => {
        if (removingMap[productId]) return;
        setRemovingMap(prev => ({ ...prev, [productId]: true }));
        try {
            await manageWishlist({ product_id: productId, user_id: userId });
            setWishlistItems(prev => {
                const updated = prev.filter(item => item.product_id !== productId);
                const newTotal = Math.ceil(updated.length / ITEMS_PER_PAGE);
                if (currentPage > newTotal) setCurrentPage(Math.max(1, newTotal));
                return updated;
            });
            toast.success("Removed from wishlist.");
        } catch (err) {
            console.error("Error removing item from wishlist:", err);
            toast.error("Failed to remove item. Please try again.");
        } finally {
            setRemovingMap(prev => ({ ...prev, [productId]: false }));
        }
    };

    const goToPreviousPage = () => {
        document.referrer ? window.history.back() : (window.location.href = "/");
    };

    return (
        <PageLayout>
            <style>{`
                @keyframes wl-shimmer {
                    0%   { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
            `}</style>

            {/* Title */}
            <section className="tf-page-title">
                <div className="container">
                    <div className="box-title text-center">
                        <h4 className="title">My Wishlist</h4>
                        <div className="breadcrumb-list">
                            <Link className="breadcrumb-item" onClick={goToPreviousPage}>Return Back</Link>
                            <div className="breadcrumb-item dot"><span /></div>
                            <div className="breadcrumb-item current">Wishlist</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Wishlist Grid */}
            <section className="flat-spacing-13">
                <div className="container">

                    {/* Item count */}
                    {loading && (
                        <div style={{
                            height: "14px", width: "200px", borderRadius: "5px", marginBottom: "20px",
                            background: "linear-gradient(90deg,#f0f0f0 25%,#e0e0e0 50%,#f0f0f0 75%)",
                            backgroundSize: "200% 100%", animation: "wl-shimmer 1.4s infinite",
                        }} />
                    )}
                    {!loading && !error && wishlistItems.length > 0 && (
                        <div id="product-count-grid" className="count-text">
                            Showing <strong>{(currentPage - 1) * ITEMS_PER_PAGE + 1}–{Math.min(currentPage * ITEMS_PER_PAGE, wishlistItems.length)}</strong> of <strong>{wishlistItems.length}</strong> item{wishlistItems.length !== 1 ? "s" : ""}
                        </div>
                    )}

                    <div className="wrapper-wishlist tf-grid-layout tf-col-2 lg-col-3 xl-col-4 pt-4">

                        {/* Skeleton */}
                        {loading && Array.from({ length: SKELETON_COUNT }).map((_, i) => (
                            <WishlistSkeletonCard key={`skeleton-${i}`} />
                        ))}

                        {/* Error */}
                        {!loading && error && <ErrorState onRetry={loadWishlistOfUser} />}

                        {/* Empty */}
                        {!loading && !error && wishlistItems.length === 0 && <EmptyState />}

                        {/* Cards */}
                        {!loading && !error && pagedItems.map(item => (
                            <WishlistCard
                                key={item.product_id ?? item.add_to_favourite_id}
                                item={item}
                                removing={!!removingMap[item.product_id]}
                                onRemove={() => removeWishlistItem(item.product_id)}
                            />
                        ))}

                        {/* Pagination */}
                        {!loading && !error && (
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                        )}

                    </div>
                </div>
            </section>
        </PageLayout>
    );
}