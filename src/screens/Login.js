import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Alert, Button, TextInput, TouchableOpacity } from 'react-native';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';
// import {orangeColor} from '../../App';
import { UserContext } from '../context/UserContext';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useRoute } from '@react-navigation/native';
import { connect } from 'react-redux';
import { changeUser } from '../redux/action/userAction';
import Survey from './Survey';
import { useSelector, useDispatch } from 'react-redux'
import MyTabs from '../AppNavigation'
// import { useRoute } from '@react-navigation/native';
const schema = yup.object().shape({
  name: yup.string().required(),
  password: yup.string().required().min(6, 'it nhat 6 ki tu'),
});


const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const user = useSelector(state => state?.userReducer?.user)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const route = useRoute()
  const { params } = route;
  const usernameA = params?.username || 'true'
  


  const submit = async (checkLogin) => {
    console.log('Đăng nhập1', user)
    if (user[0]?.name === username && user[0]?.password === password) {
      Alert.alert(
        'Thông báo',
        'Bạn đã đăng nhập thành công!',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('HomeTab',MyTabs),
            
          },
        ],
        { cancelable: false }
      );
    } else (
      Alert.alert('chim của Công nhỏ quá không vào được')
    )
  };
  useEffect(() => {
    dispatch(changeUser())
  }, [])

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // Đặt logic cần thực hiện khi màn hình được tập trung (focused) ở đây
      if(usernameA == 'true'){
        setUsername(''),
        setPassword('')
      }
      // Ví dụ: refreshData();
    });
  
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
      <View style={{marginTop:20}}>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 8, borderRadius: 10 }}
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 8, borderRadius: 10 }}
        />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={submit} style={{ backgroundColor: 'orange', height: 40, width: '40%', justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginTop: 35 }}>
          <Text style={{ fontSize: 18, color: 'white' }}>
            Đăng nhập
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};


export default Login;
