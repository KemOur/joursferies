
btn.addEventListener("submit", (event) => {
    event.preventDefault();
    axios
        .get(`https://calendrier.api.gouv.fr/jours-feries/metropole/2020.json`)
        .then((response) => {
            //console.log(response.data);
            const object = response.data;

            for (const property in object) {
                let li = document.createElement("li");
                li.innerHTML = `<li class="item">
                                <p class="text"> ${object[property]}  : ${property}</p>
                                </li>`;
                let list = document.querySelector("#list");
                list.append(li);
            }

        })
})



axios
    .get(`https://calendrier.api.gouv.fr/jours-feries/metropole/2020.json`)
    .then((response) => {
        //console.log(response.data);
        const object = response.data;

        if (!object) {
            //console.log("c'est férié")
            let li = document.createElement("li");
            li.innerHTML = `<p style="text-decoration: underline overline greenyellow;" class="item"><p class="text">C'EST FERIE BG</p></p>`;
            let p = document.querySelector("#p");
            p.append(li);
        }else {
            //console.log("c'est pas un jour férie")
            let li = document.createElement("li");
            li.innerHTML = `
            <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
            <div class="card-body">
            <p class="card-title" style="text-align: center">NON PAS ENCORE</p>  
            </div>`;
            let p = document.querySelector("#p");
            p.append(li);
        }

    }).catch(error => {
    // handle the error
});



    const endpoint = "https://calendrier.api.gouv.fr/jours-feries/metropole/2020.json";
    let france;
        axios
            .get(endpoint)
            .then(data => handleDates(data))

                function handleDates(data){
                    //console.log(data)
                    france = data.data;
                    let now = new Date();
                    //console.log(now)
                    let thisMonth = now.getUTCMonth() + 1; //months from 1-12
                    let thisDay = now.getUTCDate();
                    let thisYear = now.getUTCFullYear();
                    let thisDate = thisYear + "-" + thisMonth + "-" + thisDay;
                    //console.log(thisDate)
                    //console.log(france)

                    for (const property in france){
                        //console.log(property)
                        let li = document.createElement("li");
                        if ((Date.parse(thisDate)) <= (Date.parse(property))) {
                                //console.log(property)
                                li.innerHTML = `<li class="item">
                                        <p class="text"> ${france[property]}  : ${property} </p>
                                        </li>`;
                                let list = document.querySelector("#next");
                                list.append(li);
                        }
                    }

                }
