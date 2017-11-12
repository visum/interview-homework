// Gallery/styles.js
export default {
    imageTitle: {
        fontSize: "0.8em",
        color: "#757575"
    },
    imageCaption: {
        fontSize: "0.6em",
        color: "#757575",
        fontWeight: "lighter"
    },
    mainImage: {
        maxWidth: "100%",
        margin: "0 auto"
    },
    thumbnailBar: {
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gridAutoRows:"minmax(80px, auto)"
    },
    thumbnailBarLeft: {
        gridColumn: "1 / 3",
        gridRow: "1"
    },
    thumbnailBarRight: {
        gridColumn: "3 / 4",
        gridRow: "1",
        textAlign: "right"
    },
    wrapper: {
        width: "100%",
    },
}