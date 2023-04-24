const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const players = {
    'Lebron James': {
       'position': 'Forward',
        'team': 'lakers',
        'pointsPerGame': '27.2',
        'birthLocation': 'Akron, Ohio',
        'url': 'https://www.gannett-cdn.com/presto/2019/10/16/USAT/99e0a7fc-7fcc-4c8c-9019-210273d08fb9-GTY_1180597363.JPG?crop=3274,2324,x305,y343&width=660&height=469&format=pjpg&auto=webp'
    },
    'Steph Curry':{
        'position': 'Guard',
        'team': 'Warriors',
        'pointsPerGame': '29.4',
        'birthLocation': 'Akron, Ohio',
        'url': "https://media.gettyimages.com/id/1357774467/photo/stephen-curry-of-the-golden-state-warriors-shoots-a-three-point-shot-against-the-orlando.jpg?s=612x612&w=gi&k=20&c=SVWetc8JpbNqWYlCnhowVKHc4AA2iXLZGHIVnprcGZs="
    
    },

    'Giannis Antetokounmpo':{
        'position': 'Forward',
        'team': 'Bucks',
        'pointsPerGame': '31.1',
        'birthLocation': 'Athens, Greece',
        'url': "https://imageio.forbes.com/specials-images/imageserve/6439245cbcb158d83aa5f7ea/Giannis-Antetokounmpo-during-the-Bucks--regular-season-game-versus-the-Celtics/0x0.jpg?format=jpg&crop=1935,1088,x0,y85,safe&width=960"
    },
    
    'Jayson Tatum':{
        'position': 'Forward',
        'team': 'Celtics',
        'pointsPerGame': '30.0',
        'birthLocation': 'St, Louis, Missouri',
        'url': "https://www.nbcsports.com/sites/rsnunited/files/styles/article_hero_image/public/article/hero/Jayson-Tatum-USATSI_17005149.jpg"
    },
    
    'Kevin Durant':{
        'position': 'Forward',
        'team': 'Suns',
        'pointsPerGame': '29.7',
        'birthLocation': 'Washington, DC',
        'url': "https://images.axios.com/l9f68JZSOiKApqQINGrUq3R0JVA=/252x0:1020x768/1920x1920/2023/03/09/1678367783166.jpg"
    },

    'Ja Morant':{
        'position': 'Guard',
        'team': 'Grizzlies',
        'pointsPerGame': '26.2',
        'birthLocation': 'Dalzell, SC',
        'url': "https://hoopshabit.com/wp-content/uploads/getty-images/2017/07/1396130886.jpeg"
    },


    'James Harden':{
        'position': 'Guard',
        'team': '76ers',
        'pointsPerGame': '24.7',
        'birthLocation': 'Los Angeles, CA',
        'url': "https://i.guim.co.uk/img/media/395a1d4bc5870b755b7d60e2471c710ad0c952aa/0_183_4315_2589/master/4315.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=df2d8645bf4b6a6c61130c916fdb34cf"
    },



    'Jaylen Brown':{
        'position': 'G/F',
        'team': 'Celtics',
        'pointsPerGame': '26.6',
        'birthLocation': 'Atlanta, GA',
        'url': "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/boston-celtics-jaylen-brown-in-black-uniform-1675916948.jpg?crop=1.00xw:1.00xh;0,0&resize=900:*"
    },

    'unknown':{
        'position': 0,
        'team': 'unknown',
        'pointsPerGame': 'unknown',
        'birthLocation': 'unknown'
    }
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/main.js', (request, response)=>{
    response.sendFile(__dirname + '/main.js')
})

app.get('/css/style.css', (request, response)=>{
    response.sendFile(__dirname + '/css/style.css')
})



app.get('/api/:name',(request,response)=>{
    const playerName = request.params.name

    if( players[playerName] ){
        response.json(players[playerName])
    }else{
        response.json(players['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})
