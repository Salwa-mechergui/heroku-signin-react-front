import {GET_FRONTUSERS, GET_FRONTUSER, GET_PASSENGERS, GET_PASSENGER, GET_COMPANIES, GET_COMPANY, GET_RIDE, GET_RIDES} from './bookTypes';
import axios from "axios";

export const searchUsers = (saas_company_id) => async dispatch => {
  try {
    const res = await axios.get(`/customer/${saas_company_id}`);
    dispatch({
      type: GET_FRONTUSERS,
      payload: res.data.Value
    });
  } catch (error) {
    console.log(error);
  }
};

export const searchUserbyid = (saas_company_id, id) => async dispatch => {
  try {
    const res = await axios.get(`/customer/${saas_company_id}/${id}`);
    dispatch({
      type: GET_FRONTUSER,
      payload: res.data.Value
    });
  } catch (error) {
    console.log(error);
  }
};

export const searchPassengers = (customer_id) => async dispatch => {
  try {
    const res = await axios.get(`/passenger/${customer_id}`);
    dispatch({
      type: GET_PASSENGERS,
      payload: res.data.Value
    });
  } catch (error) {
    console.log(error);
  }
};

export const searchPassengerbyid = (customer_id, passenger_id) => async dispatch => {
  try {
    const res = await axios.get(`/passenger/${customer_id}/${passenger_id}`);
    dispatch({
      type: GET_PASSENGER,
      payload: res.data.Value
    });
  } catch (error) {
    console.log(error);
  }
};
export const searchCompanies = (saas_company_id) => async dispatch => {
  try {
    const res = await axios.get(`/companies/${saas_company_id}`);
    dispatch({
      type: GET_COMPANIES,
      payload: res.data.Value
    });
  } catch (error) {
    console.log(error);
  }
};

export const searchCompanybyid = (saas_company_id, id) => async dispatch => {
  try {
    const res = await axios.get(`/companies/${saas_company_id}/${id}`);
    dispatch({
      type: GET_COMPANY,
      payload: res.data.Value
    });
  } catch (error) {
    console.log(error);
  }
};
export const searchRides = (saas_company_id, customer_id) => async dispatch => {
  try {
    const res = await axios.get(`/rides/${saas_company_id}/${customer_id}`);
    dispatch({
      type: GET_RIDES,
      payload: res.data.Value
    });
  } catch (error) {
    console.log(error);
  }
};

export const searchRidebyid = (saas_company_id, customer_id, id) => async dispatch => {
  try {
    const res = await axios.get(`/rides/${saas_company_id}/${customer_id}/${id}`);
    dispatch({
      type: GET_RIDE,
      payload: res.data.Value
    });
  } catch (error) {
    console.log(error);
  }
};

// import React, { useReducer, useEffect } from "react";
// // import { initialState, reducer } from "../store/reducer";
// // import {SEARCH_CUSTOMER_SUCCESS, SEARCH_CUSTOMER_REQUEST, SEARCH_CUSTOMER_FAILURE} from './bookTypes';
// import axios from "axios";
// // import reducer from './Reducer/bookReducer'
// import Booking from './components/Booking'
// import Search from './components/Booking/Booking'

// export const searchUser = () => {

//   useEffect(() => {
//     axios.get("/frontUser").then(jsonResponse => {
//       dispatch({
//         type: "SEARCH_CUSTOMER_SUCCESS",
//         payload: jsonResponse.data.Search
//       });
//     });
//   }, []);

//   const search = searchValue => {
//     dispatch({
//       type: "SEARCH_CUSTOMER_REQUEST"
//     });

//     axios(`"https://localhost:8000/"${searchValue}`).then(
//       jsonResponse => {
//         if (jsonResponse.data.Response === "True") {
//           dispatch({
//             type: "SEARCH_CUSTOMER_SUCCESS",
//             payload: jsonResponse.data.Search
//           });
//         } else {
//           dispatch({
//             type: "SEARCH_CUSTOMER_FAILURE",
//             error: jsonResponse.data.Error
//           });
//         }
//       }
//     );
//   };

//   const { Bookings, errorMessage, loading } = state;

//   const dataFront =
//     loading && !errorMessage ? (
//       <img className="spinner" src="https://svgshare.com/i/EmH.svg" alt="Loading spinner" />
//     ) : errorMessage ? (
//       <div className="errorMessage">{errorMessage}</div>
//     ) : (
//       frontUser.map((frontUser, index) => (
//         <Booking key={`${index}-${frontUser.first_name}`} frontUser={Booking} />
//       ))
//     );

//   return (
//     <div className="bookingAction" id='root'>
//       <div className="m-container">

//         <Search search={search} />

//         <p className="App-intro">Search customer</p>

//         <div className="booking">{dataFront}</div>
//       </div>
//     </div>
//   );
// };

// export default search;
