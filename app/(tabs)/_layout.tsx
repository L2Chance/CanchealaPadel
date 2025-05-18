import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import {HomeIcon, BallIcon, NotificationIcon, UserIcon} from '@/components/icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />

      <Tabs.Screen
          name="canchas"
          options={{
            title: "Canchas",
            tabBarIcon: ({ color }) => <BallIcon color={color} />,
          }}
      />

      <Tabs.Screen
        name="notificaciones"
        options={{
          title: "Notificaciones",
          tabBarIcon: ({ color }) => <NotificationIcon color={color} />,
        }}
      />

      <Tabs.Screen
              name="perfil"
              options={{
                title: "Perfil",
                tabBarIcon: ({ color }) => <UserIcon color={color} />,
              }}
            />

     
    </Tabs>
  );
}
