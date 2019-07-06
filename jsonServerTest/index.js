module.exports = function() {
  /**
   * Se crea objeto estructura para llenar el json
   */
  var data = { posts: [] ,
    author: [
      {
        "id": 1,
        "name": "MAD",
        "last_name": " Testing Author",
        "email_address": "sample@gmail.com"
        
      },
      { 
        "id": 2,
        "name": "Mario" ,
        "last_name" : "MDH",
        "email_address" : "Anna@gmail.com"
        
      },
      {
        "id": 3,
        "name": "Anonimo",
        "last_name": "Developer Angular",
        "email_address": "demo@gmail.com"
        
      }
    ]}


    /**
     * Variables para cambio de propiedades
     * autorID Sirve para cambiar entre los 3 autores existentes
     * j Srive para cambiar el titulo a la publicación
     */
    autorID= 1;
    j=0;


  // Ciclo que genera numero diferente para agregar al titulo de publicación
  for (var i = 1; i < 50; i++) {
    if (i % 2 == 0){
    //  console.log ('par');
      j=i*20;
    } else {
      j=i*13;
  }

    // Hace una repeticion de un solo autor para que tenga mas publicaciones
    if(i>=20 && i<=30){
      autorID=3;
    }
   
    /**
     * Se calcula Fecha para la publicación
     */
    var d = new Date();
    var fecha= "2019/07/"+autorID +":" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + ":" + d.getMilliseconds();
    // Agrega Publicación 
    data.posts.push({ "id": i, "title": "json-server-article " + j, description: "Sample of article Number: " + j,  date: fecha, "authorId": autorID});

      /**
     * Reinicia el Id del autor o incrementa para agregar a la publicación
     */
    if (autorID===3){
      autorID= 1;
    } else {
      autorID=autorID+1;
    }
  }
  return data
}
 