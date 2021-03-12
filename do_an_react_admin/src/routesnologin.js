import React from 'react';
import { Navigate } from 'react-router-dom';
import LoginView from 'src/views/auth/LoginView';

const routesnologin = [
  {
    path: '',
    element: <LoginView />,
    children: [
      { path: '*', element: <Navigate to="/" /> }
    ]
  }
];

export default routesnologin;
