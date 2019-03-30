import React from 'react';
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity, Picker } from 'react-native';

export default class ElectricianScreen extends React.Component {
	static navigationOptions = {
		title: 'Electrician'
	};
	constructor() {
		super();
		this.state = {
			ElectricianWork: 'General Electrical Work'
		};
	}

	render() {
		return (
			<ImageBackground source={require('../assets/background/bg2.png')} style={styles.container}>
				<View style={styles.container}>
					<Text style={styles.title}>Electrician</Text>
					<View style={styles.PickerContainer}>
						<Picker
							selectedValue={this.state.ElectricianWork}
							style={styles.pickerstyle}
							onValueChange={(itemValue) => this.setState({ ElectricianWork: itemValue })}
						>
							<Picker.Item label="General Electrical Work" value="General Electrical Work" />
							<Picker.Item label="Electrical Wiring" value="Electrical Wiring" />
							<Picker.Item label="Motor Repairing" value="Motor Repairing" />
							<Picker.Item label="Inverter Service" value="Inverter Service" />
							<Picker.Item label="Others" value="Others" />
						</Picker>
					</View>
					<View style={styles.touchcontainer}>
						<TouchableOpacity
							style={styles.buttonContainer}
							onPress={() => this.props.navigation.navigate('Home')}
						>
							<Text style={styles.buttonText}>Continue</Text>
						</TouchableOpacity>
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
	title: {
		fontSize: 25,
		textAlign: 'center',
		color: '#ffffff',
		marginTop: 20,
		fontWeight: 'bold',
		padding: 30
	},
	PickerContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	pickerstyle: {
		height: 50,
		width: '100%',
		color: '#f5a623'
	}
});
