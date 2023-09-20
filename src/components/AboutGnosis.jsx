import React from 'react'
import { IMobileBG } from '../utils/icons.utils'

const AboutGnosis = () => {
  return (
    <div>
         <div className=''>
                <div className=' py-14 relative  pb-8 text-[#11453B] bg-gradient-to-b from-teal-900 to-transparent'>
                    <h1 className='mb-10 mt-5 text-[3.5em] leading-[0.8em] text-[#B4A572] font-bold '>
                        How Gnosis Energy Works
                    </h1>
                    <div className='lg:grid lg:grid-cols-3'>
                        <div className=' m-auto mb-8 md:w-[70%] lg:w-full lg:mb-0 relative text-[#B4A572]'>
                            <img src={IMobileBG} alt='IPatternsThree' className='w-[80%] m-auto' />
                            <div className='absolute md:top-[25%] top-[30%] w-[50%] right-[25%]'>
                                <h1 className='md:text-[2em] lg:text-[1.5em] xl:text-[1.7em] text-[1.5em]  leading-[0.8em]  font-bold '>
                                    Gnosis Energy
                                </h1>
                                <p className='xl:text-[0.9em] lg:text-[0.7em] md:text-[1.3em] text-[0.7em] mt-4'>
                                    Gnosis Energy empowers users with transparent, fair, and decentralized renewable energy trading, addressing overcharging and lack of transparency in energy distribution.
                                </p>
                            </div>
                        </div>
                        <div className=' m-auto 2xl:w-[60%] lg:w-full  md:w-[60%] w-[80%]'>
                            <div className=' text-start'>
                                <div className='flex mb-2 mt-2'>
                                    <h1 className='bg-[#11453B] px-3 py-2 rounded-2xl text-[#B4A572]'>1</h1>
                                    <h1 className='mt-2 ml-3 font-bold'> Connect Wallet & Choose Energy:</h1>
                                </div>
                                <div className='border-l-2 border-[#11453B] border-dashed ml-4 pl-8'>
                                    <span className='text-[0.8em]'>Log in and securely connect your digital wallet.
                                        Select the type of renewable energy and specify the amount you wish to purchase.</span>
                                </div>
                            </div>
                            <div className=' text-start'>
                                <div className='flex mb-2 mt-2'>
                                    <h1 className='bg-[#11453B] px-3 py-2 rounded-2xl text-[#B4A572]'>2</h1>
                                    <h1 className='mt-2 ml-3 font-bold'>Confirm and Pay:</h1>
                                </div>
                                <div className='border-l-2 border-[#11453B] border-dashed ml-4 pl-8'>
                                    <span className='text-[0.8em]'>Confirm your purchase and proceed to securely pay using your connected wallet.</span>
                                </div>
                            </div>
                            <div className=' text-start '>
                                <div className='flex mb-2 mt-2'>
                                    <h1 className='bg-[#11453B] px-3 py-2 rounded-2xl text-[#B4A572]'>3</h1>
                                    <h1 className='mt-2 ml-3 font-bold'> Receive Purchased Energy:</h1>
                                </div>
                                <div className='border-l-2 border-b-2 pb-3 border-[#11453B] rounded-bl-lg border-dashed ml-4 pl-8'>
                                    <span className='text-[0.8em]'>After payment, input the provided token into your electric meter to receive the purchased energy for consumption.</span>
                                </div>
                            </div>
                        </div>
                        <div className=' m-auto mt-8 md:w-[70%] lg:w-full lg:mt-0 relative text-[#B4A572]'>
                            <img src={IMobileBG} alt='IPatternsThree' className='w-[80%] m-auto' />
                            <div className='absolute top-[25%] w-[50%] right-[25%]'>
                                <h1 className='xl:text-[1.7em] lg:text-[1.5em] md:text-[2em] text-[1.5em]  leading-[0.8em]  font-bold '>
                                    Gnosis Chain
                                </h1>
                                <p className='xl:text-[0.9em] lg:text-[0.7em] md:text-[1.3em] text-[0.7em] mt-4'>
                                    Gnosis Chain is a blockchain network that securely records transactions and data in a decentralized way, ensuring transparency and trust without relying on a central authority.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default AboutGnosis