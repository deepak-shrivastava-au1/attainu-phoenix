import React from 'react'
import ReactDOM from 'react-dom'

class EventHandler extends React.Component{
constructor(props){
    super(props);
    this.state = {
        title: "Type Something..."

    }
    this.inputChanged = this.inputChanged.bind(this);
}
inputChanged(event){
    this.setState({
        title: event.target.value
    })
}
render() {
    return (
    <div>
        <h1> {this.state.title} </h1>
        <p>
            <input onChange= {this.inputChanged} type = "text" />
        </p>
    </div> 
    )
}

}

ReactDOM.render(<EventHandler />, document.getElementById("root"));