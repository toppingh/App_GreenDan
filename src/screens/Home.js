import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

import Camera from './Camera';
import Setting from './Setting';
import Main from './Main';
import Result from './Result';

const Tab = createBottomTabNavigator();


function Home({route}) {
    const { token, pk, email } = route.params;

    return (
        <>
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#8CB972',
            tabBarStyle: {height: 80},
            }}>
            <Tab.Screen
            name="GreenDan"
            component={Main}
            initialParams={{ token: token, pk, email}}
            options={{
                tabBarLabel: '메인화면',
                tabBarIcon: ({color}) => (
                <Icon name="home" color={color} size={40} />
                ),
            }}
            />
            <Tab.Screen
            name="Record"
            component={Result}
            initialParams={{ token: token, pk, email}}
            options={{
                tabBarLabel: '나의 기록',
                tabBarIcon: ({color}) => (
                <Icon name="feed" color={color} size={40} />
                ),
            }}
            />
            <Tab.Screen
            name="Camera"
            component={Camera}
            initialParams={{ token: token, email, pk}}
            options={{
                tabBarLabel: '카메라',
                tabBarIcon: ({color}) => (
                <Icon name="add-a-photo" color={color} size={40} />
                ),
            }}
            />

            <Tab.Screen
            name="Setting"
            component={Setting}
            initialParams={{ token: token, pk, email }}
            options={{
                tabBarLabel: '설정',
                tabBarIcon: ({color}) => (
                <Icon name="dehaze" color={color} size={40} />
                ),
            }}
            />

        </Tab.Navigator>
        </>
    );
}

export default Home;
