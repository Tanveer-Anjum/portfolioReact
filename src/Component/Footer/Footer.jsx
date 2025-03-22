import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {CiLinkedin} from 'react-icons/ci'
import {FaGithub} from 'react-icons/fa'

function Footer() {
    return (
        <div id="footer" className='justify-around bg-[#212d5f] text-white md:p-12 p-10 items-center flex'>
            <div>
                <h1 className='text-2xl md:text-5xl font-bold'>Contact</h1>
                <h3 className='text-sm md:text-2xl font-normal'>Feel Free To Reach Out!</h3>
            </div>
            <ul className='text-sm md:text-lg'>
                <li className='flex gap-2 items-center'>
<MdOutlineEmail size={20} />


<a href="tanveeranjum1366@gmail.com"> tanveeranjum1366@gmail.com</a>
                </li>
                <li className='flex gap-2 items-center'>
<CiLinkedin size={20} />

<a href="tanveeranjum1366@gmail.com"> tanveer anjum</a>
                </li>
                <li className='flex gap-2 items-center'>
<FaGithub size={20} />
<a href="tanveeranjum1366@gmail.com"> tanveer anjum</a>
                </li>
            </ul>
        </div>
    )
}

export default Footer
