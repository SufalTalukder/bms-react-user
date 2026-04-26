import { createContext, useContext, useEffect, useState } from "react";
import { fetchAllCategories } from "../api/category-api";
import PropTypes from "prop-types";

const DEFAULT_IMAGE = "/assets/images/cls-categories/book/fiction.png";

const CategoryContext = createContext(null);

export function CategoryProvider({ children }) {
    const [categoriesList, setCategoriesList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [trigger, setTrigger] = useState(0);

    useEffect(() => {
        const load = async () => {
            setLoading(true);
            setError(null);
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
    }, [trigger]);

    const refetch = () => setTrigger(t => t + 1);

    return (
        <CategoryContext.Provider
            value={{ categoriesList, loading, error, refetch, defaultCategoryImage: DEFAULT_IMAGE }}
        >
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