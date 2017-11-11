import React, {Component} from "react";
import styles from "./styles";

class NewsItem extends Component {

    clickHandler() {
        this.props.onSelect(this.props.item);
    }

    render() {
        return (
        <div style={styles.gridContainer}>
            <div style={styles.leftColumn}>
                <img 
                    src={this.props.item.videoThumb}
                    style={styles.thumb}
                    onClick={() => {this.clickHandler();}}
                />
            </div>
            <div style={styles.rightColumn}>
                <h4 style={styles.subtitle}>News Release</h4>
                <h2 style={styles.itemTitle} onClick={() => {this.clickHandler();}}>{this.props.item.title}</h2>
                <p style={styles.teaser}>{this.props.item.teaser}</p>
            </div>
        </div>
        );
    }
}

export default NewsItem;