import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import callApi from "../api";

const initialState = {
    tasks: [],
    loading: false,
    error: null,
};

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
    try {
        const response = await callApi("GET", "crm/tasks");
        return response.data;
    } catch (error) {
        throw error;
    }
});

export const deleteTask = createAsyncThunk("tasks/deleteTask", async (taskId) => {
    try {
        const response = await callApi("DELETE", `crm/tasks/${taskId}`);
        return { id: taskId, ...response.data };
    } catch (error) {
        throw error;
    }
});

export const editTask = createAsyncThunk("tasks/editTask", async ({ taskId, updatedData }) => {
    try {
        const response = await callApi("PUT", `crm/tasks/${taskId}`, updatedData);
        return response.data;
    } catch (error) {
        throw error;
    }
});

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.status = "loading";
            })
            // .addCase(fetchTasks.fulfilled, (state, action) => {
            //     state.status = "succeeded";
            //     state.tasks = action.payload;
            // })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                // console.log("Fulfilled Action Payload:", action.payload); 
                state.status = "succeeded";
                state.data = action.payload; // Check if this should be state.data
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.status = "succeeded";
                // state.data = state.tasks.filter((task) => task.id !== action.payload.id);
                state.data = state.data.filter((task) => task.id !== action.payload.id);
                console.log(action.payload)
            })
            .addCase(deleteTask.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(editTask.fulfilled, (state, action) => {
                state.status = "succeeded";
                // state.tasks = state.tasks.map((task) =>
                //     task.id === action.payload.id ? action.payload : task
                // );
                state.data = state.data.map((task) =>
                    task.id === action.payload.id ? action.payload : task
                );
            })
            .addCase(editTask.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

// export const { reducer: tasksReducer } = tasksSlice;
// export const { fetchTasks, editTask, deleteTask } = tasksSlice.actions;

export const selectTasks = (state) => state.tasks;


export default tasksSlice.reducer;