import React from 'react';
import styles from './gridStyle.css';

const Grid = (props) => {
      const renderList = () => {
      return props.children.map((item) => {
        return (
          <div key={item.key} className={ styles.tile + ' ' + styles.colXs6 + ' ' + styles.colSm4 + ' ' + styles.flexItem}>
              {item}
          </div>
        )
      })
    }
    return (
      <div className={styles.flex}>
        {renderList()}
      </div>
    )
}

Grid.propTypes = {
  items: React.PropTypes.string
};

export default Grid;
