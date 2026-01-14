import { useState } from "react"

export default function CommentsForm({ addNewComment }) {
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: ""
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value };
        })
    }

    let handleSubmit = (event) => {

        event.preventDefault();
        addNewComment(formData);
        console.log(formData);
        event.preventDefault();
        setFormData({
            username: "",
            remarks: "",
            rating: 5
        })
    }

    return (
        <div>
            <h4>Give a Comment</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                &nbsp; &nbsp;
                <input type="text" id="username" placeholder="username" value={formData.username} onChange={handleInputChange} name="username" />
                <br /><br />
                <label htmlFor="remarks">Remarks:</label>
                &nbsp; &nbsp;
                <textarea id="remarks" placeholder="add few remarks" value={formData.remarks} onChange={handleInputChange} name="remarks"></textarea>
                <br /><br />
                <label htmlFor="rating">Rating:</label>
                &nbsp; &nbsp;
                <input type="number" id="rating" min={1} max={5} placeholder="rating" value={formData.rating} onChange={handleInputChange} name="rating" />
                <br /><br />
                <button>Add Comment</button>
            </form>
        </div>
    )
}