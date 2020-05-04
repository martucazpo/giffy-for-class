





function dataLoop(data){
    let result = data.data;
    for( let i = 0; i < result.length; i++){
        let stringUrl = result[i].images.fixed_height.url;
        console.log(stringUrl);
        getAnimalGif('giffyDiv', stringUrl);
    }
}

function getAnimalGif(htmlDiv,httpUrl){
    let img = document.createElement('img');
    let magicDiv = document.getElementById(htmlDiv);
    img.setAttribute('src', httpUrl);
    magicDiv.append(img);
}

const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', () => {
    let animal = document.getElementById('animal').value;
    let key = config.KEY;

fetch('https://api.giphy.com/v1/gifs/search?api_key=' + key + '&q=' + '"' + animal + '"' + '&limit=10&offset=0&rating=G&lang=en')
.then(res => res.json())
//.then(data => console.log(data.data))
.then( (data) => dataLoop(data))
});
