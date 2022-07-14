import React from 'react'

// Standard functional component

function Welcome(props) {
  return (
    <h1>
        Hello {props.name}
    </h1>
  )
}

// Complex Arrow Function
/*
function Welcome = ({data}) => {
  return (
    <h1>
        Hello {data.user?.name}
    </h1>
  )
}
*/

function App() {
    return (
      <div>
          <Welcome name="Telkom" />
          <Welcome name="Corporate" />
          <Welcome name="University" />
      </div>
    )
}

class Welcome extends React.Component {
    render() {
        return
            <h1>
                Hello {props.name}
            </h1>
    }
}

class ClassCount extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            count: 0,
        }
    }
}

export default App;