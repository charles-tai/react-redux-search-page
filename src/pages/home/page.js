import React from "react";
import styles from "./style.css";
import ArtistsContainer from "../../common/containers/Artists.js";

export default class HomePage extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <ArtistsContainer />
      </div>
    );
  }
}
