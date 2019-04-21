import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, BackHandler, ToastAndroid, Image } from 'react-native';
import { MenuButton } from '../components/MenuButton';
import axios from 'axios';
import DataStore from '../Store/datastore';
import { observer } from 'mobx-react';

@observer
export default class SelectionScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			service: DataStore.handy_details.service,
			handyid: DataStore.handy_details.handyID
		};
	}

	//Code to disable hardware back button
	componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
	}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
	}

	handleBackButton() {
		return true;
	}

	//function to get orders to display in order page.
	_getOrderData = () => {
		var self = this;
		axios
			.post('http://handyhand.herokuapp.com/handymanorder.php/', {
				service: self.state.service
			})
			.then(function(response) {
				DataStore.updateHorder(JSON.parse(response.data));
				if (DataStore.order.horder == null) {
					ToastAndroid.show('There are no orders.', ToastAndroid.SHORT);
				} else {
					self.props.navigation.navigate('HOrder');
				}
			})
			.catch(function(error) {
				alert(error);
			});
	};

	//function to fetch all the accepted of the handyman based on handy_id
	_getAcceptedData = () => {
		var self = this;
		axios
			.post('http://handyhand.herokuapp.com/getaccepted_order.php/', {
				handyid: self.state.handyid
			})
			.then(function(response) {
				DataStore.updateAcceptedorder(JSON.parse(response.data));
				if (DataStore.order.acceptedorder == null) {
					ToastAndroid.show('There are no accepted orders.', ToastAndroid.SHORT);
				} else {
					self.props.navigation.navigate('AcceptedOrder');
				}
			})
			.catch(function(error) {
				alert(error);
			});
	};

	//function to fetch completed orders of the handyman based on handy_id.
	_getCompletedData = () => {
		var self = this;
		axios
			.post('http://handyhand.herokuapp.com/completed_order.php/', {
				handyid: self.state.handyid
			})
			.then(function(response) {
				DataStore.updateCompletedorder(JSON.parse(response.data));
				if (DataStore.order.completedorder == null) {
					ToastAndroid.show('You have not completed any orders.', ToastAndroid.SHORT);
				} else {
					self.props.navigation.navigate('CompletedOrder');
				}
			})
			.catch(function(error) {
				alert(error);
			});
	};

	render() {
		return (
			<View style={styles.container}>
				{/*hamburger menu*/}
				<MenuButton
					cb={() => {
						this.props.navigation.navigate('HSettings');
					}}
				/>

				{/*Handyhand Icon showing infront*/}
				<View style={styles.top}>
					<Image source={require('../assets/icons/logo.png')} style={styles.logo} />
				</View>

				{/*All the handyman services as buttons*/}
				<View style={styles.menuContainer}>
					<View style={styles.menuItem}>
						<TouchableOpacity
							onPress={() => {
								this._getOrderData();
							}}
						>
							<Image source={require('../assets/icons/orders.png')} style={styles.image} />
						</TouchableOpacity>
						<Text style={styles.menuText}>Orders</Text>
					</View>

					<View style={styles.menuItem}>
						<TouchableOpacity
							onPress={() => {
								this._getAcceptedData();
							}}
						>
							<Image source={require('../assets/icons/accepted.png')} style={styles.image} />
						</TouchableOpacity>
						<Text style={styles.menuText}>Accepted Orders</Text>
					</View>

					<View style={styles.menuItem}>
						<TouchableOpacity
							onPress={() => {
								this._getCompletedData();
							}}
						>
							<Image source={require('../assets/icons/completed.png')} style={styles.image} />
						</TouchableOpacity>
						<Text style={styles.menuText}>Completed Orders</Text>
					</View>
				</View>
			</View>
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
	top: {
		height: '50%',
		alignItems: 'center',
		justifyContent: 'center'
	},
	image: {
		width: '100%',
		height: '100%',
		borderRadius: 50,
		borderWidth: 3,
		borderColor: 'black'
	},
	menuContainer: {
		height: '40%',
		flexWrap: 'wrap',
		flexDirection: 'row'
	},
	menuItem: {
		width: '33.333333%',
		height: '50%',
		padding: 20
	},
	menuText: {
		fontSize: 15,
		color: '#222831',
		fontWeight: 'bold',
		textAlign: 'center'
	},
	logo: {
		flex: 1,
		height: '80%',
		width: '80%',
		resizeMode: 'contain'
	}
});
