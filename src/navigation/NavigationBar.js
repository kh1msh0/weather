import * as React from 'react';
import { Text } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import Weather from "../screens/Weather";
import Animation from '../screens/Animation'

const MusicRoute = () => <Weather/>;

const AlbumsRoute = () => <Animation />;

const RecentsRoute = () => <Text>Recents</Text>;

const ShopRoute = () => <Text>shop</Text>;


export default class NavigationBar extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'weather', title: 'Weather', icon: 'cloud', color: '#3F51B5' },
      { key: 'albums', title: 'Albums', icon: 'album', color: '#009688' },
      { key: 'recents', title: 'Recents', icon: 'history', color: '#795548' },
      { key: 'shop', title: 'Shop', icon: 'shopping-cart', color: '#607D8B' },
    ],
  };
  


  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    weather: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    shop: ShopRoute
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}