import React, { useContext } from 'react';
import { AuthContext } from '../../Contex/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loader} = useContext(AuthContext);
    const location = useLocation();
    if(loader){
        return <progress className="progress w-56"></progress>
    }
    if(!user){
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;