import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Animated, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

export default class extends Component {
	constructor(props) {
		super(props)
		this.state = {
			visible: this.props.visible ? this.props.visible : false,
			drawerAnimated: new Animated.ValueXY(),
		}
	}
	toggleLayer() {
		if (this.state.visible) {
			Animated.timing(
				this.state.drawerAnimated,
				{
					duration: 150,
					toValue: {
						x: 0, y: 0
					}
				}
			).start(() => {
				this.setState({
					visible: false
				})
			})
		} else {
			this.setState({
				visible: true
			}, () => {
				Animated.timing(
					this.state.drawerAnimated,
					{
						duration: 150,
						toValue: {
							x: deviceWidth, y: 0
						}
					}
				).start()
			})
		}
	}
	render() {
		if (!this.state.visible) {
			return null
		}
		const { toggleLayer, navigate } = this.props.navigation
		return (
			<Animated.View style={[
				styles.animateView, this.animateStyle, {
					transform: this.state.drawerAnimated.getTranslateTransform()
				}
			]}>
				<View style={styles.wrapper}>
					<Text>Layer</Text>
					<Button title="Close Layer" onPress={() => {
						toggleLayer()
					}} />
					<Button title="open ModalScreen" onPress={() => {
						navigate("ModalScreen", { id: "Wise" })
					}} />
				</View >
			</Animated.View>
		);
	}
}

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: 'pink',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	animateView: {
		position: 'absolute',
		width: deviceWidth,
		height: deviceHeight,
		zIndex: 150,
		left: -deviceWidth,
		top: 0,
	},
});