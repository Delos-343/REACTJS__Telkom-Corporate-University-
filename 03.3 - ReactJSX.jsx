
// JSX styling : Basic || Inline || Framework
function App() {

    return (
        <>
            {/* BASIC, styled with index.css */}

            <div className="App">
                <h1 className="heading"> Hello World </h1>
            </div>

            {/* INLINE */}

            {/*
            <div className="App">
                <h1 style={ color: "#000", margin-top: "1rem", text-align: "center" }>
                    Hello World
                </h1>
            </div>           
            */}

            {/* FRAMEWORK : Tailwind CSS */}

            {/*
            <div className="grid items-center  justify-center p-5">
                <h1 className="text-4xl font-bold text-blue-500 m-auto">
                    Hello World
                </h1>
            </div>           
            */}
        </>
    );
}

export default App;
