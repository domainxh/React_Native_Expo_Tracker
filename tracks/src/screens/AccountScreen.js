import React, { useContext } from 'react'
import { Context as AuthContext } from '../context/AuthContext'
import { StyleSheet, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import Spacer from '../components/Spacer'

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={{ fontSize: 48 }}>AccountScreen</Text>
      <Spacer>
        <Button title='Sign Out' onPress={signout}/>
      </Spacer>
    </SafeAreaView>
  )
};

AccountScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({});

export default AccountScreen;
