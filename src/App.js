import { useState } from 'react';
import './App.css';
import light from './img/site-in-light-mode-icon.svg';
import dark from './img/site-in-dark-mode-icon.svg';
function App() {
  const [players, setPlayers] = useState([
    {
     img: 'https://talksport.com/wp-content/uploads/sites/5/2018/09/ronaldo-committed.jpg?strip=all&quality=100&w=1080&h=1080&crop=1',
      fullname: 'Cristiano Ronaldo',
      age: 23,
      club: 'Munchester United',
      type: 'Devil 😈'
    },
    {
      img: 'https://i.kym-cdn.com/entries/icons/original/000/044/476/pessimeme.jpg',
      fullname: 'Lionel Pessi',
      age: 24,
      club: 'FC Barcelona',
      type: 'Rabbit 🐇'
    },  
    {
      img: 'https://avatars.mds.yandex.net/i?id=f065d20d092488e2a3ce8881bffd8842803fbf9a-10747677-images-thumbs&n=13',
      fullname: 'Neymar JR',
      age: 23,
      club: 'FC Barcelona',
      type: 'Worthless hero 😶'
    },
    {
      img: 'https://avatars.mds.yandex.net/i?id=dc55caf3e052b6ad029206879c554e74-4552949-images-thumbs&n=13',
      fullname: 'Sergio Ramos',
      age: 29,
      club: 'Real Madrid',
      type: 'Best Defender All Time💪'
    }
  ])
  return (
   <>
     <header className="header container">

<img src='https://seeklogo.com/images/M/manchester-united-logo-8D6C880488-seeklogo.com.png' width={70} alt='Site logo svg' />
<div className='images_wrapper'>
  <img  className='light-mode' src={light} width={150} alt='modes site' />
  <img  className='dark-mode hidden' src={dark} width={150} alt='modes site' />
</div>
</header>


<h1 className='title'>There are Best Players of All Time !</h1>
<div className="App container">
  {players.map((player) => {
    return (
        <div className='card'>
          <img src={player.img} alt='Players img' width={300} height={300} />
          <div>
            <h1>{player.fullname}</h1>
            <p>{player.age}</p>
            <p>{player.club}</p>
            <p>{player.type}</p>
          </div>
        </div>
    )
  })}
</div>
   </>
  );
}
export default App;
