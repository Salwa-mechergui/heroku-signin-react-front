import React, { useEffect, useState } from "react";
import { searchUsers ,searchUserbyid, searchPassengers, searchPassengerbyid, searchCompanies, searchRides} from "../../reducers/actions/bookingActions/bookAction";
import { connect } from "react-redux";
import { NativeSelect, FormControl } from "@material-ui/core";

function RideCreation(props) {
  const [data, setData] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [i, setI] = useState(0);
  const [spinner, setSpinner] = useState(true);
  const [value, setValue] = React.useState(null);

  // handleChange = (selectedOptions) => {
  //   this.setState(() => ({ selectedOptions }), () => {
  //     // ! this is a bit hacky.. use at your own risk ;) !
  //     const event = new Event("change", { bubbles: true })
  //     this.hiddenSelect.current.dispatchEvent(event)
  //   })
  useEffect(() => {
    const timer = setTimeout(() => {
      setSpinner(props.load);
    }, 3000);
    console.log(props.bookUsers);
    return () => clearTimeout(timer);
  }, [spinner]);

  useEffect(() => {
    props.searchUsers(1);
    setData(true);
  }, [data]);

  useEffect((id, passenger_id) => {
    props.searchUserbyid(1,id);
    props.searchPassengers(1);
    // props.searchPassengersbyid(id, passenger_id)
    setIsSelected(true);
  }, [isSelected]);


  const handleChange = async (id, passenger_id) => {
    await   props.searchUserbyid(1,id);
    await   props.searchPassengers(id);
    // await   props.searchPassengerbyid(id, passenger_id);
    await   props.searchCompanies(1);
    await   props.searchRides(1, id)
  };
  // const handleChangeSelect = async (id, passenger_id) => {
  //   await   props.searchPassengersbyid(id, passenger_id);
  // }
   
  return (
    <div>
      {spinner && !data && !isSelected? (
        <img className="spiner" src="https://svgshare.com/i/EmH.svg" alt="" />
      ) : (
        <>
        <input list="string" placeholder="Customer" style={{ width: 300 }} className="mt-4 col-md-8 col-offset-4" />
        <datalist id="string">
        <FormControl>
          <NativeSelect
            defaultValue=""
            onChange={(e) => handleChange(e.target.value)}
          >
            <option value="1">select a customer</option>
            {props.frontUsers &&
              props.frontUsers.map(({ first_name, id_front_user }, i) => (
                <option key={i} value={id_front_user}>
                  {first_name}
                </option>
              ))}
          </NativeSelect>
        </FormControl>
        </datalist>
        <input list="str" placeholder="Passenger" style={{ width: 300 }} className="mt-4 col-md-8 col-offset-4" />
        <datalist id="str">
        <FormControl>
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleChange(e.target.value)}
        >
          <option value="1">select a passenger</option>
          {props.passengers &&
            props.passengers.map(({passenger_id, first_name, last_name, phone_number }, i) => (
              <option key={i} value={passenger_id}>
                {first_name}
              </option>
            ))}
        </NativeSelect>
      </FormControl>
      </datalist>
      </>
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  frontUsers: state.bookingReducer.frontUsers,
  passengers: state.bookingReducer.passengers,
  passenger: state.bookingReducer.passenger,
  companies: state.bookingReducer.companies,
  rides: state.bookingReducer.rides,
  load: state.bookingReducer.loading,
});
export default connect(mapStateToProps, { searchUsers,searchUserbyid, searchPassengers, searchPassengerbyid, searchCompanies, searchRides })(RideCreation);