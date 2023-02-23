import React from 'react';
import { useCardContext } from '../context/CardContext';

const Card = (props) => {

    const {cards, setCards} = useCardContext();
    const getItem = props.book;
    const Buy = () => {
        const exsisted = cards.find(item => item.title === props.book.title);
        if (!exsisted)
            setCards([...cards, getItem]);
    }

    return (
        <div className='h-80 mt-7 relative cursor-pointer overflow-hidden shadow-lg shadow-violet-600'>
            <img src={props.book.img} alt='kok' className='h-full w-full' />
            <div className='w-full h-full bg-black absolute z-10 top-0 left-0 transition-all duration-500 bg-opacity-0 opacity-0 hover:opacity-100 hover:bg-opacity-50 hover:px-7 hover:py-10'>
                <div className='absolute transition-all duration-300  top-[65%] z-50'>
                    <h1 className=' font-btb text-white text-md'>{props.book.title}</h1>
                    <p className=' font-btb text-white text-md'>{props.book.year}</p>
                    <p className=' font-btb text-red-500 text-sm'>{props.book.price} $</p>
                </div>
                <div className='flex justify-center mx-auto absolute left-1/2 -translate-x-1/2 mt-24'>
                    <button 
                    className='px-7 py-2 rounded-full text-sm border border-red-600 transition duration-300 shadow-md shadow-red-500 hover:bg-red-600 text-white'
                    onClick={Buy}
                    >
                        Add to Card
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card