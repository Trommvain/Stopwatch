import React, { Component } from 'react';
import styles from './Stopwatch.module.scss';
import LapBlock from './LapBlock/LapBlock';

class Stopwatch extends Component {
    state = {
        timeValue: 0,
        isStarted: false,
        laps: []
    }

    startTimer = () => {
        const { timeValue } = this.state;

        this.setState({
            timeValue: timeValue + 1,
        })
    }

    handleStartBtn = () => {
        this.timerId = setInterval(this.startTimer, 1000);
        this.setState({
            isStarted: true,
        })
    }

    handleStopBtn = () => {
        clearInterval(this.timerId);
        this.setState({
            isStarted: false
        });
    }

    handleResetBtn = () => {
        this.setState({
            timeValue: 0,
            laps: []
        });
    }

    handleLapBtn = () => {
        const { timeValue, laps } = this.state;
        this.setState({
            laps: [...laps, timeValue]
        });
    }

    componentDidMount() {
        this.timerId = setInterval(this.startTimer, 1000);
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
                <section className={styles.screen}>{this.state.timeValue}</section>
                <section className={styles.controlBlock}>
                    {this.state.isStarted ?
                    <button 
                        className={styles.btnStop} 
                        onClick={this.handleStopBtn}>STOP
                    </button>
                    :
                    <button 
                        className={styles.btnStart}
                        onClick={
                            !this.state.isStarted ? 
                            this.handleStartBtn
                            : null}>START
                    </button>}
                    <button
                        className={styles.btnReset}
                        onClick={this.handleResetBtn}
                        >RESET
                    </button>
                    <button
                        className={styles.btnLap}
                        onClick={this.handleLapBtn}
                        >LAP
                    </button>
                </section>
                <LapBlock laps={laps} />
            </div>
        );
    }
}

export default Stopwatch;
