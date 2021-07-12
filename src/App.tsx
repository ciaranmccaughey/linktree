import React, { useEffect } from 'react';
import './App.css';
import Links from './components/Links/Links';
import { Profile } from './components/Profile/Profile';
import useSettings from './hooks/useSettings';


const profile = {
  username: 'ciaran',
  imgUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
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
