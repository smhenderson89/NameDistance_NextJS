'use client' 

import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function ToastNotifications() {
        const success = () => toast.success("Results Updated!", {
            position :'top-center',
            autoClose : 1000,
            closeOnClick :true,
            limit : 2,
            theme : "light"
        });

        const error = () => toast.error("Name must be ≥ 2 letters", {
            position :'top-center',
            autoClose : 3000,
            closeOnClick :true,
            limit : 2,
            theme : "light"
        });

    return (
        <div>
            {/* <button onClick={success}>Success!</button>
            <button onClick={error}>Too short</button> */}
            <ToastContainer 
                position='top-center'
                autoClose={5000}
                closeOnClick={true}
                type="sucess"
                limit = {2}
                theme="light"
                hideProgressBar={false}
            />
        </div>
  )
}

export default ToastNotifications