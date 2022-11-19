import React, { Component } from 'react';
import styles from './Display.module.scss';

class Display extends Component {
    render() {
        const { date } = this.props;
        return (
            <section className={styles.screen}>{date}</section>
        );
    }
}

export default Display;
