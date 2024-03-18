// const apiKey = "x/IwHleI4I3n4DkpyJV15A==mu7i5BS6l8WogA57";

// const options = {
//   method: "GET",
//   headers: {
//     "X-Api-Key": apiKey,
//   },
// };

// const url="https://api.api-ninjas.com/v1/dadjokes?limit=1";

// const jokes = document.getElementById('UpdateJokes')

// const btn =document.getElementById("btn");
// let getJoke = ()=>{
//     fetch(url,options)
//     .then((data)=>{
//         // console.log(data);
//         return   data.json()
//         })
    
//     .then(item =>{
//         jokes.textContent=`${item}`;
//         console.log(item);
//     })
// }

// btn.addEventListener("click",getJoke);
// getJoke();


const apiKey = "x/IwHleI4I3n4DkpyJV15A==mu7i5BS6l8WogA57";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const url = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const jokes = document.getElementById('UpdateJokes');

const btn = document.getElementById("btn");

let getJoke = () => {
    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            const joke = data[0].joke; // Accessing the joke from the data array
            jokes.textContent = joke;
            console.log(joke);
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
        });
};

btn.addEventListener("click", getJoke);
getJoke();
function tweet_Share(){
  window.open("https://twitter.com/intent/tweet?text=Hii Vishal Gaikwad Tweet window","width=450,height=360");
}