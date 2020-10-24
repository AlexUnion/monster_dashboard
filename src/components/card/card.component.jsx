import React from "react";
import s from './card.module.scss';

const IMG_URL = "https://robohash.org/"

function Card(props) {
    const { name, email, id } = props;
    const img_url = IMG_URL + id;
    return (
        <div className={s.card}>
            <img src={img_url} alt=""/>
            <h2>
                {name}
            </h2>
            <p>
                {email}
            </p>
        </div>
    );
}

export default Card;