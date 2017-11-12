import React, {Component} from "react";
import styles from "./styles";

class SmallVideo extends Component {
    render() {
        return (
            <div style={styles.wrapper}>
                <img 
                    style={styles.video}
                    alt={this.props.content.caption}
                    src={`/images/thumb_med/${this.props.content.src}`}
                />
                <div style={styles.title}>{this.props.content.title}</div>
                <div style={styles.caption}>{this.props.content.caption}</div>
            </div>
        );
    }
}

export default SmallVideo;