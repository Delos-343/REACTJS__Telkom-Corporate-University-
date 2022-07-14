import helloWorld from "./components/HelloWorld";

// const HelloWorld = <h1> Hello World </h1>;

const HelloWorld = () => {

    return (
        <div>
            {/* <h1> Hello World </h1> */}
            <helloWorld />
        </div>
    );
}

export default HelloWorld;


// Using Rerouers from React-Router-DOM
/*
    import HomePage from '../routes/HomePage';

    function App() {
        return(
            <>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                </Routes>
            </>
        );
    }

    export default App;
*/

// Using JSX attributes
/*
    function App() {
        return(
            <div>
                <div className="container" id="wrapper">
                    <a href="https://www.google.com/">
                        Google
                    </a>
                </div>
            </div>

            // Custom attributes
            <div>
                <a data-testCase="test-case" href="https://www.google.com/">
                    Google
                </a>
            </div>
        );
    }
*/
