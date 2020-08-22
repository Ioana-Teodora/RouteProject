import React, { Component } from 'react';

import './FullPost.css';
import axios from 'axios';

class FullPost extends Component {
    state={
        loadedPost: null
    }
    componentDidMount(){
        console.log(this.props);
        if(this.props.match.params.id){//dor cu conditia de id null se creaza o bucla infinita de cereri catre server, pentru a evita acest
            //lucru se mai pune o conditie suplimentara
            if( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id!== this.props.id))
            {
                axios.get('/posts/'+this.props.match.params.id)
                .then(response=>{
                    this.setState({loadedPost: response.data});
        
                });

            }
       }
    }
    deletePosthandler=()=>{
        axios.delete('/posts/'+this.props.id)
        .then(response=>{
            console.log(response);
        });

    }
    render () {
        let post = <p style={{textAlign: "center"}}>Please select a Post!</p>;
        if(this.props.id)
        {
            post = <p style={{textAlign: "center"}}>Loading...</p>;
        }
        if(this.state.loadedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePosthandler}>Delete</button>
                    </div>
                </div>
    
            );

        }
        
        return post;
    }
}

export default FullPost;