import { createStackNavigator } from "@react-navigation/stack";
import Slider from "@screens/Slider";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Slider" component={Slider} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AuthStack;
