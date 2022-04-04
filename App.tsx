import React, { useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "react-native-splash-screen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { About } from "./src/components/about";
import { RestaurantList } from "./src/components/restaurant-list";
import { RestaurantInfo } from "./src/components/restaurant-info";
import { AddReview } from "./src/components/add-review";
import { StoreProvider } from "./src/providers";

const List = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={RestaurantList} options={{ headerShown: false }} />
      <Stack.Screen
        name="Info"
        component={RestaurantInfo}
        options={{ headerTitle: "Restaurant Info" }}
      />
    </Stack.Navigator>
  );
};

const Tabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Overview"
        component={List}
        options={{
          tabBarIcon: ({ color }) => <Icon name="list" color={color} size={22} />,
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({ color }) => <Icon name="info-circle" color={color} size={22} />,
        }}
      />
    </Tab.Navigator>
  );
};

const ModalNav = () => {
  const Tab = createNativeStackNavigator();

  return (
    <StoreProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Tabs"
            component={Tabs}
            options={{ presentation: "modal", headerShown: false }}
          />
          <Tab.Screen
            name="AddReview"
            component={AddReview}
            options={{ presentation: "modal", headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
};

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <ModalNav />;
};
export default App;
