import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const connectWallet = createAsyncThunk("wallet/connectWallet", async (_, thunkAPI) => {
    try{
        const { ethereum } = window;
        if (ethereum) {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            return accounts[0];
        } else {
            thunkAPI.rejectWithValue("Please install MetaMask");
        }
} catch (error) {
    thunkAPI.rejectWithValue(error.message);
}});


const initialState = {
    connected: false,
    account: null,
    loading: false,
};

export const walletSlice = createSlice({
    name: "wallet",
    initialState,
    reducers: {
        disconnectWallet: (state) => {
            state.connected = false;
            state.account = null;
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
    },
    });

    export const { disconnectWallet } = walletSlice.actions;

    export default walletSlice.reducer;

    export const selectAccount = (state) => state.wallet.account;
    export const selectConnected = (state) => state.wallet.connected;