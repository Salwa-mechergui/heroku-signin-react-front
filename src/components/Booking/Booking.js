// import React, {useEffect, useState} from 'react';
// // import React from 'react'
// import TextField from '@material-ui/core/TextField'
// import Autocomplete, { createFilterOptions }  from '@material-ui/lab/Autocomplete';
// import {connect} from 'react-redux'
// import {searchUsers, searchUserbyid, searchPassengers, searchPassengerbyid, searchCompanies, 
// searchCompanybyid, searchRides, searchRidebyid} from '../../reducers/actions/bookingActions/bookAction'
// import CircularProgress from '@material-ui/core/CircularProgress';

//   const filterOptions = createFilterOptions({
//     matchFrom: 'start',
//     stringify: (option) => option.first_name,
//   });

// function Booking (props) {
//   const [frontUsers, setFrontUsers] = useState([])
//   const [data, setData] = useState(true)
//   useEffect(() => {
//     props.searchUsers(1)
//     setData(false)
//   }, [data]);

//  var users =[]
//   useEffect(() => {
//     users=props.frontUsers
//     setFrontUsers(users)
//   }, [props.frontUsers]);

  
//   // useEffect(() => {
//   //   props.searchUsers(1)
//   //   setData(false)
//   // }, [data]);
 
// return (
//   <div>
//     {frontUsers.length? 
//     <Autocomplete
//       id="filter-demo"
//       options={frontUsers}
//       getOptionLabel={(option) => option.first_name}
//       filterOptions={filterOptions}
//       style={{ width: 300 }}
//       renderInput={(params) => <TextField {...params} label="Custom filter" variant="outlined" />}
//  />:"there is no data"
// }
//  {console.log(props.frontUsers)}
//  </div>
//   );
// }


// const mapStateToProps = state => ({
//     frontUsers: state.bookingReducer.frontUsers,
//     passengers: state.bookingReducer.passengers,
//     companies: state.bookingReducer.companies,
//     rides: state.bookingReducer.rides
// });
// export default connect(mapStateToProps, {searchUsers, searchUserbyid, searchPassengers, searchPassengerbyid, 
//     searchCompanies, searchCompanybyid, searchRides, searchRidebyid})(Booking);

// // // export default Booking;








// //   const filterOptions = createFilterOptions({
// //     // config.limit(10),
// //     matchFrom: 'start',
// //     stringify: (option) => option.first_name,
// //   });
 
  
// // function sleep(delay = 0) {
// //   return new Promise((resolve) => {
// //     setTimeout(resolve, delay);
// //   });
// // }

// // function Booking(props) {
// //   const [data, setData] = useState(true)
// //   const [frontUsers, setFrontUsers] = useState([])
// //   const [open, setOpen] = React.useState(false);
// //   const [options, setOptions] = React.useState([]);
// //   const loading = open && options.length === 0;
// //   const [value, setValue] = React.useState(options[0]);
// //   const [inputValue, setInputValue] = React.useState('');

//   // useEffect(() => {
//   //       props.searchUsers(1)
//   //       setData(false)
//   //     }, [data]);

//   //    var users =[]
//   //     useEffect(() => {
//   //       users=props.frontUsers
//   //       setFrontUsers(users)
//   //     }, [props.frontUsers]);
     
// //   const defaultProps = {
// //     options: props.frontUsers,
// //     getOptionLabel: (option) => option.first_name,
// //   };
// //   React.useEffect(() => {

// //     let active = true;

// //     if (!loading) {
// //       return undefined;
// //     }

// //     (async () => {
// //       const response = await props.searchUsers(1);
// //       await sleep(1e3); // For demo purposes.
// //       const frontUsers = await response.json();
      

// //       if (active) {
// //         setOptions(Object.keys(frontUsers).map((key) => frontUsers[key].first_name));
// //       }
// //     })();

// //     return () => {
// //       active = false;
// //     };
// //   }, [loading]);

// //   React.useEffect(() => {
// //     if (!open) {
// //       setOptions([]);
// //     }
// //   }, [open]);

// //   return (
// //     <div>
// //       {console.log(props.frontUsers)}
// //       {console.log("state of ", frontUsers)}

// //     <Autocomplete
// //     value={value}
// //     {...defaultProps}
// //       id="asynchronous-demo"
// //       style={{ width: 300 }}
// //       open={open}
// //       onOpen={() => {
// //         setOpen(true);
// //       }}
// //       onClose={() => {
// //         setOpen(false);
// //       }}
// //       getOptionSelected={(option, value) => option.first_name === value.first_name}
// //       getOptionLabel={(option) => option.first_name}
// //       options={frontUsers}
// //       loading={loading}
// //       filterOptions={filterOptions}
// //       style={{ width: 300 }}
// //       onChange={(event, newValue) => {
// //           setValue(newValue);
// //         }}
// //         inputValue={inputValue}
// //         onInputChange={(event, newInputValue) => {
// //           setInputValue(newInputValue);
// //         }}
// //       renderInput={(params) => (
// //         <TextField
// //           {...params}
// //           label="Customers"
// //           variant="outlined"
// //           InputProps={{
// //             ...params.InputProps,
// //             endAdornment: (
// //               <React.Fragment>
// //                 {loading ? <CircularProgress color="inherit" size={20} /> : null}
// //                 {params.InputProps.endAdornment}
// //               </React.Fragment>
// //             ),
// //           }}
// //         />
// //       )}
// //     />
// //     <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
// //     <div>{`inputValue: '${inputValue}'`}</div>
// //     <br />
// // </div>
// //   );
// // }

