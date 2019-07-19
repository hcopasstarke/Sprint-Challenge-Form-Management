import React, {useEffect, useState} from 'react';
import RegForm from './forms/RegForm';
import Recipe from './components/Recipe';
import './App.css';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import {useLocalStorage} from './hooks/useLocalStorage';
import { withFormik, Form, Field } from 'formik';
import { axiosWithAuth } from './utils/axiosWithAuth';
import { PrivateRoute } from './utils/PrivateRoute'


function App() {

  return (
    <div className="App">
      <h1>Welcome!</h1>
      <Route path='/' component={RegForm} />
      <PrivateRoute path='/Recipe' component={Recipe} />
    </div>
  );
}

export default App;
