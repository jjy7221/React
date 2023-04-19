import React, { useEffect, useState } from "react";
import { dummy } from "../../Data/movieData";
import "../../css/movie.css";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

function Movie_item({movie}){
    const navigate = useNavigate();

    return(
        <div onClick={()=>
            {   
                navigate(`/movieDetail/${movie.title}`, {state:movie});
            }
        } className="movie-item">
            <img src={IMG_BASE_URL + movie.poster_path} alt="영화포스터"/>
            <div className="movie-info">
                <h4>{movie.title}</h4>
                <span>{movie.vote_average}</span>
            </div>
        </div>
    )
};

export default function Movie_list(){

    const [movieList, setMovieList] = useState(dummy.results);
    const [userInput, setUserInput] = useState('');

    return (
        <div>
            <Header setUserSearch ={setUserInput}></Header>  
            <div className="movie-container">
                {                    
                    movieList.map((item) =>{
                        if(item.title.includes(userInput)){
                            return(
                                <Movie_item
                                    movie={item}
                                />
                            )
                        }
                    })
                }
            </div>
        </div>
    )
};