import React, { Component } from 'react';
import styles from './Stopwatch.module.scss';
import LapBlock from './LapBlock';
import Display from './Display';
import ControlBlock from './ControlBlock';

function convertToDate(seconds) {
    const date = new Date(0, 0, 0, 0, 0, seconds, 0);
    const dateStr = [date.getHours(), date.getMinutes(), date.getSeconds()].map((value) => {
        return value < 10 ? "0" + value : value
      }).join(":");
    return dateStr;
}

const initialState = {
    timeValue: 0,
    date: convertToDate(0),
    isStarted: false,
    laps: []
}


class Stopwatch extends Component {
    
    state = { ...initialState }

    makeTimerStep = () => {
        const { timeValue } = this.state;
        this.setState({
            timeValue: timeValue + 1,
            date: convertToDate(timeValue + 1),
        })
    }

    startTimer = () => {
        this.timerId = setInterval(this.makeTimerStep, 1000);
        this.setState({
            isStarted: true,
        })
    }

    stopTimer = () => {
        clearInterval(this.timerId);
        this.setState({
            isStarted: false
        });
    }

    resetTimer = () => {
        clearInterval(this.timerId);
        this.setState({ ...initialState });
    }

    createLap = () => {
        const { timeValue, laps, isStarted } = this.state;
        if (isStarted) {
            this.setState({
            laps: [...laps, timeValue]
            });
        }
    }

    componentDidMount() {
        this.timerId = setInterval(this.makeTimerStep, 1000);
        this.setState({
            isStarted: true,
        })
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        const { laps } = this.state;
        return (
            <div className={styles.container}>
                <Display date={this.state.date}/>
                <ControlBlock
                    isStarted={this.state.isStarted}
                    startTimer={this.startTimer}
                    stopTimer={this.stopTimer}
                    resetTimer={this.resetTimer}
                    createLap={this.createLap} />
                <LapBlock
                    laps={laps}
                    convertToDate={convertToDate} />
            </div>
        );
    }
}

export default Stopwatch;
