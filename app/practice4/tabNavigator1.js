import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

import { StackNavigator } from 'react-navigation'

import Screen1 from './Screen1'
import Screen2 from './Screen2'

export default tabNavigator1 = StackNavigator({
	Screen1: {
		screen: Screen1,
		navigationOptions: {
			title: 'Tab1 - Screen1',
		}
	},
	Screen2: {
		screen: Screen2,
		navigationOptions: {
			title: 'Tab1 - Screen2'
		}
	},
}, {
		initialRouteName: 'Screen1',
		headerMode: 'float' // float, screen, none
	});