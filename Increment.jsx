import React, { Component } from 'react';

class Increment extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    //Increments the counter
    incrementValue() {
        this.setState({
            count: this.state.count + 1
        })
    }
    
    render() {
        
        return (
            <>
                <h2 className='lead'>Count - :{this.state.count} </h2>
                <button className='btn btn-success' onClick={()=>this.incrementValue()}>Count</button>
            </>
        );
    }
}

export default Increment;