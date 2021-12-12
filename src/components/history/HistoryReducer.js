// const initialState = {

//     history: [],
//   };
  
//   const historyReducer = (state = initialState, action) => {
//     console.log('state', state);
//     const { type, payload } = action;
//     switch (type) {
//       case 'History':
//         const history= [ ...state.history,payload.history];
//       //  console.log('history',history);
//         return {history};
//       default:
//         return state;
//     }
//   }
  
//   function makeHistory(history) {
  
//     return {
//       type: "History",
//       payload: {history},
//     };
  
//   }

//   module.exports={
//     makeHistory,
//     historyReducer,
//     initialState
//   };