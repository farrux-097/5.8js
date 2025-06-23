const elWrapper = document.querySelector(".wrapper")



const API_URL = "https://fakestoreapi.com/users"



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
    .finally()    
    
}

window.addEventListener("load",() => {
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

