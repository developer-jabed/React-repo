import React from 'react';
import { ToDo } from './ToDo';

// Define the Person component
const Person = () => (
    
        <h1>My name is Jabed</h1>
    
);

// Define the DashboardHome component
const DashboardHome = () => (
    <div>
        <h1 className="text-center text-blue-50 text-3xl">This is the dashboard</h1>
        <Person />
        <ToDo></ToDo>
    </div>
);

export default DashboardHome;
