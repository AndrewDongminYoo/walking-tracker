import {
  Permission,
  PERMISSIONS,
  request,
  RESULTS,
} from 'react-native-permissions';
import { Platform, Rationale } from 'react-native';

export const requestPermission = async () => {
  const permission: Permission =
    Platform.OS === 'ios'
      ? PERMISSIONS.IOS.MOTION
      : PERMISSIONS.ANDROID.ACTIVITY_RECOGNITION;
  const rationale: Rationale = {
    title: '"Step Counter" Permission',
    message: '"Step Counter" needs access to your sensor data.',
    buttonPositive: 'ACCEPT',
    buttonNegative: 'DENY',
  };
  return request(permission, rationale).then(result => {
    if (result === RESULTS.GRANTED) {
      console.debug('The permission is granted');
      return true;
    } else {
      console.debug('The permission is denied');
      return false;
    }
  });
};
