// AJAX section
async function fetchUser (api){
    try {
        const response = await fetch(api);
        const data = await response.json();
        return data;
    } catch (error) {
        const err = document.createElement('h1');
        err.textContent = 'Sorry, Couldn`t fetch the API';
        document.body.appendChild(err)
    }
}
// Create elements and info`s section
const genderSection = document.getElementById('gender');
const userNumber = document.getElementById('user-number');
const button = document.getElementsByTagName('a')[0]
const email = document.getElementById('emali')
const loc = document.getElementById('location')
const phone = document.getElementById('phone')
const nat = document.getElementById('nat')
const login = document.getElementById('user')
let infoSection = {
    gender: '',
    userNumber: '',
};
//Event listener section
genderSection.addEventListener('change', function (){
infoSection.gender = genderSection.value
});
userNumber.addEventListener('change', function (){
    infoSection.userNumber = userNumber.value
});
//Button event section
button.addEventListener('click', function (){ 
let url = `https://randomuser.me/api/?results=`;
if(userNumber){
url += `${infoSection.userNumber}`;
}
if(genderSection){
url += `&gender=${infoSection.gender}`;
}
fetchUser(url)
.then((data)=>{
    data.results.forEach((user)=>{
        let elementDiv = document.createElement('div');
        elementDiv.classList.add('card')
        document.body.appendChild(elementDiv)
        let elementDivImg = document.createElement('div')
        elementDivImg.classList.add('imgBx')
        elementDiv.append(elementDivImg)
        let elementImg = document.createElement('img')
        elementImg.src = user.picture.large
        elementDivImg.append(elementImg)
        let userName = document.createElement('h1')
        userName.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`
        elementDiv.append(userName)
        if (email.checked) {
            let elemEmail = document.createElement('p')
          elemEmail.textContent = user.email
          elementDiv.append(elemEmail)
        }
        if (loc.checked) {
            let elemCity = document.createElement('p')
            elemCity.textContent = user.location.city
            elementDiv.append(elemCity)
          }
          if (phone.checked) {
            let elemPhone = document.createElement('p')
            elemPhone.textContent = user.phone
            elementDiv.append(elemPhone)
          }
          if (nat.checked) {
            let elemNat = document.createElement('p')
            elemNat.textContent = user.nat
            elementDiv.append(elemNat)
          }
          if (login.checked) {
            let elemUserName = document.createElement('p')
           elemUserName.textContent = user.login.username
           elementDiv.append(elemUserName)
          }
    })
})
.catch((error)=>{
   console.log(error);
})
.finally((data)=>{
    console.log(data);
})
});
