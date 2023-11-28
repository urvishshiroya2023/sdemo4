import { configureStore } from "@reduxjs/toolkit";
import leadSlice, { fetchLeads } from "./leadSlice";

const store = configureStore({
    reducer: {
        leads: leadSlice,
    },
});

// Dispatch the fetchLeads action when the store is created
store.dispatch(fetchLeads());

export default store;
