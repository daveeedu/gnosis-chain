import React from 'react'
import { IGnosisLogo, IGnosisEnergyFoot } from '../../utils/icons.utils'
import CardComp from '../../components/CardComp';
import { teamdata } from './fakeData';
import { useDispatch, useSelector } from 'react-redux';
import { connectWallet, disconnectWallet, selectAccount, selectConnected } from '../../features/wallet/walletSlice';
import AboutGnosis from '../../components/AboutGnosis';

const LandingPage = () => {

    const dispatch = useDispatch();
    const walletAddess = useSelector(selectAccount)
    const isConnected = useSelector(selectConnected)

    const handleConnectWallet = () => {
        dispatch(connectWallet())
    };

    const handleDisconnectWallet = () => {
        dispatch(disconnectWallet())
    }


    return (
        <div>
            <div className='logo-container flex mb-14 pt-8'>
                <img src={IGnosisLogo} className="lg:w-[8%] w-[20%] m-auto" alt="logo" />
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

                    {isConnected ? (
                        <button onClick={handleDisconnectWallet} className='bg-[#11453B] hover:bg-[#155245]  shadow-2xl text-white px-10 py-3  rounded-2xl'>
                        Disconnect Wallet
                    </button>
                    ) : (
                        <button onClick={handleConnectWallet} className='bg-[#11453B] hover:bg-[#155245]  shadow-2xl text-white px-10 py-3  rounded-2xl'>
                        Connect Your Wallet
                    </button>
                    )}
                    
                    {isConnected ? (
                       <div className='lg:w-[45%] w-[80%] m-auto text-[#B4A572] font-bold md:text-[1em] text-[0.6em]'>
                        <h1 className='bg-[#11453B]  mt-8 py-2 '>Wallet ID: {walletAddess} </h1>
                        <h1 className='bg-[#11453B]  mt-8 py-2 '>Purchased Unit: 400 Wat </h1>
                        <h1 className='bg-[#11453B]  mt-8 py-2 '>Available Unit: 20 Wat </h1>
                       </div>
                        ) : (
                            <></> 
                        )}
                </div>
            </div>
            {isConnected ? (
                <div>
                <p>Wallet is not connected.</p>
                <button onClick={handleConnectWallet}>Connect Wallet</button>
            </div>
            ) : (
                <div >
                <AboutGnosis />

                <div className='py-20 lg:px-6 bg-gradient-to-t from-transparent to-white'>
                    <h1 className='mb-10 mt-5 text-[3.5em] leading-[0.8em] text-[#B4A572] font-bold '>
                        Meet Gnosis Energy Team
                    </h1>
                    <CardComp data={teamdata} />
                </div>
            </div>
            )}
            <footer className='bg-[#11453B]'>
                <div className='py-10'>
                    <div className='logo-container flex justify-center'>
                        <img src={IGnosisEnergyFoot} className="lg:w-[8%] w-[20%] m-auto" alt="logo" />
                    </div>
                </div>
                <div className='text-[#B4A572] text-[0.8em] pb-3'>
                    <span>&copy;</span>
                    <span className='mx-2'>2023</span>
                    <span>gnosis energy. all rights reseved</span>
                </div>
            </footer>
        </div>
    )
}

export default LandingPage