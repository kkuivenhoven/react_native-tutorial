import React from 'react';
import { Linking, Image, View, Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// this is a presentational component because just need
// to display some data to the user
// and so therefore we do NOT need a lifecycle method
// which means we don't need access to state
// receive my props object on that props object
// Card acts as the View tag

//const AlbumDetail = ({ props }) => {
const AlbumDetail = ({ album }) => {
	const { title, artist, thumbnail_image, image, url } = album;
	const { 
		thumbnailStyle, 
		headerContentStyle,
		thumbnailContainerStyle,
		headerTextStyle,
		imageStyle
	} = styles;

	return (
		<Card>
			<CardSection>
				<View style={thumbnailContainerStyle}>
					<Image 
						style={thumbnailStyle} 
						source={{ uri: thumbnail_image }} 
					/>
				</View>
				<View style={headerContentStyle}>
					<Text style={headerTextStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>

			<CardSection>
				<Image 
					style={imageStyle}
					source={{ uri: image }} 
				/>
			</CardSection>

			<CardSection>
				<Button onPress={() => Linking.openURL(url)}>
					Buy Now
				</Button>
			</CardSection>
		</Card>
	)
}

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'			
	},
	headerTextStyle: {
		fontSize: 18
	},
	thumbnailStyle: {
		height: 50, 
		width: 50
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	}
};

export default AlbumDetail;
