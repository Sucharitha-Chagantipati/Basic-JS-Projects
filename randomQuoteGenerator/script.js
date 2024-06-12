const quote = document.getElementById('quote');
const author = document.getElementById('author');
const button = document.getElementById('button');

async function fetchData(){
    try{
        const response = await fetch('https://dummyjson.com/quotes');
        if(!response.ok){
            throw new Error('Error');
        }

       const data = await response.json();
       const random = Math.floor(Math.random() * 30) + 1
       const randomQuote = data.quotes[random]
       quote.innerHTML = `${randomQuote.quote}`
       author.innerHTML = `${randomQuote.author}`
    }
    catch(error){
       console.error(error);
    }
   
}

button.addEventListener('click',fetchData);

fetchData();
