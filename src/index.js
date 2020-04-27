// console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


document.addEventListener('DOMContentLoaded', (event) => {

  // create image tag and display images on screen
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(obj => {
    obj.message.forEach(img => {
      let imgTag = document.createElement('img')
      imgTag.src = img
      imgTag.style.width = '200px'
      imgTag.style.height = '200px'
      let imgDiv = document.querySelector('#dog-image-container')
      imgDiv.append(imgTag)
    })
  })



  //function to create list of breeds in ul
  let createBreedLi = (breed)=>{
    let liTag = document.createElement('li')
    liTag.innerHTML = breed
    liTag.style.cursor = 'pointer';
    let ulTag = document.querySelector('#dog-breeds')
    ulTag.append(liTag)

    liTag.addEventListener('click', ()=>{
      liTag.style.color = 'blue'
    })
  }

  //get breeds from api and display on screen
  fetch(breedUrl)
  .then(resp => resp.json())
  .then(obj => {
    let breedObj = obj.message

    //displays all dog breeds on the page and changes the color when clicked
    for (const key in breedObj){
      createBreedLi(key)
    }

    //display select dog breeds by removing previous list from ul
    let selectOption = document.querySelector('#breed-dropdown')
    
    selectOption.addEventListener('change', (e)=>{
      let value = e.target.value
      let liTags = document.querySelectorAll('li')

      //remove all previous list item from ul
      liTags.forEach(li =>{
        li.remove()
      })

      // check first letter of breed
      for (const key in breedObj){
        if(key.charAt(0) == value){
          newUl = document.createElement('ul')
          createBreedLi(key)
        }
      }
    })

  })

})
