async function load(){
    try {
      const data = await fetch('http://gigondas:1111/sprietna/ihm/tp3/cities').then(res => res.json())
      ville(data);
    }catch(error){
      errors();
    }
  }
  
  function errors(){
    let contenuD = document.querySelector("#provenance");
    let contenuA = document.querySelector("#arrivee");
    let newOpD = document.createElement('option');
    let newOpA = document.createElement('option');
    newOpD.setAttribute("id","errorD");
    newOpA.setAttribute("id","errorA");
    contenuD.appendChild(newOpD);
    contenuA.appendChild(newOpA);
    document.getElementById("errorD").innerHTML = "Erreur dans le chargement des villes";
    document.getElementById("errorA").innerHTML = "Erreur dans le chargement des villes";
  }
  
  
  function ville(liste){
    let contenuD = document.querySelector("#provenance");
    let contenuA = document.querySelector("#arrivee");
    for (let i in liste){
      let newOpD = document.createElement('option');
      newOpD.setAttribute("value",liste[i].id+"D");
      newOpD.setAttribute("id",liste[i].id+liste[i].name+"D");
      contenuD.appendChild(newOpD);
      document.getElementById(liste[i].id+liste[i].name+"D").innerHTML = liste[i].name;
      let newOpA = document.createElement('option');
      newOpA.setAttribute("value",liste[i].id+"A");
      newOpA.setAttribute("id",liste[i].id+liste[i].name+"A");
      contenuA.appendChild(newOpA);
      document.getElementById(liste[i].id+liste[i].name+"A").innerHTML = liste[i].name;
    }
  }

document.getElementById('go').onclick = function(){

  let depart_choice = document.getElementById("provenance").value[0];
  let arrive_choice = document.getElementById("arrivee").value[0];
  let time_choice = document.getElementById("heuredepart").value;
  let date_choice = document.getElementById("dteprovenance").value;
  const urlCities = "http://gigondas:1111/sprietna/ihm/tp3/schedules?cityFrom="+depart_choice+"&cityTo="+arrive_choice+"&date="+date_choice+"&timeTo="+time_choice;
  sessionStorage.setItem('LINK',urlCities);
  document.location.href="recherche.html";
  return;


}