import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Products from './components/Products';
import About from './components/About';
import Footer from './components/Footer';
import Client from './components/Client';
import Services from './components/Services';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Products />
        <Services />
        <Client />
        <About />
        <Footer />
      </main>
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>© 2023-2024. All Rights Reserved |
        Manasvi Technologies (OPC) PVT. LTD</p>
      </footer>
    </div>
  );
}

export default App;
