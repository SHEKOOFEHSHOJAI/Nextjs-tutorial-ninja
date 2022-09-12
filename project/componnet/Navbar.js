import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
function Navbar() {
  return (
    <nav>

        <div className='logo'>
            <Image src='/logo.png' alt='logo' width={128} height={77}/>
        </div>
        {/* future links */}
        <Link href='/'><a>Home</a></Link>
        <Link href='/about'><a>About</a></Link>
       <Link href='/ninja'><a>nonja list</a></Link>
        


    </nav>
  )
}

export default Navbar