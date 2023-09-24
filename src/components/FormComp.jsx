import React, { useEffect } from 'react';
import { FormControl } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {  buyEnergy, getWalletData } from '../features/wallet/walletSlice';
import { useLocation } from 'react-router-dom';

const FormComp = () => {
  const dispatch = useDispatch();
  const {loading, model} = useSelector(getWalletData),
  { state } = useLocation()
  const {
	setValues,
	values,
	handleBlur,
	handleChange,
	handleFocus,
	handleSubmit,
	errors,
	touched,
	helperText,
	resetForm
} = useFormik({
    initialValues: model,
    onSubmit: async (payload) => {
		let action = buyEnergy;
		const res = await dispatch(action(payload))
		console.log(res)
		if (res?.success){
			resetForm()
		}
    },
  });

  useEffect(() => {
	state === null && setValues({amount: ''})
}, [])
  return (
    <div className='md:w-[70%] w-[90%] h-full m-auto bg-[#e4f0e7] py-4'>
      <h1 className='text-[2em] leading-[0.8em] text-[#11453B] font-bold my-8'>
        Buy Electricity
      </h1>
      <form onSubmit={handleSubmit}>
        <FormControl className='md:w-[60%] w-[80%] m-auto border-none mt-8'>
          <label
            htmlFor='amount'
            className='block mb-1 text-start text-[16px] font-medium text-[#11453B] '>
            Enter Amount
          </label>
          <input
            className='bg-white py-3 pl-3'
            id='amount'
            name='amount'
            type='text'
            placeholder='Amount'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.amount}
			onFocus={handleFocus}
			
          />
		  {errors.amount && touched.amount && (
    <div className="text-red-500">{errors.amount}</div>
  )}
        </FormControl>
        <div className='m-auto my-8'>
          <button
            className='md:w-[30%] w-[80%] items-center p-3 text-sm font-semibold bg-[#11453B] text-white hover:bg-[#15574a]'
            variant='contained'
            type="submit" 
          >
            Pay now
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComp;
