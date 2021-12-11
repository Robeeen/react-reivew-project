import React from 'react';
import { FaArrowLeft, FaArrowRight, FaQuoteRight} from 'react-icons/fa';
import myreviews from './data';
import { useState } from 'react';


const Review = () => {
    const [index, setIndex] = useState(0);
    const {name, job, image, text} = myreviews[index];
    console.log(myreviews);

    return (
        <article className='review'>
            <div className='img-container'>
            <img src={image} alt={name} className='person-img' />
            <span className='quote-icon'>
                <FaQuoteRight />
            </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='button-container'>
                <button className='prev-btn'>
                    <FaArrowLeft />
                </button>
                <button className='next-btn'>
                    <FaArrowRight />
                </button>
                <button className='random-btn'>
                        Nice Random
                </button>
            </div>
        </article>
    )
}

export default Review
