/*
 *
 *   TODO: Find a different way to store images. Purchase ACF Pro ?
 *   TODO: Add clicking functionality to display bigger image
 *
 */

import React from 'react';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(evt) {
        console.log(evt.source_url);
    }

    render() {
        return (
            <div>
                <h1>Gallery</h1>
                {this.props.media.map(media => {
                    return <img src={media.media_details.sizes.thumbnail.source_url} alt='image' />;
                })}
            </div>
        );
    }
}

export default Gallery;
