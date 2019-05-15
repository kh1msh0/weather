import React, {Component} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import Confetti from 'react-native-confetti';

class Rain extends Component {
  componentDidMount() {
    if(this._confettiView) {
       this._confettiView.startConfetti();
    }
  }

  render() {
    return <View style={styles.container}>
      <Confetti ref={(node) => this._confettiView = node}/>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});