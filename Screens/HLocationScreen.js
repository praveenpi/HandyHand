import React from 'react';
import {
	KeyboardAvoidingView,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	Text,
	View,
	BackHandler,
	ToastAndroid,
	Alert
} from 'react-native';
import DataStore from '../Store/datastore';
import { observer } from 'mobx-react';
import { OpenMapDirections } from 'react-native-navigation-directions';

@observer
export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			latitude: DataStore.HandyLocation.latitude,
			longitude: DataStore.HandyLocation.longitude,
			region: DataStore.order.region,
			orderID: DataStore.order_details.orderID,
			name: DataStore.order_details.cname,
			phone: DataStore.order_details.phone,
			serInfo: DataStore.order_details.serviceInfo,
			date: DataStore.order_details.orderdate,
			token: DataStore.order_details.token
		};
	}

	//using backhandler to disable hardware backbutton.
	componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
	}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
	}

	handleBackButton() {
		ToastAndroid.show('Press Proceed to continue', ToastAndroid.SHORT);
		return true;
	}

	//function to open google maps and show direction to user location.
	_callShowDirections = () => {
		if (this.state.region.longitude == this.state.longitude || this.state.region.latitude == this.state.longitude) {
			Alert.alert('You are at customer location', 'Click Yes to proceed.', [
				{
					text: 'Cancel',
					onPress: () => this.props.navigation.navigate('AcceptedOrder'),
					style: 'cancel'
				},
				{
					text: 'Yes',
					onPress: () => {
						this.props.navigation.navigate('Reached');
					}
				}
			]);
		} else {
			const startPoint = {
				longitude: this.state.region.longitude,
				latitude: this.state.region.latitude
			};

			const endPoint = {
				longitude: parseFloat(this.state.longitude),
				latitude: parseFloat(this.state.latitude)
			};

			const transportPlan = 'd';

			OpenMapDirections(startPoint, endPoint, transportPlan).then((res) => {
				console.log(res);
			});
		}
	};

	render() {
		return (
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
				<View style={styles.container}>
					<View style={styles.profilecontainer}>
						<Text style={styles.title}>Order Success</Text>
						<Text style={styles.textstyle}>Order ID</Text>
						<TextInput
							placeholder="orderid"
							placeholderTextColor="rgba(0,0,0,0.5)"
							returnKeyType="next"
							autoCapitalize="none"
							autoCorrect={false}
							style={styles.input}
							value={this.state.orderID}
							editable={false}
						/>
						<Text style={styles.textstyle}>Name</Text>
						<TextInput
							placeholder="name"
							placeholderTextColor="rgba(0,0,0,0.5)"
							returnKeyType="next"
							style={styles.input}
							value={this.state.name}
							editable={this.state.editable}
						/>
						<Text style={styles.textstyle}>Phone</Text>
						<TextInput
							placeholder="Phone"
							placeholderTextColor="rgba(0,0,0,0.5)"
							returnKeyType="next"
							autoCapitalize="none"
							autoCorrect={false}
							style={styles.input}
							value={this.state.phone}
							editable={false}
						/>
						<Text style={styles.textstyle}>Service Info</Text>
						<TextInput
							placeholder="service"
							placeholderTextColor="rgba(0,0,0,0.5)"
							style={styles.input}
							value={this.state.serInfo}
							editable={false}
						/>

						<Text style={styles.textstyle}>Date</Text>
						<TextInput
							placeholder="date"
							placeholderTextColor="rgba(0,0,0,0.5)"
							style={styles.input}
							value={this.state.date}
							editable={false}
						/>

						<TouchableOpacity
							style={styles.buttonContainer}
							onPress={() => {
								this._callShowDirections();
							}}
						>
							<Text style={styles.buttonText}>Proceed</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.buttonContainer}
							onPress={() => this.props.navigation.navigate('HandyHome')}
						>
							<Text style={styles.buttonText}>Back</Text>
						</TouchableOpacity>
					</View>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		height: '100%',
		backgroundColor: '#eeeeee'
	},
	profilecontainer: {
		padding: 20,
		flexDirection: 'column',
		justifyContent: 'center'
	},
	textstyle: {
		fontSize: 15,
		fontWeight: 'bold',
		color: '#222831'
	},
	title: {
		fontSize: 25,
		alignItems: 'center',
		paddingTop: 10,
		justifyContent: 'center',
		marginBottom: 20
	},
	input: {
		height: 40,
		backgroundColor: 'rgba(255,255,255,0.5)',
		marginBottom: 10,
		color: 'rgba(0,0,0,0.8)',
		paddingHorizontal: 10,
		borderColor: '#0092ca',
		borderRadius: 4,
		borderWidth: 2,
		fontWeight: 'bold'
	},

	buttonContainer: {
		backgroundColor: '#0092ca',
		paddingVertical: 15,
		borderRadius: 5,
		marginBottom: 10,
		justifyContent: 'space-around',
		alignItems: 'center',
		shadowColor: '#000000',
		elevation: 7,
		shadowRadius: 5,
		shadowOpacity: 1.0,
		height: 50
	},
	buttonText: {
		textAlign: 'center',
		color: '#eeeeee',
		fontWeight: '500'
	}
});
