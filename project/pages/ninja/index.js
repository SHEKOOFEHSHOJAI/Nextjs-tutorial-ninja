import React from 'react'
import Link from 'next/link';
import style from '../../styles/Ninja.module.css'

export const getStaticProps=async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  
  const data= await res.json()
  
  return {
    props:{ninjas:data}
  }
}



function index({ninjas}) {
  
  return (
    <div>
     
        <h1>all ninja</h1>
      {ninjas.map(ninja=>(
          <Link href={'/ninja/'+ninja.id} key={ninja.id}>
              <a className={style.single}>
                <h3>{ninja.name}</h3>
              </a>
          </Link>

        ))}
      
    </div>

  )
}

export default index





