import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Friends from './modules/friends/Friends';
import Header from './modules/header/Header';
import Profile from './modules/profile/Profile';
import Sidebar from './modules/sidebar/Sidebar';

let state = {
  friends: [
    {
      id: 1,
      name: 'Ivan',
      surname: 'Ivanovich',
      photoUrl: 'https://media.mutualart.com/Images/2021_09/15/06/061227174/cb9f2bf4-010a-4b20-9077-0bb384c25314_570.Jpeg',
      city: 'SPb',
      isFollow: false
    }, 
    {
      id: 2,
      name: 'Inna',
      surname: 'Innovna',
      photoUrl: 'https://media.mutualart.com/Images/2021_09/15/06/061227174/cb9f2bf4-010a-4b20-9077-0bb384c25314_570.Jpeg',
      city: 'MSK',
      isFollow: false
    }, 
    {
      id: 3,
      name: 'Kesha',
      surname: 'keshovich',
      photoUrl: 'https://media.mutualart.com/Images/2021_09/15/06/061227174/cb9f2bf4-010a-4b20-9077-0bb384c25314_570.Jpeg',
      city: '47 station',
      isFollow: true
    }
  ],
  profile: {
    user: {
      id: 345,
      name: 'Kirill',
      surname: 'Demidov',
      photoUrl: 'https://media.mutualart.com/Images/2021_09/15/06/061227174/cb9f2bf4-010a-4b20-9077-0bb384c25314_570.Jpeg'
    },
    posts: [
      {
        id: 1,
        text: 'Поставил пельмешки без спешки!',
        date: '30.03.2023'
      },
      {
        id: 2,
        text: 'Поплохело. Наверное печенька несвежая была! А пельмешки топ!',
        date: '31.03.2023'
      },
      {
        id: 3,
        text: 'Лежу в Боткина! Всем чмоки',
        date: '1.04.2023'
      },
      {
        id: 4,
        text: 'шутка - с первым апреля',
        date: '1.04.2023'
      }
    ]
  }
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App-header">
          <Header logoText="Chto ugodno"/>
        </div>
        <div className="App-content">
          <div className="App-sidebar">
            <Sidebar/>
          </div>
          <div className="App-view">
            <Routes>
              <Route path='/friends' element={<Friends friends={state.friends}/>}/>
              <Route path='/profile' element={<Profile/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
