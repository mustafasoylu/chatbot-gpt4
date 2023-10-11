import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Home from './pages/Home';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
