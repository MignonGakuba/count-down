import { useEffect, useState } from "react";
import {intervalToDuration, isBefore} from 'date-fns';
import { TickerCell } from '../TickerCel/TickerCell.js';
import style from './Ticker.module.scss';

import {TickerSeparator} from '../TickerSeparator/TickerSeparator'

export const Ticker = ({futureDate}) => {

    //set the useEffect , to use the now and setNow
    const [now,setNow] = useState(new Date());
    const isTimeUp = isBefore(futureDate,now);

    console.log("Time:"+futureDate);

    //Set the variables
    let months = 0;
    let weeks = 0;
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
        console.log("Time:"+futureDate);

        // set the start with now and end set the previous data
       const duration = intervalToDuration({
           start:now,
           end:futureDate
       });


       months = duration.months;
       weeks = duration.weeks;
       days = duration.days;
       hours = duration.hours;
       minutes = duration.minutes;
       seconds = duration.seconds;

    }

     const tickerContents = isTimeUp ? (
        <div className={style.timeIsUp}>Time is up!!</div>
        ) : (
                <>
                {/* <TickerCell value = {months} label="Month" />
                <TickerSeparator />
                <TickerCell value = {weeks} label= "Weeks" />
                <TickerSeparator /> */}
                <TickerCell value = {days} label="Days" />
                <TickerSeparator />
                <TickerCell value = {hours} label="Hours" />
                <TickerSeparator />
                <TickerCell value = {minutes} label="Minutes" />
                <TickerSeparator />
                <TickerCell value = {seconds} label="Seconds" />
                </>
    );
        


    if(isTimeUp){
        return {days:0,hours:0, minutes:0,seconds, isTimeUp:true};
    }


    return (
        <div className= {style.tickerShell}> 
         {tickerContents}
        </div>
    )

};

export default Ticker;