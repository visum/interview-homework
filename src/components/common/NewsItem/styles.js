// NewsItem/styles.js
export default {
    normalContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gridAutoRows:"minmax(150px, auto)",
        gridGap:"10px",
        padding:"0 0 20px 0"
    },
    normalLeft: {
        gridColumn: "1 / 2",
        gridRow: "1",
        textAlign: "center"
    },
    normalRight: {
        gridColumn: "2 / 4",
        gridRow: "1"
    },
    mobileContainer: {
        padding: "8px"
    },
    mobileLeft: {
        textAlign: "center"
    },
    mobileRight: {

    },
    thumb: {
        width: "180px",
        border: "1px solid black",
        margin: "0 auto",
        cursor: "pointer"
    },
    subtitle: {
        margin: "0",
        padding: "0",
        fontSize: "0.7em",
        color: "#A9BFC8"
    },
    itemTitle: {
        margin: "0",
        padding: "0 0 12px 0",
        color: "#757575",
        fontWeight: "lighter",
        cursor: "pointer"
    },
    teaser: {
        margin: "0",
        padding: "12px 0",
        color: "#757575",
        fontSize: "0.9em"
    }
}