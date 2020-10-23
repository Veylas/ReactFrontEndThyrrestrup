import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import Header from '../Header';
import { Provider } from 'react-redux';
import store from '../store/store';
import FleetList from './FleetList'
import { addVehicles } from '../../actions/vehicles';


class FleetVehicles extends React.Component {
    componentDidMount() {
  axios.get('/fleet')
         .then(response => {
           console.log(response.data);
           //store.dispatch(addVehicles(response.data.results))
       })
        }
    
      render()  {
      return ( 
    <div className="main-section">
    <Header/>
   <FleetList/>
  </div>
 ) 
}
}
export default FleetVehicles;