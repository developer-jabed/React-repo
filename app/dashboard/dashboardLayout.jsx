import React from 'react';
import { Outlet } from 'react-router';

const dashboardLayout = () => {
    return (
        <div>
            <h2>layout here</h2>







            <Outlet></Outlet>
        </div>
    );
};

export default dashboardLayout;