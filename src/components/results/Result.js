import React from 'react';
import Loading from '../loading/Loading';
function Results(props){
 
    return (
      <section data-testid="result">
        <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : <Loading/>}</pre>
      </section>
    );

}

export default Results;