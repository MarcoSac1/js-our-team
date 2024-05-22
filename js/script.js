// - creo un array di oggetti con al interno ogni mebro del team e le informazioni desiderate

const team = [
    {
        nome :'Wayne Barnett',
        ruolo :'Founder & CEO',
        foto :'./img/wayne-barnett-founder-ceo.jpg',
    },
    {
        nome :'Angela Caroll',
        ruolo :'Chief Editor',
        foto :'./img/angela-caroll-chief-editor.jpg',
    },
    {
        nome :'Walter Gordon',
        ruolo :'Office Manager',
        foto :'./img/walter-gordon-office-manager.jpg',
    },
    {
        nome :'Angela Lopez',
        ruolo :'Social Media Manager',
        foto :'./img/angela-lopez-social-media-manager.jpg',
    },
    {
        nome :'Scott Estrada',
        ruolo :'Developer',
        foto :'./img/scott-estrada-developer.jpg',
    },
    {
        nome :'Barbara Ramos',
        ruolo :'Graphic Designer',
        foto :'./img/barbara-ramos-graphic-designer.jpg',
    },

];
// console.log(team);

// - faccio un ciclo 'for' per verificare tutte le informazioni inserite
for (let index = 0; index < team.length; index++) {
    console.log(team[index]); 
    
}


// - creo un elemento nel dom per ogni array 
const containerEL = document.getElementById('container');

for (const index in team) {
    const element = team[index];
    const divCard = document.createElement('div');
    divCard.classList.add('cardTeam');
    divCard.append('div');
    
    console.log(divCard);

}


// - lo aggiungo al dom