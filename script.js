const team = [
  {
    name:'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
    qualities: [
      'team-leader',
      'organizzato'
    ]
  },
  {
    name:'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
    qualities: [
      'simpatica',
      'attiva'
    ]
  },
  {
    name:'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
    qualities: [
      'creativo',
      'attivo',
      'organizzato'
    ]
  },
  {
    name:'Angela Lopez',
    role: 'Social Media Manager	',
    image: 'angela-lopez-social-media-manager.jpg',
    qualities: [
      'creativa'
    ]
  },
  {
    name:'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
    qualities: [
      'efficiente',
      'organizzato',
      'instancabile'
    ]
  },
  {
    name:'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
    qualities: [
      'efficiente',
      'creativa'
    ]
  },
];


const container = document.querySelector('.team-container');


drawTeam();


function drawTeam(){
  container.innerHTML = '';


  team.forEach( drawTeamMember )
  
}

function drawTeamMember(member){
  console.log(member);

  // detrutturo il member
  const {image, name, role, qualities} = member;

  // è come fare
  /*
    const image = member.image;
    const name = member.name;
    const role = member.role;
    const qualities = member.qualities;
  */

  const qualitiesStr = member.qualities.join(' - ');

  const cardMember = `
      <div class="team-card">
        <div class="card-image">
          <img
          src="img/${image}"
          alt="${name}"
          />
        </div>
        <div class="card-text">
          <h3>${name}</h3>
          <p>${role}</p>
          <p>${qualitiesStr}</p>
        </div>
      </div>
  `

  container.innerHTML += cardMember;

}
