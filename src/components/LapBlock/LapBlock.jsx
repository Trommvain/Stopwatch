import React, { Component } from 'react';
import styles from './LapBlock.module.scss';

class LapBlock extends Component {
    render() {
        const { laps } = this.props;
        const lapsList = laps.map((lap, index) => {
            return (
                <li key={index}>
                    <p>{`Lap time: ${index === 0 ? lap : lap - laps[index - 1]} s`}</p>
                    <p>{`Total time: ${lap} s`}</p>
                </li>
            );
        })

        return (laps.length !== 0) && (
                <div className={styles.lapBlock}>
                    <ol>
                        {lapsList}
                    </ol>
                </div>
        );
    }
}

export default LapBlock;
