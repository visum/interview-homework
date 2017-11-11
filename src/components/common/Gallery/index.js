import React, {Component} from "react";
import styles from "./styles";
import TinyThumb from "../TinyThumb";

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedImage: this.props.images[0]
        };
    }

    handleImageChange(newImage) {
        this.setState({
            selectedImage: newImage
        });
    }

    render() {
        const thumbs = this.props.images.filter((image) => {
            return image !== this.state.selectedImage;
        }).map((image) => {
            return (<TinyThumb 
                        image={image}
                        key={image.key}
                        onClick={(image) => {this.handleImageChange(image);}}
                    />);
        });

        return (
            <div style={styles.wrapper}>
                <img 
                    style={styles.mainImage} 
                    alt={this.state.selectedImage.caption}
                    src={`/images/full/${this.state.selectedImage.image}`}
                />
                <div style={styles.thumbnailBar}>
                    <div style={styles.thumbnailBarLeft}>
                        <div style={styles.imageTitle}>{this.state.selectedImage.title}</div>
                        <div style={styles.imageCaption}>{this.state.selectedImage.caption}</div>
                    </div>
                    <div style={styles.thumbnailBarRight}>
                        <div style={styles.thumbnails}>
                            {thumbs}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gallery;
