import logo from './images/logo.png';
import account from './images/account.png';
import './App.css';
import { arrayJoke } from './joke';
import { useEffect, useState } from 'react';

function App() {
  const [index, setIndex] = useState(document.cookie ? document.cookie : 0);
  
  useEffect(() => {
    document.cookie = index;
  }, [index])

  const onClick = () => {
    if(index + 1 !== arrayJoke.length) {
      setIndex(parseInt(index) + 1);
    } else {
      setIndex('end');
    }
  }

  return (
    <div className="App">
      <div className='joke-header'>
      <img src={logo} alt="Logo" sizes='40'/>
        <div className='joke-account'>
          <div className='account-information'>
            <p>Handicrafted by</p>
            <p>Jim HLS</p>
          </div>
          <img src={account} alt="Account" sizes='40'/>
        </div>
      </div>
      <div className='joke-title'>
        <h2>A joke a day keep a doctor away</h2>
        <p>If you loke wrong away, your teeth have to pay. (Serious)</p>
      </div>
      <div className='joke-content'>
        <p>{arrayJoke[index] ? arrayJoke[index].content : `That's all the jokes for today! Come back another day!`} </p>
        <hr/>
      </div>
      <div>
        <button className='btn-funny' onClick={() => onClick()}>This is Funny!</button>
        <button className='btn-not-funny' onClick={() => onClick()}>This is not funny!</button>
      </div>
      <div className='joke-footer'>
        <hr/>
        <p>This website is created as part of Hlsolutions program. The materials contained on this website are provided for general <br/>
        information only and do not consititue any form of advice. HLS assumes no responsibility for accuracy of any particular statement and <br/>
        accepts no liability for any loss or damage which may arise from reliance on the information contained on this site.</p>
        <p>Copyright 2021 HLS</p>
      </div>
    </div>
  );
}

export default App;