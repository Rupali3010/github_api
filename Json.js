let searchInput  = document.getElementById('search');
let template = document.getElementById('template');

searchInput.addEventListener('keyup',e =>{
    if(e.key==='Enter'){
      let searchText = e.target.value;
        searchFun(searchText);
    }
})

async function searchFun(searchValue){
   let URL = "https://jsonplaceholder.typicode.com/users";
   let data = await fetch(`${URL}/${searchValue}`);
   let json = await data.json();
   console.log(json);
   let{id,name,email,company} = json;

   template.innerHTML=`
   <main>
     <div>  
       <p>id: ${id}</p>
       <p>name: ${name}</p>
       <p>email: ${email}</p>
       <p>company: ${company.name}</p>
     </div>
   </main>`
}