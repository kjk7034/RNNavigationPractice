import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class extends Component {
	render() {
		const { navigate, toggleLayer } = this.props.navigation
		return (
			<View style={styles.wrapper}>
				<Text>Screen1</Text>
				<Button title="Go Screen2 - current Tab" onPress={() => {
					navigate("Screen2", { id: "Wise" })
				}} />
				<Button title="open ModalScreen" onPress={() => {
					navigate("ModalScreen", { id: "Wise" })
				}} />
				<Button title="open Layer" onPress={() => {
					toggleLayer()
				}} />
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