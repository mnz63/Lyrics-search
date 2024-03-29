const form = document.getElementById("form");
const artistInput = document.getElementById("artist-input");
const songInput = document.getElementById("song-input");
const loader = document.getElementById('loader');
const res = document.getElementById('res');

function search(artist, song){
    return fetch(`https://api.vagalume.com.br/search.php?art=${artist}&mus=${song}`);
};

form.addEventListener('submit', function(el) {
    el.preventDefault();
    doSubmit();
});

async function doSubmit(){

    loader.style.display = 'block';

    const response = await search(artistInput.value, songInput.value);
    const data = await response.json();
    
    loader.style.display = 'none';
    
    if(!data.mus){
        res.innerHTML = `<div id="song-div">
                        <p id="song"><pre>Não foi possível encontrar a letra desta música!</pre></p>
                        </div>`;
    };
    
    res.innerHTML = `<div id="song-div">
                    <p id="song"><pre>`+data.mus[0].text+`</pre></p>
                    </div>`;

    console.log(data.mus[0].text);
};
