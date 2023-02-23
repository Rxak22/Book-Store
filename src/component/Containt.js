import React from 'react';
import Card from './Card';
import { ArrowDownIcon } from '@heroicons/react/24/outline'
import ImgOne from '../image/book1.jpeg';
import ImgTwo from '../image/book2.jpeg';
import ImgThree from '../image/book3.jpeg';
import ImgFour from '../image/book4.jpeg';
import ImgFive from '../image/book5.jpeg';
import ImgSex from '../image/book6.jpeg';
import ImgSeven from '../image/book7.jpeg';
import ImgEight from '../image/book8.jpeg';
import ImgNine from '../image/book10.jpeg';

const Containt = () => {

    const data = [
        {
            img: ImgOne,
            title: "សេដធកិច្ចកម្ពុជា",
            year: "1997",
            price: "50"
        },
        {
            img: ImgTwo,
            title: "សិល្ប៖ ចងមិត្ត",
            year: "2002",
            price: "15"
        },
        {
            img: ImgThree,
            title: "ផ្នត់គំនិត",
            year: "2012",
            price: "5"
        },
        {
            img: ImgFour,
            title: "ប្រវត្តិសាស្ត្រខ្មែរ",
            year: "1990",
            price: "32"
        },
        {
            img: ImgFive,
            title: "បដិវត្តន៍មួយ",
            year: "2005",
            price: "10"
        },
        {
            img: ImgSex,
            title: "ប្រាជ្ញា ជាថ្នាំដ័ពិសេស",
            year: "1998",
            price: "3"
        },
        {
            img: ImgSeven,
            title: "សិល្ប៖ វិធីក្នងការនិយាយ",
            year: "2010",
            price: "20"
        },
        {
            img: ImgEight,
            title: "ពន្ធលើអចកនទ្រព្យ",
            year: "2015",
            price: "35"
        },
        {
            img: ImgNine,
            title: "ៗកសារពន្ធដារ",
            year: "2020",
            price: "13"
        },
    ]
  return (
    <div className='w-full h-auto mt-[130px] px-10'>
        <div>
            <h1 className='font-bold shadow-sm shadow-red-400 py-1 flex justify-between pl-1'>Book Most Puplar <ArrowDownIcon className='w-4 mr-3' /></h1>
            <div className='grid grid-cols-4 gap-10 pb-10'>
                {
                    data.map((book, id) => {
                        return(
                            <Card book={book} key={id} />
                        )
                    })
                }
            </div>
        </div>
        <div>
            <h1 className='font-bold shadow-sm shadow-red-400 py-1 flex justify-between pl-1'>Avaislable In Store <ArrowDownIcon className='w-4 mr-3' /></h1>
            <div className='grid grid-cols-4 gap-10 pb-10'>
                {
                    data.map((book, id) => {
                        return(
                            <Card book={book} key={id} />
                        )
                    })
                }
            </div>
        </div>
        <div>
            <h1 className='font-bold shadow-sm shadow-red-400 py-1 flex justify-between pl-1'>On Discount <ArrowDownIcon className='w-4 mr-3' /></h1>
            <div className='grid grid-cols-4 gap-10 pb-10'>
                {
                    data.map((book, id) => {
                        return(
                            <Card book={book} key={id} />
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Containt