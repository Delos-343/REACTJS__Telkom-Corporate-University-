import React from 'react';

class App extends React.Component {

   render() {

      return (
         <div>
            <h3> Function: { this.props.propFunc(1) } </h3>
            <h3> String: { this.props.propString } </h3>
            <h3> Object: { this.props.propObject.objectNameA } </h3>
            <h3> Object: { this.props.propObject.objectNameB } </h3>
         </div>
      );
   }
}

App.propTypes = {
    propFunc: React.PropTypes.func,
    propString: React.PropTypes.string,
    propObject: React.PropTypes.object,
}

App.defaultProps = {

    propFunc: function(e){return e},

    propString: "Hello World",

    propObject: {
        objectNameA: "Module 07",
        objectNameB: "ReactJS",
    },
}


// ReactJS Custom Validators

/*
const HelloWorld = React.createClass({

    App.propTypes = {

       customProp: function(props, propName, componentName) {

            if (! item.isValid(props[ propName ])) {

              return new Error('Validation Error!');
            }
        }
    },
})
*/


export default App;
