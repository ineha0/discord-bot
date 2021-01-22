const Discord = require('discord.js');
const fetch = require('node-fetch');
const client = new Discord.Client();
require('dotenv').config();

client.login(process.env.BOTTOKEN);
new Discord.Guild('777505906656018453');
new Discord.Role(801776333414989834,0,777505906656018453);

let i

client.on('ready', discordready);

function discordready(){
    console.log('connected to discord')
}

client.on('message', check)
let search = ['anime hug','anime kiss','anime pout','anime dance','anime cute','anime catboy','anime catgirl','anime',]
async function check(message){
    //console.log(message.mentions.everyone)
    if (message.mentions.everyone === true){
        message.reply('no')
    }
    //console.log(message)
    if (message.content === 'pog') {
        message.channel.send(`no`);
        message.channel.members
    }
    let search = ['anime hug','anime kiss','anime pout','anime dance','anime cute','anime catboy','anime catgirl','anime','anime horny','anime yuri','anime yaoi',]
    let token = search[Math.floor(Math.random() * search.length)];
    console.log(token)
    if (message.channel.id === '777505906656018459') {
        var tennor = `https://api.tenor.com/v1/search?q=${token} hug&key${process.env.TENNORKEY}=&limit=50`;
        let response = await fetch(tennor);
        let json = await response.json();


        //console.log(json)
        //console.log('pog')
        let j = Math.floor(Math.random() * json.results.length)
        message.channel.send(json.results[j].url)
    }

}



