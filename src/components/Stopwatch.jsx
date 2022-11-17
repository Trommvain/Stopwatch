import React, { Component } from 'react';
import styles from './Stopwatch.module.scss';

class Stopwatch extends Component {
    state = {
        timeValue: 0,
        isStarted: false
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
        })
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
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
                        >RESET</button>
                </section>
            </div>
        );
    }
}

export default Stopwatch;
