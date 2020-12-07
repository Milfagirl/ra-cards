import React from 'react';
import './App.css';
import Card from './component/Card';

function App() {
  const card = {
    img: "https://img.amur.info/res/news/180901/660x440/262275a8b8c7b4f0de193bc2dcab0295.jpg",
    header: "Card title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btnText: "Go somewhere"
  }

  return (
    <div className="App">
      <Card className="card" card={card}>
        <img src={card.img} className="card-img-top" alt="..." />
      </Card>
    </div>
  );
}

export default App;
