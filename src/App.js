import React, { useState, useEffect, useReducer } from 'react';
import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Results from './components/results/Result';
import History from './components/history/History';
import axios from 'axios';

const initialState = {
  history: []
};

const historyReducer = (state = initialState, action) => {
  console.log('state', state);
  const { type, payload } = action;
  switch (type) {
    case 'Make History':
      return { ...state.history,payload:state.payload };
    //  console.log('history',history);
    //   return {history};
    default:
      return state;
  }
}

function makeHistory(url,method) {

  return {
    type: "Make History",
    payload: {
      url,
      method

    },
  };

}

function App() {
  const [state, dispatch] = useReducer(historyReducer, initialState);

  const [Data, setData] = useState(null);
  const [requestParams, setrequestParams] = useState({});

  console.log('state.history', state);
  useEffect(() => {

    console.log('fetchData');
    try {
      async function fetchData() {
        if (requestParams.url) {
          // console.log(requestParams.url);
          const data = await axios({
            url: requestParams.url,
            method: requestParams.method
          });
          console.log(data);
          setData(data);
          dispatch(makeHistory(requestParams.url,requestParams.method));
        }

      }
      fetchData();
    } catch (error) {
      console.log(error.message);
    }


  }, [requestParams])


  function callApi(formData) {

    // console.log(requestParams.method);
    setrequestParams(formData);
    dispatch(makeHistory(requestParams));



  }

  console.log('historystate', state);
  return (
    <React.Fragment>
      <Header />
      <div data-testid="Method-value" className="req">Request Method: {requestParams.method}</div>
      <div data-testid="URL-value" className="req">URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <History
        history={state.history}
        handleApiCall={callApi}
      />

      <Results data={Data} />

      <Footer />
    </React.Fragment>
  );

}

export default App;