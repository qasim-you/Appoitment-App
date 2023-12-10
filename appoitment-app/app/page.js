import Image from 'next/image'
import Navbar from './(components)/Navbar'
import Header from './(components)/Header'
import Hero from './(components)/Hero'
import Doctors from './(components)/Doctors'
import Example from './(components)/Testomonial'
import Partners from './(components)/Partners'
import Footer from './(components)/Footer'
export default function Home() {
  return (
<div>
  
<Header />

<Hero />
<Doctors />
<Example />
<Partners />
<Footer />
</div>


  )

}
