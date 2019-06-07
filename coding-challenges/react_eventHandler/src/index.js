import React from 'react'
import ReactDOM from 'react-dom'

class EventHandler extends React.Component{
buttonClicked(event){
    console.log(event.target.value);
    alert("Hey You are Doing Nice !")
}
inputChanged(event){
    console.log(event.target.value);
   
}

render() {
    return (
    <div>
    <br />
    <input type = "text" onChange ={this.inputChanged} />
    <br />
    <br />
    <button className = "btn btn-success" onClick={this.buttonClicked}>Click Me !</button>
    </div> 
    )
}

}

ReactDOM.render(<EventHandler />, document.getElementById("root"));