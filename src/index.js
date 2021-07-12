import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import Navigation from './components/UI/Navigation';
import Footer from './components/UI/Footer';
import './includes/bootstrap'
import configureStore from './redux/configureStore';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
// ** React Toastify
import 'react-toastify/dist/ReactToastify.css';

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <Router>
        <Navigation />
          <App />
          <ToastContainer newestOnTop />
        <Footer />
    </Router>
  </Provider>,
  document.getElementById('root')
);

