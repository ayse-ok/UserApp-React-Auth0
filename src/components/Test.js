import React, { Component } from 'react'

class Test extends Component {
  constructor(props){
    super(props);
    this.state ={
        a:10
    }

    console.log("Constructor");
    
  }  

  // render dan sonra calisir
  componentDidMount() {
    // api istekleri burda gerçekleşir
    console.log("componentDidMount"); 
    this.setState({
        a:20
    })   
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }
  
  
  // içinde setState yapılmaz
  render() {
    console.log("Render");
    return (
      <div>
        
      </div>
    )
  }
}

export default Test;