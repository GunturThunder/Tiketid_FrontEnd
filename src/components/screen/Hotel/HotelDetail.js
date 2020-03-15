import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, WebView} from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'native-base';

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: 'white'
    },
    imageWrapCov: {
        height: 316,
    },
    content: {
        marginHorizontal: 18
    },
    content1: {
        height: 108,
        marginTop: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#CFCECE'
    },
    content2: {
        marginTop: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#CFCECE'
    }
})

class HotelDetail extends Component {
    static navigationOptions = {
        title: "Favehotel Padjajaran Bogor",
        headerStyle: {
            backgroundColor: '#57DBE9',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontSize: 18,
        },
    };
    render() {
        return (
            <View style={styles.wrap}>
                <ScrollView >
                    <View style={styles.imageWrapCov}>
                        <Image style={{ width: '100%', height: 246 }} source={require('../../../img/favehotel/pic6.webp')} />
                        <View style={styles.images}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                                <View style={{ marginTop: 1, flexDirection: 'row' }}>
                                    <TouchableOpacity>
                                        <Image style={{ height: 70, width: 91, marginRight: 5 }} source={require('../../../img/favehotel/pic2.jpg')} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image style={{ height: 70, width: 91, marginRight: 5 }} source={require('../../../img/favehotel/pic3.jpg')} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image style={{ height: 70, width: 91, marginRight: 5 }} source={require('../../../img/favehotel/pic4.jpg')} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image style={{ height: 70, width: 91, marginRight: 5 }} source={require('../../../img/favehotel/pic5.jpg')} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image style={{ height: 70, width: 91, marginRight: 5 }} source={require('../../../img/favehotel/pic2.jpg')} />
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.content1}>
                            <Text style={{ color: '#565656', marginBottom: 8 }}>IDR 579.000</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 17, marginBottom: 5, color: '#5A5A5A' }}>Favehotel Padjajaran Bogor</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon style={{ color: '#BDC0C6', fontSize: 20, marginRight: 10 }} name="locate"></Icon>
                                <Text style={{ color: '#565656' }}>Jl.Riau No. 12D, RT.03/RW/03</Text>
                            </View>
                        </View>
                        <View style={styles.content1}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#5A5A5A', marginBottom: 15 }}>Check In/Check Out Time</Text>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginBottom: 8 }}>
                                <Text>Check In Time</Text><Text>13.00</Text>
                            </View>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Text>Check Out Time</Text><Text>12.00</Text>
                            </View>
                        </View>
                        <View style={styles.content2}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#5A5A5A', marginBottom: 15 }}>Description</Text>
                            <WebView 
                                source={{
                                    html:
                                    "<style>p{text-align:justify}</style>"+
                                    "<p>"+
                                    "favehotel Bandara - Tangerang is the first favehotel in Tangerang with a new and different accommodation option for visitors to Jakarta, Indonesia . Located strategically in Soekarno Hatta International Airport area, this hotel offers time efficiency for smart travellers, also provides clean and comfortable accommodations with great value and heartfelt service.  A melting pot of Betawi, Chinese, and Banten culture,Tangerang offers variety of attractions for business and leisure travelers.Our 164 guest rooms are specially designed to comfort your stay while waiting for"+
                                    "</p>"
                                }}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default HotelDetail;