let index=1;
let audio= new Audio("song1.mp3");
let songPlay = document.getElementById('play');
let progBar= document.getElementById('progressbar');
let gif= document.getElementById('gif');
let songDisplay= document.getElementById('songDisplay');
let songitem=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    { songName: "Abcdeuf", filePath: "song1.mp3", coverPath:"m1.jpg"  },
    { songName: "See You Again", filePath: "song2.mp3", coverPath:"m3.jpg"  },
    { songName: "Love is Gone", filePath: "song3.mp3", coverPath:"m4.jpg"  },
    { songName: "Falling", filePath: "song4.mp3", coverPath:"m5.jpg"  },
    { songName: "Dusk till Dawn", filePath: "song5.mp3", coverPath:"m6.jpg"  }
]
songitem.forEach((element,i)=>{
    console.log(element,i);
    // element.getElementByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].src=songs[i].songName;
})

document.addEventListener('click', ()=> {
    if(audio.paused || audio.currentTime<=0){
        audio.play();
        songPlay.classList.remove('fa-play');
        songPlay.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else{
        audio.pause();
        songPlay.classList.remove('fa-pause');
        songPlay.classList.add('fa-play');
        gif.style.opacity=0;
    }

})
audio.addEventListener('timeupdate',()=>{
 progress = parseInt((audio.currentTime/audio.duration)*100);
 progBar.value= progress;
})
progBar.addEventListener('change',()=>{
    audio.currentTime=progBar.value*audio.duration/100;
})
const makeAllPlays=()=> {
    Array.from(document.getElementsByClassName('songPlay')).forEach((element)=> {
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
})
}

//current play song
Array.from(document.getElementsByClassName('songPlay')).forEach((element)=> {
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        index= parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audio.src=`song${index}.mp3`;
        songDisplay.innerHTML= songs[index].songName;
        audio.currentTime=0;
        audio.play;
        songPlay.classList.remove('fa-play');
        songPlay.classList.add('fa-pause');
    })
})
//nextsong
document.getElementById('next').addEventListener('click',()=> {
    if(index>=5){
    index=0;
    }else{
        index+=1;
    }
    audio.src=`song${index+1}.mp3`;
    songDisplay.innerHTML= songs[index].songName;
        audio.currentTime=0;
        audio.play;
        songPlay.classList.remove('fa-play');
        songPlay.classList.add('fa-pause');
})

//previous song
document.getElementById('previous').addEventListener('click',()=> {
    if(index<=0){
    index=0;
    }else{
        index-=1;
    }
    audio.src=`song${index-1}.mp3`;
    songDisplay.innerHTML= songs[index].songName;
        audio.currentTime=0;
        audio.play;
        songPlay.classList.remove('fa-play');
        songPlay.classList.add('fa-pause');
})