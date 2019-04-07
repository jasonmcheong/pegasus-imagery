/*
 *
 *   TODO: Add clicking functionality to display bigger image
 *
 */

import React from 'react';

class Gallery extends React.Component {
    handleClick(evt) {
        console.log(evt.source_url);
    }

    render() {
        return (
            <div>
                <h1>Gallery</h1>
                <div className="gallery-list">
                    {this.props.gallery.map(image => {
                        return image.acf.image_gallery.map(img => {
                            return <img src={img.sizes.thumbnail} alt="" />;
                        });
                    })}
                </div>
            </div>
        );
    }
}

export default Gallery;
