// src/StarryBackground.js
import { useState, useEffect } from 'react';
import './Stars.css';

const Stars = () => {
    const [stars, setStars] = useState([{ left: '80px', bottom: '150px' }]);

    useEffect(() => {

        const intervalId = setInterval(() => {
            const newStar = {
                left: `${Math.random() * 100}%`,
                bottom: `${Math.random() * 100}%`,
            };
            setStars((prevStars) => [...prevStars, newStar]);
        }, 2500);

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
                > * </div>
            ))}
        </div>
    );
};

export default Stars;
