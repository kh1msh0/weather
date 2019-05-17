import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Platform,
    Animated,
    TouchableOpacity,
    Easing,
    Dimensions,
    Image
} from 'react-native';
// import { Easing } from 'react-native-reanimated';
var { width, height } = Dimensions.get('window')

export default class Animation extends React.Component {
    state = {
        fadeValue: new Animated.Value(0),
        xValue: new Animated.Value(0),
        springValue: new Animated.Value(0.5)
    }

    _fadeAnimation = () => {
        Animated.timing(this.state.fadeValue, {
            toValue: 1,
            duration: 1000,
        }).start()
    }
    _moveAnimation = () => {
        Animated.timing(this.state.xValue, {
            toValue: width - 100,
            duration: 1000,
            easing: Easing.easeInElastic()
        }).start(() => {
            Animated.timing(this.state.xValue, {
                toValue: 0,
                duration: 1000,
                easing: Easing.linear,
            }).start(
                // () => { this. _moveAnimation()}
            )
        })
    }

    _springAnimation = () => {
        Animated.spring(this.state.springValue, {
            toValue: 1,
            friction: 1
        }).start()
    }


    render() {
        return (
            <View style={styles.container}>
                {/* <Animated.View style={[styles.animationView,
                //  {opacity: this.state.fadeValue}
                { left: this.state.xValue }
                ]}>

                </Animated.View> */}
                <Animated.Image 
                source={{uri:'https://arcweb.co/wp-content/uploads/2016/10/react-logo-1000-transparent.png'}}
                style={[styles.imageView,
                { transform:[{scale: this.state.springValue}],alignSelf: 'center' }
                ]}>

                </Animated.Image>
                <TouchableOpacity style={styles.button}
                    onPress={this._springAnimation}
                >
                    <Text style={styles.buttonText}>Animate</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
    },
    animationView: {
        width: 100,
        height: 100,
        backgroundColor: 'skyblue'
    },
    button: {
        backgroundColor: 'steelblue',
        height: 45,
        marginTop: 20,
        alignSelf: "center",
    },
    buttonText: {
        color: 'white',
        padding: 12,
        paddingHorizontal: 20,
        fontWeight: 'bold',
        fontSize: 18
    },
    imageView: {
        width: 100,
        height: 100,
        backgroundColor: 'transparent'
    }
})