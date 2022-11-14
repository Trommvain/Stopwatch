import React, { Component } from 'react';
import styles from './Stopwatch.module.scss';

class Stopwatch extends Component {
    state = {
        timeValue: 0,
        isStarted: false       //to solve multiple start button clicks problem
    }

    startTimer = () => {
        const { timeValue } = this.state;

        this.setState({
            timeValue: timeValue + 1,
            isStarted: true
        })
    }

    handleStartBtn = () => {
        this.timerId = setInterval(this.startTimer, 1000);
    }

    handleStopBtn = () => {
        clearInterval(this.timerId);
        this.setState({
            isStarted: false
        });
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <div className={styles.container}>
                <section className={styles.screen}>{this.state.timeValue}</section>
                <section className={styles.controlBlock}>
                    <button className={styles.btnStart}onClick={!this.state.isStarted ? this.handleStartBtn : null}>START</button>
                    <button className={styles.btnStop} onClick={this.handleStopBtn}>STOP</button>
                </section>
            </div>
        );
    }
}

export default Stopwatch;
