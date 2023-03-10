import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [imgs, setImgs] = useState([]);

  const generateRandomImg = () => {
    const unsplashURL = "https://source.unsplash.com/random/";
    const rows = 6;

    const getRandomSize = () => `${getRandomNr()}x${getRandomNr()}`;
    const getRandomNr = () => Math.floor(Math.random() * 10) + 300;

    const newImgs = [];
    for (let i = 0; i < rows; i++) {
      newImgs.push(`${unsplashURL}${getRandomSize()}`);
    }

    setImgs(newImgs);
  };

  useEffect(() => {
    generateRandomImg();
  }, []);

  return (
    <div>
      <div className="title">
        <button onClick={generateRandomImg}>
          <h1 className="title">Generate Images</h1>
        </button>
      </div>
      <br />
      <div className="container">
        {imgs.map((img, index) => (
          <img key={index} src={img} alt={`Random Image ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default App;
