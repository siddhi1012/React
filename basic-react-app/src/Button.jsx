function handleClick(event) {
    console.log("Hello!");
    console.log(event);
}

function doSome() {
    console.log("Hover");
}

function handledbl() {
    console.log("You double click me!");
}

export default function Button() {
    return (
        <div>
            <button onClick={handleClick}>Click Me!</button>
            <p onMouseOver={doSome}>This is Para for onclick Event Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi et placeat blanditiis, ullam voluptas neque officiis eaque porro quos quis? Id consequatur, quis molestiae dolorum quos repudiandae officia Sassumenda quidem!</p>
            <button onDoubleClick={handledbl}>CLick Me!!</button>
        </div>
    )
}