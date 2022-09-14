import React from 'react'
// router params

// how many pages need and create

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map(ninja => {
    return {
      params: { id: ninja.id.toString() }
    }
  })
  
  return {
    paths,
    fallback: false
  }
}

// for each html page
export const getStaticProps = async (context)=>{
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id);
  const data = await res.json();
  return{
    props:{ninja:data}
  }
}

// if click /ninja/id show datais
function Dtails({ninja}) {
  console.log(ninja);
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  )
}

export default Dtails