const Discord = require('discord.js');
const client = new Discord.Client();
const guild = new Discord.Guild(777505906656018453);

require('dotenv').config();

client.login(process.env.VERIFYBOTTOKEN);
const fetch = require('node-fetch');



client.on('ready',verfiyconnect)

function verfiyconnect(){
    console.log('connected')
}

const kiss = [
    'https://giphy.com/gifs/kiss-anime-riko-G3va31oEEnIkM','https://giphy.com/gifs/love-animation-kiss-bGm9FuBCGg4SY','https://giphy.com/gifs/kiss-anime-riko-G3va31oEEnIkM','https://giphy.com/gifs/sora-haru-zkppEMFvRX5FC','https://giphy.com/gifs/kiss-we-heart-it-vUrwEOLtBUnJe','https://giphy.com/gifs/toradora-anime-couple-kiss-11k3oaUjSlFR4I','https://giphy.com/gifs/amnesia-anime-couple-wOtkVwroA6yzK'
]

client.on('message',gif)

async function gif(msg){
    let token = msg.content.split(' ')

    if (token[0] === '!gif'){
        let keyword = 'kiss'
        if (token.length > 1){
            keyword = token.slice(1,token.length).join(' ')
        }
        let tennor = `https://api.tenor.com/v1/search?q=anime${keyword}&key${process.env.TENNORKEY}=&limit=25`;
        let giffy = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIFFYAPI}&q=anime ${keyword}&limit=15&offset=0&rating=r&lang=en`
        let response = await fetch(tennor);
        let json = await response.json();
        let response2 = await fetch(giffy);
        let json2 = await response2.json();

        //console.log(arry)
        let j = Math.floor(Math.random() * json.results.length)
        msg.channel.send(json.results[j].url)

        let i = Math.floor(Math.random() * json2.data.length)
        //msg.channel.send(json2.data[i].url)

        //let y = Math.floor(Math.random() * arry.length)
        //msg.channel.send(arry[y])
    }
}