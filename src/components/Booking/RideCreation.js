import React, {useEffect, useState} from 'react'
import {searchUsers} from '../../reducers/actions/bookingActions/bookAction'
import {connect} from 'react-redux'
import { getByTestId } from '@testing-library/react'


function RideCreation(props) {
const [data, setData] = useState(false)
const [i, setI] = useState(0)
const [spinner, setSpinner]= useState(true)

useEffect(() => {
    const timer = setTimeout(() => {
        setSpinner(props.load);
    }, 3000);
    return () => clearTimeout(timer);
  }, [spinner]);
  
    useEffect(() => {
        props.searchUsers(1)
        setData(true)
    },[data])

const handleChange=(e)=>{
console.log("selected value",e.target.value)
}

    return (
        <div>
            {spinner && !data? <img className="spiner" src="https://svgshare.com/i/EmH.svg" alt="" /> : 
            <div>
                <input list="string" placeholder="Customer" style={{ width: 300 }} className="mt-4 col-md-8 col-offset-4"/>
                <datalist id="string">
                <select  onChange={e=>handleChange(e)} >
                    {props.frontUsers && props.frontUsers.map(
                    ({id_front_user, first_name, last_name, email}, i) => (
                    <option key={i} value={first_name} onChange={(i)=>setI(i)}>{first_name}{last_name}{email}</option>
                    ))};
                </select>
                </datalist>
            </div>
            }
        </div>
    )
}
const mapStateToProps = state => ({
    frontUsers: state.bookingReducer.frontUsers,
    load: state.bookingReducer.loading
});
export default connect(mapStateToProps, {searchUsers}) (RideCreation);