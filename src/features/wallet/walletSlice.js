import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Alert from "../../utils/alert";
import axios from "axios";


export const connectWallet = createAsyncThunk("wallet/connectWallet", async (_, thunkAPI) => {
    try {
        const { ethereum } = window;
        if (!ethereum) {
            window.location.href = 'https://metamask.io/download';
            
        } else {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            Alert({
                type: 'success',
                message: 'Connected successfully',
            });
            console.log(accounts)
            return accounts[0];
        } 
    } catch (error) {
        Alert({
            type: 'error',
            message: error.message,
        });
    }
});

// Create an async thunk to fetch user transactions
export const getUserTransactions = createAsyncThunk(
    "wallet/getUserTransactions",
    async (address, thunkAPI) => {
      try {
        // Make a GET request to your backend using axiosprice
        const response = await axios.get(
          `https://gnosis-energy.onrender.com/api/v1/transactions/${address}`
        );
  
        // Check if the response status is successful
        if (response.status === 200) {
          return response.data; // Assuming your backend returns data
        } else {
          return thunkAPI.rejectWithValue("Failed to fetch user transactions");
        }
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const getPrice = createAsyncThunk("wallet/getPrice", async (_, thunkAPI) => {
    try {
      const response = await axios.get(`https://gnosis-energy.onrender.com/api/v1/price`);
      
      if (response.status === 200) {
        return response.data; // Assuming your backend returns a price property
      } else {
        return thunkAPI.rejectWithValue("Failed to fetch price");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });

  export const buyEnergy = createAsyncThunk(
    "wallet/buyEnergy",
    async ({ amount }, thunkAPI) => {
      try {
        // Make a POST request to your backend using axios
        const response = await axios.post(
          `https://gnosis-energy.onrender.com/api/v1/buyEnergy`,
          { amount }
        );
  
        // Check if the response status is successful
        if (response.status === 200) {
          return response.data; // Assuming your backend returns data
        } else {
          return thunkAPI.rejectWithValue("Failed to buy energy");
        }
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  



const initialState = {
    connected: false,
    account: null,
    loading: false,
    transactions: [],
    price: null,
    model: {
      amount: "",
     }
};

export const walletSlice = createSlice({
    name: "wallet",
    initialState,
    reducers: {
        disconnectWallet: (state) => {
            state.connected = false;
            state.account = null;
            state.transactions = [];
            state.price = null;
        },
        setPayload: (state, {payload}) => {
          state.model = {...state.model, ...payload}
        },
        clearBuyEnergyError: (state) => {
          state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(connectWallet.pending, (state) => {
                state.loading = true;
            })
            .addCase(connectWallet.fulfilled, (state, action) => {
                state.loading = false;
                state.connected = true;
                state.account = action.payload;
            })
            .addCase(connectWallet.rejected, (state, action) => {
                state.loading = false;
            });

            builder
            .addCase(getUserTransactions.pending, (state) => {
                state.loading = true;
              })
              .addCase(getUserTransactions.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.transactions = payload.data; // Store user transactions in state
              })
              .addCase(getUserTransactions.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
              });
              builder
              .addCase(getPrice.pending, (state) => {
                state.loading = true;
              })
              .addCase(getPrice.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.price = payload.data; // Store the fetched price in state
              })
              .addCase(getPrice.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
              });

              builder
              .addCase(buyEnergy.pending, (state) => {
                state.loading = true;
              })
              .addCase(buyEnergy.fulfilled, (state, {payload}) => {
                state.loading = false;
                // Handle the fulfilled state as needed
                // You can update the state with the response data if necessary
              })
              .addCase(buyEnergy.rejected, (state) => {
                state.loading = false;
              });

    },
});

export const getWalletData = state => state.wallet;
export const { disconnectWallet, setPayload } = walletSlice.actions;
export default walletSlice.reducer;

