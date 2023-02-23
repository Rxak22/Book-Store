import React, { useState } from 'react'
import LeftImg from '../image/book9.png';
import SmallImg1 from '../image/book3.jpeg';
import SmallImg2 from '../image/book5.jpeg';
import SmallImg3 from '../image/book10.jpeg';
import { ShoppingCartIcon, Square3Stack3DIcon, TruckIcon, PhoneIcon } from '@heroicons/react/24/outline'
import ItemCard from './ItemCard';
import { useCardContext } from '../context/CardContext';

const Nav = () => {

    const { cards } = useCardContext();
    const [Itemcard, setItemcard] = useState(false);

    const ToggleItemcard = () => {
        setItemcard(!Itemcard);
    }

    return (
        <div className='w-full h-screen bg-gray-800'>
            <div className='flex justify-between h-full'>
                <img src={LeftImg} alt='kok' className='w-[50%] bg-lime-500' />
                <div className='w-[50%] flex justify-between items-center flex-col py-16'>
                    <img src={SmallImg1} alt='kok' className='w-40 h-56' />
                    <img src={SmallImg2} alt='kok' className='w-40 h-56 ml-[30%] -mt-32' />
                    <img src={SmallImg3} alt='kok' className='w-40 h-56 -mt-32' />
                </div>
            </div>
            <div className='py-4 px-16 fixed top-0 left-0 w-full h-auto flex justify-between z-50'>
                <h1 className='font-bold font-tahoma'>mybook.library</h1>
                <div className='cursor-pointer relative' onClick={ToggleItemcard}>
                    <div className='w-3 h-3 bg-red-500 text-white absolute -top-[3px] -right-1 rounded-full flex justify-center items-center text-[9px]'>
                        {cards.length}
                    </div>
                    <ShoppingCartIcon className='w-6 text-black' />
                </div>

                {
                    Itemcard &&
                    <div className='scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400 cursor-pointer w-52 h-[265px] overflow-x-auto p-1 pb-0 bg-slate-100 absolute top-9 right-[4.6em]'>
                        {
                            cards.map(item => {
                                return (
                                    <ItemCard item={item} />
                                )
                            })
                        }
                    </div>
                }
            </div>
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
                <p className='tracking-widest'>cambodia</p>
                <h1 className='font-bold text-2xl tracking-wider font-tahoma'>Enjoy Reading and Lerning</h1>
            </div>
            <div className='grid grid-cols-3 gap-16 w-full h-20 mt-2'>
                <div className='text-center'>
                    <p className='font-thin'>Infor</p>
                    <p className='text-lg'>and</p>
                    <p className='tracking-widest font-bold'>Lerning By Your Self</p>
                </div>
                <div className='text-center border-x-2'>
                    <p className='font-thin'>Infor</p>
                    <p className='text-lg'>and</p>
                    <p className='tracking-widest font-bold'>Lerning By Your Self</p>
                </div>
                <div className='text-center'>
                    <p className='font-thin'>Infor</p>
                    <p className='text-lg'>and</p>
                    <div className='flex justify-center '>
                        <PhoneIcon className='w-5' />
                        <TruckIcon className='w-5 mx-5' />
                        <Square3Stack3DIcon className='w-5' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav