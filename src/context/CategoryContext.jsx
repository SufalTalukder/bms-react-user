import { createContext, useContext, useEffect, useRef, useState } from "react";
import { fetchAllCategories } from "../api/category-api";
import PropTypes from "prop-types";

const DEFAULT_IMAGE = "/assets/images/cls-categories/book/fiction.png";

const CategoryContext = createContext(null);

export function CategoryProvider({ children }) {

    const [categoriesList, setCategoriesList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const hasFetched = useRef(false);

    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;

        const load = async () => {
            setLoading(true);
            try {
                const res = await fetchAllCategories();
                setCategoriesList(res.data?.data || []);
            } catch (err) {
                console.error("Error loading categories:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        load();
    }, []);

    return (
        <CategoryContext.Provider value={{ categoriesList, loading, error, defaultCategoryImage: DEFAULT_IMAGE }}>
            {children}
        </CategoryContext.Provider>
    );
}

export function useCategories() {
    const ctx = useContext(CategoryContext);
    if (!ctx) throw new Error("useCategories must be used inside <CategoryProvider>");
    return ctx;
}

CategoryProvider.propTypes = {
    children: PropTypes.node.isRequired,
};