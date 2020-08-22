import React,{ Component } from "react";
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import {Link} from 'react-router-dom';
class Posts extends Component {
    state={
        posts:[],
        selectedPostId: null,
        error: false
    }
    componentDidMount(){
        //then se executa atunci cand promisiunea este indeplinita
        //catch se executa atunci cand promisiunea NU este indeplinita
        console.log(this.props);
     axios.get( '/posts')
     .then(response=>{
         const posts= response.data.slice(0,4);//ia primele 4 inregistrari din JSON
         const updatingPost=posts.map(post=> {
           return{
               ...post,
               author: 'Max'
           };
         });
    this.setState({posts: updatingPost});
    //console.log(response);
    })
    .catch(error=>{
        console.log(error);
        this.setState({error: true});
    });
     //post
     //axios utilixeaza promisiuni pentru a face aplicatia asincron
    }
    postSelectedHandler=(id)=>{
        this.setState({selectedPostId: id});

    }
    render() { 
        let posts= <p style={{textAlign: "center"}}>Something went wrong!</p>
        if(!this.state.error)
       { posts= this.state.posts.map(
            post=>{
                return<Link key={post.id}  to={'/posts/'+post.id}>
                    <Post  
                title={post.title} 
                author={post.author}
                clicked={()=>this.postSelectedHandler(post.id)}
                /></Link>
            }
        );}
        return ( 
            <section className="Posts">
            {posts}
           </section>
         );
    }
}
 
export default Posts;