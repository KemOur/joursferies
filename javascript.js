function displayError(message) {
    document.querySelector(".error").innerHTML = message;
    document.querySelector(".error").style.display = "block";
}
btn.addEventListener("submit", (event) => {
    event.preventDefault();
    axios
        .get(`https://calendrier.api.gouv.fr/jours-feries/metropole/2020.json`)
        .then((response) => {
            console.log(response.data);

            const object = response.data;

            for (const property in object) {
                let li = document.createElement("li");
                li.innerHTML = `<p>${property}: ${object[property]}</p>`;
                let list = document.querySelector("#list");
                list.append(li);
            }

        })
})

if (!Date.now()) {
    console.log(displayError("c'esp pas un jour férié"))
}
