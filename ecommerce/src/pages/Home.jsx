import React, { useEffect, useState } from 'react';
import banner2 from '../assets/banner2.png';
import banner1 from '../assets/banner1.png';
import banner from '../assets/banner.png';
import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';
import Button from '../atoms/Button';

const Home = () => {
  const [hover,setHover] = useState(false);
  // if className is equal to home-2 and home-3 then set hover value to true
  useEffect(()=>{
    const class1 = document.querySelectorAll('home-2,home-3');
    if(class1){
      setHover(true);
      } 
  },[]);

  console.log(hover)
  return (
    <div className='home'>
        <Navbar/>
        <section className='home-1'>
         <div className='home-1-text'>
         <h1>Best quality pillow</h1>
         <p>Best mains underwears garments of all popular brands available</p>
         <Button text={"Shop now"}/>
         </div>
         <div className='home-1-img'>
          <img src={banner} alt="" />
         </div>
        </section>
        <section className='home-2'>
        <div className='home-2-img'>
          <img src={banner1} alt="" />
         </div>
         <div className='home-2-text'>
          <div>

         <p>Started from $10</p>
         <h1>Printed memory foam brief modern throw pillow case</h1>

         <Button text={"Explore now"} hover={hover}/>
         </div>

         </div>
        </section>
        <section className='home-3'>
      
         <div className='home-3-text'>
          <div>

         <p>Started from $10</p>
         <h1>Printed memory foam brief modern throw pillow case</h1>
         <Button text={"Explore now"} hover={hover}/>
         </div>

         </div>
         <div className='home-3-img'>
          <img src={banner2} alt="" />
         </div>

        </section>
        <Footer/>
        </div>
  )
}

export default Home; 