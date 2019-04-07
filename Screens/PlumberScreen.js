import React from 'react';
import { StyleSheet, View, ImageBackground, Image, Text, TouchableOpacity, Picker } from 'react-native';
import Datastore from '../Store/datastore';
import { observer } from 'mobx-react';

@observer
export default class PlumberScreen extends React.Component {
	static navigationOptions = {
		title: 'Plumber'
	};
	constructor() {
		super();
		this.state = {
			PlumberWork: 'General Plumber Work'
		};
	}

	_handlePress = () => {
		Datastore.updateSerInfo(this.state.PlumberWork);
		this.props.navigation.navigate('Address');
	};

	render() {
		return (
			<ImageBackground source={require('../assets/background/bgwhite.png')} style={styles.container}>
				<View style={styles.container}>
					<View style={styles.PickerContainer}>
						<Picker
							selectedValue={this.state.PlumberWork}
							style={styles.pickerstyle}
							onValueChange={(itemValue) => this.setState({ PlumberWork: itemValue })}
						>
							<Picker.Item label="General Plumber Work" value="General Plumber Work" />
							<Picker.Item label="Bathroom Fittings Installation" value="Bathroom Fitting Installation" />
							<Picker.Item label="New Water Line Connection" value="New Water Line Connection" />
							<Picker.Item label="Water Motor Installation" value="Water Motor Installation" />
							<Picker.Item label="Others" value="Others" />
						</Picker>
					</View>
					<View style={styles.touchcontainer}>
						<TouchableOpacity
							style={styles.buttonContainer}
							onPress={() => {
								this._handlePress();
							}}
						>
							<Text style={styles.buttonText}>Continue</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.logoContainer}>
						<Image style={styles.logo} source={require('../assets/icons/plumber.png')} />
					</View>
				</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		flex: 1
	},
	touchcontainer: {
		padding: 20
	},
	buttonContainer: {
		backgroundColor: '#f5a623',
		paddingVertical: 15,
		borderRadius: 5,
		marginBottom: 10
	},
	buttonText: {
		textAlign: 'center',
		color: '#FFFFFF',
		fontWeight: '500'
	},
	PickerContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 20
	},
	pickerstyle: {
		height: 70,
		width: '100%',
		color: '#2a363b'
	},
	logoContainer: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center'
	},
	logo: {
		width: '40%',
		height: '40%',
		resizeMode: 'contain'
	}
});
