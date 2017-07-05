import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class extends Component {
	render() {
		return (
			<View style={styles.wrapper}>
				<Text>tabScreen4</Text>
			</View >
		);
	}
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
});