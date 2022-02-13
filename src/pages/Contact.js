import axios from "axios";
import React, {useState} from "react";
import "../styles/Contact.css";




function Contact() {
  const [formState, setFormState] = useState({
    uid: "",
    name: "",
    age: "",
    bio: "",
    linkedin: "",
    fb: "",
    insta: "",
    img: ""
})

const onChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
}

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState)
    axios.post("https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentPost", formState)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
}
  return (
    <div>
     
      
      <h1>Edit Profile</h1>     
        <form id="Edit-Profile" method="POST" onSubmit={handleSubmit}>
            <label htmlFor="uid">User ID:</label>
            <input type="text" name="uid" value={formState.uid} onChange={onChange}/>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" value={formState.name} onChange={onChange}/>
            <label htmlFor="age">Age:</label>
            <input type="text" name='age' value={formState.age} onChange={onChange}/>
            <label htmlFor="bio">Bio:</label>
            <input type="text" name="bio" value={formState.bio} onChange={onChange}/>
            <label htmlFor="linkedin">LinkedIn:</label>
            <input type="text" name="linkedin" value={formState.linkedin} onChange={onChange}/>
            <label htmlFor="fb">Facebook:</label>
            <input type="text" name="fb" value={formState.fb} onChange={onChange}/>
            <label htmlFor="insta">Instagram:</label>
            <input type="text" name="insta" value={formState.insta} onChange={onChange}/>
            <label htmlFor="img">Image URL:</label>
            <input type="text" name="img" value={formState.img} onChange={onChange}/>
            <button type="submit">Submit</button>
        </form>
      </div>
    
  );
}

export default Contact;
