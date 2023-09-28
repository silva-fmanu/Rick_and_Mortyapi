const characterName = document.querySelector('.character_name');
const characterNumber = document.querySelector('.character_number');
const characterImage = document.querySelector('.character_image');
const characterStatus = document.querySelector('.character_status');
const characterSpecies = document.querySelector('.character_species');
const characterGender = document.querySelector('.character_gender');
const characterType = document.querySelector('.character_type');
const characterLocationName = document.querySelector('.character_location_name');
const characterOriginName= document.querySelector('.character_origin_name');



const form = document.querySelector('.form');
const input = document.querySelector('.input_search');

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

    characterName.innerHTML = data.name;
    characterNumber.innerHTML = data.id;
    characterStatus.innerHTML = data.status;
    characterSpecies.innerHTML = data.species;
    characterType.innerHTML = data.type;
    characterGender.innerHTML = data.gender;
    characterImage.src = data.image;
    characterLocationName.innerHTML = data['location']['name'];
    characterOriginName.innerHTML = data['origin']['name'];
    input.value = '';


  }

    else{
      characterNumber.innerHTML = 'Character Not found :( try again';
      characterName.innerHTML = '';
      characterImage.src = '';
      characterStatus.innerHTML = '';
      characterSpecies.innerHTML = '';
      characterType.innerHTML = '';
      characterGender.innerHTML = '';
      characterImage.src = data.image;
      characterLocationName.innerHTML = '';
      characterOriginName.innerHTML = '';
      
    }
  
 
}

form.addEventListener('submit', (event) =>{

  event.preventDefault();

  rendercharacters(input.value);
 
});


