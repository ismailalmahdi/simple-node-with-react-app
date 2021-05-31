import React from 'react'
import Header from './Header'



class App extends React.Component {


    state = {
        pageHeader : "Hello there"
    }

    componentDidMount(){
        // timers, listeners 
    }

    componentWillUnmount(){
        // clearn timers , listeners
    }
    
    render() {
        return (
          <div className="App">
            <Header message={this.state.pageHeader} /> 
            <div>
              ...
            </div>
          </div> 
        )
    }
} 


export default App