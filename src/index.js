console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(imgUrl)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        response.message.forEach(element => {
            let dogImg = document.querySelector('#dog-image-container')
            let img = document.createElement('img')
            img.src = element
            img.style.width = "200px"
            dogImg.append(img)
        })
    })


fetch(breedUrl)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        let breeds = Object.keys(response.message)
        let ul = document.querySelector('#dog-breeds')
        breeds.forEach(element => {
            // console.log(response.message[element])
            let li = document.createElement('li')
            li.append(element)
            ul.append(li)
            li.addEventListener('click', function(){
                li.style.color = "red"
            })
        })
        let select = document.querySelector('#breed-dropdown')
        select.addEventListener('change', function(){
            breeds.forEach(element => {
                // removes initial list
                ul.remove()
                // set new list
                if (select.value == element[0]) {
                    let newUl = document.createElement('ul')
                    let li = document.createElement('li')
                    li.append(element)
                    newUl.append(li)
                    document.body.append(newUl)
                    // only runs if they change it again
                    select.addEventListener('change', function(){
                        newUl.remove()
                    })
                }
            })
        })
    })

