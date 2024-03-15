import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Login from './pages/login/login'; 
import DashBoard from './pages/dashboard';// Certifique-se de que o caminho está correto e o nome do arquivo está correto

// Extend Chakra UI theme if needed
const theme = extendTheme({
  // Custom theme properties
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} /> {/* Use 'element' para renderizar componentes */}
          <Route path="/dashboard" element={<DashBoard />} /> 
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
