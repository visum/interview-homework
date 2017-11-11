import React, {Component} from "react";
import styles from "./styles";
import { Link } from "react-router-dom";

class NewsDetail extends Component {
    render() {

        const item = this.props.item || {
            video: "",
            title: "",
            teaser: ""
        }

        return (
        <div style={styles.veil}>
            <div style={styles.wrapper}>
                <button style={styles.closeButton} onClick={this.props.onClose}>
                    <img src="images/icons/close.svg" alt="close" style={styles.closeButtonIcon}/>
                </button>
                <div style={styles.video}>
                    <img src={item.video} style={styles.video} />
                </div>
                <h4 style={styles.subtitle}>News Release</h4>
                <h2 style={styles.title}>{item.title}</h2>
                <p style={styles.teaser}>{item.teaser}</p>
                <div style={styles.readMore}><Link to={`/article/${item.id}`}>Read more...</Link></div>
            </div>
        </div>
        );
    }
}

export default NewsDetail;