import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, Image, Button, TouchableOpacity , TextInput, Keyboard} from 'react-native';
import Left from '../menuLeft/Left'
export default class Login extends Component {
    state = {  }
    render() {
        return (
            
            <View style={styles.container } onPress={Keyboard.dismiss}>
                <View style={[styles.box, styles.box1]}>
                    <Left/>
                </View>
                <View style={[styles.box, styles.box2]}>
                    <Text style={styles.welcome}>
                            Đăng Nhập
                    </Text>
                    <Text style={styles.decripson}>
                            Vui lòng Đăng Nhập thông tin để sử dụng dịch vụ
                    </Text>
                    <View style={[styles.box, styles.box3]}>
                        <TextInput
                        placeholder = "nhập email "
                        style={{height: 40, width: 500, borderColor: 'gray', marginTop: 30}}
                        onChangeText={(text) => this.setState({text})}
                        keyboardType = 'email-address'
                        returnKeyType = 'next'
                        autoCorrect = {false}
                        value={this.state.text} />

                        <TextInput
                        placeholder = "nhập mật khẩu"
                        style={{height: 40, width: 500, borderColor: 'gray', marginTop: 20}}
                        onChangeText={(text) => this.setState({text})}
                        autoCorrect = {false}
                        returnKeyType = 'go'
                        secureTextEntry
                        value={this.state.text} />


                        <TouchableOpacity
                            style={styles.button} >
                            <Text style={styles.text}>  Xác Nhận </Text>
                        </TouchableOpacity>

                        <View style = {styles.row}>
                            <View style={{width: 120, height: 50}}>
                            <Text style={styles.textlogin}>Quên mật khẩu /</Text>
                            </View>
                            <View style={{width: 60, height: 50}}>
                            <Text style={styles.textlogin}>Đăng ký</Text>
                            </View>
                        </View>
                        

                    </View>
                </View>

                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#2d343f',
    },
    box:{
        
    },
    box1:{
        width: 70,
        backgroundColor: '#F5FCFF',
    },
    box2:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2d343f',
    },
    box3:{
        borderRadius: 5,
        marginTop: 15,
        width: 550,
        height: 350,
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    containerItem: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      welcome: {
        fontSize: 30,
        textAlign: 'center',
        color: '#F5FCFF',
      },
      decripson: {
        fontSize: 20,
        textAlign: 'center',
        color: '#F5FCFF',
      },
      button: {
        marginTop: 20,
        width: 500,
        alignItems: 'center',
        backgroundColor: '#376190',
        padding: 10,
      },
      text: {
        fontSize: 15,
        textAlign: 'center',
        color: '#F5FCFF',
      },
      row:{
        marginTop: 10,
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
      },
      textlogin: {
        fontSize: 15,
        textAlign: 'center',
        color: '#2d343f',
      },

  });