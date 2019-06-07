import React from 'react'
import ReactDOM from 'react-dom'


class LoginPage extends React.Component{
    render(){
        return(
            <div className= "container-fluid">
                <div className = "row">
                    <div className = "col-md-4 offset-md-4">
                        <h3><b>Login</b></h3>
                        <level>UserName:</level>
                        <p></p>
                        <input type= "text"></input>
                        <p></p>
                        <level>Password:</level>
                        <p></p>
                        <input type= "password"></input>
                        <p></p>
                        <button className= "btn btn-success">Please Login</button>
                    </div>
                </div>
            </div>
        )
    }

}
ReactDOM.render(<LoginPage />, document.getElementById("root"));