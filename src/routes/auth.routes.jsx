import { Routes, Route, Navigate } from 'react-router-dom'

import {SignIn} from '../pages/SignIn'
import {SignUp} from '../pages/SignUp'


export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" element={<SignIn></SignIn>}></Route>
            <Route path="/register" element={<SignUp></SignUp>}></Route>

            <Route path="*" element={<Navigate to="/"></Navigate>} ></Route> 
        
        </Routes>
    )
}
