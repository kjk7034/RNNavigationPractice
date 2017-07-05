import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { TabNavigator, StackNavigator } from 'react-navigation'

import tabNavigator1 from './tabNavigator1'
import tabNavigator2 from './tabNavigator2'
import tabNavigator3 from './tabNavigator3'
import tabNavigator4 from './tabNavigator4'
import ModalScreen from './ModalScreen'

const TabBarNavigator = TabNavigator({
	TabScreen1: {
		screen: tabNavigator1,
		navigationOptions: {
			tabBarLabel: ({ tintColor }) => (
				<View style={styles.tabTextWrap}>
					<Text style={[styles.tabText, { color: tintColor }]}>Tab1</Text>
				</View>
			),
			tabBarIcon: ({ tintColor }) => (
				<Text style={[styles.tabText, { color: tintColor }]}>icon</Text>
			)
		}
	},
	TabScreen2: {
		screen: tabNavigator2,
		navigationOptions: {
			tabBarLabel: ({ tintColor }) => (
				<View style={styles.tabTextWrap}>
					<Text style={[styles.tabText, { color: tintColor }]}>Tab2</Text>
				</View>
			),
			tabBarIcon: ({ tintColor }) => (
				<Text style={[styles.tabText, { color: tintColor }]}>icon</Text>
			)
		}
	},
	TabScreen3: {
		screen: tabNavigator3,
		navigationOptions: {
			tabBarLabel: ({ tintColor }) => (
				<View style={styles.tabTextWrap}>
					<Text style={[styles.tabText, { color: tintColor }]}>Tab3</Text>
				</View>
			),
			tabBarIcon: ({ tintColor }) => (
				<Text style={[styles.tabText, { color: tintColor }]}>icon</Text>
			)
		}
	},
	TabScreen4: {
		screen: tabNavigator4,
		navigationOptions: {
			tabBarLabel: ({ tintColor }) => (
				<View style={styles.tabTextWrap}>
					<Text style={[styles.tabText, { color: tintColor }]}>Tab4</Text>
				</View>
			),
			tabBarIcon: ({ tintColor }) => (
				<Text style={[styles.tabText, { color: tintColor }]}>icon</Text>
			)
		}
	},
}, {
		initialRouteName: 'TabScreen1',
		tabBarPosition: 'bottom',
		tabBarOptions: {
			activeTintColor: 'red',
			inactiveTintColor: 'black',
			style: {
				borderTopColor: 'blue',
				borderTopWidth: 1,
			},
		},
		lazy: true
	});


export default AppNavigator = StackNavigator({
	TabBarNavigator: {
		screen: TabBarNavigator,
	},
	ModalScreen: {
		screen: ModalScreen,
	},
},
	{
		initialRouteName: 'TabBarNavigator',
		headerMode: 'none',
		mode: 'modal',
	})


const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		// flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	tabTextWrap: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 20
	},
	tabText: {
		fontSize: 12
	}
})