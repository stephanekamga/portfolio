import React from 'react';
// image
import Image from '../assets/steph.png';
//icon
import {FaGithub, FaWhatsapp, FaFacebook} from 'react-icons/fa';
// animation
import {TypeAnimation} from 'react-type-animation'
//motion
import {motion} from 'framer-motion'
//variants
import {fadeIn} from  '../variants'

const Banner = () => {
  return (
  <section className='min-h-[85vh] lg:min-h-[78vh] flex item-center ' id='home'>
    <div className='container mx-auto '>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 
            variants={fadeIn('up', 0.3)} 
            initial='hidden' 
            whileInView={'show'}  
            viewport={{once:false, amount:0.7 }}
            className='text-[50px] mb-4 font-bold leading-[0.8] lg:text[110px]'>Stephane
            <span> KAMGA</span>
          </motion.h1>
          <motion.div 
            variants={fadeIn('up', 0.4)} 
            initial='hidden' whileInView={'show'}  
            viewport={{once:false, amount:0.7 }}
            className='mb-6 text-[36px] lg:text-[60px] placeholder:font-secondary font-light uppercase leading-[1]'>
            <span>I am a </span>
            <TypeAnimation sequence={[
              'Web Dev',
              1000,
              'Mobile Dev',
              1000
            ]}
            speed={50}
            className='text-accent '
            wrapper='span'
            repeat={Infinity}
            />
          </motion.div>
          <motion.p 
            variants={fadeIn('up', 0.5)} 
            initial='hidden' whileInView={'show'}  
            viewport={{once:false, amount:0.7 }}
            className='mb-8 max-w-lg mx-auto lg-mx-0'>
              Hello welcome to my portfolio page. Here you're going to see all 
            the projets i worked on with different programming languages.
          </motion.p>
          <motion.div 
            variants={fadeIn('up', 0.7)} 
            initial='hidden' whileInView={'show'}  
            viewport={{once:false, amount:0.7 }}
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <button className='btn btn-lg'>Contact me</button>
            <a href='#' className='text-gradient btn-link'>My portfolio</a>
            {/* social medias */}
            
            <div className='flex text-[20px] gap-x-6 mx-auto max-w-max lg:mx-0'>
              <a href='#'>
                <FaGithub />
              </a>
              <a href='#'>
                <FaFacebook />
              </a>
              <a href='#'>
                <FaWhatsapp />
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn('down', 0.5)} 
          initial='hidden' whileInView={'show'}  
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto'>
          <img src={Image}/>
        </motion.div>
      </div>
    </div>
  </section>);
};

export default Banner;
