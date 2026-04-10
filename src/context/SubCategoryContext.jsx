import { createContext, useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { fetchAllSubCategories } from "../api/sub-category-api";

const DEFAULT_IMAGE = "/assets/images/cls-categories/book/fiction.png";

const SubCategoryContext = createContext(null);

export function SubCategoryProvider({ children }) {

    const [subCategoriesList, setSubCategoriesList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const hasFetched = useRef(false);

    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;

        const load = async () => {
            setLoading(true);
            try {
                const res = await fetchAllSubCategories();
                setSubCategoriesList(res.data?.data || []);
            } catch (err) {
                console.error("Error loading subcategories:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        load();
    }, []);

    return (
        <SubCategoryContext.Provider value={{ subCategoriesList, loading, error, defaultSubCategoryImage: DEFAULT_IMAGE }}>
            {children}
        </SubCategoryContext.Provider>
    );
}

export function useSubCategories() {
    const ctx = useContext(SubCategoryContext);
    if (!ctx) throw new Error("useSubCategories must be used inside <SubCategoryProvider>");
    return ctx;
}

SubCategoryProvider.propTypes = {
    children: PropTypes.node.isRequired,
};