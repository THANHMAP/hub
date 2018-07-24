import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default class Left extends Component {
    state = {  }
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../../../scr/image/logo.png')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 70,
      flexDirection: 'column',
      backgroundColor: '#ededed',
    },
    logo: {
        width: 50,
        height: 100,
        marginTop: 20,
        marginLeft: 10,
        
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });