import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class extends Component {
	render() {
		const { navigate, goBack } = this.props.navigation
		return (
			<View style={styles.wrapper}>
				<Text>ModalScreen</Text>
				<Button title="Modal 닫기" onPress={() => {
					goBack()
				}} />
				<Button title="Modal 위에 Modal" onPress={() => {
					navigate("ModalScreen", { id: "Wise" })
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