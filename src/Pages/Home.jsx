import React from 'react'
import Testimonial from '../components/Testimonial/Testimonial'
import Hero from '../components/Hero/Hero'
import Articles from '../components/Articles/Articles'
import Work from '../components/Work/Work'
import Award from '../components/Award/Award'
import TeamSection from '../components/TeamSection/TeamSection'
import Company from '../components/Company/Company'
import WorkingProcess from '../components/WorkingProses/WorkingProses'
import Service from '../components/Service/Service'
 



export default function Home() {
  return (
    <>
     <Hero />
        <Service/>
     <Testimonial/>
          <Work />
          <WorkingProcess />
          <Company />
          <TeamSection/>
                    <Award/>

          <Articles/>
         
          
          
       
    
    </>
  )
}
