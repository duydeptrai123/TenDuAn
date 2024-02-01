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
    Alert
} from 'react-native';
import { GET_ANTREO, getAntreo } from '../redux/action/antreoAction';
import { useDispatch, useSelector } from 'react-redux';
import Detail from './detail';
import { useNavigation, useRoute } from '@react-navigation/native'
import axios from 'axios';
import { SwipeListView } from 'react-native-swipe-gestures';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Login from './Login';
import { changeUser, resetUser } from '../redux/action/userAction';







const Answer = () => {
    const dispatch = useDispatch()
  const user1 = useSelector(state => state?.userReducer)
  const {user} = user1
  // console.log('user',user[0]?.name)
  const navigation = useNavigation()
  const logOut = () =>{
    Alert.alert(
      'Thông báo',
      'Bạn có chắc chắn muốn đăng xuất không ?',
      [
          {
              text: 'Hủy',
              onPress: () => {
                  // Bất kỳ công việc nào bạn muốn thực hiện khi nhấn "Cancel"
              },
              style: 'cancel',
          },
          {
              text: 'OK',
            
                    onPress: () => {
                        // Đặt giá trị ô nhập về rỗng
                        navigation.navigate('Đăng nhập', { username: '' });
                    },
          },
      ],
      { cancelable: false }
  );
  }

    return (
        <SafeAreaView style={styles.container}>
           <View style={{justifyContent:'center', alignItems:'center'}}>
            <ImageBackground style={{width:150, height:150, backgroundColor:'pink'}}/>
            <Text style={{fontSize:30, fontWeight:'normal'}}>{user[0]?.name}</Text>
            <TouchableOpacity onPress={logOut} style={styles.btnLogout}>
              <Text>Đăng xuất</Text>
            </TouchableOpacity>
           </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50
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
    btnLogout: {
      marginTop:30,
      width:100,
      height:40,
      backgroundColor:'pink',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10
    }
});

export default Answer;


