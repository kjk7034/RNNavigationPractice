import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class extends Component {
	render() {
		const { goBack, state } = this.props.navigation
		return (
			<View style={styles.wrapper}>
				<Text>Screen2</Text>
				<Text>ID : {state.params.id}</Text>
				<Button title="Go Back" onPress={() => {
					goBack()
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