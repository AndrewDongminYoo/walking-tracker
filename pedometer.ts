import { NativeModules, NativeEventEmitter } from 'react-native';
import Pedometer from 'react-native-pedometer-ios-android';
export const myModuleEvt = new NativeEventEmitter(NativeModules.Pedometer);

export const checkAvailable = async () => {
  return await Pedometer.isSupported().then(result => {
    if (result) {
      console.log('Sensor TYPE_STEP_COUNTER is supported on this device');
      return true;
    } else {
      console.log('Sensor TYPE_STEP_COUNTER is not supported on this device');
      return false;
    }
  });
};

export function loggingStop() {
  myModuleEvt.removeAllListeners('StepCounter');
  Pedometer.stopStepCounter();
}

export { Pedometer };
