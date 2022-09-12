import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../componnet/Footer'
import Navbar from '../componnet/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content='ninja'/>
      </Head>
      <div className={styles.title}>
        {/* <Navbar/> */}
        <h1 className={styles.text}>Home</h1>
        <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem aliquid iusto repellat blanditiis dicta odit consequatur mollitia nesciunt amet tempore rerum velit iure doloremque, tenetur sit! Voluptatem alias eaque in.
          Dolor repudiandae unde neque culpa doloremque non consequatur facere minus pariatur excepturi! Laudantium cupiditate aspernatur autem aliquam deserunt est consectetur ipsa culpa quidem nam quam delectus voluptate, ad iure repellat.
          Dolores magnam praesentium modi temporibus rerum voluptas nostrum saepe, laudantium suscipit quis? Ab dolorum officiis fugiat, odit, exercitationem commodi eius dolorem tempore, quasi repellat quo? Nam sit quaerat quos labore?</p>

        <Link href='/ninja'>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
        {/* <Footer/> */}
      </div>
        
    </>
  )
}
