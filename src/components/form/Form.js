import {useState} from 'react';

import './form.scss';

function Form(props) {

  const[textarea,settextarea]=useState(false);
  const[method,setmethod]=useState('');
  const[reqUrl, setreqUrl]= useState('');
  const[reqData,setreqData]= useState('');


 const handleSubmit = async(e) => {
   try {
    e.preventDefault();
    if(method=='GET' || method=='PUT')
    {
      setreqData(e.target.value);
    }
    const formData = {
      method:method,
      url:reqUrl,
     
    };
    await props.handleApiCall(formData,reqData); 
   } catch (error) {
     console.log(error.message);
   }
  
  }
  const handleChangeURL = e => {
    e.preventDefault();
    setreqUrl(e.target.value);
  }
  const handelmethod=(e)=>{
    e.preventDefault();
    // setmethod(e.target.id);
    // settextarea(false);
    switch (e.target.innerText) {
      case 'GET':
        setmethod('GET');
        settextarea(false);
        break;
      case 'POST':
        setmethod('POST');
        settextarea(true);
        break;
      case 'PUT':
        setmethod('PUT');
        settextarea(true);
        break;
      case 'DELETE':
        setmethod('DELETE');
        settextarea(false);
        break;
      default: break;
    }
  }

  const handelChandeData=(e)=>{
    e.preventDefault();
    setreqData(e.target.value);
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
            <button id="get"  onClick={handelmethod} >GET</button>
            <button id="post" onClick={handelmethod} >POST</button>
            <button id="put" onClick={handelmethod} >PUT</button>
            <button id="delete" onClick={handelmethod} >DELETE</button>
          </label>
         {textarea && <textarea   rows="10" cols="60" onChange={handelChandeData} value={reqData} />}
        </form>
      </>
    );

}

export default Form;