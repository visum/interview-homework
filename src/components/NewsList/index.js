import React, {Component} from "react";
import NewsItem from "../common/NewsItem";
import NewsDetail from "../common/NewsDetail";
import styles from "./styles";
import newsItems from "../../data/newsItems";

class NewsList extends Component {
    constructor(props) {
        super(props);        
    }

    render() {
        const items = newsItems.map((item) => {
            return <NewsItem key={item.id} item={item} />
        });


        return (
        <section>
            <ul>
                {items}
            </ul>
            <NewsDetail></NewsDetail>
        </section>
        );
    }
}

export default NewsList;