import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'

const Stack = createNativeStackNavigator();

export default function Routes(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }}
        name="Welcome"
        component={Welcome}
      />

      <Stack.Screen
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }}
        name="SingIn"
        component={SignIn}
      />
    </Stack.Navigator>
  )
}