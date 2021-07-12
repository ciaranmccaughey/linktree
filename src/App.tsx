import React, { useEffect } from 'react';
import './App.css';
import Links from './components/Links/Links';
import { Profile } from './components/Profile/Profile';
import useSettings from './hooks/useSettings';
import logo from './assets/profile-picture.png';

const profile = {
  username: 'ciaran',
  imgUrl: logo,
  theme: {
    background: 'white',
    primaryColour: '#39E09B',
    hoverColour: '#045f39'
  }
}

function App() {
  const { saveSettings } = useSettings();

  useEffect(() => {
    saveSettings({...profile.theme});
    
  }, [])

  return (
    <div className="container">
     <Profile profile={profile} />
     <Links />
    </div>
  );
}

export default App;
