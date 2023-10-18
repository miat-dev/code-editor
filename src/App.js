import './App.css';
import Head from './pages/Head';
import Editor from './pages/Editor';
import Info from './pages/Info';
import Foot from './pages/Foot';

function App() {
    //<!--img src={logo} className="App-logo" alt="logo" /-->
    /*var d = [["12:50pm", " Hello world, how are you."],
    ["01:30pm", "Save world from climate change."],
    ["01:50pm", "Atleast plant a tree in your life."],
    ["02:48pm", "Climate change is biggest problem in the world."]];
    //<Card data={JSON.stringify(d)}/>*/
    //const color = ['#fcefdd', '#f5dded'];
    //#fcefee #fccde2 #ffcef3
    // const [lines, setLines] = useState(
    //     ["#include <iostream>",
    //     "using namespace std;",
    //     "int main(){",
    //     "cout<<\" Hello World \" << endl;",
    //     "}",
    //      ""]);
    return (
        <div className="wp App">
            <Head />
            <div className='otherhead'>
                    <Editor/>            
                <Info />

            </div>
            <Foot />
        </div>
    );
}




export default App;
