import React, {createContext, useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Login from './screens/Login';
import Survey from './screens/Survey';
import Survey2 from './screens/Survey2';
import Answers from './screens/Answer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UserContext} from './context/UserContext';
import Home from './screens/Home';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import userReducer from './redux/reducer/userReducer';
import { changeUser } from './redux/action/userAction';
import {connect} from 'react-redux';
import store from './redux/store';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Detail from './screens/detail';
import addAntreo from './screens/addAntreo'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
              <Tab.Screen name="Án treo" component={Home} options={{
                tabBarIcon: () =>
                <Image source={require('./utils/list.png')} style={{width:30, height:30}}/>
              }}/>
              <Tab.Screen name="không giam giữ" component={Survey} options={{
                tabBarIcon: () =>
                <Image source={require('./utils/list.png')} style={{width:30, height:30}}/>
              }}/>
              <Tab.Screen name="Thông báo" component={Survey2} options={{
                tabBarIcon: () =>
                <Image source={require('./utils/notifi.png')} style={{width:30, height:30}}/>
              }} />
              <Tab.Screen name="Người dùng" component={Answers} options={{
                tabBarIcon: () =>
                <Image source={require('./utils/user.png')} style={{width:30, height:30}}/>
              }}/>
    </Tab.Navigator>
  );
}

const AppNavigation = () => {

  
  
  return(  
  <NavigationContainer>
        <Stack.Navigator>
              <Stack.Screen name="Đăng nhập" component={Login} />
              <Stack.Screen name="HomeTab" component={MyTabs}options={{headerBackVisible:false,headerShown: false}} />
              <Stack.Screen name="Detail" component={Detail}  />
              <Stack.Screen name="AddAntreo" component={addAntreo}  />
              

        </Stack.Navigator>
  </NavigationContainer>)
  
}
const mapStateToProps = (state) => {
  const {userReducer} = state;
  return {user: userReducer};
};
export default connect(mapStateToProps, {changeUser})(AppNavigation);