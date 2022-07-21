import './App.css';
import Head from './pages/Head';
import Slide from './pages/Slide';
import Content from './pages/Content';
import Info from './pages/Info';
import Foot from './pages/Foot';
function App() {
    //<!--img src={logo} className="App-logo" alt="logo" /-->
    /*var d = [["12:50pm", " Hello world, how are you."],
    ["01:30pm", "Save world from climate change."],
    ["01:50pm", "Atleast plant a tree in your life."],
    ["02:48pm", "Climate change is biggest problem in the world."]];
    //<Card data={JSON.stringify(d)}/>*/
    return (  
            <div className="wp App">
                <Head />
                <div className='otherhead'>
                    <div>
                        <Slide />
                        <Content />
                    </div>
                    <Info />
                </div>
                <Foot/>
            </div>
    );
}

export default App;
