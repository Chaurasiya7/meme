const memebutton = document.querySelector(".meme_generator .meme_button");
const memeimg = document.querySelector(".meme_generator img");
const memetitle = document.querySelector(".meme_generator .meme_title");
const memeauthor = document.querySelector(".meme_generator .meme_author");

const updateDetails= (url, title,author)=>{
   memeimg.setAttribute("src",url);
   memetitle.innerHTML =title;
   memeauthor.innerHTML =`Meme by ${author}`;
}

const generateMeme = ()=>{
   fetch("https://meme-api.com/gimme")
      .then((response)=>response.json())
         .then((data)=>{
            updateDetails(data.url, data.title,data.author);
         });
};

memebutton.addEventListener("click",generateMeme);

generateMeme();
