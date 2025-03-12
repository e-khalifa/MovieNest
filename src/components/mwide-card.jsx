import { useSelector } from "react-redux";
import FavButton from "./fav-button";
import { Link } from "react-router-dom";


const MovieWideCard = ({ id }) => {
    const movies = useSelector((state) => state.movies.movies);
    const movie = movies.find(m => m.id == id);
    const imgSrc = movie?.id === 1 ? movie?.poster : "https://image.tmdb.org/t/p/w500/" + movie?.backdrop_path

    return (
        <Link to={`/Movies/${movie.id}`}>

            <div style={{
                width: '95%',
                color: "#fff",
                fontFamily: "Arial, sans-serif",
                backgroundColor: "#1c1c1c",
                borderRadius: "15px",
                boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)"
            }}>
                <div style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "flex-start",
                    position: "relative"
                }}>
                    <img
                        src={imgSrc}
                        style={{
                            width: "60%",
                            borderRadius: "15px",
                            objectFit: "cover",
                            maxHeight: "500px"
                        }}
                    />
                    <FavButton movie={movie}></FavButton>
                    <div style={{
                        flex: 1, padding: "10px 20px 0px 0px",
                    }}>
                        <h2 style={{
                            fontSize: "28px",
                            marginBottom: "15px",
                            color: "#4caf50"
                        }}>{movie?.title}</h2>
                        <p style={{
                            fontSize: "16px",
                            lineHeight: "1.6",
                            marginBottom: "20px"
                        }}>{movie?.overview}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default MovieWideCard;
