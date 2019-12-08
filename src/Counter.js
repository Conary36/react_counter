import React, {Component} from 'react';

export default class Counter extends Component{
    constructor(props){
        super(props)

        this.state={
            count: props.initialCount
        }
    }

    render(){
        console.log('Render Counter')
        return(
        <div>
            <button onClick={()=> this.changeCount(-1)}>-</button>
            <span>{this.state.count}</span>
            <button onClick={() => this.changeCount(1)}>+</button>
        </div>
        )
    }

changeCount(amount){
    // this.setState({count: this.state.count + amount})asychronous 
    this.setState(prevState =>{
        return {count: prevState.count + amount}//calls the previos state...this is function version
    })
    // this.setState({count: 0})//this defaults state to 0
    // this.setState(prevState =>{
    //     return{ count: prevState.count + amount}//this is easy to set state back...non function
    // })
}
}