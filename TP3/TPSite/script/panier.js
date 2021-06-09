let liste_str = sessionStorage.getItem('ADD');
var listeAll = liste_str.split(',');


let today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();


function is_In(mot,liste){
    for(let i of liste){
      if(mot == i){
        return true;
      }
    }
    return false;
  }

var liste_payer = [];

function loadpanier(){
    let liste_str = sessionStorage.getItem('ADD');
    var liste = liste_str.split(',');
    for(let i=0; i<liste.length;i++){
        liste[i] = liste[i].split(';');
    }
    console.log(liste);
    let contenu = document.querySelector('#contenuPanier');
    for(let i=0; i<liste.length; i++){
        let petittrain = document.createElement('div');
        petittrain.setAttribute('id','petittrain');

        let trash = document.createElement('img');
        trash.setAttribute('src','img/trash.png');
        trash.setAttribute('id','trash'+i);

        let newDiv = document.createElement('div');
        newDiv.setAttribute('id','train'+i);

        let cb = document.createElement('img');
        cb.setAttribute('src','img/cbBc.png');
        cb.setAttribute('id','cb'+i);


        trash.addEventListener('click', () => {
            let b = document.body;
            let p1 = document.getElementById('train'+i);
            let t = document.getElementById('trash'+i);
            let c = document.getElementById('cb'+i);
            p1.remove();
            t.remove();
            c.remove();

        });


        cb.addEventListener('click', () => {
            var image = document.getElementById('cb'+i);
            let text = liste[i]+" "+ date;
            if(is_In(text,liste_payer)){
                let index = liste_payer.indexOf(i);
                liste_payer.splice(index,2);
                image.src = "img/cbBc.png";
            }
            else {
                liste_payer[liste_payer.length] = liste[i]+ ","+ date+";";
                image.src = "img/cb.png";
            }
            console.log(liste_payer);
            sessionStorage.setItem('PAYER',liste_payer);

        });



        petittrain.appendChild(trash);
        petittrain.appendChild(newDiv);
        petittrain.appendChild(cb);

        contenu.appendChild(petittrain);

        document.getElementById('train'+i).innerHTML = "<div class='trainDescription'><p id='villeD'>Gare de départ : "+liste[i][0]+"<p id='villeA'>Gare d'arrivé : "+liste[i][1]+"</p>"+"<p id='date'>Date : "+liste[i][2]+"</p>"+"<p id='heure'>Heure : "+liste[i][3]+"</p>"+"</div><div class='price'><p>"+liste[i][4]+"</p></div>";;
    }
}


document.getElementById('deleteall').onclick = function(){
    var result = confirm("Voulez vous tout supprimer de votre panier ?");
    if (result){
    	for(let i=0; i<listeAll.length;i++){
    		let b = document.body;
        	let p1 = document.getElementById('petittrain');
        	p1.remove()
    	}

        alert("Vous avez tout delete !");
    }
}



