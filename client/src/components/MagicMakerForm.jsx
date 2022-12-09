import React, {useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";

const MagicMakerForm = () => {
    const [magicMakers, setMagicMakers] = useState('');
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/createMagicMaker', {
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
        })
        .then(res => {
            console.log(res);
            setErrors([]);
            setMagicMakers([...magicMakers, res.data.magicMaker]);
            navigate("/magicMakers")
        })
        .catch((err) => {
            console.log(err)
            setErrors(err.response.data.errors);
        }) 
    }

    return (
        <div>
            <h2>Add a New Magic Maker!</h2>
            <form onSubmit = {onSubmitHandler}>
                <p>
                    <label >Name:</label><br/>
                    {errors.name ? <p className="text-danger">{errors.name.message}</p> : null}
                    <input type="text" onChange = {(e)=>setName(e.target.value)} value={name}/>
                </p>
                <p>
                    <label>Type:</label><br/>
                    {errors.type ? <p className="text-danger">{errors.type.message}</p> : null}
                    <input type="text" onChange = {(e)=>setType(e.target.value)} value={type}/>
                </p>
                <p>
                    <label >Description:</label><br/>
                    {errors.description ? <p className="text-danger">{errors.description.message}</p> : null}
                    <input type="text" onChange = {(e)=>setDescription(e.target.value)} value={description}/>
                </p>
                <h3>Optional:</h3>
                <p>
                    <label >Skill 1:</label><br/>
                    <input type="text" onChange = {(e)=>setSkill1(e.target.value)} value={skill1}/>
                </p>
                <p>
                    <label >Skill 2:</label><br/>
                    <input type="text" onChange = {(e)=>setSkill2(e.target.value)} value={skill2}/>
                </p>
                <p>
                    <label >Skill 3:</label><br/>
                    <input type="text" onChange = {(e)=>setSkill3(e.target.value)} value={skill3}/>
                </p>
                <input type="submit" />
            </form>
        </div>
    )

}

export default MagicMakerForm;