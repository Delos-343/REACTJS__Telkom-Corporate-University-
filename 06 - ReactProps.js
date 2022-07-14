
function App() {
    return(
        <div>
            <HelloWorld title="World" />
        </div>
    );
}

function HelloWorld(props) {
    return(
        <h1> Hello {props.title} </h1>
    );
}

// Default props alternative
/*
    HelloWorld.defaultProps = {
        title: "Telkom University"
    }
*/

// Class constructor for HelloWorld (alternative)

class HelloWorld extends Component {
    render() {
        return
            <HelloWorld title="World" />
    }
}

export default App;
