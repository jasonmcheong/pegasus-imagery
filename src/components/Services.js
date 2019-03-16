import React from 'react';

class Services extends React.Component {
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
		fetch('http://pegasus.web.dmitcapstone.ca/wordpress/wp-json/wp/v2/pages')
			.then((res) => res.json())
			.then((data) => this.setState({ data: data }));
	}
	render() {
		return (
			<div>
				{this.state.data.map((services) => {
					if (services.title.rendered === 'Services') {
						return (
							<div>
								<h1>Services Page</h1>
							</div>
						);
					}
				})}
			</div>
		);
	}
}

export default Services;
