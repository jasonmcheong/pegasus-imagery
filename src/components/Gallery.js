import React from 'react';

class Gallery extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
		};
	}

	handleClick(evt) {
		console.log(evt.source_url);
	}

	componentWillMount() {
		fetch('http://pegasus.web.dmitcapstone.ca/wordpress/wp-json/wp/v2/media')
			.then((res) => res.json())
			.then((data) => this.setState({ data: data }));
	}
	render() {
		return (
			<div>
				<h1>Gallery</h1>
				{this.state.data.map((media) => {
					return (
						<img
							onClick={(evt) => this.handleClick(media, evt)}
							src={media.media_details.sizes.thumbnail.source_url}
							alt="img"
						/>
					);
				})}
			</div>
		);
	}
}

export default Gallery;
