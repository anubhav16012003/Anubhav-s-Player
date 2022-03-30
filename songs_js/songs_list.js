let All_song = [
    {
      name: "Beedi",
      path: "music/1.mp3",
      img: "images/1.jpg",
      singer: "Sukhwinder Singh"
    },
    {
      name: "Gangsta's Paradise",
      path: "music/2.mp3",
      img: "images/2.jpg",
      singer: "Coolio"
    },
    {
      name: "Aaja We Mahiya",
      path: "music/3.mp3",
      img: "images/3.jpg",
      singer: "Imran Khan"
    },
    {
      name: "Yeah Baby",
      path: "music/4.mp3",
      img: "images/4.jpg",
      singer: "Garry Sandhu"
    },
    {
      name: "Peaky Blinder",
      path: "music/5.mp3",
      img: "images/5.jpg",
      singer: "Otnicka"
    },
    {
     name: "Elephante",
     path: "music/6.mp3",
     img: "images/6.jpg",
     singer: "N.K"
    },
    {
     name: "Aarambh Hai Prachand",
     path: "music/7.mp3",
     img: "images/7.jpg",
     singer: "Piyush Mishra"
    },
    {
     name: "Kajra Re",
     path: "music/8.mp3",
     img: "images/8.jpg",
     singer: "Javed Ali"
    },
    {
     name: "Tumse Milke",
     path: "music/9.mp3",
     img: "images/9.jpg",
     singer: "Sonu Nigam"
    },
    {
     name: "Safari",
     path: "music/10.mp3",
     img: "images/10.jpg",
     singer: "Serena"
    },
    {
     name: "In Da Club",
     path: "music/11.mp3",
     img: "images/11.jpg",
     singer: "Ikka"
    }
 ];
 
 /*tracks*/
 let tracks = document.querySelector('.tracks');
 
 //creating a list or generating Html
 for (let i = 0; i < All_song.length; i++) {
 
   let Html = ` <div class="song">
       <div class="img">
       <img src="${All_song[i].img}"/>
       </div>
       <div class="more">
       <audio src="${All_song[i].path}" id="music"></audio>
       <div class="song_info">
          <p id="title">${All_song[i].name}</p>
          <p>${All_song[i].singer}</p>
       </div>
       <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
       </div>
     </div>`;
 
   tracks.insertAdjacentHTML("beforeend", Html);
 };
 