import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { TabNavigator } from 'react-navigation'

import tabScreen1 from './tabScreen1'
import tabScreen2 from './tabScreen2'
import tabScreen3 from './tabScreen3'
import tabScreen4 from './tabScreen4'

export default AppNavigator = TabNavigator({
	Screen1: {
		screen: tabScreen1,
		navigationOptions: {
			tabBarLabel: ({ tintColor }) => (
				<View style={styles.tabTextWrap}>
					<Text style={[styles.tabText, { color: tintColor }]}>Tab1</Text>
				</View>
			),
			tabBarIcon: ({ tintColor }) => (
				<Text style={[styles.tabText, { color: tintColor }]}>icon</Text>
			),

		}
	},
	Screen2: {
		screen: tabScreen2,
		navigationOptions: {
			tabBarLabel: ({ tintColor }) => (
				<View style={styles.tabTextWrap}>
					<Text style={[styles.tabText, { color: tintColor }]}>Tab2</Text>
				</View>
			),
			tabBarIcon: ({ tintColor }) => (
				<Text style={[styles.tabText, { color: tintColor }]}>icon</Text>
			),

		}
	},
	Screen3: {
		screen: tabScreen3,
		navigationOptions: {
			tabBarLabel: ({ tintColor }) => (
				<View style={styles.tabTextWrap}>
					<Text style={[styles.tabText, { color: tintColor }]}>Tab3</Text>
				</View>
			),
			tabBarIcon: ({ tintColor }) => (
				<Text style={[styles.tabText, { color: tintColor }]}>icon</Text>
			),

		}
	},
	Screen4: {
		screen: tabScreen4,
		navigationOptions: {
			tabBarLabel: ({ tintColor }) => (
				<View style={styles.tabTextWrap}>
					<Text style={[styles.tabText, { color: tintColor }]}>Tab4</Text>
				</View>
			),
			tabBarIcon: ({ tintColor }) => (
				<Text style={[styles.tabText, { color: tintColor }]}>icon</Text>
			),

		}
	},
}, {
		initialRouteName: 'Screen1',
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