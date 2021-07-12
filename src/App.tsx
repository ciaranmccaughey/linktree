import React, { useEffect, useState } from 'react';
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
  const [loading, setLoading] = useState(true);
  const { saveSettings } = useSettings();

  useEffect(() => {
    saveSettings({...profile.theme});
    setLoading(false);
    
  }, []);
  

  return (
    <div className="container">
      {
        loading ? <div>Loading...</div> 
        :
        <>
          <Profile profile={profile} />
          <Links />
        </>
      }
    </div>
  );
}

export default App;
