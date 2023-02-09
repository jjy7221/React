import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "../Header";
import { IMG_BASE_URL } from "./Movie";

export default function MovieDetail(){
    const {state} = useLocation();
    const navigation = useNavigate();

    const [needChange, setNeedChange] = useState(false);

    useEffect(()=>{
        console.log(needChange);
        
        if(needChange){
            console.log(needChange);
            alert(`올바르지 않은 요청`);
            navigation('/movie');
        }
    },[needChange]);


    if(state===null)
    {
        if(needChange === false){
            console.log(needChange);
            setNeedChange(true);
        }
        return(
            <div>
                <Header></Header>
            </div>
        )
    }
    else
    {
        return(
            <div>
                <Header/>
                <div className="movie-detail">
                    <img src={IMG_BASE_URL + state.poster_path} alt="영화포스터"/>
                    <div className="movie-detail-info">
                        <h4>{state.title}</h4>
                        <ul>평점 : {state.vote_average}</ul>
                        <p>줄거리 <br/>{state.overview}</p>
                    </div>
                </div>
            </div>
        )
    }
}