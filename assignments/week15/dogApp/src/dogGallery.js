import React from 'react';
import {connect} from 'react-redux';
import {storeMapper} from   './store.js';

class DogGalleryComponent extends React.Component{
    renderImages(){
        let images = [];
        for(let i =0; i <= this.props.dogImages.length; i++){
            images.push(<img key = {i} src = {this.props.dogImages[i]} />)
        }
        return images;
    }

    render() {
        if(this.props.isGalleryLoading){
            return (
                <p>Loading Dog Images...</p>
            )
        }else {
            return(
                <div>
                    {this.renderImages()}
                </div>
            )
        }
       
    }
}
let DogGallery = connect(storeMapper)(DogGalleryComponent);
export {DogGallery};