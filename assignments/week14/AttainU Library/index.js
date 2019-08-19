import React from 'react';
import ReactDOM from 'react-dom';
import { isFulfilled } from 'q';
import { tsBooleanKeyword } from '@babel/types';

class Library  extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
        this.updateBooks = this.updateBooks.bind(this);
        
    }

    updateBooks(books){
        this.setState({
            books: books
        });
    }
    render(){
        return(
            <div className = "container-fluid">
                <div className = "row">
                    <div className = "col-md-4 offset-md-1">
                        <h2>AttainU Library</h2>
                        <hr></hr>
                        <LanguageSelect books = {this.state.books} updateBooks = {this.updateBooks} />
                        <BookResult />
                    </div>
                </div>
            </div>
        )
    }

}

class LanguageSelect extends React.Component{
    
    componentDidMount(){
        let self = this;

        let request = new XMLHttpRequest();
        request.open("get", "books.json");
        request.send();
        request.onreadystatechange = function() {
            if(request.readyState == 4 && request.status == 200) {
                let data = JSON.parse(request.responseText);
                self.props.updateBooks(data);
            }
        }
    }
    populateOptions() {
        let books = this.props.books;
        let optionElements = books.map(function(b) { return <option value = "{b.language}">{b.language}</option> });
        optionElements.unshift(<option value = "select">Select a Language</option>);
        return optionElements;
}

    render(){
        return (
            <select className = "form-control">
                {this.populateOptions()} 
            </select>
        );
    }
}

class BookResult extends React.Component{
    render() {
        return(
            <table className = "table table-striped">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Country</th>
                        <th>Language</th>
                    </tr>
                </thead>
            </table>
        )
    }
}
ReactDOM.render(<Library />, document.getElementById("root"));
