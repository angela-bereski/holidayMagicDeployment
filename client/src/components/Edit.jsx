import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useNavigate, useParams} from 'react-router-dom';

const Edit = (props) => {
    const {id} = useParams();
    const [name, setName] = useState();
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/magicMakers/${id}`)
        .then(res => {
            setName(res.data.magicMaker.name);
            setType(res.data.magicMaker.type);
            setDescription(res.data.magicMaker.description);
            setSkill1(res.data.magicMaker.skill1);
            setSkill2(res.data.magicMaker.skill2);
            setSkill3(res.data.magicMaker.skill3);
        })
        .catch(err => console.log(err))
    }, [])

    const updateMagicMaker = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/magicMakers/edit/${id}`, {
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
            navigate('/magicMakers');
        })
        .catch((err) => {
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }

    return (
        <div>
            <h2>Update Magic Maker</h2>
            <form onSubmit={updateMagicMaker}>
                <p>
                    <label>Name:</label><br />
                    {errors.name ? <p className="text-danger">{errors.name.message}</p> : null}
                    <input type="text"
                    name="name"
                    value={name}
                    onChange={(e)=> {setName(e.target.value)}} />
                </p>
                <p>
                    <label>Type:</label><br />
                    {errors.type ? <p className="text-danger">{errors.type.message}</p> : null}
                    <input type="text"
                    name="type"
                    value={type}
                    onChange={(e)=> {setType(e.target.value)}} />
                </p>
                <p>
                    <label>Description:</label><br />
                    {errors.description ? <p className="text-danger">{errors.description.message}</p> : null}
                    <input type="text"
                    name="description"
                    value={description}
                    onChange={(e)=> {setDescription(e.target.value)}} />
                </p>
                <p>
                    <h3>Optional:</h3>
                </p>
                <p>
                    <label>Skill 1:</label><br />
                    <input type="text"
                    name="skill1"
                    value={skill1}
                    onChange={(e)=> {setSkill1(e.target.value)}} />
                </p>
                <p>
                    <label>Skill 2:</label><br />
                    <input type="text"
                    name="skill2"
                    value={skill2}
                    onChange={(e)=> {setSkill2(e.target.value)}} />
                </p>
                <p>
                    <label>Skill 3:</label><br />
                    <input type="text"
                    name="skill3"
                    value={skill3}
                    onChange={(e)=> {setSkill3(e.target.value)}} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Edit;