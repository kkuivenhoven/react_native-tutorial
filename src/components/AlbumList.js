import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
	state = { albums: [] }; // initial or empty state - so we will have an empty list when component is first rendered

	componentWillMount(){
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response => this.setState({albums: response.data}));
	}

	renderAlbums(){
		// map() is an array helper
		// wheneever we want to reference a JS variable within JSX,
		// we wrap it with curly braces
		// best thing to use for key is the ID, if your data object
		// has an ID for each entry
		// no tie between variable name album and {album} property
		// name itself
		return this.state.albums.map(album => 
			<AlbumDetail key={album.title} album={album}/>
		);
	}

	render(){
		console.log(this.state);

		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}
}

export default AlbumList;
