import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


const ProtectedRoute = ({ component: Component, ...rest}) => {
    const islogged =useSelector(state => state.UserReducer);
console.log(islogged)
    return (
        <Route
          {...rest}
          render={(props) => {
              if(islogged){
                  return <Component {...props}/>
              }else{
                  return(
                      <Redirect to={{pathname: '/', state:{from:props.location}}}/>
                  )
              }
          }}
        />
            
        
    )
}

export default ProtectedRoute
