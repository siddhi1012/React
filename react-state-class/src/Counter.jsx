import { useState } from "react";
function init() {
    console.log("Init was done")
    return Math.random();
}
export default function Counter() {
    // let [stateVariable, setStateVariable] = useState(10);
    let [count, setCount] = useState(init);
    console.log("Component was redered");

    let incCount = () => {
        setCount((currCount) => {
            return currCount + 1;
        });
        // setCount((currCount) => {
        //     return currCount + 1;
        // });

        // setCount((currCount) => {
        //     return currCount + 1;
        // });

        // new value of count
        //console.log(`inside inCount , count = ${count}`);
    }
    return (
        <div>
            <h3>Count : {count} </h3>
            <button onClick={incCount}>Increase Count</button>
        </div>

    );
}