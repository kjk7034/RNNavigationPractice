import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { StackNavigator } from 'react-navigation'

import Screen1 from './Screen1'
import Screen2 from './Screen2'

export default tabNavigator4 = StackNavigator({
	Screen1: {
		screen: Screen1,
	},
	Screen2: {
		screen: Screen2,
	},
}, {
		initialRouteName: 'Screen1',
		headerMode: 'none'
	});