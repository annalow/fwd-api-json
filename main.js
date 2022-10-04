fetch('https://thronesapi.com/api/v2/Characters')
    .then(response=> response.json()) //can clear () when single param and {} when single line
    .then((json)=>{
        //console.log(json);
        const index = Math.floor(Math.random() * 53); //generates random value 0-53
        console.log(json[index]);
        const character = json[index];


        const newImage = document.createElement('img');
        newImage.src = 'https://thronesapi.com/assets/images/' + character.image;
        document.body.append(newImage);
        
        const fullName = document.createElement('h1');
        fullName.innerText = character.fullName;
        document.body.append(fullName);

        const title = document.createElement('h3');
        title.innerText = '"' + character.title + '"';
        document.body.append(title);
    })
  