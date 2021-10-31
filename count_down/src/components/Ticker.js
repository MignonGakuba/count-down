import { useState } from 'react';

export const Ticker = ({futureData}) =>{

    //set the useEffect , to use the now and setNow
    const [now,setNow] = useState(new Date());
    const isTimeUp = IsBefore(futureData,now);


    //Set the variables
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;


    // useEffect is to render use the methode each time and to fire this methode
    useEffect(() => {
       const interval = setInterval(()=> {
            console.log('Ticking')
            setNow(new Date());
    
        },1000);

        return () =>{
            clearInterval(interval);
        }
    }, [setNow]);

    // Hold way

    if(!isTimeUp){
       
        // set the start with now and end set the previous data
       const duration = intervalToDurantion({
           start:  now;
           end:  futureData;
       });


       // 
       days = duration.days;
       hours = duration.hour;
       minutes = duration.minutes;
       seconds = duration.seconds;

       const tickerContents = isTimeUp ? (
               <div className={}>Time is up!!</div>
       ) : (
              <>
              <TickerCell value= {days} label="Days" />
              <TickerSeparator />
              <TickerCell value= {hours} label="Hours" />
              <TickerSeparator />
              <TickerCell value= {Minutes} label="Minutes" />
              <TickerSeparator />
              <TickerCell value= {seconds} label="Seconds" />
              </>
       );

         return tickerContents;
    }

    if(isTimeUp){
        return {days:0,hours:0, minutes:0,seconds, isTimeUp:true};
    }



}


export default Ticker;
