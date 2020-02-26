import React from 'react';
import propTypes from 'prop-types';


function Food({name, picture, rating}) {
    return <div>
        <h2> I Like {name}</h2>
        <h4>{rating}/5</h4>
        <img src={picture}  alt={name}/>
    </div>
}

const foodsILike = [
    {
        id: 1,
        name: "Kimchi",
        image: "http://assets.epicurious.com/photos/57990a15437fcffe02f722fd/master/pass/traditional-napa-cabbage-kimchi.jpg",
        rating: 3.1
    },
    {
        id: 2,
        name: "Galbi",
        image: "https://c7.staticflickr.com/6/5531/30503823454_a75aae1f48_z.jpg",
        rating: 4.5
    }
];

// function renderFood(dish) {
//     return <Food name={dish.name} picture={dish.image}/>
// }

Food.propTypes = {
    name: propTypes.string.isRequired,
    picture: propTypes.string.isRequired,
    rating: propTypes.number.isRequired
};

function App() {
    return (
        <div>
            {/*{foodsILike.map(renderFood)}*/}
            {foodsILike.map(dish => {
                return <Food
                    key={dish.id}
                    name={dish.name}
                    picture={dish.image}
                    rating={dish.rating}/>
            })}
        </div>
    );
}

export default App;