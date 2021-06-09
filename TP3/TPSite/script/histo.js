function loadhisto(){
    let liste_str = sessionStorage.getItem('PAYER');
    var liste = liste_str.split(';');

    for(let i=0; i<liste.length;i++){
        liste[i] = liste[i].split(',');
    }
    console.log(liste);
    let contenu = document.querySelector('#contenuhisto');
    let cetteVariableExisteCarJeSuisNulJeNeSaisPasRemoveDesEmptySpaceDansMonArray = false;
    for(let i=0; i<liste.length-1; i++){
        let petittrain = document.createElement('div');
        petittrain.setAttribute('id','petittrain');

        let trash = document.createElement('img');
        trash.setAttribute('src','img/trash.png');
        trash.setAttribute('id','trash'+i);

        let newDiv = document.createElement('div');
        newDiv.setAttribute('id','train'+i);

        trash.addEventListener('click', () => {
            let b = document.body;
            let p1 = document.getElementById('train'+i);
            let t = document.getElementById('trash'+i);
            p1.remove();
            t.remove();

        });


        petittrain.appendChild(trash);
        petittrain.appendChild(newDiv);

        contenu.appendChild(petittrain);
        if(cetteVariableExisteCarJeSuisNulJeNeSaisPasRemoveDesEmptySpaceDansMonArray == false){
            document.getElementById('train'+i).innerHTML = "<div class='trainDescription'><p id='villeD'>Gare de départ : "+liste[i][0]+"<p id='villeA'>Gare d'arrivé : "+liste[i][1]+"</p>"+"<p id='date'>Date : "+liste[i][2]+"</p>"+"<p id='heure'>Heure : "+liste[i][3]+"</p>"+"</div><div class='price'><p>"+liste[i][4]+"</p></div>";
            cetteVariableExisteCarJeSuisNulJeNeSaisPasRemoveDesEmptySpaceDansMonArray = true;
        }else {
            document.getElementById('train'+i).innerHTML = "<div class='trainDescription'><p id='villeD'>Gare de départ : "+liste[i][1]+"<p id='villeA'>Gare d'arrivé : "+liste[i][2]+"</p>"+"<p id='date'>Date : "+liste[i][3]+"</p>"+"<p id='heure'>Heure : "+liste[i][4]+"</p>"+"</div><div class='price'><p>"+liste[i][5]+"</p></div>";
        }
    }
}


document.getElementById('deleteall').onclick = function(){
    var result = confirm("Voulez vous tout supprimer de votre panier ?");
    if (result){
    	for(let i=0; i<listeAll.length/2;i++){
    		let b = document.body;
        	let p1 = document.getElementById('petittrain');
        	p1.remove()
    	}

        alert("Vous avez supprimez votre historique avec succès !");
    }
}