import React, {Component} from "react";
import styles from "./styles";

class TinyThumb extends Component {
    render() {
        return (
        <img 
            style={styles.wrapper}
            src={`/images/thumb_small/${this.props.image.image}`}
            alt={this.props.image.caption}
            onClick={() => {this.props.onClick(this.props.image)}}
        />);
    }
}

export default TinyThumb;