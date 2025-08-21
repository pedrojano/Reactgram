import './Auth.css';

// Components
import { Link } from 'react-router-dom';
import Message from '../../components/Message';

// Hooks
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux



const Login = () => {
  return (
    <div id='login'>
      <h2>Reactgram</h2>
      <p className="subtitle"> Faça o login para ver o que há de novo!</p>
      {/* <form on></form> */}
    </div>
  )
}

export default Login