import React, { Component } from 'react';
import './rating.css';




function Rating ({number, onClickStar}) {
    const star =[];
    for (let index = 0; index < 5 ; index++) {
        if (index<number){
            star.push(<a onClick={() => onClickStar(index+1)}><i class="fas fa-star star" ></i></a>) 
        }
        else{star.push(<a onClick={() => onClickStar(index+1)}><i class="fas fa-star"></i></a>) }
    }
    return star;
}

export default Rating