import React from 'react'

const TableComp = () => {
  return (
    <div className='mb-8 flow-root'>
        <h1 className='text-[2em] leading-[0.8em] text-[#11453B] font-bold mb-5'>Transaction History</h1>
        <div className='w-[90%]  m-auto overflow-x-auto xl:overflow-visible'>
            <table className='min-w-full divide-y divide-gray-300 border-separate border-spacing-1'>
                <thead className='bg-gray text-[#11453B]'>
                    <tr className=''>
                        <th className='text-start pl-5'>Wallet Address</th>
                        <th className='text-start pl-5'>Quantity</th>
                        <th className='text-start pl-5'>Recharge pin</th>
                    </tr>
                </thead>
                <tbody className='text-start divide-y divide-gray-200 bg-[#e4f0e7] text-[#11453B]'>
                    <tr className=''>
                        <td className='py-3 pl-5'>
                        0x7d4703413fed37e6f754c1647cba74a400ca3cb9 
                        </td>
                        <td className='pl-5'>
                            400W
                        </td>
                        <td className='px-5'>
                            01234567899288372
                        </td>
                    </tr>
                    <tr className=''>
                        <td className='py-3 pl-5'>
                        0x7d4703413fed37e6f754c1647cba74a400ca3cb9 
                        </td>
                        <td className='pl-5'>
                            50W
                        </td>
                        <td className='px-5'>
                            33322220123456789
                        </td>
                    </tr>
                    <tr className=''>
                        <td className='py-3 pl-5'>
                        0x7d4703413fed37e6f754c1647cba74a400ca3cb9 
                        </td>
                        <td className='pl-5'>
                            600W
                        </td>
                        <td className='px-5'>
                            01234532355433678
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default TableComp