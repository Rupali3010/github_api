
let searchInput = document.getElementById('search');
let templete = document.getElementById('templete');

searchInput.addEventListener('keyup',e =>{
    if(e.key==='Enter'){
      let searchText = e.target.value;
        searchGitUser(searchText);
    }
})

// Speech
let btn = document.getElementById("btn");

btn.addEventListener("click", e =>{
  window.SpeechRecognition = window.webkitSpeechRecognition;
  let speech = new SpeechRecognition();
  speech.addEventListener('result',e=>{
    let text = e.results[0][0].transcript;
    let word = text.replace(/\s+/g,"");
    let finalWord = (searchInput.value=word);
    searchGitUser(finalWord);
  });
  speech.start();
})

async function searchGitUser(searchValue){
    let URL = 'https://api.github.com/users';
    let DATA = await window.fetch(`${URL}/${searchValue}`);
    let JSON = await DATA.json();
    let {avatar_url,login,html_url,company,location,bio} = JSON;

templete.innerHTML =`
  <main>
    <div class="main">
      <img src =${avatar_url} alt = ${login} id="image"/>
       <h3>Username: ${login}</h3>
       <p>Company name: ${company}</p>
       <p>Place name: ${location}</p>
       <p>About: ${bio}</p>
       <p>URL: ${html_url}</p>
    </div>
  </main>
`}