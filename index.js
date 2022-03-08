// Add your code here


function submitData(name, email) {
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json", 
        },
        body: JSON.stringify({
            name: name,
            email: email,
        }),
    })
    .then(res => res.json())
    .then( obj => {
       //console.log(obj);
        const body = document.querySelector('body');
        body.innerHTML += `<h3>${obj.id}</h3>`
    })
    .catch( error => {
        console.log(error)
        //const body = document.querySelector('body');
        document.body.innerHTML = error.message
     })
};
