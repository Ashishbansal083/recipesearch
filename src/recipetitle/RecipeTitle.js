import React from 'react';
import './style.css';

function RecipeTitle({recipe}) {
    return(
        recipe['recipe']['image'].match(/\.(jpeg|jpg|gif|png)/)!=null && (
        <div className='recipetile'>
                <img 
                className='recipeImage' 
                src={recipe['recipe']['image'] } 
                alt='recipetile-img'
                onClick={()=>window.open(recipe['recipe']['url'])}/>
                <p className='recipeName'>{recipe['recipe']['label']}</p>
        </div>
        )
        );
}

export default RecipeTitle;