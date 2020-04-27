const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

dogCeoDiv = document.getElementById("dog-image-container");
dogBreedsUl = document.getElementById("dog-breeds");

fetch(imgUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (result) {
    result.message.forEach(function (result) {
      let image = document.createElement("img");
      image.src = result;
      dogCeoDiv.append(image);
    });
  });

const dropdown = document.querySelector("#breed-dropdown");

let filterBreed = function (letter) {
  fetch(breedUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      dogBreed = document.getElementById("dog-breeds");
      while (dogBreed.firstChild) {
        dogBreed.removeChild(dogBreed.lastChild);
      }
      console.log(result.message);
      for (const element in result.message) {
        if (element[0] == letter) {
          console.log(element);
          let breedLi = document.createElement("li");
          breedLi.addEventListener("click", function () {
            breedLi.style.color = "red";
          });
          breedLi.append(element);
          dogBreed.append(breedLi);
        }
      }
    });
};
dropdown.addEventListener("change", function () {
  let strUser = dropdown.options[dropdown.selectedIndex].value;
  if (strUser == "a") {
    filterBreed(strUser);
  }
  if (strUser == "b") {
    filterBreed(strUser);
  }
  if (strUser == "c") {
    filterBreed(strUser);
  }
  if (strUser == "d") {
    filterBreed(strUser);
  }
});

console.log("%c HI", "color: firebrick");
