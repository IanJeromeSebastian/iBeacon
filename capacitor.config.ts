import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ibeacon.koin',
  appName: 'ibeacon',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
