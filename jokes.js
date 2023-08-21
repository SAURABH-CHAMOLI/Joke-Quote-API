let container=document.querySelector('.container');
let btn=document.querySelector('button')
let p=document.querySelector('#text')

let url= 'https://official-joke-api.appspot.com/jokes/random'

async function getjoke() {
    let res=await fetch(url);
    let data=await res.json();
    console.log(data.setup+"\n"+data.punchline)
    let joke=data.setup+"\n\n"+data.punchline
     p.innerText=joke
    
}

btn.addEventListener('click',()=>{
    getjoke();
})

// ----------------------------------------------------Quote----------------------------------------------------------------------

let btn1=document.querySelector('#butq')
let p1=document.querySelector('#quote')
let url1="https://type.fit/api/quotes"

btn1.addEventListener('click',function() {
    quote();
})

function quote() {
    fetch(url1)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        let i=Math.floor(Math.random()*17)
        p1.innerText=data[i].text+"\n\n"+data[i].author;
        console.log(data[i].text+"\n\n"+data[i].author)
    })
}