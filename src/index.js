require('dotenv').config();
const { Client, IntentsBitField} = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});


client.on('ready', (c) => {
    console.log(`${c.user.username} is online.`)
    //username, tag, id
});

// for chat messages
// client.on('messageCreate', (message) => {
// //     console.log(message.content);

//     //check if user is bot
//     if (message.author.bot){
//         return;
//     }
//     if (message.content === 'hello'){
//             message.reply('hello');
//     }
// });

client.on('interactionCreate', (interaction) => {
    //runns only if interaction does not have a slash in it
    if (!interaction.isChatInputCommand()) return;
        // console.log(interaction.commandName);

    if (interaction.commandName === 'add') {
         const fnum = interaction.options.get('first-number').value;
         const snum = interaction.options.get('second-number').value;

         interaction.reply(`The sum is ${fnum + snum}`);
        }

    if (interaction.commandName === 'hey') {
        interaction.reply('hey');
    }

    if (interaction.commandName === 'ping') {
        interaction.reply('pong!');
    }


});



client.login(process.env.TOKEN);


