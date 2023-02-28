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
    title: 'Title',
    message: 'Message',
    buttonPositive: 'OK',
    buttonNegative: 'Cancel',
  };
  return request(permission, rationale).then(result => {
    if (result === RESULTS.GRANTED) {
      console.log('The permission is granted');
      return true;
    } else {
      console.log('The permission is denied');
      return false;
    }
  });
};
