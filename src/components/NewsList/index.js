import React, {Component} from "react";
import NewsItem from "../common/NewsItem";
import NewsDetail from "../common/NewsDetail";
import styles from "./styles";
import newsItems from "../../data/newsItems";

class NewsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: null
        }        
    }

    handleClose() {
        this.setState({selectedItem: null});
    }

    handleSelect(item) {
        this.setState({selectedItem: item});
    }

    render() {
        const items = newsItems.map((item) => {
            return <NewsItem 
                    key={item.id}
                    item={item}
                    onSelect={(item) => {this.handleSelect(item);}}
                    inMobile={this.props.inMobile}
                />
        });

        const newsDetailStatus = this.state.selectedItem ? "newsDetailShowing" : "newsDetailHidden"

        return (
            <section>
                <h1 style={styles.title}>Recent Stories</h1>
                <section style={styles[newsDetailStatus]}>
                    <NewsDetail 
                        item={this.state.selectedItem}
                        onClose={() => {this.handleClose();}}
                    />
                </section>
                <section>
                <ul>
                    {items}
                </ul>
                </section>
            </section>
        );
    }
}

export default NewsList;