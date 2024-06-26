import AnimatedText from '../component/AnimatedText'
import Layout from '../component/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-2.jpg'
import { useMotionValue, useSpring, useInView } from 'framer-motion'
import Skills from '../component/Skills'
import Experience from '@/component/Experience'

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if(isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])
    
    useEffect(() => {
        springValue.on('change', (latest) => {
            if(ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
        <Head>
            <title>Jelson | About Page</title>
            <meta name='description' content='My about page' />
        </Head>
        <main className='flex w-full flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text='Passion Fuels Purpose!' className='mb-16'/>
                <div className='grid w-full grid-cols-8 gap-16'>
                    <div className='col-span-3 flex flex-col items-start justify-start'>
                        <h2 className='mb-4 text-3xl font-bold uppercase text-dark/75'>Biography</h2>
                        <p className='font-semi text-[32px]'>
                            Hi, I&apos;m CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
                            and user-centered digital experiences. With 4 years of experience in the field. I am always looking for 
                            new and innovative ways to bring my clients&apos; visions to life.
                        </p>
                        <p className='font-semi my-4 text-[32px]'>
                            I believe that design is about more than just making things look pretty – it&apos;s about solving problems and 
                            creating intuitive, enjoyable experiences for users. 
                        </p>
                        <p className='font-semi my-4 '>
                            Whether I&apos;m working on a website, mobile app, or 
                            other digital product, I bring my commitment to design excellence and user-centered thinking to 
                            every project I work on. I look forward to the opportunity to bring my skills and passion to your next project..
                        </p>
                    </div>

                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                        bg-light p-8'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
                        <Image src={profilePic} alt='Jelson' className='w-full h-auto rounded-2xl' />                  
                    </div>

                    <div className='col-span-2 flex flex-col items-end justify-between'>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-9xl font-bold'>
                                <AnimatedNumbers value={50} />+
                            </span>
                            <h2 className='text-[32px] font-semi-bold capitalize text-dark/75 pt-5'>
                                Satisfied Clients
                            </h2>
                        </div>

                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-9xl font-bold'>
                                <AnimatedNumbers value={40} />+
                            </span>
                            <h2 className='text-[32px] font-semi-bold capitalize text-dark/75 pt-5'>
                                Projects Completed
                            </h2>
                        </div>

                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-9xl font-bold'>
                                <AnimatedNumbers value={4} />+
                            </span>
                            <h2 className='text-[32px] font-semi-bold capitalize text-dark/75 pt-5'>
                                Years of Experience
                            </h2>
                        </div>
                    </div>

                </div>

                <Skills />
                <Experience />
            </Layout>
        </main>
    </>
  )
}

export default about