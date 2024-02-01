// import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Dispatch} from "@reduxjs/toolkit";
import { useNavigation } from '@react-navigation/native';
const API_BASE_URL = 'https://6561e085dcd355c083244878.mockapi.io'

export const GET_ANTREO = 'GET_ANTREO';
export const DELETE_ANTREO = 'GET_ANTREO';
export const SET_PRODUCT_LOADING = 'SET_PRODUCT_LOADING'
export const UPDATE_ANTREO = 'UPDATE_ANTREO'
export const ADD_ANTREO = 'ADD_ANTREO'
// export const RESET_USER = 'RESET_USER';
// console.log('action1')
export const getAntreo = () => (dispatch) => {
  dispatch({
    type: SET_PRODUCT_LOADING
  })
    const url= (`${API_BASE_URL}/ANTREO`)
    axios
      .get(url)
      .then(res => {
        // console.log('userrrrrrrrrr',res.data)
        dispatch({
          type: GET_ANTREO,
          data: res.data
        })
      })
      .catch(error => {
        console.log(error)
      })
};
export const deleteAntreo = (id) => (dispatch) => {
  const url = (`${API_BASE_URL}/ANTREO/${id}`)
  axios
    .delete(url)
    .then(res => {
      dispatch({
        type: DELETE_ANTREO,
        data: id
      })
      dispatch(getAntreo())
      
    })
    .catch(error => {
      console.log(error)
    })
};
export const updateAntreo = (id,DataItem) => (dispatch) => {
  const url = `${API_BASE_URL}/ANTREO/${id}`; // Chỉnh sửa cách bạn xây dựng URL
  axios
    .put(url, DataItem) // Truyền dữ liệu DataItem vào yêu cầu PUT
    .then(res => {
      // console.log('duylog8-1', res?.data);
      const updatedData = res.data; // Sửa tên biến response thành res
      dispatch({
        type: UPDATE_ANTREO,
        payload: { id, updatedData }
      });
      dispatch(getAntreo());
    })
    .catch(error => {
      console.log(error);
    });
};
export const addAntreo = (NewData) => (dispatch) => {
  dispatch({
    type: SET_PRODUCT_LOADING
  })
    const url= (`${API_BASE_URL}/ANTREO`)
    axios
      .post(url, NewData)
      .then(res => {
        console.log('adddddd',res.data)
        dispatch({
          type: ADD_ANTREO,
          data: res.data
        })
        dispatch(getAntreo())
      })
      .catch(error => {
        console.log(error)
      })
};
