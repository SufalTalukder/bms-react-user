import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { fetchProductReviews, manageReviewProduct } from "../api/product-api";

function StarPicker({ value, onChange }) {
    const [hovered, setHovered] = useState(0);
    const active = hovered || value;

    return (
        <div style={{ display: "flex", gap: 6, cursor: "pointer", userSelect: "none" }}>
            {[1, 2, 3, 4, 5].map(star => (
                <svg
                    key={star}
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill={active >= star ? "#f5a623" : "none"}
                    stroke={active >= star ? "#f5a623" : "#ccc"}
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    onMouseEnter={() => setHovered(star)}
                    onMouseLeave={() => setHovered(0)}
                    onClick={() => onChange(star)}
                    style={{ transition: "fill .12s, stroke .12s", flexShrink: 0 }}
                >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
            ))}

            {/* Live label next to stars */}
            {value > 0 && (
                <span style={{
                    alignSelf: "center",
                    marginLeft: 4,
                    fontSize: 13,
                    color: "#f5a623",
                    fontWeight: 600,
                }}>
                    {["", "Poor", "Fair", "Good", "Very Good", "Excellent"][value]}
                </span>
            )}
        </div>
    );
}

function ReviewCard({ review, currentUserId, onEdit, onDelete }) {
    const isOwner = currentUserId && review.user_id === currentUserId;
    const rating = Number(review.user_rating) || 0;

    return (
        <div style={{
            padding: "16px 0",
            borderBottom: "1px solid #f0f0f0",
            display: "flex",
            flexDirection: "column",
            gap: 6,
        }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
                <div>
                    <div style={{ display: "flex", gap: 3, marginBottom: 4 }}>
                        {[1, 2, 3, 4, 5].map(s => (
                            <i key={s} className={`icon ${s <= rating ? "icon-star" : "icon-star-o"}`}
                                style={{ fontSize: 14, color: s <= rating ? "#f5a623" : "#ccc" }} />
                        ))}
                    </div>
                    <span style={{ fontWeight: 600, fontSize: 14, color: "#222" }}>
                        {review.user_name || "Anonymous"}
                    </span>
                    {review.created_at && (
                        <span style={{ fontSize: 12, color: "#999", marginLeft: 8 }}>
                            {new Date(review.created_at).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                        </span>
                    )}
                </div>
                {isOwner && (
                    <div style={{ display: "flex", gap: 8 }}>
                        <button onClick={() => onEdit(review)}
                            style={{ fontSize: 12, color: "#555", background: "none", border: "1px solid #ddd", borderRadius: 4, padding: "3px 10px", cursor: "pointer" }}>
                            Edit
                        </button>
                        <button onClick={() => onDelete(review)}
                            style={{ fontSize: 12, color: "#c0392b", background: "none", border: "1px solid #e5a0a0", borderRadius: 4, padding: "3px 10px", cursor: "pointer" }}>
                            Delete
                        </button>
                    </div>
                )}
            </div>
            {review.user_comment && (
                <p style={{ fontSize: 14, color: "#444", margin: 0, lineHeight: 1.6 }}>
                    {review.user_comment}
                </p>
            )}
        </div>
    );
}

function ReviewSkeleton() {
    const bar = (w, h, mb = 0) => (
        <div style={{
            width: w, height: h, borderRadius: 4, marginBottom: mb,
            background: "linear-gradient(90deg,#f0f0f0 25%,#e8e8e8 50%,#f0f0f0 75%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s infinite",
        }} />
    );
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[1, 2, 3].map(i => (
                <div key={i} style={{ paddingBottom: 16, borderBottom: "1px solid #f0f0f0" }}>
                    {bar(90, 14, 8)}
                    {bar(140, 16, 8)}
                    {bar("100%", 13, 4)}
                    {bar("100%", 13)}
                </div>
            ))}
        </div>
    );
}

