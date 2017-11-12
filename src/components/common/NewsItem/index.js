import React, {Component} from "react";
import styles from "./styles";

class NewsItem extends Component {

    clickHandler() {
        this.props.onSelect(this.props.item);
    }

    render() {
        const responsiveState = this.props.inMobile ? "mobile" : "normal";
        const responsiveStyles = {
            "mobile": {
                "container":"mobileContainer",
                "left":"mobileLeft",
                "right":"mobileRight"
            },
            "normal": {
                "container":"normalContainer",
                "left":"normalLeft",
                "right":"normalRight"
            }
        };

        return (
            <div style={styles[responsiveStyles[responsiveState]["container"]]}>
                <div style={styles[responsiveStyles[responsiveState]["left"]]}>
                    <img 
                        src={this.props.item.videoThumb}
                        style={styles.thumb}
                        onClick={() => {this.clickHandler();}}
                        alt={this.props.item.title}
                    />
                </div>
                <div style={styles[responsiveStyles[responsiveState]["right"]]}>
                    <h4 style={styles.subtitle}>News Release</h4>
                    <h2 style={styles.itemTitle} onClick={() => {this.clickHandler();}}>{this.props.item.title}</h2>
                    <p style={styles.teaser}>{this.props.item.teaser}</p>
                </div>
            </div>
        );
    }
}

export default NewsItem;