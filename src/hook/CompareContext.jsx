import { createContext, useState } from 'react';

export const CompareContext = createContext();

export const CompareProvider = ({ children }) => {
    const [compareItems, setCompareItems] = useState([]);

    const addToCompare = (id, product) => {
        setCompareItems(prev => {
            if (prev.some(item => item.id === id)) {
                return prev.filter(item => item.id !== id);
            }
            return [...prev, { id, ...product }];
        });
    };

    const removeFromCompare = (id) => {
        setCompareItems(prev => prev.filter(item => item.id !== id));
    };

    const clearCompare = () => setCompareItems([]);

    return (
        <CompareContext.Provider value={{ 
            compareItems, 
            addToCompare, 
            removeFromCompare, 
            clearCompare 
        }}>
            {children}
        </CompareContext.Provider>
    );
};