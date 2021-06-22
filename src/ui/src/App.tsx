import React from 'react';
import Hud from './components/Hud';
import Deploy from './components/Deploy';
import Feed from './components/Feed';

const App: React.FC = () => {
  return (
    <div>
      <Hud />
      <Deploy />
      <Feed />
    </div>
  )
}

export default App;