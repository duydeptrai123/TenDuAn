// import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dispatch} from "@reduxjs/toolkit";

export const CHANGE_ANSWER = 'CHANGE_ANSWER';
export const RESET_ANSWER = 'RESET_ANSWER';

export const changeAnswer = (data) => (dispatch) => {
  //su dung redux toolkix moi luu local cho nay dc
  // AsyncStorage.setItem('answers', JSON.stringify(updatedAnswers)).then(() => { 
    dispatch({
      type: CHANGE_ANSWER,
      payload: data,
    })
  // })
};

export const resetAnswer = () => ({
  type: RESET_ANSWER,
});