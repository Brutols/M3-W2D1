const music = [
  {
    title: "The drug in me is you",
    img: "./assets/The_Drug_in_Me_Is_You_Cover.jpg",
    artist: "Falling in reverse",
    gender: "post-hardcore, metalcore",
    length: "45 min 52 sec",
    tracks: [
      "raised by wolves",
      "tragic magic",
      "the drug in me is you",
      "i'm not a vampire",
      "good girls bad guys",
      "pick up the phones",
      "don't mess with ouija boards",
      "sink or swim",
      "caught like a fly",
      "goodbye graceful",
      "the westerner",
    ],
  },
  {
    title: "Analive",
    img: "./assets/1200x1200bf-60.jpg",
    artist: "Prophilax",
    gender: "rock-demenziale",
    length: "2 hr 27 min",
  },
  {
    title: "Uncool and proud",
    img: "./assets/J-Axonville_cover.jpg",
    artist: "J-axonville",
    gender: "punk",
    length: "2 hr 11 min",
  },
  {
    title: "On the edge",
    img: "./assets/download.jpg",
    artist: "9MM",
    gender: "Heavy-metal",
    length: "36 min 25 sec",
  },
  {
    title: "Dr.Feelgood",
    img: "./assets/download (1).jpg",
    artist: "Motley Crue",
    gender: "Hard-Rock",
    length: "1 hr 7 min",
  },
  {
    title: "Humburg",
    img: "./assets/humbug-cover-uncropped-with-dall-e-v0-xnii4hjt8ux91.png",
    artist: "Artic Monkeys",
    gender: "Indie-rock",
    length: "39 min 19 sec",
  },
];

let albums = document.querySelector(".liked-albums");

let showCards = function () {
  albums.innerHTML = "";
  for (let i = 0; i < music.length; i++) {
    albums.innerHTML += `
        <div class="card col-6 col-md-4 col-xl-3" style="width: 18rem;">
        <img src="${music[i].img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${music[i].title}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${music[i].artist}</li>
          <li class="list-group-item">${music[i].gender}</li>
          <li class="list-group-item">${music[i].length}</li>
        </ul>
      </div>
`;
  }
};

showCards();

let cardMacro = document.querySelector(".album-macro");

let selectedCard = function () {
  cardMacro.innerHTML = "";
  cardMacro.innerHTML = `           
  <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${music[0].img}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${music[0].title}</h5>
        <p class="card-text m-0">${music[0].artist}</p>
        <p class="card-text m-0">${music[0].gender}</p>
        <p class="card-text m-0">${music[0].length}</p>
        <ol class="list-group list-group-numbered"></ol>  
      </div>
    </div>
  </div>
</div>
    `;
};

selectedCard();

let soundTracks = document.querySelector(".album-macro ol");

let showSoundTracks = function () {
  soundTracks.innerHTML = "";
  for (let i = 0; i < music[0].tracks.length; i++) {
    soundTracks.innerHTML += `<li class="list-group-item">${music[0].tracks[i]}</li>`;
  }
};

showSoundTracks();
