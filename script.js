var play = document.getElementById("play");
var title = document.getElementById("title");
var artist = document.getElementById("artist");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var music = document.querySelector("audio");
var img = document.querySelector("img");
var isplaying = false;
var songIndex = 0;
var songs = [
    {
    name: "song1",
    title: "feelings",
    artist: "sumit goswami",
    },
    {
    name: "song2",
    title: "ishq tera",
    artist: "guru randhawa",
    },
    {
    name: "song3",
    title: "veham",
    artist: "sehnaz gill",
    },
    {
    name: "song4",
    title: "diljaniya",
    artist: "ranjit bawa",
    },
    {
    name: "song5",
    title: "duji vaari",
    artist: "sunanda sharma",
    }
]

//play function//
function playsong(){
    music.play();
    isplaying = true;
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("rotate");
    document.getElementById("play").title = "Pause";
}

// pause function //
function pausesong(){
    music.pause();
    isplaying = false;
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("rotate");
    document.getElementById("play").title = "Play";
}

// LOAD songs //
function loadSongs(songs){
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = songs.name + ".mp3";
    img.src = songs.name + ".jpg";
}

// next Songs //
function nextSong(){
    songIndex = (songIndex + 1 )% songs.length;
    loadSongs(songs[songIndex]);
    playsong();
}

// prev Songs //
function prevSong(){
    songIndex = (songIndex - 1 + songs.length)%songs.length;
    loadSongs(songs[songIndex]);
    playsong();
}

play.addEventListener("click",function(){
    isplaying ? pausesong() : playsong();
});

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);














