import AppContext from '../context/store';
import { useContext } from 'react';
import ReactHtmlParser from 'react-html-parser'
import TxtArea from './Txtarea';
import Navbar from './Navbar';
import './pages.css'
function Editor() {
    const [state, dispatch] = useContext(AppContext);
    const init=`<h4>Hello World</h4>`;
    console.log(state.lines)
    return (
        <div>
            <div className='full_editor_wraper'>
                <Navbar data={{state}}/>
                <TxtArea data={{dispatch,init}}/>
            </div>

                {<div>{ typeof state.lines === "object" ? ReactHtmlParser(state.lines.reduce((pre,cur)=>pre+cur)) :
                ReactHtmlParser(init)
                }</div>}
        </div>
    );
}
export default Editor;
