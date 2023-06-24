const btnEl=document.getElementById("btn");

const animeContainerEl=document.querySelector(".anime-container");

const animeimgEl=document.querySelector(".anime-image");

const animeNameEl=document.querySelector(".anime-name");


btnEl.addEventListener("click",async function(){
    try {
        btnEl.disabled=true;
        btnEl.innerText="Loading...";
        animeNameEl.innerText="Updating...";
        animeimgEl.src="spinner.svg";
        const response=await fetch("https://api.catboys.com/img");
        const data= await response.json();
        btnEl.disabled=false;
        btnEl.innerText="Get Anime";
        animeContainerEl.style.display="block";
        animeimgEl.src=data.url;
        animeNameEl.innerText=data.artist;

    } catch (error) {
        console.log(error);
        btnEl.disabled=false;
        btnEl.innerText="Get Anime";
        animeNameEl.innerText="There seems to be an error. Please try again";
    }

        
    });



