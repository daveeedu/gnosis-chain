import React, { useEffect } from 'react'
import { IGnosisLogo, IGnosisEnergyFoot } from '../../utils/icons.utils'
import CardComp from '../../components/CardComp';
import { teamdata } from './fakeData';
import { useDispatch, useSelector } from 'react-redux';
import { connectWallet, disconnectWallet,  getPrice,  getUserTransactions,  getWalletData} from '../../features/wallet/walletSlice';
import AboutGnosis from '../../components/AboutGnosis';
import TableComp from '../../components/TableComp';
import FormComp from '../../components/FormComp';

const LandingPage = () => {

    const dispatch = useDispatch();
    const {account, transactions, price, connected, loading} = useSelector(getWalletData);

    const handleConnectWallet = () => {
            dispatch(connectWallet())
    };

    useEffect(() => {
        // Dispatch the action only if the wallet is connected
        if (connected) {
          dispatch(getUserTransactions(account));
          dispatch(getPrice());
        }
      }, [dispatch, connected, account]);

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

                    {connected && account ? (
                        <button onClick={handleDisconnectWallet} className='bg-[#11453B] hover:bg-[#155245] shadow-2xl text-white px-10 py-3  '>
                        Disconnect Wallet
                    </button>
                    ) : (
                        <button onClick={handleConnectWallet} className='bg-[#11453B] rounded-lg hover:bg-[#155245] shadow-2xl text-white px-10 py-3 '>
                        Connect Your Wallet
                    </button>
                    )}
                    
                    {connected && account ? (
                       <div className='lg:w-[55%] md:w-[80%] w-full m-auto text-[#B4A572] font-bold md:text-[1em] text-[0.6em]'>
                        <h1 className='bg-[#11453B]  mt-8 py-2 '><span className='font-bold text-[1.2em]'>Wallet Address</span>: {account} </h1>
                        <h1 className='bg-[#11453B]  mt-8 py-2 '><span className='font-bold text-[1.2em]'>Unit Price</span>: {price} </h1>
                        <h1 className='bg-[#11453B]  mt-8 py-2 '><span className='font-bold text-[1.2em]'>Available Unit</span>: 20 Wat </h1>
                       </div>
                        ) : (
                            <></> 
                        )}
                </div>
            </div>
            {connected && account ? (
            <div className='lg:grid lg:grid-cols-2 pb-8'>
                <TableComp />
                <FormComp />
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