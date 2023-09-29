const characterName = document.querySelector('.character_name');
const characterNumber = document.querySelector('.character_number');
const characterImage = document.querySelector('.character_image');
const characterStatus = document.querySelector('.character_status');
const tituloStatus = document.querySelector('.titulo-status');
const characterSpecies = document.querySelector('.character_species');
const tituloSpecies = document.querySelector('.titulo-species');
const characterGender = document.querySelector('.character_gender');
const characterType = document.querySelector('.character_type');
const characterLocationName = document.querySelector('.character_location_name');
const characterOriginName= document.querySelector('.character_origin_name');
const traco = document.querySelector('.traco');
const tituloGender = document.querySelector('.titulo-gender');
const tituloType = document.querySelector('.titulo-type');
const tituloOrigin = document.querySelector('.titulo-origin');
const tituloLocation = document.querySelector('.titulo-location');
const mensagemErro = document.querySelector('.mensagem-erro');
const Find = document.querySelector('.find');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');

const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let SearchCharacter = 0;

const fetchcharacters = async (characters) => {
  const APIResponse = await fetch(`https://rickandmortyapi.com/api/character/${characters}`);
  
  
  if (APIResponse.status==200){
    const data = await APIResponse.json();
    return data;
  }



}

const rendercharacters = async (characters) =>{


  const data = await fetchcharacters(characters);
  
  if (data){

    characterNumber.innerHTML = data.id;
    Find.innerHTML = '';
    characterName.innerHTML = data.name;
    traco.innerHTML = '-';
    characterStatus.innerHTML = data.status;
    tituloStatus.innerHTML = 'Status:';
    characterSpecies.innerHTML = data.species;
    tituloSpecies.innerHTML = 'Species:';
    
    if (data.type){
      characterType.innerHTML = data.type; //
    }
    else{
      characterType.innerHTML = 'Undefined';
    }
    tituloGender.innerHTML = 'Gender:';
    characterGender.innerHTML = data.gender;
    tituloType.innerHTML = 'Type:';
    characterImage.src = data.image;
    characterImage.alt = data.name;
    characterLocationName.innerHTML = data['location']['name'];
    tituloLocation.innerHTML = 'Location:';
    characterOriginName.innerHTML = data['origin']['name'];
    tituloOrigin.innerHTML = 'Origin:';
    input.value = '';
    planofundo = '';
    mensagemErro.innerHTML = '';
    SearchCharacter = data.id;


  }

    else{
      Find.innerHTML = '';
      mensagemErro.innerHTML = 'Oops! This character doesn´t exist! Search for a number up to 826.';
      characterNumber.innerHTML = '';
      characterName.innerHTML = '';
      traco.innerHTML = '';
      characterStatus.innerHTML = '';
      tituloStatus.innerHTML = '';
      characterSpecies.innerHTML = '';
      tituloSpecies.innerHTML = '';
      characterType.innerHTML = '';
      tituloGender.innerHTML = '';
      characterGender.innerHTML = '';
      tituloType.innerHTML = '';
      characterImage.src = '';
      characterImage.alt = '';
      characterLocationName.innerHTML = '';
      tituloLocation.innerHTML = '';
      characterOriginName.innerHTML = '';
      tituloOrigin.innerHTML = '';
      input.value = '';
    }
  
 
}

form.addEventListener('submit', (event) =>{

  event.preventDefault();

  rendercharacters(input.value);
 
});


buttonPrev.addEventListener('click', () =>{
  if(SearchCharacter > 1){
    SearchCharacter -= 1;
    rendercharacters(SearchCharacter);
  }

  else{
    SearchCharacter = 828;
    SearchCharacter -=1;
  }
  

});


buttonNext.addEventListener('click', () =>{

  if(SearchCharacter == 826)
  {
    SearchCharacter = -1;
    SearchCharacter += 1;
  }

  SearchCharacter += 1;
  
  rendercharacters(SearchCharacter);
});




