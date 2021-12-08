function History(props) {
    // const items=props.history.map(item =>{
      
    //     return item;
    // })
    return (
      <div className="history">
        <h2 className="h2" >History</h2>

        <ul>
          {props.history?.map((item,idx)=> {
              return (
                <li key="idx">
                  <p > Method :{item.method}</p>
               <br/>
                  URL: {item.url}
                  <br/>
                  <b className="showresult" onClick={() => props.handleApiCall(item)}>   show result</b>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
  
  export default History;