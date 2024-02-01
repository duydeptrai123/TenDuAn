// import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
// import {Dispatch} from "@reduxjs/toolkit";

export const GET_USER = 'GET_USER';
export const RESET_USER = 'RESET_USER';
// console.log('action1')
export const changeUser = (data) => (dispatch) => {
  // console.log('action2')
  // console.log('123data')
  const url = `https://657186fad61ba6fcc012d47b.mockapi.io/user`
    axios
      .get(url)
      .then(res => { 
        dispatch({
          type: GET_USER,
          data: res.data
        })
      .catch(error => {
        console.log(error)
      })
  });
};
export const resetUser = () => (dispatch) =>
// AsyncStorage.removeItem('user').then(() => {
dispatch({
  type: RESET_USER
// })
})

 
    


