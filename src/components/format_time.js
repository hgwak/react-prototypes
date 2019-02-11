import React, {Component} from 'react';
class FormatTime extends Component{
    constructor(props){
        super(props);
    }
    millisecondsToTime(){
        const {elapsed} = this.props;
        const sec = elapsed / 1000;
        const min = sec / 60;
        return {
            ms: Math.floor(elapsed % 100),
            sec: Math.floor(sec  % 60),
            min : Math.floor(min % 60),
            hour:  Math.floor(min/60)
        }
    }
    render(){
        const {ms,sec,min,hour}=this.millisecondsToTime();
        return(
            <div>{hour}:{min}:{sec}.{ms}</div>
        );
    }
}
export default FormatTime;