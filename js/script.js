// - creo un array di oggetti con al interno ogni mebro del team e le informazioni desiderate

const team = [
    {
        nome :'Wayne Barnett',
        ruolo :'Founder & CEO',
        foto :'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome :'Angela Caroll',
        ruolo :'Chief Editor',
        foto :'angela-caroll-chief-editor.jpg',
    },
    {
        nome :'Walter Gordon',
        ruolo :'Office Manager',
        foto :'walter-gordon-office-manager.jpg',
    },
    {
        nome :'Angela Lopez',
        ruolo :'Social Media Manager',
        foto :'angela-lopez-social-media-manager.jpg',
    },
    {
        nome :'Scott Estrada',
        ruolo :'Developer',
        foto :'scott-estrada-developer.jpg',
    },
    {
        nome :'Barbara Ramos',
        ruolo :'Graphic Designer',
        foto :'barbara-ramos-graphic-designer.jpg',
    },

];
// console.log(team);

const containerEl = document.getElementById('container');


// - faccio un ciclo 'for' per verificare tutte le informazioni inserite
for (let index = 0; index < team.length; index++) {
    console.log(team[index]); 
    const element = team[index];
    // - creo un elemento nel dom per ogni array 
    const divCard = document.createElement('div');
    
    divCard.classList.add('cardTeam');
    divCard.append(team[index].ruolo);
    containerEl.appendChild(divCard);

    const nameEl = document.createElement('h1');
    nameEl.append(team[index].nome);
    divCard.appendChild(nameEl)
    // - lo aggiungo al dom
    
    let imgEl = document.createElement('img');
    imgEl.append(team[index].foto);
    divCard.appendChild(imgEl);
    
}




