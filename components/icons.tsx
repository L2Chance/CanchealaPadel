import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ComponentProps } from 'react';

type FontAwesomeProps = ComponentProps<typeof FontAwesome>;
type MaterialIconsProps = ComponentProps<typeof MaterialIcons>;
type IoniconsProps = ComponentProps<typeof Ionicons>;

export const HomeIcon = (props: FontAwesomeProps) => (
    <FontAwesome name="home" size={24} color="black" {...props} />
  );
  
  export const NotificationIcon = (props: MaterialIconsProps) => (
    <MaterialIcons name="notifications" size={24} color="black" {...props} />
  );
  
  export const UserIcon = (props: FontAwesomeProps) => (
    <FontAwesome name="user" size={24} color="black" {...props} />
  );
  
  export const BallIcon = (props: IoniconsProps) => (
    <Ionicons name="tennisball" size={24} color="black" {...props} />
  );