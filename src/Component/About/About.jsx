import React from 'react'
import AboutImg from '../../assets/tanveer.png'
import {IoArrowForward} from 'react-icons/io5'

function About() {
    return (
        <>
        <div className='text-white md:flex overflow-hidden md:flex-wrap items-center md:justify-center bg-black shadow-xl mx-0 md:mx-20  rounded-lg p-12'>
            <div>
                <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
                <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
                    <img className='md:h-80' src={AboutImg} alt='AboutImage'></img> 
                    <ul>
                        <div className='flex gap-4 py-4'>
                            <IoArrowForward size={30}/>
                            <span className='w-96'>
                                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frondend Developer</h1>
                                <p className='text-sm md:text-md leading-tight'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet mollitia accusantium numquam quas, neque quidem fuga! Exercitationem non ipsum, ducimus libero, recusandae excepturi, sed alias totam ut atque commodi earum!</p>
                            </span>
                        </div>

                        {/*  */}
                        <div className='flex gap-4 py-4'>
                            <IoArrowForward size={30}/>
                            <span className='w-96'>
                                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>WordPress Developer</h1>
                                <p className='text-sm md:text-md leading-tight'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet mollitia accusantium numquam quas, neque quidem fuga! Exercitationem non ipsum, ducimus libero, recusandae excepturi, sed alias totam ut atque commodi earum!</p>
                            </span>
                        </div>
                        {/*  */}
                        <div className='flex gap-4 py-4'>
                        <IoArrowForward size={30} />

                            <span className='w-96'>
                                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Backend Developer</h1>
                                <p className='text-sm md:text-md leading-tight'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet mollitia accusantium numquam quas, neque quidem fuga! Exercitationem non ipsum, ducimus libero, recusandae excepturi, sed alias totam ut atque commodi earum!</p>
                            </span>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default About
