import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from "../components/Header";
import SearchSection from "../components/SearchSection";
  
export default class Weather extends React.Component {
  state = {
    items: {},
    location: {},
    current: {},
    city: "kutaisi"
  }

  componentDidMount() {
    this.searchCity(this.state.city);
  }

  searchCity = (city) => {
    fetch(`http://api.apixu.com/v1/current.json?key=def281bd0af44614a93162636190905&q=${city}`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          isloaded: true,
          items: data,
          location: data.location,
          current: data.current
        })
      )
      .catch(error => console.error('Error:', error));
  }

  render() {

    return (
      <View style={styles.container}>
        <Header headerText={this.state.location.country} />
        <SearchSection searchCity={this.searchCity} />

        <Text style={styles.textstyle}>Country: {this.state.location.country}</Text>
        <Text style={styles.textstyle}>City: {this.state.location.name}</Text>
        <Text style={styles.textstyle}>Temperature now: {this.state.current.temp_c}c</Text>
        <Text style={styles.textstyle}>Feelslike: {this.state.current.feelslike_c}c</Text>
        <Text style={styles.textstyle}>Wind: {this.state.current.wind_kph}kph</Text>
        <Text style={styles.textstyle}>Last updated: {this.state.current.last_updated}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  textstyle: {
    paddingTop: 10,
    paddingLeft: 8
  }
});
