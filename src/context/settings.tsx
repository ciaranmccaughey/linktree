import React, { useState } from "react";

const defaultSettings = {
   background: 'white',
   primaryColour: '#39E09B',
   hoverColour: '#045f39'
};

const SettingsContext = React.createContext<ISettings>({settings:defaultSettings, saveSettings:null});

interface ISettings {
   settings: any
   saveSettings: any
}

export const SettingsProvider = ({ children, settings } : {children: any, settings: any}) => {
   const [currentSettings, setCurrentSettings] = useState(
      settings || defaultSettings
   );

   const saveSettings = (values: any) => {
     setCurrentSettings(values);
   };

   return (
      <SettingsContext.Provider
         value={{ settings: currentSettings, saveSettings }}
      >
         {children}
      </SettingsContext.Provider>
   );
};

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsContext;