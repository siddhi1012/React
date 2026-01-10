import "./App.css";
import {Title} from "./Title.jsx";

// function Title() {
//   return <h1>I am the  title</h1>
// }
function App() { 
  return (

    <div>
      <h1>This is my app component</h1>
      <p>Inside app Component</p>
      <Title/>
      <Title/>
    </div>

  );
}


export default App
