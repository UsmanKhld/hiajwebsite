import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NAVBAR_LINKS } from '@/constants'
import { FaShoppingCart } from 'react-icons/fa'


const Navbar = () => {
  return (
    <nav className='bg_brown flexBetween py-5 z-30'> 
      <Link href='/'>
        <Image className='flexStart' src="/HiajLogo.png" alt="logo" width={200} height={200}/>

        
      </Link>
      <ul className='hidden h-full gap-12 lg:flexCenter'>
          {NAVBAR_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className='regular-20 text-black flexCenter cursor-pointer transition-all pb-1.5 hover:font-bold'>
              {link.label}
            </Link>
          ))}
        </ul>

        <div className='lg:flexCenter hidden regular-24 cursor-pointer'>
            <FaShoppingCart />
        </div>
    </nav>
  )
}

export default Navbar