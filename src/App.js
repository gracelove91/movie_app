import React from 'react';


function Food(props) {
    return <h1> I Like {props.favorite}</h1>
}

function Food2({favorite}) {
    return <h1> ￿￿￿￿I Like {favorite} </h1>
}

function App() {
    return (
        <div>
            <h1>Hello!</h1>
            <Food
                favorite={"kimchi"}
                somthing={true}
                blah={["aaa", "bbb"]}
            />
            <Food2
                favorite={"cola"}
            />
        </div>
    );
}

export default App;