console.log('%c HI', 'color: firebrick')
// const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
document.addEventListener("DOMContentLoaded", function () {
    fetch("https://dog.ceo/api/breeds/image/random/4", {})
        .then(function (response) {
            return response.json()
        })

        .then(function (images) {
            images.message.forEach(function (element) {
                let imgContainer = document.querySelector('#dog-image-container')
                let image = document.createElement('img')
                image.src = element
                imgContainer.append(image)
                document.body.append(imgContainer)
            })
        })
});

const renderBreedLi = function(breed){
    let breedUl = document.querySelector('#dog-breeds')
    let breedLi = document.createElement('li')
    breedLi.innerHTML = breed
    breedLi.addEventListener('click', function () {
        breedLi.style.color = "green"
    })
    breedUl.append(breedLi)
    document.body.append(breedUl)
}

document.addEventListener('DOMContentLoaded', function () {
    fetch('https://dog.ceo/api/breeds/list/all', {})
        .then(function (response) {
            return response.json()
        })
        .then(function (breeds) {
            for (let breed in breeds.message) {
                renderBreedLi(breed)

            }
            let selectBox = document.querySelector('#breed-dropdown')
            selectBox.addEventListener('change', function(){
                let breedUl = document.querySelector('#dog-breeds')
                breedUl.innerHTML = ''
                for (let breed in breeds.message) {
                    if(breed.startsWith(selectBox.value)){
                        renderBreedLi(breed)
                    }
                }
            })
        })
})



