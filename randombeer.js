const api ="https://api.punkapi.com/v2/beers/random"; /* api */

const h1Tag = document.querySelector("h1.beernameH1"); /* beer name header*/
const imgTag = document.querySelector("img.bildbeer"); /* beer images */
const bildimg = document.querySelector("img.bildbeer"); /* beer image that is null*/

const pTag = document.querySelector("p.readmore"); /* Read More*/
const DivElement = document.querySelector("div.beer_box"); 

const beer_btn = document.getElementById("beer_btn");


function getData(url){

    fetch(url) 
    .then(res => res.json())
    .then(data => {

        render(data);
    })
    .catch(error => console.log(error));
    
}


function getRandomBeer(evt){
 evt.preventDefault();

    fetch(api) /* inga ; tecken. annars funkar det inte*/
    .then(res => res.json())
    .then(beers => {
        const beer = beers[0];
        const name = beer.name; 
        const bild = beer.image_url; 
        
        /*beer image */
        imgTag.imagecontent = bild;
        imgTag.src = bild
        if (bild == null) { 
            bildimg.src = "beerhasnoimage.png"; /*made an "this beer has no image" pic for the null images */
    
        }
        
        /* p. read more text that is for link to the next page */
        pTag.innerHTML = "Read More";
        pTag.setAttribute("name", "beer");
        pTag.addEventListener("click", onReadClicked);

    

        /*appentchild did not work for me so i tried this method insted and it worked */
        h1Tag.innerHTML = name;
        imgTag.innerHTML = bild;
        bildimg.innerHTML = bild;

        


        /*console.log(api)*/ 
    })
   
}
/*for Read More link to the next page*/
function onReadClicked(evt) {

    const id = evt.target.getAttribute("name");

    const url = `./myview.html?name=${id}`;
    document.location.href = url;
    console.log()
}

beer_btn.addEventListener("click", getRandomBeer)

