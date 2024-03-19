import {configureStore} from "@reduxjs/toolkit";
import todoReduer from '../features/todo/todoSlicer';

export const store = configureStore({
    reducer : todoReduer
})