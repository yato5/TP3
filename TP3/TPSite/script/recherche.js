async function load(){
    console.log(sessionStorage.getItem('LINK'));
    try {
      const data = await fetch(sessionStorage.getItem('LINK')).then(res => res.json())
      loadTrain(data);
    }catch(error){
      document.getElementById("noTrain").innerHTML = "Erreur dans le chargement des trains !";
    }
}
/*
fetch(sessionStorage.getItem('LINK'))
	.then((response) => response.json())
	.then((fetchedData) => loadTrain(fetchedData));
*/
function is_In(mot,liste){
    for(let i of liste){
      if(mot == i){
        return true;
      }
    }
    return false;
  }

var liste_favori = [];
var liste_added = [];

function loadTrain(liste){
    if(liste.length){
        let contenu = document.querySelector('#contenu');
        for(let i=0; i<liste.length; i++){
            let petittrain = document.createElement('div');
            petittrain.setAttribute('id','petittrain');
    
            let fav = document.createElement('img');
            fav.setAttribute('src','img/favori_wb.png');
            fav.setAttribute('id','fav'+i);

            fav.addEventListener('click', () => {
                var image = document.getElementById('fav'+i);
                let text = liste[i].travel.from.name+";"+liste[i].travel.to.name +";"+ liste[i].date +";"+ liste[i].departureTime +";"+ liste[i].price+" €";
                if (is_In(text,liste_favori)){
                    let index = liste_favori.indexOf(i);
                    liste_favori.splice(index, 2);
                    image.src = "img/favori_wb.png";
                }
                else {
                    
                    liste_favori[liste_favori.length] = liste_added[liste_added.length] = liste[i].travel.from.name+";"+liste[i].travel.to.name +";"+ liste[i].date +";"+ liste[i].departureTime +";"+ liste[i].price+" €";
                    image.src = "img/favori.png"
                }
                console.log(liste_favori);
                sessionStorage.setItem('FAV',liste_favori);

            });

            let newDiv = document.createElement('div');
            newDiv.setAttribute('id','train'+i);

    
            let add = document.createElement('img');
            add.setAttribute('src','img/add_wb.png');
            add.setAttribute('id','add'+i);

            add.addEventListener('click', () => {
                var image = document.getElementById('add'+i);
                let text = liste[i].travel.from.name+";"+liste[i].travel.to.name +";"+ liste[i].date +";"+ liste[i].departureTime +";"+ liste[i].price+" €";
                if (is_In(text,liste_added)){
                    let index = liste_added.indexOf(i);
                    liste_added.splice(index, 2);
                    image.src = "img/add_wb.png";
                }
                else {
                    liste_added[liste_added.length] = liste_added[liste_added.length] = liste[i].travel.from.name+";"+liste[i].travel.to.name +";"+ liste[i].date +";"+ liste[i].departureTime +";"+ liste[i].price+" €";
                    image.src = "img/add.png";
                }
                console.log(liste_added);
                sessionStorage.setItem('ADD',liste_added);

            });

            petittrain.appendChild(fav);
            petittrain.appendChild(newDiv);
            petittrain.appendChild(add);
            

            contenu.appendChild(petittrain);

            let villeD = liste[i].travel.from.name;
            let villeA = liste[i].travel.to.name;
            let date = liste[i].date;
            let heure = liste[i].departureTime;
            let prix = liste[i].price;


            document.getElementById('train'+i).innerHTML = "<div class='trainDescription'><p id='villeD'>Gare de départ : "+villeD+"</p>"+"<p id='villeA'>Gare d'arrivé : "+villeA+"</p>"+"<p id='date'>Date : "+date+"</p>"+"<p id='heure'>Heure : "+heure+"</p>"+"</div><div class='price'><p>"+prix+ " €"+"</p></div>";
        }

    }
    else{
        document.getElementById("noTrain").innerHTML = "Pas de train trouver !";
    }
    
    
    
}







