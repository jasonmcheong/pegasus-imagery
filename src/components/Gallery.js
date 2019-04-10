/*
 *
 *   TODO: Add clicking functionality to display bigger image
 *
 */

import React from 'react';

class Gallery extends React.Component {
    state = {
        displayURL: '',
        displayTitle: '',
        displayDesc: '',
    };
    handleClick(evt) {
        this.setState({
            displayURL: evt.sizes.medium_large,
            displayTitle: evt.title,
            displayDesc: evt.description,
        });
    }

    render() {
        return (
            <div className="gallery-container">
                <h1>Gallery</h1>
                <div className="gallery-section">
                    <div className="gallery-list">
                        {this.props.gallery.map(image => {
                            return image.acf.image_gallery.map(img => {
                                return (
                                    <img
                                        key={img.id}
                                        src={img.sizes.thumbnail}
                                        alt=""
                                        onClick={evt => this.handleClick(img, evt)}
                                    />
                                );
                            });
                        })}
                    </div>
                    <div className="gallery-display">
                        <img
                            src={
                                this.state.displayURL
                                    ? this.state.displayURL
                                    : 'http://pegasus.web.dmitcapstone.ca/wordpress/wp-content/uploads/2019/04/PegasusFinalLTD-Copy.jpg'
                            }
                            alt=""
                        />
                        {this.state.displayURL ? (
                            <div>
                                <h3>{this.state.displayTitle}</h3>
                                <p>{this.state.displayDesc}</p>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default Gallery;
