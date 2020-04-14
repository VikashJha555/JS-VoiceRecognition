const btn=document.querySelector('.talk');
const content=document.querySelector('.content');


const greetings=['Im good you little piece of Love','Doing good Homie,All thanks to Vikki-VIkz','Talk is cheap, show me the code','Im not in the mood tonight',
'Dying in Quarantine','Corona Virus Sucks','Im good,how can i help you','Swaami,Mai aapki seva me hazeer hoon'];

const corona=[
    'People are dying of this corna virus, this makes me sad!',
    'There are ten thousand five hundred and forty corona virus cases reported so far in india, four hundred and fifty three people lost their lives',
    'Go Corona Corona Go,Go Corona Corona Go,Go Corona Corona Go,,Go Corona Corona Go'
];



const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition= new SpeechRecognition();

recognition.onstart= function(){
    console.log("I'm listening, speak up");
};

recognition.onresult=function(event){
    const current= event.resultIndex;
    const transcript=event.results[current][0].transcript;
    content.textContent=transcript;
    readOutLoud(transcript);
};

btn.addEventListener('click',()=>{

    recognition.start(); 
});


function readOutLoud(message){
    const speech=new SpeechSynthesisUtterance();
    speech.text='say me hello first you duffer';
    if(message.includes('how are you'))
    {
        const finalText=greetings[Math.floor(Math.random()* greetings.length)];
        speech.text=finalText;
    }
    if(message.includes('hello'))
    {
        const finalText=greetings[Math.floor(Math.random()* greetings.length)];
        speech.text=finalText;
    }
    if(message.includes('ok'))
    {
        const finalText=greetings[Math.floor(Math.random()* greetings.length)];
        speech.text=finalText;
    }
    if(message.includes('Vikas'))
    {
        const finalText=greetings[Math.floor(Math.random()* greetings.length)];
        speech.text=finalText;
    }
    if(message.includes('bot'))
    {
        const finalText=greetings[Math.floor(Math.random()* greetings.length)];
        speech.text=finalText;
    }
    if(message.includes('akshat'))
    {
        const finalText=greetings[Math.floor(Math.random()* greetings.length)];
        speech.text=finalText;
    }
    if(message.includes('corona'))
    {
        const finalText=corona[Math.floor(Math.random()* corona.length)];
        speech.text=finalText;
    }
    if(message.includes('virus'))
    {
        const finalText=corona[Math.floor(Math.random()* corona.length)];
        speech.text=finalText;
    }
    if(message.includes('rona'))
    {
        const finalText=corona[Math.floor(Math.random()* corona.length)];
        speech.text=finalText;
    }
    if(message.includes('bolo na'))
    {
        const finalText=corona[Math.floor(Math.random()* corona.length)];
        speech.text=finalText;
    }
  




    
    speech.volume=1;
    speech.rate=0.7;
    speech.pitch=1;

    window.speechSynthesis.speak(speech);

}
