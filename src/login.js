import React, { useState } from 'react';
import StickyTopNavbar from './components/navbar-header/navbar-header.component';
import SignUpForm from './components/SignUpForm/SignUpForm';

const LogIn = () => {
    return ( 
        <div>
            <StickyTopNavbar/>
            <SignUpForm/>
        </div>
     );
}
 
export default LogIn;