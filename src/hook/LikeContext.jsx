import { createContext } from "react";
import { useLike } from "./useLike";

export const LikeContext = createContext({
    likedItems: [],
    toggleLike: () => {},
    isLiked: () => false,
});

export const LikeContextProvider = (props) => {
    return (
        <LikeContext.Provider value={useLike()}>
            {props.children}
        </LikeContext.Provider>
    );
};