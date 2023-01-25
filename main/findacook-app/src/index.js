import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import UploadDocuments from './UploadDocuments';
import RegistrationPage from './RegistrationPage';
import GuestPage from './GuestPage';
import './index.css';
import reportWebVitals from './reportWebVitals';
import VerifyPage from './VerifyPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      
        <Route exact path="/" element={<LandingPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegistrationPage/>} />
        <Route path="/guest" element={<GuestPage/>} />
        <Route path="/documentupload" element={<UploadDocuments/>} />
        <Route path="/verify" element={<VerifyPage/>} />
      
    </Routes>
    {/* The various pages will be displayed by the `Main` component. */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
