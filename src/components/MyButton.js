import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

 class MyButton extends React.Component {
  render(){
    return (
      <Button style={styles.buttonStyle} icon="search" mode="outlined" onPress={ this.props.search}>
          Press me
      </Button>
    )
  }
}


const styles = StyleSheet.create({
  buttonStyle:{
      margin: 8,
      color: '#0080ff',
  }
})

export default MyButton;