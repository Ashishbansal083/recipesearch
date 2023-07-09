import './style.css';
import React, { Component } from 'react';

function RecipeTitle({ recipe }) {
        return (
                recipe['recipe']['image'].match(/\.(jpeg|jpg|gif|png)/) != null && (
                        <div className='recipetile'>
                                <div className='imagecontainer'>
                                        <img
                                                className='recipeImage'
                                                src={recipe['recipe']['image']}
                                                alt='recipetile-img'
                                                onClick={() => window.open(recipe['recipe']['url'])} />
                                </div>
                                <div className='title'>
                                        <h3 className='recipeName'
                                                onClick={() => window.open(recipe['recipe']['url'])}>{recipe['recipe']['label']}</h3>
                                </div>


                        </div>
                )
        );
}

export default RecipeTitle;