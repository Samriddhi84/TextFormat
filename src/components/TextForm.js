import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpCase = () =>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowerCase = () =>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handletitleCase = () =>{
        let newText = "";
        text.split(" ").forEach(text => {
            const capitalized = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
            newText += capitalized +" ";
        });
        setText(newText)
    }
    const handleClear = () =>{
        setText("");
    }
    const onChangeValue = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter the text here'); //used useStateHook
    // onchange use kara taaki type kar sake in textbox
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange={onChangeValue} id="myBox" rows="8"></textarea>
    </div> 
    <button className='btn btn-primary mx-2' onClick={handleUpCase}>Convert to uppercase</button>
    <button className='btn btn-primary mx-2' onClick={handleLowerCase}>Convert to lowercase</button>
    <button className='btn btn-primary mx-2' onClick={handletitleCase}>Convert to titlecase</button>
    <button className='btn btn-primary mx-2' onClick={handleClear}>Clear text</button>
    </div>
    <div className='container'>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} word and {text.length} characters</p>
        <h2>
            Preview
        </h2>
        <p>{text}</p>
    </div>
    </>
  )
}
