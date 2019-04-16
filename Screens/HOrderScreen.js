import React, { Component } from 'react';
import { ImageBackground, Alert, StyleSheet, FlatList, Text, View, ToastAndroid, TouchableOpacity } from 'react-native';
import DataStore from '../Store/datastore';
import { observer } from 'mobx-react';
import { IntentLauncherAndroid } from 'expo';
import { Location } from 'expo';
import axios from 'axios';

@observer
export default class HOrderScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: DataStore.order.horder,
			orderid: '',
			handyid: DataStore.handy_details.handyID,
			hname: DataStore.handy_details.name
		};
	}

	//updating HandyId and handy Name on order_info.
	_acceptOrder = () => {
		var self = this;
		axios
			.post('http://handyhand.herokuapp.com/accept_order.php/', {
				orderid: self.state.orderid,
				handyid: self.state.handyid,
				hname: self.state.hname
			})
			.then(function(response) {
				if (response.data.res == 'success') {
					ToastAndroid.show('Order Has been accepted', ToastAndroid.SHORT);
					self.props.navigation.navigate('HLocation');
				} else {
					alert('Order Failed');
				}
			})
			.catch(function(error) {
				alert(error);
			});
	};

	//function to store specified data from the whole array.
	_StoreLocation = async (item) => {
		DataStore.updateHLatitude(item.Latitude);
		DataStore.updateHLongitude(item.Longitude);
		DataStore.updateHLatitudeDelta(item.LatitudeDelta);
		DataStore.updateLongitudeDelta(item.LongitudeDela);
		DataStore.updateOrderID(item.Order_ID);
		this.setState({ orderid: item.Order_ID });
		DataStore.updateOCName(item.Cname);
		DataStore.updateOPhone(item.PhoneNumber);
		DataStore.updateSerInfo(item.ServiceInfo);
		DataStore.updateDate(item.Order_Date);

		let providers = await Location.getProviderStatusAsync();

		if (providers.locationServicesEnabled == true) {
			Alert.alert('Do you want to accept this order?', 'Click Yes to proceed.', [
				{
					text: 'Cancel',
					onPress: () => this.props.navigation.navigate('HOrder'),
					style: 'cancel'
				},
				{
					text: 'Yes',
					onPress: () => {
						this._acceptOrder();
					}
				}
			]);
		} else {
			IntentLauncherAndroid.startActivityAsync(IntentLauncherAndroid.ACTION_LOCATION_SOURCE_SETTINGS);
		}
	};

	renderItem = ({ item }) => {
		return (
			<View style={{ flex: 1, flexDirection: 'row', marginBottom: 3 }}>
				<View style={{ flex: 1, justifycontent: 'center' }}>
					<Text style={styles.title} onPress={this._StoreLocation.bind(this, item)}>
						Order ID: {item.Order_ID}
					</Text>
					<Text style={styles.subtitle}>Customer Name: {item.Cname}</Text>
					<Text style={styles.subtitle}>Phone Number: {item.PhoneNumber}</Text>
					<Text style={styles.subtitle}>Information: {item.ServiceInfo}</Text>
					<Text style={styles.subtitle}>Date: {item.Order_Date}</Text>
				</View>
			</View>
		);
	};

	//line to seperate list items.
	renderSeperator = () => {
		return <View style={{ height: 1, width: '100%', backgroundColor: '#000' }} />;
	};
	render() {
		return (
			<ImageBackground source={require('../assets/background/bgwhite.png')} style={styles.container}>
				<View style={styles.container}>
					<FlatList
						data={this.state.data}
						renderItem={this.renderItem}
						keyExtractor={(item, index) => index.toString()}
						ItemSeparatorComponent={this.renderSeperator}
					/>

					<View style={styles.button}>
						<TouchableOpacity
							style={styles.buttonContainer}
							onPress={() => {
								this.props.navigation.navigate('HandyHome');
							}}
						>
							<Text style={styles.buttonText}>Back</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		height: '100%'
	},
	button: {
		padding: 20
	},
	title: {
		fontSize: 18,
		color: '#000',
		fontWeight: 'bold',
		marginBottom: 5
	},
	subtitle: {
		fontSize: 16,
		color: '#f5a623'
	},
	buttonContainer: {
		backgroundColor: '#f5a623',
		paddingVertical: 15,
		paddingHorizontal: 20,
		borderRadius: 2,
		marginBottom: 10,
		shadowColor: '#000000',
		elevation: 7,
		shadowRadius: 5,
		shadowOpacity: 1.0
	},
	buttonText: {
		textAlign: 'center',
		color: '#FFFFFF',
		fontWeight: '500'
	}
});
