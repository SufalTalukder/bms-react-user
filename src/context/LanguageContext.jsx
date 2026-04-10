import { createContext, useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { fetchAllLanguages } from "../api/language-api";

const DEFAULT_IMAGE = "/assets/images/cls-categories/book/fiction.png";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {

    const [languagesList, setLanguagesList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const hasFetched = useRef(false);

    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;

        const load = async () => {
            setLoading(true);
            try {
                const res = await fetchAllLanguages();
                setLanguagesList(res.data?.data || []);
            } catch (err) {
                console.error("Error loading languages:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        load();
    }, []);

    return (
        <LanguageContext.Provider value={{ languagesList, loading, error, defaultLanguageImage: DEFAULT_IMAGE }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguages() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLanguages must be used inside <LanguageProvider>");
    return ctx;
}

LanguageProvider.propTypes = {
    children: PropTypes.node.isRequired,
};