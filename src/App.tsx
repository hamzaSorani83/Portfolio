import React from 'react';
import './App.css';
import Layout from './Components/Layout/Layout';
import ThemeContextProvider from './Context';

function App() {
  return (
    <div className={["App"].join(" ")}>
      <ThemeContextProvider>
        <Layout />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
