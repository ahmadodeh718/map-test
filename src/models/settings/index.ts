export interface settings {
  ping: boolean;
  group: boolean;
}
export interface SettingsProps {
  setSettings: (newLayer: settings) => void;
  Settings:settings;
}
