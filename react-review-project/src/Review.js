import React from 'react';
import { FaArrowLeft, FaArrowRight, FaQuoteRight} from 'react-icons/fa';
import myreviews from './data';
import { useState } from 'react';


const Review = () => {
    const [index, setIndex] = useState(0);
    const {name, job, image, text} = myreviews[index];
 
    const checkNumber = (number) => {
        if (number > myreviews.length -1){
            return 0;
        }
        if (number <0) {
            return myreviews.length -1;
        }
        return number;
    }

    const nextPerson = () =>{
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        })
    }
    const prevPerson =() => {
        setIndex((index) => {
            let newIndex = index -1;
            return checkNumber(newIndex);
        })
    }

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
                <button className='prev-btn' onClick={prevPerson}>
                    <FaArrowLeft />
                </button>
                <button className='next-btn' onClick={nextPerson}>
                    <FaArrowRight />
                </button>                
            </div>
            <button className='random-btn'>
                        Nice Random
                </button>
        </article>
    )
}

export default Review
