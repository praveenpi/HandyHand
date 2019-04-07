import React from 'react';
import { StyleSheet, View, ImageBackground, Image, Text, TouchableOpacity, Picker } from 'react-native';
import Datastore from '../Store/datastore';
import { observer } from 'mobx-react';

@observer
export default class CarpenterScreen extends React.Component {
	static navigationOptions = {
		title: 'Carpenter'
	};
	constructor() {
		super();
		this.state = {
			CarpenterWork: 'General Carpenter Work'
		};
	}
	_handlePress = () => {
		Datastore.updateSerInfo(this.state.CarpenterWork);
		this.props.navigation.navigate('Address');
	};

	render() {
		return (
			<ImageBackground source={require('../assets/background/bgwhite.png')} style={styles.container}>
				<View style={styles.container}>
					<View style={styles.PickerContainer}>
						<Picker
							selectedValue={this.state.CarpenterWork}
							style={styles.pickerstyle}
							onValueChange={(itemValue) => this.setState({ CarpenterWork: itemValue })}
						>
							<Picker.Item label="General Carpenter Work" value="General Carpenter Work" />
							<Picker.Item label="New Furniture Making" value="Bathroom Fitting Installation" />
							<Picker.Item
								label="Furniture Installation and Repairing"
								value="Furniture Installation and Repairing"
							/>
							<Picker.Item
								label="Window or Door Assembly and Repair"
								value="Window or Door Assembly and Repair"
							/>
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
						<Image style={styles.logo} source={require('../assets/icons/carpenter.png')} />
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
