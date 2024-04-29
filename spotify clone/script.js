console.log("Welcome to spotify");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');






let songs= [
    {songName:"Ve Kamalyaa", filePath:"songs/1.mp3", coverPath:"covers/1.png"},
    {songName:"Tere Hawale", filePath:"songs/2.mp3", coverPath:"covers/2.png"},
    {songName:"O Rangrezz", filePath:"songs/3.mp3", coverPath:"covers/3.png"},
    {songName:"Yug Ram raj ka agya", filePath:"songs/4.mp3", coverPath:"covers/4.png"},
    {songName:"Padhoein main", filePath:"songs/5.mp3", coverPath:"covers/5.png"},
    {songName:"saware", filePath:"songs/6.mp3", coverPath:"covers/6.png"},
    {songName:"saanjan ve", filePath:"songs/7.mp3", coverPath:"covers/7.png"},
    {songName:"Sanng rahio", filePath:"songs/8.mp3", coverPath:"covers/8.png"},
    {songName:"Naina", filePath:"songs/9.mp3", coverPath:"covers/9.png"},
]
songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Listent to Events
// masterPlay.addEventListener('click',()=>{
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//     }
// })
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 1;
    }
}
)

audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText =songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>9){
        songIndex = 0;
    }
  
    else{
        songIndex += 1;
        masterSongName.innerText =songs[songIndex].songName;
        
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText =songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
  
    else{
        songIndex -= 1;
        
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})