    import React from 'react';
    import ReactDOM from 'react-dom';
    import {store} from './store.js';   
    import {Provider} from 'react-redux';
    import {Menu} from './menu.js';
    import {DogGallery} from './dogGallery.js';

    class App extends React.Component{

        render(){
            return(
            <Provider store = {store}>
                <div className = "container-fluid">
                    <div className = "row">
                        <div className = "col-md-3 ">
                            <h2>Dog Breeds</h2>
                            <hr />
                                <div className = "btn-group-vertical">
                                    <Menu />
                                </div>
                        </div>
                        <div className = "col-md-6">
                            <DogGallery />
                        </div>
                    </div>
                </div>
            </Provider>
            )
        }
    }
    ReactDOM.render(<App />, document.getElementById("root"));