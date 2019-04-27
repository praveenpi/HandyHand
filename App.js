import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './Screens/HomeScreen';
import CLoginScreen from './Screens/CLoginScreen';
import UserSignupScreen from './Screens/UserSignupScreen';
import HandymanSignupScreen from './Screens/HandymanSignupScreen';
import SelectionScreen from './Screens/SelectionScreen';
import ElectricianScreen from './Screens/ElectricianScreen';
import PlumberScreen from './Screens/PlumberScreen';
import PainterScreen from './Screens/PainterScreen';
import GardenerScreen from './Screens/GardenerScreen';
import CarpenterScreen from './Screens/CarpenterScreen';
import CleanerScreen from './Screens/CleanerScreen';
import HLoginScreen from './Screens/HLoginScreen';
import SettingsScreen from './Screens/SettingsScreen';
import ProfileScreen from './Screens/ProfileScreen';
import AddressScreen from './Screens/AddressScreen';
import LocationScreen from './Screens/LocationScreen';
import OrderSuccess from './Screens/OrderSucess';
import COrderScreen from './Screens/COrderScreen';
import HandyHomeScreen from './Screens/HandyHomeScreen';
import HSettingsScreen from './Screens/HSettingsScreen';
import HOrderScreen from './Screens/HOrderScreen';
import HProfileScreen from './Screens/HProfileScreen';
import HLocationScreen from './Screens/HLocationScreen';
import AcceptedOrderScreen from './Screens/AcceptedOrderScreen';
import CompletedOrderScreen from './Screens/CompletedOrderScreen';
import ReachedScreen from './Screens/ReachedScreen';
import COrderCompleteScreen from './Screens/COrderCompleteScreen';

export default class App extends React.Component {
	render() {
		return <AppContainer />;
	}
}

const AppNavigator = createStackNavigator(
	{
		Home: {
			screen: HomeScreen,
			navigationOptions: () => ({
				header: null
			})
		},
		CLogin: {
			screen: CLoginScreen,
			navigationOptions: () => ({
				header: null
			})
		},
		HLogin: {
			screen: HLoginScreen,
			navigationOptions: () => ({
				header: null
			})
		},
		UserSignup: {
			screen: UserSignupScreen,
			navigationOptions: () => ({
				header: null
			})
		},
		HandymanSignup: {
			screen: HandymanSignupScreen,
			navigationOptions: () => ({
				header: null
			})
		},
		Selection: {
			screen: SelectionScreen,
			navigationOptions: () => ({
				header: null
			})
		},

		Electrician: {
			screen: ElectricianScreen,
			navigationOptions: () => ({
				headerStyle: {
					backgroundColor: '#0092ca'
				},
				headerTitleStyle: {
					fontWeight: 'bold'
				}
			})
		},
		Plumber: {
			screen: PlumberScreen,
			navigationOptions: () => ({
				headerStyle: {
					backgroundColor: '#0092ca'
				},
				headerTitleStyle: {
					fontWeight: 'bold'
				}
			})
		},
		Painter: {
			screen: PainterScreen,
			navigationOptions: () => ({
				headerStyle: {
					backgroundColor: '#0092ca'
				},
				headerTitleStyle: {
					fontWeight: 'bold'
				}
			})
		},
		Gardener: {
			screen: GardenerScreen,
			navigationOptions: () => ({
				headerStyle: {
					backgroundColor: '#0092ca'
				},
				headerTitleStyle: {
					fontWeight: 'bold'
				}
			})
		},
		Carpenter: {
			screen: CarpenterScreen,
			navigationOptions: () => ({
				headerStyle: {
					backgroundColor: '#0092ca'
				},
				headerTitleStyle: {
					fontWeight: 'bold'
				}
			})
		},
		Cleaner: {
			screen: CleanerScreen,
			navigationOptions: () => ({
				headerStyle: {
					backgroundColor: '#0092ca'
				},
				headerTitleStyle: {
					fontWeight: 'bold'
				}
			})
		},
		Settings: {
			screen: SettingsScreen,
			navigationOptions: () => ({
				header: null
			})
		},
		Profile: {
			screen: ProfileScreen,
			navigationOptions: () => ({
				headerStyle: {
					backgroundColor: '#0092ca'
				},
				headerTitleStyle: {
					fontWeight: 'bold'
				}
			})
		},
		Address: {
			screen: AddressScreen,
			navigationOptions: () => ({
				headerStyle: {
					backgroundColor: '#0092ca'
				},
				headerTitleStyle: {
					fontWeight: 'bold'
				}
			})
		},
		Location: {
			screen: LocationScreen,
			navigationOptions: () => ({
				header: null
			})
		},

		OrderSuccess: {
			screen: OrderSuccess,
			navigationOptions: () => ({
				header: null
			})
		},

		COrder: {
			screen: COrderScreen,
			navigationOptions: () => ({
				headerStyle: {
					backgroundColor: '#0092ca'
				},
				headerTitleStyle: {
					fontWeight: 'bold'
				}
			})
		},
		HandyHome: {
			screen: HandyHomeScreen,
			navigationOptions: () => ({
				header: null
			})
		},
		HSettings: {
			screen: HSettingsScreen,
			navigationOptions: () => ({
				header: null
			})
		},
		HOrder: {
			screen: HOrderScreen,
			navigationOptions: () => ({
				headerStyle: {
					backgroundColor: '#0092ca'
				},
				headerTitleStyle: {
					fontWeight: 'bold'
				}
			})
		},
		HProfile: {
			screen: HProfileScreen,
			navigationOptions: () => ({
				headerStyle: {
					backgroundColor: '#0092ca'
				},
				headerTitleStyle: {
					fontWeight: 'bold'
				}
			})
		},
		HLocation: {
			screen: HLocationScreen,
			navigationOptions: () => ({
				header: null
			})
		},
		AcceptedOrder: {
			screen: AcceptedOrderScreen,
			navigationOptions: () => ({
				headerStyle: {
					backgroundColor: '#0092ca'
				},
				headerTitleStyle: {
					fontWeight: 'bold'
				}
			})
		},
		CompletedOrder: {
			screen: CompletedOrderScreen,
			navigationOptions: () => ({
				headerStyle: {
					backgroundColor: '#0092ca'
				},
				headerTitleStyle: {
					fontWeight: 'bold'
				}
			})
		},
		Reached: {
			screen: ReachedScreen,
			navigationOptions: () => ({
				headerStyle: {
					backgroundColor: '#0092ca'
				},
				headerTitleStyle: {
					fontWeight: 'bold'
				}
			})
		},
		COrderComplete: {
			screen: COrderCompleteScreen,
			navigationOptions: () => ({
				headerStyle: {
					backgroundColor: '#0092ca'
				},
				headerTitleStyle: {
					fontWeight: 'bold'
				}
			})
		}
	},
	{
		initialRouteName: 'Selection'
	}
);

const AppContainer = createAppContainer(AppNavigator);
