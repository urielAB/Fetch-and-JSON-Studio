// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            let astroContainer = document.getElementById("container");
            for ( let i = 0; i < json.lenght; i++){
                astroContainer.innerHTML+=`
                    < div class = "astronaut" >
                        < div class = "bio" >
                            <h3> ${json[i].firstName} ${json[i].LastName}  </h3>
                            <ul> 
                                <li> Hours in space: ${json[i].hoursInSpace} </li>
                                <li class = "Active"> Active: ${json[i].active} </li>
                                <li> Skills: ${json[i].skills}</li>
                            </ul>
                        </div> 
                        <img class = "avatar" src = ${json[i].picture} >
                    </div>
                    `;
            }
        });
    });
});