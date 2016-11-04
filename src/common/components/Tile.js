import React from 'react';
import styles from './tileStyle.css';

const Tile = (props) => {
    return (
      <div>
        <img src={props.imgSrc} className={styles.image} />
        <ul className={styles.list}>
          <li className={styles.name}>{props.name}</li>
          <li className={styles.description}>{props.description}</li>
        </ul>
      </div>
    )
}

Tile.propTypes = {
  name: React.PropTypes.string,
  description: React.PropTypes.string,
  imageSrc: React.PropTypes.string
};

export default Tile;
