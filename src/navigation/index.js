import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import SafeAreaView, {SafeAreaProvider} from 'react-native-safe-area-view';
// Screen Routes Naming
import Routes from './Routes';
// Globals Predefines
import {Colors} from '../global';
// Screens import --START--
import MainScreen from '../screens/MainScreen';
import DetailScreen from '../screens/DetailScreen';
// Screens import --END--

// Stack Creater, Navigation Container
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: Colors.SECONDARY,
        }}>
        <StatusBar barStyle="dark-content" backgroundColor={Colors.SECONDARY} />
        <NavigationContainer
          theme={{
            colors: {
              background: Colors.SECONDARY,
            },
          }}>
          <Stack.Navigator
            screenOptions={{gestureEnabled: false}}
            initialRouteName={Routes.MAIN_SCREEN}>
            <Stack.Screen
              name={Routes.MAIN_SCREEN}
              component={MainScreen}
              options={({route}) => ({
                headerShown: false,
              })}
            />
            <Stack.Screen
              name={Routes.DETAIL_SCREEN}
              component={DetailScreen}
              options={({route}) => ({
                headerShown: false,
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
