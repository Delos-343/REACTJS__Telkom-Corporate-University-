
/* Node, Npm, and Git

    * Install React manually with Git
        mkdir myReactApp
        cd myReactApp
        git init
        
        ... fill user credentials ...

        npm install react react-dom --save

        npm install webpack webpack-dev-server webpack-cli --save

        npm install babel
        npm install babel-core babel-loader
                    babel-preset-env babel-preset-react
                    html-webpack-plugin  --save
        
    * Creating the src folder
        mkdir src
        cd src
        echo> index.html App.js
              index.js index.css


    * Install React with Npm
        npm install react
        npm install create-react-app

    * create-react-app
        cd Desktop
        npx create-react-app my-app
        cd my-app
        npm run start
*/


const HelloWorld = () => {
    return (
        <div>
            <h1> Hello World </h1>
        </div>
    );
}

function App() {
    return(
        <div>
            <HelloWorld />
        </div>
    );
}

export default App;
