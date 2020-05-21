// import React, { Component } from 'react'
// import {connect} from 'react-redux'
// import {searchUsers, searchUserbyid, searchPassengers, searchPassengerbyid, searchCompanies, 
// searchCompanybyid, searchRides, searchRidebyid} from '../reducers/actions/bookingActions/bookAction'
// import 'bootstrap/dist/css/bootstrap.css';
// // import TextField from '@material-ui/core/TextField';
// // import InputLabel from '@material-ui/core/InputLabel';

//  class Test extends Component {

//     constructor(props) {
//         super(props)
//         this.hiddenSelect = React.createRef()
//       }
   
//     componentDidMount(){
//         this.props.searchUsers(1);
//         // this.props.searchUserbyid(11075);
//         this.props.searchPassengers(this.selectedOption);
//         {console.log(this.props.frontUsers)}
//         {console.log(this.props.passengers)}
//         {console.log(this.props.companies)}
//         {console.log(this.props.rides)}
       
//     }
 
//     handleChange = async (id) => {
//         await   this.props.searchUsers(1);
//         await   this.props.searchUserbyid(id);
        
    
//         const frontUsers = this.props.frontUsers;
//         const frontUser = this.props.frontUser;
        
    
//         this.setState({
//             frontUser: frontUser,
//             frontUsers: frontUsers,
//         });
//       };

//       state = {
//         selectedOptions: this.props.frontUsers.filter(option => option.selected),
//       }
    
//       // the react-select only gives us an array of selected option
//       // so we generate a "fake" change event on our 'native' select
//       handleChange = (selectedOptions) => {
//         this.setState(() => ({ selectedOptions }), () => {
//           // ! this is a bit hacky.. use at your own risk ;) !
//           const event = new Event("change", { bubbles: true })
//           this.hiddenSelect.current.dispatchEvent(event)
//         })
//       }
      
//       handleNativeChange = (event) => {
//         // you can do whatever with the event here.
//         // event.target.options is a good one :wink:
//         // in my case I give it back to `this.props.onChange(event)`
//       }

//     //   handleChange = (e) => {
//     //       console.log(e.target.value)
//     //       console.log(e)


//     //     // this.setState({ selectedOption }); // this will update the state of selected therefore updating value in react-select
//     //     // console.log(`Selected: ${selectedOption.label}`); 
//     //     // console.log(selectedOption); 
//     //     // this.props.searchUserbyid();
//     //     // // this.props.searchUserbyid(customer_id);
//     //   }

//     onChangeFunc(optionSelected) {
//         const saas_company_id = this.saas_company_id;
//         const value = optionSelected.value;
//         const label = optionSelected.label;
//       }

// onInputChanged(e) {
//     console.log(e.target.value);
//   }  

//       handleChangePassenger = async (selectedOption) => {
//         await   this.props.searchPassengers(selectedOption);
//         // await   this.props.searchPassengerbyid(customer_id);
            
//         const passengers = this.props.passengers;
//         const passenger = this.props.passenger;
            
//         this.setState({
//             passengers: passengers,
//             passenger: passenger
//         });
//       };

//     render() {
//         // const { selectedOption } = this.state;
//         // const value = selectedOption && selectedOption.value;
//         // var customer_id=selectedOption.value
//         const { title, name, options } = this.props
//         const { selectedOptions } = this.state
//         return (
//             <div>
//                 <p>{this.props.selectedOption}</p>
//                 <div className={"autocomplete"}>
//                 <input list="string" placeholder="Customer" style={{ width: 300 }} className="mt-4 col-md-8 col-offset-4"   
//                  onChange={this.onInputChanged}/>
//                 <datalist id="string">
//                 <select  defaultValue=""  >
//                     <option value="customer 1" id="string"> </option>
//                     {this.props.frontUsers && this.props.frontUsers.map(
//                         ({saas_company_id, first_name, last_name, email}, i) => (
//                         <option key={i} value={saas_company_id}>{first_name}{last_name}</option>
//                     ))};
//                 </select>
//                 </datalist>
//                 <select
//                       ref={this.hiddenSelect}
//                       name={name}
//                       onChange={this.handleNativeChange}
//                       value={selectedOptions.map(option => option.value)}
//                       readOnly
//                       className="d-none">
//                 {selectedOptions.map(option => <option key={option.label} value={option.value}>{option.label}</option>)}
//                 </select>
//                 </div>
//                 {/* <div>
//                 <input list="string" placeholder="Passenger" style={{ width: 300 }} className="mt-4 col-md-8 col-offset-4"/>
//                 <datalist id="string">
//                 <select  defaultValue="" onChange={e => this.handleChangePassenger(e.target.value)}>
//                     <option value="1" id="string">Search for a passenger</option>
//                     {this.props.passengers && this.props.passengers.map(
//                         ({id, selectedOption, first_name, last_name}, i) => (
//                         <option key={i} value={selectedOption}>{id}{first_name}{last_name}</option>
//                     ))}
//                 </select>
//                 </datalist>
//                 </div> */}
//                 {/* <div>
//                 <select  defaultValue="" onChange={e => this.handleChange(e.target.value)}>
//                     <option value="1">Search for a company</option>
//                     {this.props.companies && this.props.companies.map(
//                         ({saas_company_id, name}, i) => (
//                         <option key={i} value={saas_company_id}>{name}</option>
//                     ))}
//                 </select>
//                 </div> */}
//                 {/* <div>
//                 <InputLabel>rides</InputLabel>
//                 <p>Upcoming rides:{this.props.rides && this.props.rides.map(
//                         ({id, estimate_drop_off}) => (
//                             <p>{estimate_drop_off}</p>
//                 ))}</p>
//                 </div>
//                 <div>
//                 <p>current rides:{this.props.rides && this.props.rides.map(
//                         ({id, estimate_pick_up}, i) => (
//                             <p>{estimate_pick_up}</p>
//                 ))}</p>
//                 </div>                  */}
                
//             </div>
//         )
//     }
// }
// const mapStateToProps = state => ({
//     frontUsers: state.bookingReducer.frontUsers,
//     passengers: state.bookingReducer.passengers,
//     companies: state.bookingReducer.companies,
//     rides: state.bookingReducer.rides
// });
// export default connect(mapStateToProps, {searchUsers, searchUserbyid, searchPassengers, searchPassengerbyid, 
//     searchCompanies, searchCompanybyid, searchRides, searchRidebyid})(Test);