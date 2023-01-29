declare module 'react-native-accurate-step-counter' {
  export type Config = {
    default_threshold: number;
    default_delay: number;
    cheatInterval: number;
    onStepCountChange: (stepCount: React.SetStateAction<number>) => void;
    onCheat: () => void;
  };
  export function startCounter(config: Config): void;
  export function stopCounter(): void;
}
