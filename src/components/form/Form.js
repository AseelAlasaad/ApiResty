import {useState} from 'react';

import './form.scss';

function Form(props) {

  const[reqData,setreqData]= useState('');
  const[reqUrl, setreqUrl]= useState('');
  const[textarea,settextarea]=useState(false);
  const[method,setmethod]=useState('GET');


 const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method:method,
      url:reqUrl,
     
    };
    props.handleApiCall(formData,reqData);
  }
  const handleChangeURL = e => {
    setreqUrl(e.target.value);
  }
  const handelmethod=(e)=>{
    setmethod(e.target.value);
    settextarea(false);
  }

  const handelChandeData=(e)=>{
    setreqData(e.target.value);
  }

  const handeltextarea=(e)=>{
    settextarea(true);
    setmethod(e.target.id);
    
  }

    return (
      <>
        <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' onChange={handleChangeURL} />
            <button type="submit" data-testid="GO">GO!</button>
          </label>
          <label className="methods">
            <button id="get"  onClick={handelmethod} value="GET">GET</button>
            <button id="post" onClick={handeltextarea} value="POST">POST</button>
            <button id="put" onClick={handeltextarea} value="PUT">PUT</button>
            <button id="delete" onClick={handeltextarea} value="DELETE">DELETE</button>
          </label>
         {textarea && <textarea onChange={handelChandeData}  />}
        </form>
      </>
    );

}

export default Form;