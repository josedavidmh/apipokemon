        function buscar(){
            valor=document.getElementById('poke').value;
            document.getElementById("contenido").innerHTML=""
            console.log(valor)
            cadena=""
            url = "https://pokeapi.co/api/v2/pokemon/"+valor
            fetch(url)
           .then( response => response.json())
           .then( data =>  visualizar(data) )
           .catch( error => console.log(error))
            const visualizar = (data => {       
                            console.log(data);
                            cadena=`<strong>Nombre:</strong> ${data.name} <br>`
                            cadena+= `<img src=${data.sprites.front_shiny} width="300" height="300" alt="pokemon"></img>`
                            document.getElementById("contenido").innerHTML=cadena
                                        }  ) 
            }



         