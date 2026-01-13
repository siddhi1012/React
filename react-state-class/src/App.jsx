import './App.css'
// import Counter from './Counter';
// import LikeButton from './LikeButton';
// import Ludo from './Ludo';
// import TodoList from './TodoList';
import Lottery from './Lottery';
// import Ticket from './Ticket';
import{ sum } from "./helper.js"
function App() {
  let winCondition = (ticket) => {
    return ticket[0] === 0;
    //ticket.every ((num) => num === ticket[0]);
    //sum(ticket) === 15;
  }

  return (

    <>
      <Lottery n ={3} winCondition={winCondition}/>
      {/* <Ticket ticket={[0,1,2]} />
       <Ticket ticket={[0,1,2,4,5,6]} /> */}



      {/* <TodoList /> */}




      {/* <Ludo /> */}
      {/* <h1>States in React!</h1>
      <Counter/>
      <h2>Like the Post :</h2>
      <LikeButton/> */}
    </>
  );
}

export default App
