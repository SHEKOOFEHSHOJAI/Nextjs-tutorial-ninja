import React from 'react'
import Link  from 'next/link';
import {useEffect} from 'react';
import {useRouter} from 'next/router';

function NotFound() {

   const router=useRouter();

    useEffect(()=>{

        setTimeout(()=>{
            router.push('/about')
        },3000)
        console.log('use effect ran');
    },[])


  return (
      <div className='not-found'>
        <h1>oooops...</h1>
        <h2>that page</h2>
        <p>Go back to the<Link href='/'><a>Home page</a></Link></p>
    </div>
  )
}

export default NotFound