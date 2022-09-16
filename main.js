//Container for the dialogue
const chatBox = document.getElementById('chatBox');
const landingSection = document.getElementById('landing');
const introSection = document.getElementById('intro');
const phone = document.getElementById('iphone');
const about = document.getElementById('about');
const pythonAbout = document.getElementById('pythonCode');
const cloud = document.getElementsByClassName('cloud')[0];
const cloudWrapper= document.getElementById('cloudWrapper');
const notifContainer = document.getElementById('dialog-container');
const projects = document.getElementById('projects');
const contact = document.getElementById('contact');

function skipAll(){
    introSection.style.display = 'none';
    showPhoto();
    showNav();
    showName();
}

function createCloud(w){
    let radius = w >= 1000 ? w * 0.25 : w * 0.35;
    cloud.innerHTML = ''
    tagCloud = TagCloud('.cloud', languages,{

        // radius in px
        radius: radius,
      
        // animation speed
        // slow, normal, fast
        maxSpeed: 'fast',
        initSpeed: 'fast',
      
        // 0 = top
        // 90 = left
        // 135 = right-bottom
        direction: 135,
      
        // interact with cursor move on mouse out
        keep: true
      
    });
}

/**
 * @param {HTMLElement} elem the object to write text to
 * @param {string} text the text to be written
 */
function nextChar(elem, char,time){
    return new Promise(resolve=>{
        setTimeout(()=>{
            elem.innerHTML += char
            resolve()
        }, time)
    })
}

function shake(){
    phone.classList.add('shake')
    return new Promise (resolve=>{
        setTimeout(() => { 
            phone.classList.remove('shake')
            resolve()  
        }, 500);
    })
}
async function write(text,i){
    cls = i%2 !== 0 ? 'sent' : 'recieved';
    let j;
    if (cls === 'sent'){
        await sleep(300)
    }else{
        j = text.length
        await sleep(300)
        await shake();
    }
    messageContainer = document.createElement('div');
    messageBlob = document.createElement('p');
    messageBlob.innerHTML = text
    messageContainer.appendChild(messageBlob);
    messageContainer.classList.add(cls);
    chatBox.appendChild(messageContainer);
    chatBox.scrollTop = chatBox.scrollHeight;
}
function sleep(time){
    return new Promise (resolve=>{
        setTimeout(() => { 
            resolve()  
        }, time);
    })
}
async function aboutMe(){
    let outputs
    let w = window.innerWidth;
    for(let i = 0; i < pythonCode[0].length; i++){
        await nextChar(pythonAbout, pythonCode[0][i],25);
    }
    hljs.highlightAll();
    await sleep(1000);
    outputs = document.getElementsByClassName('console')
    createCloud(w);
    cloudWrapper.classList.replace('hide','show');
}

async function converse(){
    landingSection.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
    await sleep(1000)
    for(let i = 0; i < conversation.length; i++){
        await write(conversation[i],i);
        await sleep(1000);
        await action(conversation[i]);
        await sleep(500);
    }
    introSection.classList.add('hide');
    setTimeout(()=>{
        introSection.style.display = 'none';
    }, 1000);
    await sleep(1000);
    aboutMe();

}

converse()

function action(trigger){
    return new Promise(resolve=>{
        if (trigger in actions){
            let func = actions[trigger].func;
            let param = actions[trigger].param;
            func(param);
        }resolve();
    },)

}

window.onresize = function(){
    let w = window.innerWidth;
    createCloud(w);
}