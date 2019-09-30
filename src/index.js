import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import Routes from './routes';
import Header from './pages/Header/index';

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <Routes />
    </>
  );
}

export default App;
