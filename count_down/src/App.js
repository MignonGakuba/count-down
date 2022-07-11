import { useState } from 'react';
import { add } from 'date-fns';
import { Ticker } from './components/Ticker/Ticker.js';
import style from './App.module.scss';

// Defaults to 6 days, 22 hours, 40 minutes and 0 seconds from now in your timezone.
// Set the 25 februari Elden Ring
const futureDate = add(new Date(2022, 2, 25), {
  days:12,
  hours: 22,
  minutes: 30
});
const releaseDate = new Date(2022, 2, 25);

function App() {

  const [tickerVisible, setTickerVisible] = useState(false);
  const tickerEl = tickerVisible ? <Ticker futureDate={futureDate} /> : null;
  const toggleText = tickerVisible ? 'Hide Countdown': 'Show Countdown';

  return (
    <div className = {style.background}>
        <div className={ style.pageContainer }>
          <h1>Join Our Event</h1>
          <p>Come check out our great event. It will be lots of fun.</p>
            { tickerEl }
            <button 
              className={ style.toggleButton } 
              onClick={() => setTickerVisible(prev => !prev) }
            >
            { toggleText }
            </button>
        </div>  
    </div>
  );
}


export default App;