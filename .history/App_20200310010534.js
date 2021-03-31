import React from 'react';
import BaseNavigator from "./src/navigation/BaseNavigator";
import LoginScreen from "./src/components/LoginScreen/LoginScreen";
import { View } from "react-native";
import { ApplicationProvider,IconRegistry, Layout, Text } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const {state,setStat} = React.useState({
  isLoggedIn : false
})
 const App = () => {return(
 
    <React.Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <View style={{
    flex: 1,
      backgroundColor: 'white'
    }}>
      {/* {state.isLoggedIn?<LoginScreen />:<BaseNavigator />} */}
      {/* <BaseNavigator /> */}
      <LoginScreen />
    </View>
  </ApplicationProvider>
  </React.Fragment>
  
);}



export default App;