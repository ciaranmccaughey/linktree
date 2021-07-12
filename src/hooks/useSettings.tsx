// Settings Hook - src/hooks/useSettings
import { useContext } from "react";
import SettingsContext from "../context/settings";

const useSettings = () => {
   const context = useContext(SettingsContext);

   return context;
};

export default useSettings;