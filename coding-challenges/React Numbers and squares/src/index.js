import React from 'react';
import ReactDOM from 'react-dom';


class TableRow extends React.Component{
    render(){
        return (
            <tr>
                <td>{this.props.number}</td>
                <td>{this.props.number*this.props.number}</td>
            </tr>
        );
        
    }
}

class TableBody extends React.Component{
    render(){
        let tablerow =[];
        for(var i=1; i<=10; i++){
        tablerow.push(<TableRow number = {i} />);
        }
        return (
            <tbody>
                {tablerow}
            </tbody>
         );
    }
}

class TableHead extends React.Component{
    render(){
        return(
            <thead>
                <tr>
                    <th>Numbers</th>
                    <th>Squares</th>
                </tr>
            </thead>
        );
    }
}

class Table extends React.Component{
    render(){
        return (
            <table className= "table table-striped">
            <TableHead />
            <TableBody />
            </table>
        );
        
    }
}
class Header extends React.Component{
    render(){
        return <h2>Numbers And Squares</h2>
    }
}

class App extends React.Component{
    render(){
        return (
            <div className = "container-fluid">
                <div className = "row">
                    <div className= "col-md-4 offset-md-4">
                    <Header />
                    <Table />
                    </div>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById("root")); 