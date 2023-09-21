import { FormControl, TextField } from '@mui/material'
import React from 'react'
import { LoadingButton } from "@mui/lab";

const FormComp = () => {
  return (
    <div className='md:w-[70%] w-[90%] h-full m-auto bg-[#e4f0e7] py-4'>
        <h1 className='text-[2em] leading-[0.8em] text-[#11453B] font-bold my-8'>Buy Electricity</h1>
        <FormControl className="md:w-[60%] w-[80%] m-auto border-none mt-8">
									<label
										htmlFor="firstName"
										className="block mb-1 text-start text-[16px] font-medium  text-[#11453B] ">
										Enter Amount
									</label>
									<input
										className=" bg-white py-3 pl-3"
										id="firstName"
										name="firstName"
                                        placeholder='Amount'
										// value={values.firstName}
										// required
										// onFocus={handleFocus}
										// onChange={handleChange}
										// onBlur={handleBlur}
										// error={errors.firstName && touched.firstName}
										// helperText={
										// 	errors.firstName && touched.firstName
										// 		? errors.firstName
										// 		: ""
										// }
									/>
								</FormControl>
                                <div className=' m-auto my-8'>
                                <button
									className=" md:w-[30%] w-[80%] items-center p-3  text-sm font-semibold bg-[#11453B] text-white hover:bg-[#15574a]"
									variant="contained"
									color="error"
									sx={{
										".MuiLoadingButton-loadingIndicatorCenter": {
											color: "var(--C_primary) !important",
										},
									}}
									// size="large"
									type="submit"
									// disabled={loading}
									// loading={loading}
									fullWidth>
									Pay now
								</button>
                                </div>
    </div>
  )
}

export default FormComp