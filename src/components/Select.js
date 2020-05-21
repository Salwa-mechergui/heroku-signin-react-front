// import React, { Component } from 'react'
// import {connect} from 'react-redux'
// import {searchUsers, searchUserbyid, searchPassengers, searchPassengerbyid, searchCompanies, 
// searchCompanybyid, searchRides, searchRidebyid} from '../reducers/actions/bookingActions/bookAction'
// import 'bootstrap/dist/css/bootstrap.css';

// import ReactSelect from "react-select"

// class MultipleSelect extends React.Component {
  
//   constructor(props) {
//     super(props)
//     this.hiddenSelect = React.createRef()
//   }
 

//   state = {
//     selectedOptions: this.props.frontUsers.filter(option => option.selected),
//   }

//   componentDidMount(){
//     this.props.searchUsers(1);
//     // this.props.searchUserbyid(11075);
//     this.props.searchPassengers();
//     {console.log(this.props.frontUsers)}
//     {console.log(this.props.passengers)}
//     {console.log(this.props.companies)}
//     {console.log(this.props.rides)}
   
// }
  

//   // the react-select only gives us an array of selected option
//   // so we generate a "fake" change event on our 'native' select
//   handleChange = (selectedOptions) => {
//     this.setState(() => ({ selectedOptions }), () => {
//       // ! this is a bit hacky.. use at your own risk ;) !
//       const event = new Event("change", { bubbles: true })
//       this.hiddenSelect.current.dispatchEvent(event)
//     })
//      this.props.searchUsers(1);
//      this.props.searchUserbyid();
//      this.props.searchPassengers(selectedOptions);
    

//     const frontUsers = this.props.frontUsers;
//     const frontUser = this.props.frontUser;
    

//     this.setState({
//         frontUser: frontUser,
//         frontUsers: frontUsers,
//     });
//   }
  
//   handleNativeChange = (event) => {
    
//   }

//   render() {
//     const { first_name, frontUsers } = this.props
//     const { selectedOptions } = this.state

//     return (
//       <div>
//         <ReactSelect
//           value={selectedOptions}
//           onChange={this.handleChange}
//           options={frontUsers}
//           isMulti
//           closeMenuOnSelect={false}
//         />
//         <select
//           multiple
//           ref={this.hiddenSelect}
//           name={this.props.first_name}
//           onChange={this.handleNativeChange}
//           value={selectedOptions.map(option => option.value)}
//           readOnly
//           className="d-none">
//           {selectedOptions.map(option => <option key={option.label} value={option.value}>{option.label}</option>)}
//         </select>
//       </div>
//     )
//   }
// }

// const mapStateToProps = state => ({
//   frontUsers: state.bookingReducer.frontUsers,
//   passengers: state.bookingReducer.passengers,
//   companies: state.bookingReducer.companies,
//   rides: state.bookingReducer.rides
// });
// export default connect(mapStateToProps, {searchUsers, searchUserbyid, searchPassengers, searchPassengerbyid, 
//   searchCompanies, searchCompanybyid, searchRides, searchRidebyid})(MultipleSelect);