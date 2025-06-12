import { Tabs } from 'expo-router';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Path } from 'react-native-svg';
import { COLORS } from '../constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Tablayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: Colors.grey,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          height: 40,
          backgroundColor: Colors.black,
          borderTopWidth: 0,
          elevation: 20,
          borderRadius: 20,
        },
      }}>
        <Tabs.Screen
          name="index" options={{
        tabBarIcon: ({ size, color }) => (
          <Ionicons name="home" size={size} color={color} />
        ),
          }}
        />
        <Tabs.Screen
          name="notification" options={{
        tabBarIcon: ({ size, color }) => (
          <Ionicons name="notifications" size={size} color={color} />
        ),
          }}
        />
        <Tabs.Screen
          name="measure" options={{
        tabBarIcon: ({ size, color }) => (
          <Ionicons name="clipboard" size={size} color={COLORS.primary} />
        ),
          }}
        />
        <Tabs.Screen
          name="view" options={{
        tabBarIcon: ({ size, color }) => (
          <Ionicons name="bar-chart" size={size} color={color} />
        ),
          }}
        />
        <Tabs.Screen
          name="profile" options={{
        tabBarIcon: ({ size, color }) => (
          <Ionicons name="person" size={size} color={color} />
        ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
