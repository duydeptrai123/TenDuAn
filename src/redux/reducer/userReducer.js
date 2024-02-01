import {GET_USER, RESET_USER} from "../action/userAction";

const initialValue = {
    name:'',
    password:''
};

export default function userReducer(state = initialValue, action) {
    console.log('010101010duy', action.data)
    
    // console.log('vaooo 22')
    switch (action.type) {
        case GET_USER:
            return {
                user: action.data
            }
        case RESET_USER:
            return {
                user: initialValue
            }
        default:
            return state;
    }
}