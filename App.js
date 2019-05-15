import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import NavigationBar from './src/navigation/NavigationBar';


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  }
};

export default class App extends React.Component {
  render() {
    return (
      <PaperProvider >
        <NavigationBar />
      </PaperProvider>
    );
  }
}

