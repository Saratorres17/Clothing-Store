import React from 'react';
import './index.css';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white-600 text-black py-4 px-6 flex justify-between items-center">
        <div className="text-lg font-bold">Clothing Store</div>
        <nav className="flex items-center space-x-6">
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Sign Up</button>
        </nav>
      </header>

      <main className="text-center py-20 bg-cover bg-center relative" style={{ backgroundImage: 'url(https://cdnb.artstation.com/p/assets/images/images/045/265/153/large/world-of-gaming-sports-banner.jpg?1642330191)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Que cada entreno sea mas comodo.</h1>
          <p className="text-lg mb-8">
          Siente la libertad en cada movimiento, elige comodidad y diseño.
          </p>
          <button className="bg-red-700 hover:bg-red-500 text-white px-6 py-3 rounded">Shop Now</button>
        </div>
      </main>


      <section className="py-12 bg-white" id="shop">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9867cd16-a7c0-4953-9858-bf85791009c1/W+NIKE+FREE+METCON+6.png" alt="Product 1" className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Stylish Jacket</h3>
            <p className="text-gray-600 mb-4">$49.99</p>
            <button className="bg-red-700 hover:bg-red-950 text-white px-4 py-2 rounded">Agregar</button>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c09cf8bc-4d6c-4564-86d6-cc172deab92e/W+NIKE+DUNK+LOW.png" alt="Product 2" className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Casual T-Shirt</h3>
            <p className="text-gray-600 mb-4">$19.99</p>
            <button className="bg-red-700 hover:bg-red-950 text-white px-4 py-2 rounded">Agregar</button>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img src="https://nikeco.vtexassets.com/arquivos/ids/532127/FV5948_102_A.jpg?v=638442180384030000" alt="Product 3" className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Summer Shorts</h3>
            <p className="text-gray-600 mb-4">$29.99</p>
            <button className="bg-red-700 hover:bg-red-950 text-white px-4 py-2 rounded">Agregar</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white-500 text-black py-6 text-center" id="contact">
        <p>&copy; 2025 Clothing Store. Derechos reservados - Sara Torres.</p>
      </footer>
    </div>
  );
}

export default App;
