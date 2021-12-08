// import React from 'react';
// import { render, fireEvent, waitFor, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';

// import App from '../App';

// import Results from '../components/results/Result'
// test('loads and displays the starting app',  () => {
   
//   const Data = {
  
//     results: [
//       {name: 'fake thing 1', url: 'http://fakethings.com/1'},
//       {name: 'fake thing 2', url: 'http://fakethings.com/2'},
//     ]}
//   render(<Results data={Data}/>);
//   const result =   screen.getByTestId("result");
//   expect(result).toHaveTextContent({ "results": [ { "name": "fake thing 1", "url": "http://fakethings.com/1" }, { "name": "fake thing 2", "url": "http://fakethings.com/2" } ] });

// })

// test('URL value', async () => {
//     render(<App />);
//     const URL =  screen.getByTestId("URL-value");
//     expect(URL).toHaveTextContent('https://fruit-api-301.herokuapp.com/getFruit');
// });

// test('Method-value', async () => {
//     render(<App />);
//     const method =  screen.getByTestId("Method-value");
//     expect(method).toHaveTextContent('GET');
// });


