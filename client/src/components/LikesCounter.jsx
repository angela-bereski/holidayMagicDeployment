import React, {useState} from 'react'

const LikesCounter = () => {
    const [count, setCount] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);

    const handleClick = () => {
        setIsDisabled(true);
        setCount(count+1);
        alert('The grinch stole all the likes, you only get ONE!')
    }

    const styles = {
        container: {
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        button: {
          padding: '10px 30px',
          cursor: 'pointer',
        },
        buttonDisabled: {
          padding: '10px 30px',
          cursor: 'not-allowed',
        },
      };

  return (
    <div>
        <h3>Magical Likes Count: {count}</h3>
        <button disabled={isDisabled} onClick={handleClick} style={isDisabled ? styles.buttonDisabled : styles.button}>Like the Magic</button>
    </div>
  )
}

export default LikesCounter;