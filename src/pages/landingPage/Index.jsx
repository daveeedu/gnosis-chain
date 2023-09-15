import React, { useState } from 'react'
import { IGreenTick, ILightningBolt, IMobileBG, ITalentOne, ITalentTwo, ITalentThree } from '../../utils/icons.utils'
import CardComp from '../../components/CardComp';

const LandingPage = () => {
    const [count, setCount] = useState(0)
    const cards = [
        { id: 1, title: 'David Edu', img: ITalentOne, profession: 'Software Engineer | Web3 Solidity developer', content: 'Your staff payroll history is kept in one place forever. No more excel sheet or manual records. Download your payroll history anytime you need it.' },
        { id: 2, title: 'Rukayat Olorireomo', img: ITalentTwo, profession: 'Software Engineer | FrontEnd developer', content: 'Wherever you are Eazipay has got you covered on ALL your Payroll tasks. Whether it is Taxes, Pension insurances HMOs, trustfunds, ' },
        { id: 3, title: 'Etette Etuk', img: ITalentThree, profession: 'Software Engineer | Project Manager', content: 'Never again wil you spend more than 2 minutes on payroll. Just click on your staff annd bulk-pay them at once. Payment is done permanently.' },
      ];
    return (
        <div>
            <div>
                <div className='logo-container flex '>
                    <img src={ILightningBolt} className="logo " alt="logo" />
                    <h1 className='md:text-[1.8em] text-[1.3em] italic text-[#11453B] font-[800] -ml-5 mt-8 md:mt-5 drop-shadow-xl'>Gnosis Energy</h1>
                </div>
            </div>
            <div className=''>
                <h1 className='text-[3.5em] leading-[0.8em] text-[#25292E] font-bold '>
                    <span className='text-[#292A29]'>Explore the new world of </span>
                    <br />
                    <span className='text-[#11453B]'>Reliable</span>
                    <br />& <br />
                    <span className='text-[#B4A572]'>Transparent</span>
                    <br />
                    <span className='text-[#EA4E4B]'>Payment</span>
                </h1>
                <div className="card mb-8">
                    <button className='bg-[#11453B] hover:bg-[#155245]  shadow-2xl text-white px-10 py-3  rounded-2xl'>
                        Connect Your Wallet
                    </button>
                </div>
            </div>
            <div className=''>
                <div className=' py-14 relative  mb-8 text-[#11453B] bg-gradient-to-b from-teal-900 to-transparent'>
                    {/* <img src={IMobileBG} alt='IPatternsThree' className='w-[80%] m-auto' /> */}
                       <h1 className='mb-10 mt-5 text-[3.5em] leading-[0.8em] text-[#B4A572] font-bold '>
                            How Gnosis Energy Works
                        </h1>
                    <div className='lg:grid lg:grid-cols-3'>
                    <div className=' m-auto mb-8 md:w-[70%] lg:w-full lg:mb-0 relative text-[#B4A572]'>
                        <img src={IMobileBG} alt='IPatternsThree' className='w-[80%] m-auto' />
                        <div className='absolute xl:top-[25%] md:top-40 top-[30%] w-[50%] right-[25%]'>
                            <h1 className='md:text-[2em] xl:text-[1.7em] text-[1.5em]  leading-[0.8em]  font-bold '>
                                Decentralized
                            </h1>
                            <p className='xl:text-[1em] md:text-[1.3em] text-[0.7em] mt-4'>
                                Gnosis Energy is a decentralized platform that allows you to create a reliable, transparent, and decentralized platform for your smart contracts.
                            </p>
                        </div>
                    </div>
                    <div className=' m-auto xl:w-full 2xl:w-[60%]  md:w-[60%] w-[80%]'>
                        <div className=' text-start'>
                            <div className='flex mb-2 mt-2'>
                            <h1 className='bg-[#11453B] px-3 py-2 rounded-2xl text-[#B4A572]'>1</h1>
                            <h1 className='mt-2 ml-3 font-bold'>Connect to Metamask</h1>
                            </div>
                            <div className='border-l-2 border-[#11453B] border-dashed ml-4 pl-8'>
                                <span className='text-[0.8em]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis distinctio eum reprehenderit placeat minima inventore, animi quaerat maiores facere alias voluptate adipisci blanditiis repellat quae</span>
                            </div>
                        </div>
                        <div className=' text-start'>
                            <div className='flex mb-2 mt-2'>
                            <h1 className='bg-[#11453B] px-3 py-2 rounded-2xl text-[#B4A572]'>2</h1>
                            <h1 className='mt-2 ml-3 font-bold'>Enter Quantity</h1>
                            </div>
                            <div className='border-l-2 border-[#11453B] border-dashed ml-4 pl-8'>
                                <span className='text-[0.8em]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis distinctio eum reprehenderit placeat minima inventore, animi quaerat maiores facere alias voluptate adipisci blanditiis repellat quae</span>
                            </div>
                        </div>
                        <div className=' text-start '>
                            <div className='flex mb-2 mt-2'>
                            <h1 className='bg-[#11453B] px-3 py-2 rounded-2xl text-[#B4A572]'>3</h1>
                            <h1 className='mt-2 ml-3 font-bold'>Make Payment</h1>
                            </div>
                            <div className='border-l-2 border-b-2 pb-3 border-[#11453B] rounded-bl-lg border-dashed ml-4 pl-8'>
                                <span className='text-[0.8em]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis distinctio eum reprehenderit placeat minima inventore, animi quaerat maiores facere alias voluptate adipisci blanditiis repellat quae</span>
                            </div>
                        </div>
                    </div>
                    <div className=' m-auto mt-8 md:w-[70%] lg:w-full lg:mt-0 relative text-[#B4A572]'>
                        <img src={IMobileBG} alt='IPatternsThree' className='w-[80%] m-auto' />
                        <div className='absolute xl:top-[25%] md:top-40 top-[30%] w-[50%] right-[25%]'>
                            <h1 className='xl:text-[1.7em] md:text-[2em] text-[1.5em]  leading-[0.8em]  font-bold '>
                            Gnosis Chain
                            </h1>
                            <p className='xl:text-[1em] md:text-[1.3em] text-[0.7em] mt-4'>
                                Gnosis Energy is a decentralized platform that allows you to create a reliable, transparent, and decentralized platform for your smart contracts.
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className='py-14'>
            <h1 className='mb-10 mt-5 text-[3.5em] leading-[0.8em] text-[#B4A572] font-bold '>
                            Meet Gnosis Energy Team
                        </h1>
                <CardComp data={cards}/>
            </div>
        </div>
    )
}

export default LandingPage