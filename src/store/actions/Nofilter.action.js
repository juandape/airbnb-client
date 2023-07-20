import axios from "axios";

import {
    postLoading,
    postSuccess,
    postError,
} from "../filterSlice";

export const getPosts = (data) => {

    return async (dispatch) =>{
        try{
            dispatch(postLoading(true))
            const res = await axios.get(`${process.env.REACT_APP_AIRBACK}/homes`)
            dispatch(postSuccess(res.data))
            dispatch(postLoading(false))
        } catch(err){
            dispatch(postError(err))
        }
    }
}

