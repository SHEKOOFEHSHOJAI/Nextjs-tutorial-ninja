import Footer from '../componnet/Footer'
import Layout from '../componnet/Layout'
import Navbar from '../componnet/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  
  
      <Layout >
   
      <Component {...pageProps}/>
      </Layout >
 
  )
}

export default MyApp
