import { ADD_ANTREO, DELETE_ANTREO, GET_ANTREO, SET_PRODUCT_LOADING, UPDATE_ANTREO } from "../action/antreoAction";

const initialValue = {
    isLoading: false,
    antreo: []
};

export default function antreoReducer(state = initialValue, action) {
    // console.log('010101010duy1122', action)
    switch (action.type) {
        case SET_PRODUCT_LOADING:
            return {
                antreo: [],
                isLoading: true
            }
        case GET_ANTREO:
            return {
                antreo: action.data,
                isLoading: false
            }
        case DELETE_ANTREO:
            return antreo
        case UPDATE_ANTREO:
            const { id, DataItem } = action.payload;
            const updatedAntreoList = state.antreo.map(item =>
                item.id === id ? { ...item, ...DataItem } : item
            );
            // console.log('dataUpdate',updatedAntreoList)
            return {
                ...state,
                updatedAntreoList
            };
        case ADD_ANTREO:
            return {
                antreo: action.data
                // antreo: [...state.data, action.payload],
            }
        default:
            return state;
    }
}