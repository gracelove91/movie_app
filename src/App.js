import React from 'react';


function Food({name, picture}) {
    return <div>
        <h2> I Like {name}</h2>
        <img src={picture} />
    </div>
}

const foodsILike = [
    {
        name: "Kimchi",
        image: "http://assets.epicurious.com/photos/57990a15437fcffe02f722fd/master/pass/traditional-napa-cabbage-kimchi.jpg"
    },
    {
        name: "Galbi",
        image: "https://c7.staticflickr.com/6/5531/30503823454_a75aae1f48_z.jpg"
    }
];


function App() {
    return (
        <div>
            {foodsILike.map(dish => {
                return <Food name={dish.name} picture={dish.image}/>
            })}
        </div>
    );
}

export default App;