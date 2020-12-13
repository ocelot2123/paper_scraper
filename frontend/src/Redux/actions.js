import Types from "./types";
import axios from "axios";

export const getPapers = () => {
    return dispatch => {
        dispatch({type:Types.PAPERS_LOADING, payload:true})
        axios.get(`${process.env.REACT_APP_HOST_IP_ADDRESS}/api/papers`)
            .then(response => {
                    dispatch({type:Types.GET_PAPERS, payload:response.data})
                }
            )
            .catch(err => {
                    console.log(err)
                    dispatch({type:Types.PAPERS_LOADING, payload:false})
            }
            );
    }
}

export const deletePaper = (id,cb) => {
    return dispatch => {
        dispatch({type:Types.PAPERS_LOADING, payload:true})
        axios.delete(`${process.env.REACT_APP_HOST_IP_ADDRESS}/api/papers/${id}/`)
            .then(response => {
                    dispatch({type:Types.DELETE_PAPER, payload:id});
                cb();
                }
            )
            .catch(err => {
                    console.log(err)
                }
            );
    }
}

export const createPaper = (data,cb) => {
    return dispatch => {
        console.log(data)
        axios.paper(`${process.env.REACT_APP_HOST_IP_ADDRESS}/api/papers/`, data)
            .then(response => {
                console.log(response)
                    dispatch({type:Types.CREATE_PAPER, payload:response.data});
                    cb()
                }
            )
            .catch(err => {
                    console.log(err)
                    dispatch({type:Types.PAPERS_LOADING, payload:false})
                }
            );
    }
}