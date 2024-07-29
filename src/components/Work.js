import React from 'react';
//motion
import {motion} from 'framer-motion';
//variants
import {fadeIn} from '../variants';
import portfolio from '../assets/portfolio.png';
import login from '../assets/login.jpeg';
import movieland from '../assets/moviland.png';

const Work = () => {
  return (
  <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div 
        variants={fadeIn('down', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          <div>
            <h2 className='h2 leading-tight text-accent'>My Last <br/>work.</h2>
            <p className='max-w-sm mb-16'>
              The last project i worked was an <strong>Interns Management System</strong> which is implemented in a firm called <strong>SMARTDISO</strong>
            </p>
            <button className='btn btn-sm'>View all Projects</button>
          </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
            </div>
            <img src={login} alt='' className='w-full group-hover:scale-125 transition-all duration-500'/>
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Interns Management system web(Bootstrap) and mobile(Flutter)</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white '>Project Title</span>
            </div>
          </div>
        </motion.div>
        <motion.div 
        variants={fadeIn('up', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 flex flex-col gap-y-10'>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
              </div>
              <img src={portfolio} alt='' className='w-full group-hover:scale-125 transition-all duration-500'/>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>portfolio with React and Tailwind</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white '>Project Title</span>
              </div>
          </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
              </div>
              <img src={movieland} alt='' className='w-full group-hover:scale-125 transition-all duration-500'/>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>MoviesLand</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white '>Project Title</span>
              </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>);
};

export default Work;
