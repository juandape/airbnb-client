import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_AIRBACK;
const url = `${BASE_URL}/homes`;

import {
    postLoading,
    postSuccess,
    postError,
} from "../filterSlice";



export const getPosts = (data) => {

    return async (dispatch) =>{
        try{
            dispatch(postLoading(true))
            const res = await axios.get(url1)
            dispatch(postSuccess(res.data))
            dispatch(postLoading(false))
        } catch(err){
            dispatch(postError(err))
        }
    }
}

