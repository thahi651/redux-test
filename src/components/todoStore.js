import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers/todoSlice';


const todoStore =configureStore({
    reducer:{
        
    }
})
export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});

