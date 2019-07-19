import React from 'react';

const Recipe = (props) => {
    const { name, course, technique, ingredients } = props.data
    return(
        <div className='recipe' id={props.data.id}>
            <h1>Name: {name}</h1>
            <h3>Course: {course}</h3>
            <h3>Technique: {technique}</h3>
            <h3>Ingredients: {ingredients}</h3>
            <ul>
                {ingredients.map(ingredient => (
                    <li>ingredient</li>
                ))}
            </ul>
        </div>
    )
}

export default Recipe;