import React from 'react';
// icons
import { BsArrowUpRight } from 'react-icons/bs';
//motion
import {motion} from 'framer-motion';
//variante
import {fadeIn} from '../variants';
import { Link } from 'react-scroll';

const services = [
  {
    name: 'Backend Developper',
    describe : 'CodeIgniter is an open-source PHP web application framework that helps developers build dynamic websites and web applications. It is known for its simplicity,speed, and flexibility.',
    Link: 'Learn more'
  },
  {
    name: 'Frontend Developper',
    describe : 'Frontend development involves creating the user-facing side of a website or web application. Frontend developers work on the elements that users interact with directly, such as the layout, design, and interactivity of a website.',
    Link: 'Learn more'
  },
  {
    name: 'Modelisation Methode',
    describe : 'Utilizing UML (Unified Modeling Language) and MERISE for modeling methodologies offers a comprehensive approach to designing and structuring software systems.',
    Link: 'Learn more'
  }
]

const Services = () => {
  return (
  <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        <motion.div
         variants={fadeIn('right', 0.3)} 
         initial='hidden' 
         whileInView={'show'}  
         viewport={{once:false, amount:0.3 }} 
        className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-screen mb-12 lg:mb-0'>
          <h2 className='h2 mb-0 text-white'>What I DO.</h2>
          <h3 className='h3 max-w-[455px] mb-12 font-bold'>
            I'am a Fullstack Dev with over 4 years of experience.
          </h3>
          <button className='btn btn-sm'>See My Work</button>
        </motion.div>
        <motion.div 
        variants={fadeIn('left', 0.5)} 
        initial='hidden' 
        whileInView={'show'}  
        viewport={{once:true, amount:0.3 }} 
        className='flex-1'>
          {services.map((service,index)=>{
            const {name,describe,Link} = service;
            return (   
             <div className='border-b border-white/20 h-[166px] mb-[36px] flex'  key={index}>
                <div className='max-w-[476px]'>
                  <h4 className='text-[20px] tracking-wider font-primary font-semibold'>{name}</h4>
                  <p className='font-secondary leading-tight'>{describe}</p>
                </div>
                <div className='flex flex-col flex-1 items-end'>
                  <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                    <BsArrowUpRight />
                  </a>
                  <a className='text-gradient text-sm' href='#'>
                    {Link}
                  </a>   
                </div>
             </div>
            )
          })}
        </motion.div>
      </div>
    </div>
  </section>);
};

export default Services;
