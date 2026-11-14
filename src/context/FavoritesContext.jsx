import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext"; 

const FavoritesContext = createContext();
export function FavoritesProvider({ children }) {
    const { user } = useAuth();
    const [favorites, setFavorites] = useState([]);
    const storageKey = user ? `favorites_${user.uid}` : null;

    useEffect(() => {
        if (!storageKey) {
            setFavorites([]);
            return;
        }
        const savedFavorites = localStorage.getItem(storageKey);

        if (savedFavorites) {
            setFavorites(JSON.parse(savedFavorites));
        } else {
            setFavorites([]);
        }
    }, [storageKey]);

    useEffect(() => {
        if (!storageKey) return;
        localStorage.setItem(storageKey, JSON.stringify(favorites));
    }, [favorites, storageKey]);


    const toggleFavorite = (teacher) => {
        setFavorites((prevFavorites) => {
            const isFavorite = prevFavorites.some((item) => item.id === teacher.id);
            if (isFavorite) {
                return prevFavorites.filter((item) => item.id !== teacher.id);
            }
            return [...prevFavorites, teacher];
        });
    };

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};
export function useFavorites() {
    return useContext(FavoritesContext);
};