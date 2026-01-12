function handleFormSubmit(){
    event.preventDefault();
    console.log("Form Submitted");
}


export default function Form() {
    return (
        <form>
            <input type="text" placeholder="Write Something" />
            <button onSubmit={handleFormSubmit}>Submit</button>
        </form>
    )

}