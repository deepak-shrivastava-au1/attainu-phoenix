import React from 'react';
import ReactDOM from 'react-dom';

class SearchEngine extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            query: "",
            result: [],
            loading: false 
        }
        this.inputChanged = this.inputChanged.bind(this);
        this.buttonClicked = this.buttonClicked.bind(this);
    }
inputChanged(event){
    this.setState({
        query: event.target.value
    });
}
buttonClicked(){
    this.setState({
        loading: true
    });

    let url = "https://api.duckduckgo.com/?q=" + this.state.query + "&format=json&pretty=1";
    let request = new XMLHttpRequest();
    request.open("get", url);
    request.send();
    request.onreadystatechange = function(){
        if(request.readyState == 4 && request.state == 200){
            let data = JSON.parse(request.responseText);
            this.setState({
                result: data.RelatedTopics,
                loading: false
            });
        }
    }
}
    render(){
        return(
            <div className = "container-fluid">
                <div className = "row">
                    <div className = "col-md-4 offset-md-4">
                        <h2>Search Engine:</h2>
                        <input onChange = {this.inputChanged} type = "text" className = "form-control" />
                        <hr></hr>
                        <button onClick = {this.buttonClicked} className = "btn btn-success">Search</button>                       
                        <hr></hr>
                        <SearchResult loading ={this.state.loading} query = {this.state.query} result ={this.state.result}/>
                    </div>
                </div>
            </div>
        )
    }
}
class SearchResult extends React.Component{
    render(){
        let loading = this.props.loading;

        if(loading){
            return(
                <em>Searching for "{this.props.query}"".  .  .</em>
            )
        }
        let SearchElements = [];
        let resultLength = this.props.result;
        for(let i =0; i< resultLength.length; i++){
                let resultText = this.props.result[i].Text;
                SearchElements.push(<li>{resultText}</li>)
        }
        return(
            <div>
                <em>{this.props.query}</em>
                <ul>
                    <li>{SearchElements}</li>
                </ul>
            </div>
        )
    }
}
ReactDOM.render(<SearchEngine />, document.getElementById("root"));