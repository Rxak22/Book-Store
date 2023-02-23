import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useCardContext } from '../context/CardContext'

const ItemCard = (props) => {

    const {cards, setCards} = useCardContext();
    const Unbuy = (title) => {
        setCards(cards.filter(item => item.title !== title))
    }

    return (
        <div className='rounded-sm w-full h-12 bg-white p-1 flex relative mb-1'>
            <XMarkIcon 
                className='absolute cursor-pointer top-1 right-1 w-3 text-red-600'
                onClick={() => Unbuy(props.item.title)}
            />
            <img
                src={props.item.img}
                className='w-10 h-full'
                alt='kok'
            />
            <h1 className='font-btb text-[12px] pl-3'>{props.item.title}<p className='text-red-500 text-[12px] mt-1'>{props.item.price} $</p></h1>
        </div>
    )
}

export default ItemCard