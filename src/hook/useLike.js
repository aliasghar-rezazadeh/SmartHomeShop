import { useState } from "react";

export const useLike = () => {
    const [likedItems, setLikedItems] = useState([]);

    const toggleLike = (itemId) => {
        const isLiked = likedItems.some(item => item === itemId);
        if (isLiked) {
            setLikedItems(likedItems.filter(item => item !== itemId));
        } else {
            setLikedItems([...likedItems, itemId]);
        }
    };

    const isLiked = (itemId) => likedItems.includes(itemId);

    return { likedItems, toggleLike, isLiked };
};