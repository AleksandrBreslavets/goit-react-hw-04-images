import PropTypes from "prop-types";
import { GalleryImg, GalleryItem } from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
    return <GalleryItem><GalleryImg src={webformatURL} alt={tags} data-bigphoto={largeImageURL} /></GalleryItem>
};

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired
};