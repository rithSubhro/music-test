import { notesToPlayInOrder } from "./music-to-play";

const D4=<HTMLAudioElement>document.getElementById('D4');
const F4=<HTMLAudioElement>document.getElementById('F4');
const G4=<HTMLAudioElement>document.getElementById('G4');
const A4=<HTMLAudioElement>document.getElementById('A4');
const B4F=<HTMLAudioElement>document.getElementById('B4F');
const C5=<HTMLAudioElement>document.getElementById('C5');
const D5=<HTMLAudioElement>document.getElementById('D5');
const D5S=<HTMLAudioElement>document.getElementById('D5S');
const F5=<HTMLAudioElement>document.getElementById('F5');
const F5S=<HTMLAudioElement>document.getElementById('F5S');
const G5=<HTMLAudioElement>document.getElementById('G5');
const A5=<HTMLAudioElement>document.getElementById('A5');
const B5F=<HTMLAudioElement>document.getElementById('B5F');

function playMusic() {
    const notes = notesToPlayInOrder;
    
    // TODO Play these notes one after the other at the pitch and rhythm given in each note
    //loop through the array and store the pitch, octave and beats ans check it with the assets file and play the tune
    for(let i=0;i<notes.length;i++){
        if(notes[i].pitch==='A'){
            if(notes[i].octave===4){

                console.log(A4.src);
                // A4.src.play();
                let audio = new Audio(A4.src);
                // audio.play();
                // const tune='../assets/A4.mp3';
                // let audio = new Audio();
                // audio.src=A4.src;
                // console.log('button clicked');
                audio.load();
                // audio.currentTime=0;
                
                // let duration=audio.played.end(.0001);
                // console.log("duration is :"+ duration);
                // audio.play();
                let time=(notes[i].beats)*60000;      //1 beat = 60sec and in setTimeout function 1 sec is written as 1000ms
                
                // console.log(typeof(audio));
                
                setTimeout(()=>{

                    audio.play();
                    console.log('Audio Played');
                },audio.duration);
            }
            // else{
            //     let audio = new Audio(A5.src);
            //     audio.play();
            // }
        }
        // else if(notes[i].pitch==='B'){
        //     if(notes[i].octave===4){
        //         let audio = new Audio(B4F.src);
        //         audio.play();
        //     }else{
        //         let audio = new Audio(B5F.src);
        //         audio.play();
        //     }
        // }else if(notes[i].pitch==='C'){
        //     let audio = new Audio(C5.src);
        //     audio.play();

        // }else if(notes[i].pitch==='D'){
        //     if(notes[i].octave===4){
        //         let audio = new Audio(D4.src);
        //         audio.play();
        //     }
        //     else{
        //         if(notes[i].hasOwnProperty('accidental')){
        //             let audio = new Audio(D5S.src);
        //             audio.play();
        //         }else{
        //             let audio = new Audio(D5.src);
        //             audio.play();
        //         }
        //     }
        // }else if(notes[i].pitch==='F'){
        //     if(notes[i].octave===4){
        //         let audio = new Audio(F4.src);
        //         audio.play();
        //     }else if(notes[i].hasOwnProperty('accidental')){
        //         let audio = new Audio(F5S.src);
        //         audio.play();
        //     }else{
        //         let audio = new Audio(F5.src);
        //         audio.play();
        //     }
        // }else{
        //     if(notes[i].octave===4){
        //         let audio = new Audio(G4.src);
        //         audio.play();
        //     }else{
        //         let audio = new Audio(G5.src);
        //         audio.play();
        //     }
        // }
    }


    


    // function playAudio(){
    //     let audio = new Audio();
    //     audio.src = "./src/assets/A4.mp3";
    //     audio.load();
        
    //     // audio.load();

    //     let dur=audio.duration;
    //     console.log("duration is :"+ dur);
    //     audio.play();
    
    //   }
    //   playAudio();
}

document.getElementById('start-playing')?.addEventListener('click', playMusic);
