import React, { useState, useEffect } from 'react';
import {
    ActivityIndicator,
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    ImageBackground,
    Image
} from 'react-native';
import { GET_ANTREO, SET_PRODUCT_LOADING, getAntreo } from '../redux/action/antreoAction';
import { useDispatch, useSelector } from 'react-redux';
import Detail from './detail';
import { useNavigation, useRoute } from '@react-navigation/native'
import axios from 'axios';
import { SwipeListView } from 'react-native-swipe-gestures';
// import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {requestUserPermission, notificationlistener} from '../utils/notificationServices'






const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
        <Text style={[styles.title, { color: textColor }]}>{item.hovaten}</Text>
    </TouchableOpacity>
);

const Home = () => {
    const API_BASE_URL = 'https://6561e085dcd355c083244878.mockapi.io'
    const [selectedId, setSelectedId] = useState();
    const dispatch = useDispatch()
    const productreducer = useSelector(state => state?.antreoReducer)
    const { antreo, isLoading } = productreducer
    // const DATA = antreo?.state
    // console.log('isloading', antreo)
    const navigation = useNavigation();
    // console.log('antreo',DATA[]?.name)
    // const [isLoading, setIsLoading] = useState(true);
    const [keyword, setKeyword] = useState()
    const [data, setData] = useState()
    // const [load, setLoad] = useState(DATA)



    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
        const color = item.id === selectedId ? 'white' : 'black';
        onPress = () => {
            setSelectedId(item.id)
            navigation.navigate('Detail', item)
        }
        return (
            <Item
                item={item}
                onPress={onPress}
                backgroundColor={backgroundColor}
                textColor={color}
                selectedId
            />
        );
    };
    // useEffect(() => {
    //     const url = `https://6561e085dcd355c083244878.mockapi.io/ANTREO`
    //     axios
    //         .get(url)
    //         .then(res => {
    //             setLoad(res.data)
    //             // console.log('userrrrrrrrrr',res.data)
    //             dispatch({
    //                 type: GET_ANTREO,
    //                 data: res.data
    //             })
    //             setIsLoading(false)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }, [])
    useEffect(()  => {
        // requestUserPermission()
        // notificationlistener()
        const logdata = async () => {
            try{
                const database = await AsyncStorage.getItem('posts')
                if(database){
                    // console.log('database', database)
                }
                // requestUserPermission()
                 dispatch(getAntreo())
            } catch(error){
                console.log('error')
            }
        }
        logdata()
    }, [])

    const filterItemName = () => {
        const filteredData = antreo.filter((item) => item.hovaten.includes(keyword))
        setData(filteredData)
        // console.log('search', filteredData)
    }
    useEffect(() => {
        if (keyword === '') {
            setData(antreo)
        }
    }, [keyword])
    const handlePress = () => {
        navigation.navigate('addAntreo')
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ width: '90%', height: 40, backgroundColor: 'white', marginHorizontal: 20, flexDirection: 'row', borderRadius: 10, marginTop: 10 }}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <TextInput
                        value={keyword}
                        onChangeText={text => setKeyword(text)}
                        style={{ hei: 100 }}
                        placeholder='Tìm kiếm'
                    />
                </View>
                <View style={{ flex: 0.2, backgroundColor: '#f9c2ff', justifyContent: 'center', borderRadius: 10 }}>
                    <TouchableOpacity onPress={filterItemName}>
                        <Text>Tìm kiếm</Text>
                    </TouchableOpacity>
                </View>



            </View>

            {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <FlatList
                    data={data ? data : antreo}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    extraData={selectedId}
                />
            )}

            <View style={{ flex: 1, position: 'absolute', right: 0, bottom: 0, marginBottom: 10, marginRight: 10 }}>
                <TouchableOpacity  onPress={handlePress}>
                    <Image
                        source={require('../utils/plus.jpeg')}
                        style={styles.image}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        // justifyContent: 'flex-end',
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    image: {
        width: 50,
        height: 50,
        resizeMode: 'contain', // Tuỳ chọn, có thể là 'cover', 'stretch', 'contain', ...
      },
});

export default Home;


