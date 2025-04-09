const songElement = document.getElementById("song");
const newSongButton = document.getElementById("new-song");
    
 const songs = [
   "🎶 Right Down the Line – Gerry Rafferty",
"🎶 Crystal Blue Persuasion – Tommy James & The Shondells",
"🎶 Tiny Dancer – Elton John",
"🎶 Simple Man – Lynyrd Skynyrd",
"🎶 Wish You Were Here – Pink Floyd",
"🎶 Hotel California – Eagles",
"🎶 Against the Wind – Bob Seger & The Silver Bullet Band",
"🎶 Rocket Man – Elton John",
"🎶 Free Bird – Lynyrd Skynyrd",
"🎶 2AM – Slightly Stoopid",
"🎶 Closer to the Sun – Slightly Stoopid",
"🎶 Heaven – Los Lonely Boys",
"🎶 All Day All Night – Ziggy Marley",
"🎶 Waiting in Vain – Bob Marley & The Wailers",
"🎶 Amber – 311",
"🎶 Hold the Line – Toto",
"🎶 Santeria – Sublime",
"🎶 Little Wing – Jimi Hendrix",
"🎶 Rikki Don’t Lose That Number – Steely Dan",
"🎶 Africa – Toto",
"🎶 Under the Bridge – Red Hot Chili Peppers",
"🎶 Snow (Hey Oh) – Red Hot Chili Peppers",
"🎶 Californication – Red Hot Chili Peppers",
"🎶 Mexico – James Taylor",
"🎶 Let’s Stay Together – Al Green",
"🎶 Sultans of Swing – Dire Straits",
"🎶 One of These Nights – Eagles",
"🎶 New Kid in Town – Eagles",
"🎶 Dreams – Fleetwood Mac",
"🎶 Traveller – Chris Stapleton",
"🎶 Hello It’s Me – Todd Rundgren",
"🎶 Make Me Wanna – Thomas Rhett",
"🎶 Down Under – Men at Work",
"🎶 Oh! Darling – The Beatles",
"🎶 It Ain’t Over 'Til It’s Over – Lenny Kravitz",
"🎶 Head Over Heels – Tears for Fears",
"🎶 Gypsy – Fleetwood Mac",
"🎶 Is This Love – Bob Marley & The Wailers",
"🎶 Say You Love Me – Fleetwood Mac",
"🎶 Roxanne – The Police",
"🎶 Ain’t It the Life – Foo Fighters",
"🎶 Bitter Sweet Symphony – The Verve",
"🎶 Hold Me – Fleetwood Mac",
"🎶 Learn to Fly – Foo Fighters",
"🎶 Linger – The Cranberries",
"🎶 Mary Jane’s Last Dance – Tom Petty and the Heartbreakers",
"🎶 Listen to the Music – The Doobie Brothers",
"🎶 Night Fever – Bee Gees",
"🎶 Dancing in the Moonlight – King Harvest",
"🎶 Jet Airliner – Steve Miller Band",
"🎶 Evil Woman – Electric Light Orchestra",
"🎶 Photograph – Def Leppard",
"🎶 More Than a Feeling – Boston",
"🎶 Sugaree – Jerry Garcia",
"🎶 Best of My Love – Eagles",
"🎶 I Saw the Light – Todd Rundgren",
"🎶 In the City – Eagles",
"🎶 Beast of Burden – The Rolling Stones",
"🎶 Scar Tissue – Red Hot Chili Peppers",
"🎶 O-o-h Child – Five Stairsteps",
"🎶 Pride (In the Name of Love) – U2",
"🎶 Walking on the Moon – The Police",
"🎶 That’s All – Genesis",
"🎶 Come a Little Closer – Cage the Elephant"

];
    
    function getRandomSong() {
      const index = Math.floor(Math.random() * songs.length);
      return songs[index];
    }
    
    function displaySong() {
      const song = getRandomSong();
      songElement.classList.remove("show");
    
      setTimeout(() => {
        songElement.innerHTML = `<a href="${song.url}" target="_blank">${song.title}</a>`;
        void songElement.offsetWidth;
        songElement.classList.add("show");
      }, 600);
    }
    
    window.addEventListener("load", () => {
      songElement.classList.add("fade", "show");
      displaySong();
    });
    
    newSongButton.addEventListener("click", displaySong);
    


function getRandomSong() {
    const index = Math.floor(Math.random() * songs.length);
    return songs[index];
  }
  
  function displaySong() {
    songElement.classList.remove("show");
  
    setTimeout(() => {
      songElement.textContent = getRandomSong();
  
      setTimeout(() => {
        songElement.classList.add("show");
      }, 20);
    }, 600);
  }
  

  
  // On page load
  window.addEventListener("load", () => {
    songElement.classList.add("fade");
    displaySong();
  });
  
  newSongButton.addEventListener("click", displaySong);
