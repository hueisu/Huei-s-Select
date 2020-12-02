import React from 'react';
import data from "./data";
import Card from './components/Card';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="grid-container">
      <Header />
      <main>
        <div className="row center">
          {data.products.map((product) => {
            return (
              <Card
                key={product._id}
                img={product.image}
                name={product.name}
                price={product.price}
              />
            )
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
