import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import Registration from '../Components/Registration';
import Login from '../Components/Login';
import PrivateRoutes from './PrivateRoutes';
import HomePage from '../Components/HomePage';
import PublicRoutes from './PublicRoute';

export default function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Registration />} exact />
            <Route path="/login" element={<PublicRoutes><Login /></PublicRoutes>} exact />
            <Route path="/registration" element={<Registration />} exact />
            <Route path="/home" element={<PrivateRoutes><HomePage /></PrivateRoutes>} exact />
        </Routes>
    )
}
