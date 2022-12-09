import React, {useState} from 'react';

import DisplayMagicMakers from '../components/DisplayMagicMakers';

const Main = (props) => {

    const [magicMakers, setMagicMakers] = useState([]);

    const removeFromDom = id => {
        setMagicMakers(magicMakers.filter(magicMaker => magicMaker._id !== id))
    }

    return (
        <div>
            <DisplayMagicMakers magicMakers={magicMakers} setMagicMakers={setMagicMakers} removeFromDom={removeFromDom} />
        </div>
    )
}

export default Main;