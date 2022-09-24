import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState("Enter text")
    // const [count, setCount] = useState(0)
    // setCount(text.length)
    const toUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const tolowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const onClear = () => {
        let newText = "";
        setText(newText)
    }
    const onCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)

    }
    const onRemove = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handleOnchange = (event) => {
        setText(event.target.value);
    }
    return (
        <div>
            <h2>{props.title}</h2>
            <textarea className='form-control' rows="7" cols="100" id="myBox" value={text} onChange={handleOnchange}></textarea>
            <button type="button" className="btn btn-primary my-4 mx-2" onClick={toUpperCase}>toUpperCase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={tolowerCase} >tolowerCase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={onClear}>Clear All</button>
            <button type="button" className="btn btn-primary mx-2" onClick={onCopy}>Copy Text</button>
            <button type="button" className="btn btn-primary mx-2" onClick={onRemove}>RemoveEtra Space</button>
            <h3>Results :</h3>
            <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} character</p>
            <p>minutes read - {0.008 * text.length}</p>
        </div>

    )
}
