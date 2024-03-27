import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuthentication } from './AuthContext';

function PrivateRoute({children}) {
    const {user} = useAuthentication();
    if(!user){
        return (<Navigate to="/login" />)
    }
  return  children;
}

export default PrivateRoute