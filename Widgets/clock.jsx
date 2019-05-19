import React from 'react';

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        };
        this.tick = this.tick.bind(this);


    }

    tick() {
        this.setState({date: new Date()})
    }

    componentDidMount(){
        this.intervalID = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID); 
    }


    render() {
        let date = this.state.date.toString().split(" ").slice(0,4).join(" ");
        let time = this.state.date.toString().split(" ").slice(4).join(" ");
        return (
            
            <>
            <h1>Clock</h1>
            <section className="widebox">
                <li>
                    <label htmlFor="">Date</label>
                    <span>{date}</span>
                </li>
                <li>
                    <label htmlFor="">Time</label>
                    <span>{time}</span>
                </li>
            </section>
            
    
            </>
        )
    }

}





export default Clock;