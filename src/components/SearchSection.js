import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import MyButton from './MyButton'

export default class SearchSection extends React.Component {
  state = {
    text: ''
  };

  search = () => {
    city = this.state.text
    this.props.searchCity(city)
  }

  render(){
    return (
        <View>
            <TextInput
                style={styles.inputStyle}
                label='City'
                value={this.state.text}
                onChangeText={text => this.setState({text})}
            />
            <MyButton search={this.search} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    inputStyle:{
        margin: 8,
        color: '#0080ff',
        
    }
})