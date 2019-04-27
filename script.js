fetch("https://randomuser.me/api/?results=1000").then((value) =>{   
return value.json();
}).then((value) =>{
  console.log(value)
 
  value.results.forEach(function(result) {
      resultado(result)
    });
});

let container = document.getElementById('container')
let container2 = document.getElementById('container2')

function resultado(personaje){

  let div = document.createElement('div');
  let span = document.createElement('span');
  let imagen = document.createElement('img');
  imagen.src= personaje.picture.large;
  span.textContent = `${personaje.name.first}  ${personaje.name.last} `;
  div.appendChild(span)
  div.appendChild(imagen)
  div.classList.add('column');
  container.appendChild(div);
  container.classList.add('wrap');


  div.addEventListener('click',function(){
    container.classList.add('none')
    container2.classList.add('show');
    
    let email = document.createElement('span');
    let cell = document.createElement('span');
    let dob = document.createElement('span');
    let id = document.createElement('span');
    let location = document.createElement('span');
    let hat = document.createElement('span');
    let phone = document.createElement('span');
    let gender = document.createElement('span');
    let imagen = document.createElement('span');
    imagen.src= personaje.picture.large;
    //genero
    gender.textContent = `Gender: ${personaje.gender} `;
    div.appendChild(gender)
    // email
   email.textContent = `Email: ${personaje.email} `; 
   div.appendChild(email)
   // celular
   cell.textContent = `Cel: ${personaje.cell} `; 
   div.appendChild(cell)
   //dob
   dob.textContent = `dob: Date: ${personaje.dob.date}  Age: ${personaje.dob.age}  `; 
   div.appendChild(dob)
   //id
   id.textContent = `id: name: ${personaje.id.name} value: ${personaje.id.value}   `; 
   div.appendChild(id)
   //locaition
   location.textContent = `Location: ${personaje.location.street} City: ${personaje.location.city}  `; 
   div.appendChild(location)
   //hat
   hat.textContent = `Nat: ${personaje.nat}   `; 
   div.appendChild(hat)
   //phone
   phone.textContent = `phone: ${personaje.phone}   `; 
   div.appendChild(phone)
   container2.appendChild(div)
  })

}

let home = document.getElementById('home')
home.addEventListener('click',function(){

    container2.classList.remove('none');
    container.classList.add('show');
 
    home.appendChild(div)
})
