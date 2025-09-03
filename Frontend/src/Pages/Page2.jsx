import React, { useEffect } from 'react'
import Services from '../Components/Services'
import Page3 from './page3.jsx'
import Page4 from './Page4.jsx'
import Page5 from './Page5.jsx'
import Page6 from './Page6.jsx'
import Footer from './Footer.jsx'
import Page7 from './Page7.jsx'
import Page8 from './Page8.jsx'
import Page6Part2 from './Page6Part2.jsx'
import Lenis from "@studio-freight/lenis";

const Page2 = ({mode}) => {

useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);







  return (
    <div className={`h-screen w-full ${mode?"bg-[#323E42]":"bg-[#EDEEE9]"} absolute sm:top-[100%] top-[85%] left-0 rounded-t-[2rem]`}>
        <Services mode ={mode}/>
        <Page3 mode ={mode}/>
        <Page4/>
        <Page5/>
        <Page6/>
        <Page6Part2/>
        <Page7/>
        <Page8/>
        {/* <SwipeCards/> */}
        <Footer/>
    </div>
  )
}

export default Page2
