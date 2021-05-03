import React from 'react';

function Food({fav}){
  return (
    <h3>I love {fav}</h3>
  );
}

function App() {
  return (
    <div>
      <h1>Hello!!</h1>
      <Food fav="Kimchi" />
      <Food fav="ahi" />
      <Food fav="Kfhi" />
    </div>
  );
}

export default App;
