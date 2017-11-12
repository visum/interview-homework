import React, {Component} from "react";
import styles from "./styles";
import Gallery from "../common/Gallery";
import SmallVideo from "../common/SmallVideo";
import articleData from "../../data/article";

let contentTypeHandlers = {
    "p":(item, index) => {
        return (
            <p style={styles.p}
               key={index}>{item.value}</p>
        );
    },
    "Video":(item, index) => {
        return (
            <div style={styles.video} key={index}>
                <SmallVideo content={item}/>
            </div>);
    },
    "h2":(item, index) => {
        return <h2 style={styles.h2} key={index}>{item.value}</h2>;
    }
};

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: articleData
        };
    }

    render() {

        let contents = this.state.content.content.map((item, index) => {
            return contentTypeHandlers[item.type](item, index);
        });

        return (
        <article style={styles.wrapper}>
            <h4 style={styles.subtitle}>News Release</h4>
            <h1 style={styles.title}>{this.state.content.title}</h1>
            <Gallery images={this.state.content.gallery} />
            {contents}
        </article>
        );
    }
}

export default Article;