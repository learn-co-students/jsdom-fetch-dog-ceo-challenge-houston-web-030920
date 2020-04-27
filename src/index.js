console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const dogDiv = document.querySelector("#dog-image-container")
fetch(imgUrl)
.then(function(response){
    return response.json()
})
.then(function(result){
    result.message.forEach(function(dog){
        let dogImg = document.createElement('img')
        dogImg.src = dog
        dogImg.style.width = "100px"
        dogDiv.append(dogImg)
    })
})

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const breedUL = document.querySelector("#dog-breeds")

let getList = function(breedUrl){
    fetch(breedUrl)
    .then(function(response){
        return response.json()
    })
    .then(function(result){
    for (const element in result.message) {
        let breedLi = document.createElement("li")
        breedLi.addEventListener('click', function(){
            breedLi.style.color = 'red'
        })
        breedLi.append(element)
        breedUL.append(breedLi)
      }
})
} 

getList(breedUrl)


const breedSelect = document.querySelector("#breed-dropdown")

let filterBreed = function(letter){
    fetch(breedUrl)
        .then(function(response){
            return response.json()
        })
        .then(function(result){
            dogBreed = document.getElementById("dog-breeds")
            while (dogBreed.firstChild) {
                dogBreed.removeChild(dogBreed.lastChild);
              }
            console.log(result.message)
            for (const element in result.message) {
            if(element[0] == letter){
                console.log(element)
                let breedLi = document.createElement("li")
                breedLi.addEventListener('click', function(){
                    breedLi.style.color = 'red'
                })
                breedLi.append(element)
                dogBreed.append(breedLi)
            }
            }
        })
}


breedSelect.addEventListener("click",function(){
    let strUser = breedSelect.options[breedSelect.selectedIndex].value;
    if(strUser == "a"){
        filterBreed(strUser)
    }
    if(strUser == "b"){
        filterBreed(strUser)
    }
    if(strUser == "c"){
        filterBreed(strUser)
    }
    if(strUser == "d"){
        filterBreed(strUser)
    }
})