const joke = document.querySelector('.joke');

const btn = document.querySelector('button');

const url = "https://v2.jokeapi.dev/joke/Any?limit=1";


let getjoke = ()=>{
    fetch(url).then(data=> data.json()).then(
        item => {
            let j = item.joke;

            if(j === undefined){

            }else{
                joke.innerHTML = `${item.joke}`;
            }
            

        }
    )
}
window.addEventListener('load',getjoke);
btn.addEventListener('click',getjoke);


// const url = 'https://world-of-jokes1.p.rapidapi.com/v1/jokes/random-joke';


