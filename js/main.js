var elRow = document.querySelector(".row");


for(var pokemon of pokemons){

    var elCol = document.createElement("div");
    var elColChild = document.createElement("div");
    var elImg = document.createElement("img");
    var elName = document.createElement("h3");
    var elType = document.createElement("ul");
    var elTime = document.createElement("time");
    var elInfo = document.createElement("p");
    var elLists = document.createElement("ul");


    for(var pokemonType of pokemon.type){
        var elTypeItem = document.createElement("li");
        elTypeItem.textContent = "Type: " + pokemonType;

        elTypeItem.setAttribute("class", "list-unstyled fs-5 text-success")
        elType.appendChild(elTypeItem);

    }

    for(var weakness of pokemon.weaknesses){
        var elWeaknessItem = document.createElement("li");
        elWeaknessItem.textContent = weakness+";";
        
        elLists.appendChild(elWeaknessItem);
        elWeaknessItem.setAttribute("class", "list-unstyled fs-5 list-inline-item text-danger")
    }
    

    elCol.setAttribute("class", "col-6 col-sm-3");
    elColChild.setAttribute("class", "shadow bg-body d-flex flex-column align-items-center justify-content-between rounded h-100 p-3");
    elImg.setAttribute("src", pokemon.img);
    elImg.setAttribute("class", "w-75");
    elName.textContent = pokemon.name;
    elName.setAttribute("class", "fs-2 fw-bold my-2")
    elType.setAttribute("class", "m-0 p-0");
    elTime.textContent = pokemon.spawn_time;
    elTime.setAttribute("class", "ms-auto text-info mt-3");
    elInfo.textContent = "Weaknessess pokemon:";
    elInfo.setAttribute("class", "mt-3 mb-0 fs-4 text-muted")
    elLists.setAttribute("class", "list-inline m-0 p-0")

    
    elColChild.appendChild(elImg);
    elColChild.appendChild(elName);
    elColChild.appendChild(elType);
    elColChild.appendChild(elTime);
    elColChild.appendChild(elInfo);
    elColChild.appendChild(elLists);
    elCol.appendChild(elColChild);
    elRow.appendChild(elCol);
}