import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/movie.css"

export default function Header(props){
    const [searchBar, setsearchBar] = useState('');

    const handleSearch = (e) =>{
        setsearchBar(e.target.value);
        props.setUserSearch(e.target.value);
    }

    return(
        <div className="header-container">
            <div className="header-wrap">
                <div className="header-left-wrap">
                    <Link to ='/'>
                        <img
                            style={{width:"50px", height:"60px"}}
                            src="https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/646/b447de09bcdc8174046f61581355d374_res.jpeg"
                            alt="logo"
                        />
                    </Link>
                    <ul>
                        <li>
                            <Link className="header-nav-item" to='/movie'>
                                영화
                            </Link>
                        </li>
                        <li>
                            <Link className="header-nav-item" to='/tv'>
                                티비
                            </Link>
                        </li>
                        <li>
                            <Link className="header-nav-item" to='/person'>
                                인물
                            </Link>
                        </li>
                    </ul>
            
                    <div className="search-input">
                        <input className="search-name"
                        value={searchBar}
                        placeholder="검색"
                        onChange={handleSearch}>
                    </input>

                    </div>
                </div>
            </div>
        </div>
    )
}
