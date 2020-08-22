import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
//are efect asupra tuturor fisierelor din aplicatie
axios.defaults.baseURL='https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization']='AUTH TOKEN';
axios.defaults.headers.post['Content-Type']='application/json';

/*var interceptorRequest=*/axios.interceptors.request
     .use(request=>{
         console.log(request);
         return request;
     },error=>{
         console.log(error);
         return Promise.reject(error);
     });

/*var interceptorResponse=*/axios.interceptors.response.use(resopnse=>{
    console.log(resopnse);
    return resopnse;
},error=>{
    console.log(error);
    return Promise.reject(error);
});
// axios.interceptors.request.eject(interceptorRequest);
// axios.interceptors.response.eject(interceptorResponse);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