function RatingSummary({ reviews }) {
    if (!reviews.length) return null;
    const avg = reviews.reduce((s, r) => s + Number(r.user_rating), 0) / reviews.length;
    const counts = [5, 4, 3, 2, 1].map(s => ({
        star: s,
        count: reviews.filter(r => Number(r.user_rating) === s).length,
    }));

    return (
        <div style={{
            display: "flex", gap: 32, alignItems: "center",
            padding: "20px 0", borderBottom: "1px solid #f0f0f0", marginBottom: 20, flexWrap: "wrap",
        }}>
            {/* Big avg */}
            <div style={{ textAlign: "center", minWidth: 80 }}>
                <div style={{ fontSize: 48, fontWeight: 700, color: "#222", lineHeight: 1 }}>
                    {avg.toFixed(1)}
                </div>
                <div style={{ display: "flex", justifyContent: "center", gap: 2, margin: "6px 0 4px" }}>
                    {[1, 2, 3, 4, 5].map(s => (
                        <i key={s} className={`icon ${s <= Math.round(avg) ? "icon-star" : "icon-star-o"}`}
                            style={{ fontSize: 13, color: s <= Math.round(avg) ? "#f5a623" : "#ccc" }} />
                    ))}
                </div>
                <div style={{ fontSize: 12, color: "#999" }}>{reviews.length} review{reviews.length !== 1 ? "s" : ""}</div>
            </div>

            {/* Breakdown bars */}
            <div style={{ flex: 1, minWidth: 180, display: "flex", flexDirection: "column", gap: 6 }}>
                {counts.map(({ star, count }) => (
                    <div key={star} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ fontSize: 12, color: "#555", width: 10 }}>{star}</span>
                        <i className="icon icon-star" style={{ fontSize: 11, color: "#f5a623" }} />
                        <div style={{ flex: 1, height: 8, borderRadius: 4, background: "#f0f0f0", overflow: "hidden" }}>
                            <div style={{
                                height: "100%", borderRadius: 4, background: "#f5a623",
                                width: reviews.length ? `${(count / reviews.length) * 100}%` : "0%",
                                transition: "width .4s",
                            }} />
                        </div>
                        <span style={{ fontSize: 12, color: "#999", width: 14, textAlign: "right" }}>{count}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function ReviewSection({ productId, userId }) {

    const [reviews, setReviews] = useState([]);
    const [reviewsLoading, setReviewsLoading] = useState(true);
    const [reviewsError, setReviewsError] = useState(false);

    // Form state
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [editingReview, setEditingReview] = useState(null);

    const myReview = reviews.find(r => r.user_id === userId) ?? null;
    const userData = sessionStorage.getItem("user");
    const userName = userData ? JSON.parse(userData)?.full_name ?? "You" : "You";

    const loadReviews = useCallback(async () => {
        if (!productId || !userId) return;
        setReviewsLoading(true);
        setReviewsError(false);
        try {
            const res = await fetchProductReviews(productId);
            setReviews(res?.data?.data ?? []);
        } catch (err) {
            if (err?.response?.status === 404) setReviews([]);
            else setReviewsError(true);
        } finally {
            setReviewsLoading(false);
        }
    }, [productId, userId]);

    useEffect(() => {
        loadReviews();
    }, [loadReviews]);

    const handleEdit = (review) => {
        setEditingReview(review);
        setRating(Number(review.user_rating));
        setComment(review.user_comment ?? "");
        document.getElementById("review-form-anchor")?.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    const handleCancelEdit = () => {
        setEditingReview(null);
        setRating(0);
        setComment("");
    };

    const handleDelete = async (review) => {
        if (!window.confirm("Delete your review?")) return;
        try {
            await manageReviewProduct({
                product_id: productId,
                user_id: userId,
                user_rating: review.user_rating,
                action: "delete",
            });
            toast.success("Review deleted.");
            loadReviews();
        } catch (err) {
            toast.error(err?.response?.data?.message || "Failed to delete review.");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!userId) {
            toast.error("Please log in to submit a review.");
            return;
        }
        if (rating === 0) {
            toast.error("Please select a star rating.");
            return;
        }

        const action = editingReview ? "update" : myReview ? "update" : "add";

        setSubmitting(true);
        try {
            await manageReviewProduct({
                product_id: productId,
                user_id: userId,
                user_rating: rating,
                user_comment: comment.trim() || null,
                action,
            });
            toast.success(action === "add" ? "Review submitted." : "Review updated.");
            setRating(0);
            setComment("");
            setEditingReview(null);
            loadReviews();
        } catch (err) {
            toast.error(err?.response?.data?.message || "Failed to submit review.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="accordion-body wd-customer-review">
            {/* ── Summary ── */}
            {!reviewsLoading && !reviewsError && <RatingSummary reviews={reviews} />}

            {/* ── Review List ── */}
            <div className="review-heading" style={{ marginBottom: 24 }}>
                <h6 className="title" style={{ marginBottom: 16 }}>Customer Reviews</h6>

                {reviewsLoading && <ReviewSkeleton />}

                {reviewsError && !reviewsLoading && (
                    <div style={{ textAlign: "center", padding: "24px 0", color: "#c0392b" }}>
                        <div style={{ fontSize: "48px", marginBottom: "12px" }}>⚠️</div>
                        <p style={{ marginBottom: 10 }}>You must be logged in to see all reviews.</p>
                        <button onClick={loadReviews} style={{
                            padding: "6px 20px", borderRadius: 6,
                            border: "1px solid #c0392b", background: "transparent",
                            color: "#c0392b", cursor: "pointer", fontWeight: 600,
                        }}>Try Again</button>
                    </div>
                )}

                {!reviewsLoading && !reviewsError && reviews.length === 0 && (
                    <p className="text-md text-main-4" style={{ marginBottom: 0 }}>
                        No reviews yet. Be the first to review this product!
                    </p>
                )}

                {!reviewsLoading && !reviewsError && reviews.length > 0 && (
                    <div>
                        {reviews.map(review => (
                            <ReviewCard
                                key={review.review_id ?? review.event_id}
                                review={review}
                                currentUserId={userId}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* ── Write / Edit Form ── */}
            <div className="review-section" id="review-form-anchor">
                <form onSubmit={handleSubmit} className="form-review">
                    <h6 className="title" style={{ marginBottom: 4 }}>
                        {editingReview ? "Edit Your Review" : myReview && !editingReview ? "Update Your Review" : "Write a Review"}
                    </h6>
                    <p className="note text-md text-main-4" style={{ marginBottom: 16 }}>
                        Your email address will not be published. Required fields are marked *
                    </p>

                    {/* Star picker */}
                    <div className="box-rating" style={{ marginBottom: 20 }}>
                        <span className="text-md" style={{ display: "block" }}>Your rating *</span>
                        <StarPicker value={rating} onChange={setRating} />
                    </div>

                    {/* Comment */}
                    <textarea
                        name="note"
                        id="note"
                        placeholder="Your review (optional)"
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        maxLength={1000}
                        rows={4}
                        style={{ resize: "vertical" }}
                    />
                    <div style={{ fontSize: 12, color: "#aaa", textAlign: "right", marginTop: -8, marginBottom: 16 }}>
                        {comment.length}/1000
                    </div>

                    {/* Logged-out notice */}
                    {!userId && (
                        <p style={{ color: "#c0392b", fontSize: 13, marginBottom: 12 }}>
                            You must be logged in to submit a review.
                        </p>
                    )}

                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                        <button
                            type="submit"
                            className="tf-btn animate-btn"
                            disabled={submitting || !userId}
                            style={{ opacity: (!userId || submitting) ? 0.6 : 1 }}
                        >
                            {submitting ? (
                                <>
                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                                </>
                            ) : editingReview ? "Update" : myReview ? "Update" : "Submit"}
                        </button>

                        {editingReview && (
                            <button
                                type="button"
                                onClick={handleCancelEdit}
                                className="tf-btn"
                                style={{ background: "transparent", border: "1px solid #ddd", color: "#555" }}
                            >
                                Cancel
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}