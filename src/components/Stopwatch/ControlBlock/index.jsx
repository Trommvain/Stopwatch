import React, { Component } from 'react';
import styles from './ControlBlock.module.scss';

class ControlBlock extends Component {

    handleStartBtn = () => {
        const { startTimer } = this.props;
        startTimer();
    }

    handleStopBtn = () => {
        const { stopTimer } = this.props;
        stopTimer();
    }

    handleResetBtn = () => {
        const { resetTimer } = this.props;
        resetTimer();
    }

    handleLapBtn = () => {
        const { createLap } = this.props;
        createLap();
    }

    render() {
        const { isStarted } = this.props;
        
        return (
            <section className={styles.controlBlock}>
                <button 
                    className={isStarted ? styles.btnStop : styles.btnStart} 
                    onClick={isStarted ? this.handleStopBtn : this.handleStartBtn}>
                    { isStarted ? 'STOP' : 'START'}
                </button>
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
        );
    }
}

export default ControlBlock;
