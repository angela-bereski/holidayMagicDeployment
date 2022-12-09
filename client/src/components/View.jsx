import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useNavigate, useParams} from 'react-router-dom';
import LikesCounter from './LikesCounter';

const View = (props) => {
    const [magicMaker, setMagicMaker] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/magicMakers/${id}`)
        .then(res=> {
            console.log(res.data);
            setMagicMaker(res.data.magicMaker);
        })
        .catch(err=> console.log(err))
    }, [])

    const deleteMagicMaker = () => {
        axios.delete(`http://localhost:8000/api/magicMakers/${id}`)
        .then(res=> {
            console.log('it worked', res.data)
            navigate('/magicMakers')
        })
        .catch(err=>console.log(err))
    }

    return (
        <div>
            <h1>{magicMaker.name}</h1>
            <h5>{magicMaker.type}</h5>
            <h5>{magicMaker.description}</h5>
            <hr />
            <h2>Magical Skillz</h2>
            <h5>{magicMaker.skill1}</h5>
            <h5>{magicMaker.skill2}</h5>
            <h5>{magicMaker.skill3}</h5>
            <button onClick={deleteMagicMaker}>Delete</button>
            <hr/>

            <LikesCounter />

        </div>
    )

}

export default View;