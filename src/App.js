import React, { useState, useEffect, useReducer } from 'react';
import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Results from './components/results/Result';
import History from './components/history/History';
import axios from 'axios';

// import {makeHistory,historyReducer,initialState} from '../src/components/history/HistoryReducer';
const initialState = {

  history: [],
};

const historyReducer = (state = initialState, action) => {
  console.log('state', state);
  const { type, payload } = action;
  switch (type) {
    case 'History':
      const history= [ ...state.history,payload.history];
    //  console.log('history',history);
      return {history};
    default:
      return state;
  }
}

function makeHistory(history) {

  return {
    type: "History",
    payload: {history},
  };

}

function App() {
  
  const [data, setData] = useState(null);
  const [requestParams, setrequestParams] = useState({});
  const [state, dispatch] = useReducer(historyReducer, initialState);

  console.log('state.history', state);
  useEffect(() => {
    try {
      async function fetchData() {
        if (requestParams.url) {
          // console.log(requestParams.url);
          const data = await axios({
            method: requestParams.method,
            url: requestParams.url
          });
          
          setData(data);
          dispatch(makeHistory(requestParams));
        }

      }
      fetchData();

    } catch (error) {
      console.log(error.message);
    }


  }, [requestParams])


  async function callApi(formData) {
    setrequestParams(formData);
    dispatch(makeHistory(formData));
  
  }


  return (
    <div>
    <React.Fragment>
      <Header />
      <div data-testid="Method-value" className="req">Request Method: {requestParams.method}</div>
      <div data-testid="URL-value" className="req">URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
     <History history={state.history} />

      <Results data={data} />

      <Footer />
    </React.Fragment>
    </div>
  );

}

export default App;