import express from 'express';

const app = express();

app.get('/games',(request, response) => {
    return response.json([])
})

app.post('/ads',(request, response) => {
    return response.json([])
})

app.get('/games/:id/ads', (request, response) => {

//const gameId = request.params.id;
   return response.json(
    
    [
        {id: 1, name: 'anuncio 1'},
        {id: 2, name: 'anuncio 2'},
        {id: 3, name: 'anuncio 3'},
        {id: 4, name: 'anuncio 3'},
        {id: 5, name: 'anuncio 3'},
    ],
    
    
   )
});

app.get('/ads/:id/discord', (request, response) => {

    //const adId = request.params.id;
       return response.json(
        
        [
          
        ],
        
        
       )
    });
app.listen(3333)