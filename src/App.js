import { useState } from 'react';
import './App.css';
import axios from 'axios';
import RecipeTitle from './recipetitle/RecipeTitle';
import React, { Component } from 'react';
import food from './assets/food.png'


function App() {
  const YOUR_APP_ID = '0960b891';
  const YOUR_APP_KEY = '64fb3aeb85b88e4f439b961fad558f9d';
  const [recipe, setrecipe] = useState([]);
  const [healthlabel, setHealthlabel] = useState("vegan");
  const [query, setQuery] = useState("");
  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthlabel}`;

  const getrecipeinfo = async () => {
    var result = await axios.get(url);
    setrecipe(result.data.hits);
    console.log(result.data.hits);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getrecipeinfo();
  };
  return (
    <div className="App">
      <div className='nav'>
        <div className='header'>
          <h1 onClick={getrecipeinfo}>
            Food Recipe Hub 
          </h1>          
            <img src={food} alt='reciepe' className='image'/>         
        </div>
        <form className='app--searchform' onSubmit={onSubmit}>
          <input
            className='app--search'
            type='text'
            placeholder='type ingrediants.....'
            autoComplete='off'
            value={query}
            onChange={(e) => { setQuery(e.target.value) }}>
          </input>
          <select className='app--healthlabls'>
            <option value='vegan' onClick={() => setHealthlabel('vegan')}>vegan</option>
            <option value='vegetarian' onClick={() => setHealthlabel('vegetarian')}>vegetarian</option>
            <option value='low-sugar' onClick={() => setHealthlabel('low-sugar')}>low-sugar</option>
            <option value='dairy-free' onClick={() => setHealthlabel('dairy-free')}>dairy-free</option>
            <option value='immuno-supportive' onClick={() => setHealthlabel('immuno-supportive')}>immuno-supportive</option>
          </select>
          <input className='app--submit' type='submit' value='Get-recipe' ></input>
        </form>
      </div>

      <div className='recipetitle'>
        {recipe.map((recipe) => {
          return <RecipeTitle recipe={recipe} />
        })}

      </div>
    </div>
  );
}

export default App;



