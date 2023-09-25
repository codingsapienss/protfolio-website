// src/StarryBackground.js
import { useState, useEffect } from 'react';
import './Stars.css';

const Stars = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {

        const intervalId = setInterval(() => {
            const newStar = {
                left: `${Math.random() * 100}%`,
                bottom: `${Math.random() * 100}%`,
            };
            setStars((prevStars) => [...prevStars, newStar]);
        }, 1500);

        return () => {

            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className="stars-container">
            {stars.map((star, index) => (
                <div
                    key={index}
                    className="star"
                    style={{
                        left: star.left,
                        bottom: star.bottom,

                    }}
                ></div>
            ))}
        </div>
    );
};

export default Stars;
