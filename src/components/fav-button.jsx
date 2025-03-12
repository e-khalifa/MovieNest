import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router';
import { useEffect } from "react";
import { addFav, removeFav } from "../store/slices/users";

const FavButton = ({ movie }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const currentUser = useSelector((state) => state.auth.currentUser);
    const favMovies = currentUser?.favorites || [];

    const isFav = favMovies.some(favMovie => favMovie?.id == movie?.id);

    const handleFavClick = (e) => {
        e.preventDefault();
        if (!currentUser) {
            navigate('/login')
        } else {
            if (isFav) {
                dispatch(removeFav(movie?.id));
            } else {
                dispatch(addFav(movie));
            }
        }
    };

    return (
        <>
            {!isFav ? (
                <HiOutlineHeart
                    style={{
                        fontSize: "30px",
                        color: "white",
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        cursor: "pointer",
                    }}
                    onClick={handleFavClick}
                />
            ) : (
                <HiHeart
                    style={{
                        fontSize: "30px",
                        color: "red",
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        cursor: "pointer",
                    }}
                    onClick={handleFavClick}
                />
            )}
        </>
    );
};

export default FavButton;
