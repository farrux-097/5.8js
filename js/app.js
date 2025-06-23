const elWrapper = document.querySelector(".wrapper")



const API_URL = "https://fakestoreapi.com/users"
const elLoading = document.querySelector(".loading") 
const elSkeleton = document.querySelector(".skeleton")   

function createSkeleton(){
    const paket = document.createDocumentFragment()
    for(let i = 0; i < 10; i++){
        const div  = document.createElement("div")
        div.classList.add("skeleton__item")
        div.innerHTML = `
         <div class="skeleton__line skeleton__animation"></div>
         <div class="skeleton__line skeleton__animation"></div>
         <div class="skeleton__line skeleton__animation"></div> 
        `
        paket.appendChild(div)
    }
    elSkeleton.appendChild(paket)
}


function fetchDate(){
    fetch(API_URL)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        createCard(data)
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        elLoading.style.display = "none"
    })    
    
}

window.addEventListener("load",() => {
    createSkeleton()
    fetchDate()
})


function createCard(data){
  const fragment =  document.createDocumentFragment()
    data.forEach((users) => {
      let card = document.createElement("div")
      card.classList.add("card")
      card.innerHTML =`
        <div>
            <h3>User email: ${users.email}</h3>
            <h4>Username: ${users.username}</h4>
            <h5>User password: <strong>${users.password}</strong></h5>
        </div>`
     fragment.appendChild(card)
      
    })    
    elWrapper.appendChild(fragment)
}

