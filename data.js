const conversation = [
    'Hey, Thanks for visiting my website.', 
    'Hey, who is this?', 
    "It's, me! Hold on, let me add a picture.", 
    "Oh! Hello. You might want to add your name for people who don't know you.",
    "That's a good suggestion! I'll do it now. Thanks",
    "That looks better. Is there more?",
    "Yea! Just added some links",
    "That's so cool. You have to show me how to do this.",
    "Well I'm writing some code now but I don't know if you can keep up?",
    "Can you even code?",
    "Bet!",

];

const pythonCode = [
`
class Kaleba:

    def __inti__(self):

        self.programming_languages = [
            "Python",
            "JavaScript",
            "PHP",
            "Arduino",
            "Matlab",
            "HTML & CSS"
        ]
        self.i = {

"Am": "A student in the UK from Botswana.",

"Study": "MSc Computer Science",

"Enjoy": ["gaming", "golf", "drawing", "the outdoors",],

"Listen to": ["Emma Peters"],

"Speak": ["English", "Setswana", "French",]

}

if __name__ == '__main__':
    kaleba = Kaleba()
    with open('webiste.html', 'w+') as f:
        print(kaleba.languages(),kaleba.about_me(),file=f)
`
];

const languages = [
    "Python",
    "JavaScript",
    "PHP",
    "Arduino",
    "Matlab",
    "HTML & CSS",
    "numpy",
    "SQL",
    "tensorflow",
    "Machine Learning",
    "Alogrithms",
    "Data Structures",

]
function showPhoto(){
    landingSection.classList.replace('hide','show');
}
function showName(){
    let name = document.getElementById('landing--text');
    name.classList.replace('hide','show');

}

function showNav(){
    let nav = document.getElementById('navBar');
    nav.classList.replace('hide','show');
}

async function gotoSection(section){
    await sleep(1500)
    let container = document.querySelector(section);
    let anchor = document.querySelector(section+'-anchor');
    let h1 = container.querySelector(':scope > .sectionTitle');
    container.style.display = "flex";
    projects.style.display = 'block';
    contact.style.display = 'block';
    anchor.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    h1.classList.replace('hide', 'show')
    await sleep(1000)
    //notifContainer.classList.add('slideIn');


}

function runCode() {
    document.getElementById('code').style.display = 'block';
}
actions = {
    "It's, me! Hold on, let me add a picture.": {
        func: showPhoto,
    },
    "That's a good suggestion! I'll do it now. Thanks":{
        func: showName,
    },
    "Yea! Just added some links":{
        func: showNav,
    },
    "Bet!":{
        func: gotoSection,
        param: '#about',
    }
}

