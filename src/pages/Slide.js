import React, { useState, useContext } from 'react';
import AppContext from '../context/store';
import { useEffect } from 'react';
import './Slide.css'
import { linesAction } from '../actionTypes'
import { useRef } from 'react';
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min; // You can remove the Math.floor if you don't want it to be an integer
}
function rnc(arr) {
    var rand = Math.random();
    rand *= arr.length; //(5)
    rand = Math.floor(rand);
    return arr[rand];
}
const Slide = (props) => {
    const [inputStyle, setInputStyle] = useState();
    const [lines, dispatch, line, index, color] = props.data;
    useEffect(() => {
        const rnd = randomNum(0, 360);
        setInputStyle({
            backgroundImage: `linear-gradient(${rnd}deg, ${rnc(color)}, ${rnc(color)}, ${rnc(color)}, ${rnc(color)})`,
        })
    }, [])
    //const ref = useRef();
    const [value, setValue] = useState(line);
    useEffect(() => {
        setValue(line);
    }, [line]);
    // useEffect(() => ref.current.setSelectionRange(0,0),[ref]);
   

    
    return (
        <span
            key={index}
            style={inputStyle}
            className='input'
            value={value}
            // onChange={handleChange}
            // onKeyDown={_handleKeyDown}
        >{value}</span>
    );
}

function Txtarea(){
    const [state, dispatch] = useContext(AppContext);
    const [lines,setLines]=useState(state.lines);
    const [tValue,setTValue]=useState(state.lines.reduce((pre,curr)=>pre+"\n"+curr),'');
    const [index, setIndex] = useState(0);
    //const [value, setValue] = useState(lines[0]);
    const refTextRow=useRef();
    // useEffect(()=>{
    //     console.log(refTextRow.current.clientX)
    // });

    const changeActiveEle=(e)=>{
        setIndex(e.target.parentNode.id)
        //console.log(e.target.parentNode.id)
    }

    const handleChange = (e) => {
        const { value } = e.target;
        
        //line.lines[line.index] = value;
        //line.setLines([...line.lines]);
        //setValue(value);
       // console.log(value.split("\n").length)
       const temp=refTextRow.current.value;
       setTValue(temp);
        //console.log(temp.split('\n'))
        setLines(temp.split('\n'));
    }

    const _handleKeyDown = (e) => {
        //e.target.setSelectionRange(0, 0);
        //console.log(e.target.selectionStart);
        //console.log('enter ',e.target)
        if (e.key === 'Enter') {
            const curPos = e.target.selectionStart;
            let left = lines[index].substr(0, curPos);
            let right = lines[index].substr(curPos);
            //setValue(left);
            lines[index] = left;
            lines.splice(index + 1, 0, right);
            dispatch({ type: linesAction.LINE_UPDATE, payload: lines })
            const nextEle = e.target.parentNode.nextSibling.lastChild;
            nextEle.focus();
            setTimeout(() => {
                nextEle.setSelectionRange(0, 0);
            }, 0);
        } else if (e.key === 'Backspace') {
            const curPos = e.target.selectionStart;
            if (curPos === 0 && index !== 0) {
                const no_char_pre = lines[index - 1].length;
                lines[index - 1] += lines[index];
                lines.splice(index, 1);
                dispatch({ type: linesAction.LINE_UPDATE, payload: lines })
                const prevEle = e.target.parentNode.previousSibling.lastChild;
                prevEle.focus();
                setTimeout(() => {
                    prevEle.setSelectionRange(no_char_pre, no_char_pre, no_char_pre);
                }, 0);
            }
        } else if (e.key === 'Tab') {
            console.log("tabb");
        }

    }

    return(
        <div className='main_div'>
            <div className='text_area'>
                <textarea 
                rows='30'
                onChange={handleChange}
                //onKeyDown={_handleKeyDown}
                value={tValue}
                ref={refTextRow}  
            >

                </textarea>
            </div>
           <div className='view_text'>
                    {
                        lines.map((line, index) =>
                            <div 
                            id={index}
                            className='text_row p'
                            key={index}
                            onClick={changeActiveEle}
                            >
                                <span>{index+1}</span>
                                <Slide
                                    data={[lines, dispatch, line, index, state.color]}
                                />
                            </div>
                        )
                    }
                </div>
                d ddd 
        </div>
    )
}

export default Txtarea;

