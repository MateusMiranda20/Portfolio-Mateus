import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/globalStyles'
import Routes from './routes/routes'
ReactDOM.render(
    <>
        <Routes />
        <GlobalStyle />
    </>, document.getElementById('root'));

