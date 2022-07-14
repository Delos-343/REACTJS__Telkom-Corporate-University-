import React, { useState } from 'react';

// BAsic state-management
/*
function App() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <p> You Clicked : {count} Times </p>
            <button onClick={ () => setCount(count + 1) }>
                CLick Me!
            </button>
        </div>
    );
}
*/

function App() {


    this.state = {
        hasBeenClicked: false,
    }
    
    {/*
        handleClick = () => {
            hasBeenClicked: true,
        }
    */}

    // State-handling with array
    {/*
        const data = () => [

            theme: "blue",
            addressInfo: {
                street: null,
                number: null,
                city: null,
                country: null,
            }
        ]

        this.setState( {
            addressInfo: {
                city: "New York",
            }
        });

        * updated results :
            const data = () => [

            theme: "blue",
                addressInfo: {
                    city: "New York",
                }
            ]
    */}

    return(
        <div>
            <p>
                This button has
                { this.state.hasBeenClicked ? null : "Not" }
                been clicked.
            </p>
            <button onClick={ this.handleclick() }>
                CLick Me!
            </button>
        </div>
    );
}

export default App;
