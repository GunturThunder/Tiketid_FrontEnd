import React, { Component, version } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: '#F8F8F8'
    },
    header: {
        backgroundColor: 'white',
    },
    content: {
        height: 490,
        marginHorizontal: 10,
        marginTop: 10
    }
})

class User extends Component {
    render() {
        return (
            <View style={styles.wrap}>

                <View style={styles.header}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{ marginBottom: 15 }}>
                            <Icon name="arrow-back" style={{ marginLeft: 20, marginTop: 20, color: '#75797C' }}></Icon>
                        </TouchableOpacity>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, marginLeft: -40 }}><Text style={{ fontSize: 20, color: '#75797C' }}>Profile</Text></View>
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={{ height: 230, backgroundColor: 'white', borderRadius: 10 }}>
                        <View style={{ alignItems: 'center', marginTop: 15 }}>
                            <View style={{ width: 95, height: 95, borderRadius: 50, borderWidth: 3, borderColor: '#57DBE9', justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ width: 80, height: 80, borderRadius: 40 }} source={require('../../../img/profile/profile1.png')} />
                            </View>
                            <Text style={{ paddingTop: 10, fontSize: 18, fontWeight: 'bold', color: '#515151' }}>Zlatan Ibrahimovic</Text>
                            <TouchableOpacity style={{ height: 50, backgroundColor: '#57DBE9', paddingHorizontal: 85, marginTop: 10, justifyContent: 'center', borderRadius: 10 }}>
                                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Edit Profile</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <TouchableOpacity style={{ backgroundColor: 'red',height:50 }}><Text>aa</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default User;