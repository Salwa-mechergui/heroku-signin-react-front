import {GET_FRONTUSERS, GET_FRONTUSER, GET_PASSENGERS, GET_PASSENGER, GET_COMPANIES, GET_COMPANY, GET_RIDE, GET_RIDES} from '../actions/bookingActions/bookTypes';

export const initialState = {
    frontUsers: [],
    frontUser: [],
    passengers:[],
    passenger:[],
    companies:[],
    company:[],
    rides:[],
    ride:[],
    loading: true
  };
  
const bookingReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_FRONTUSERS:
            return {
                ...state,
                frontUsers:action.payload,
                loading: false
            };
        case GET_FRONTUSER:
            return {
                ...state,
                frontUser:action.payload,
                loading: false
            };
        case GET_PASSENGERS:
            return {
                ...state,
                passengers:action.payload,
                loading: false
            };
        case GET_PASSENGER:
            return {
                ...state,
                passenger:action.payload,
                loading: false
            };
        case GET_COMPANIES:
            return {
                ...state,
                companies:action.payload,
                loading: false
            };
        case GET_COMPANY:
            return {
                ...state,
                company:action.payload,
                loading: false
            };
        case GET_RIDES:
            return {
                ...state,
                rides:action.payload,
                loading: false
            };
        case GET_RIDE:
            return {
                ...state,
                ride:action.payload,
                loading: false
                }; 
         
                      
        default:
            return state;
    }
};

export default bookingReducer;
