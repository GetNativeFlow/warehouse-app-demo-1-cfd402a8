import React from 'react';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
// Reuse the same LucideDynamic component the screens render with, so every
// tab icon renders as the intended Lucide glyph — no parallel Ionicons map,
// no silent fallback to a blank circle when a Lucide name isn't in the table.
import LucideDynamic from '../../components/LucideDynamic';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: Platform.select({ ios: '#007AFF', default: '#2196F3' }),
      }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <LucideDynamic size={20} name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="inspect"
          options={{
            title: 'Inspect',
            tabBarIcon: ({ color }) => <LucideDynamic size={20} name="clipboard-check" color={color} />,
          }}
        />
        <Tabs.Screen
          name="issues"
          options={{
            title: 'Issues',
            tabBarIcon: ({ color }) => <LucideDynamic size={20} name="layout-grid" color={color} />,
          }}
        />
        <Tabs.Screen
          name="report"
          options={{
            title: 'Report',
            tabBarIcon: ({ color }) => <LucideDynamic size={20} name="file-text" color={color} />,
          }}
        />
    </Tabs>
  );
}
