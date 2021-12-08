import React,{useState, useEffect} from 'react';

import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Results from './components/results/Result';
import axios from 'axios';
function App() {

  const [Data, setData]=useState(null);
  const [requestParams,setrequestParams]=useState({});
  useEffect(()=>{

    console.log('fetchData');
    try {
      async function fetchData(){
        if(requestParams.url)
        {
          // console.log(requestParams.url);
          const data= await axios({
            method:requestParams.method,
            url:requestParams.url
          });
          console.log(data);
          setData(data);
        }
  
      }
      fetchData();
    } catch (error) {
       console.log(error.message);
    }


  },[requestParams])
  
function callApi(formData){
 
 console.log(requestParams.method);
 console.log('formData',formData);
    setrequestParams(formData);


   
  }

 
    return (
      <React.Fragment>
        <Header />
        <div  data-testid="Method-value" className="req">Request Method: {requestParams.method}</div>
        <div data-testid="URL-value" className="req">URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={Data} />
        <Footer />
      </React.Fragment>
    );

}

export default App;