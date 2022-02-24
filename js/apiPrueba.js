let urlBase = "https://localhost:44355";
const MetodoGet = () => {

    fetch(`${urlBase}/api/prueba`)
    .then(Response => Response.text())
    .then(data => console.log("Metodo Get api",data))

};

const MetodoPost = () => {
    let participantes = ["gabo", "vic", "raul", "omar"];

    fetch(`${urlBase}/api/prueba`, {
    method: 'POST',
    body: JSON.stringify(participantes),
    headers: {
        'Content-Type': 'application/json'
        }
    })
    .then(Response => Response.text())
    .then(data => console.log("Metodo POST api",data))

};

const MetodoPost2 = () => {
    let participantes = [
        {
            Nombre: "Gabo",
            Edad: 17,
            FechaNacimiento: '1994-10-17'
        },
        {
            Nombre: "Gabo 2",
            Edad: 18,
            FechaNacimiento: '1994-10-17'
        },
        {
            Nombre: "Gabo 3",
            Edad: 27,
            FechaNacimiento: '1994-10-17'
        }        
    ];

    fetch(`${urlBase}/api/prueba/post2`, {
    method: 'POST',
    body: JSON.stringify(participantes),
    headers: {
        'Content-Type': 'application/json'
        }
    })
    .then(Response => Response.text())
    .then(data => console.log("Metodo POST2 api",data))

};

const MetodoPut = () => {


    fetch(`${urlBase}/api/prueba`, {
    method: 'PUT',
    // body: JSON.stringify(participantes),
    // headers: {
    //     'Content-Type': 'application/json'
    //     }
    })
    .then(Response => Response.text())
    .then(data => console.log("Metodo PUT api",data))

};

const MetodoDelete = () => {

    fetch(`${urlBase}/api/prueba`, {
    method: 'Delete'
    })
    .then(Response => Response.text())
    .then(data => console.log("Metodo Delete api",data))

};

const ListaParticipantes = () => {

    fetch(`${urlBase}/api/prueba/obtenerparticipantes`)
    .then(Response => Response.text())
    .then(data => console.log("Lista de participantes api",data))

};

const ListaParticipantesMayoresDeEdad = () => {

    fetch(`${urlBase}/api/prueba/mayoresdeedad`)
    .then(Response => Response.text())
    .then(data => console.log("Lista de participantes mayores de edad api",data))

};

MetodoGet();
MetodoPost();
MetodoPost2();
MetodoPut();
MetodoDelete();
ListaParticipantes();
ListaParticipantesMayoresDeEdad();