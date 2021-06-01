const Discord = require("discord.js")
const { translate } = require('bing-translate-api');
const BasePaginator = require('discord-paginator.js')

const client = new Discord.Client();

client.on('message',message => {
  const str = message.content
  const args = str.split(' ');
  if(!message.content.startsWith('$translate')) return;
  if(message.author.bot) return;
  if(message.content.startsWith('$translate'))
   translate(args.slice(2).join(' '), null, args[1], true).then(res => {
  message.channel.send(res.translation);
 }).catch(err => {
  message.channel.send("`invalid usage!\ncorrect usage-\n$translate <language> <text>\nfor list of supported languages use $languages\nand also there are limits for words`",console.log(err));
 });
})
client.on('message',message => {
  const lang1 = new Discord.MessageEmbed()
 .setTitle('Languages Page - 1')
 .setDescription("af: 'Afrikaans'\nam: 'Amharic'\nar: 'Arabic'\nas: 'Assamese'\naz: 'Azerbaijani'\nbg: 'Bulgarian'\nbn: 'Bangla'\nbs: 'Bosnian'\nca: 'Catalan'\ncs: 'Czech'\ncy: 'Welsh'\nda: 'Danish'\nde: 'German'\nel: 'Greek'\nen: 'English'\nes: 'Spanish'\net: 'Estonian'\nfa: 'Persian'\nfi: 'Finnish'\nfil: 'Filipino'\nfj: 'Fijian'\nfr: 'French'")
 .setTimestamp()
 .setFooter("Requested By "+message.author.username,message.author.avatarURL());
  const lang2 = new Discord.MessageEmbed()
 .setTitle('Languages Page - 2')
 .setDescription("fr-CA: 'French (Canada)'\nga: 'Irish'\ngu: 'Gujarati'\nhe: 'Hebrew'\nhi: 'Hindi',hr: 'Croatian'\nht: 'Haitian Creole'\nhu: 'Hungarian'\nhy: 'Armenian'\nid: 'Indonesian'\nis: 'Icelandic'\nit: 'Italian'\niu: 'Inuktitut'\nja: 'Japanese'\nkk: 'Kazakh'\nkm: 'Khmer'\nkmr: 'Kurdish (Northern)'\nkn: 'Kannada'\nko: 'Korean'\nku: 'Kurdish (Central)'\nlo: 'Lao'\nlt: 'Lithuanian'\nlv: 'Latvian',mg: 'Malagasy'\nmi: 'Maori'\nml: 'Malayalam'\nmr: 'Marathi'\nms: 'Malay'\nmt: 'Maltese'\nmww: 'Hmong Daw'\nmy: 'Myanmar'\nnb: 'Norwegian'\nne: 'Nepali'\nnl: 'Dutch'\nor: 'Odia'\notq: 'Querétaro Otomi'\npa: 'Punjabi'\npl: 'Polish'\nprs: 'Dari'\nps: 'Pashto'\npt: 'Portuguese (Brazil)'")
 .setTimestamp()
 .setFooter("Requested By "+message.author.username,message.author.avatarURL());
  const lang3 = new Discord.MessageEmbed()
 .setTitle('Languages Page - 3')
 .setDescription("pt-PT: 'Portuguese (Portugal)'\nro: 'Romanian'\nru: 'Russian'\nsk: 'Slovak'\nsl: 'Slovenian'\nsm: 'Samoan'\nsq: 'Albanian'\nsr-Cyrl: 'Serbian (Cyrillic)'\nsr-Latn: 'Serbian (Latin)'\nsv: 'Swedish'\nsw: 'Swahili'\nta: 'Tamil'\nte: 'Telugu'\nth: 'Thai'\nti: 'Tigrinya'\ntlh-Latn: 'Klingon (Latin)'\ntlh-Piqd: 'Klingon (pIqaD)'\nto: 'Tongan'\ntr: 'Turkish'\nty: 'Tahitian'\nuk: 'Ukrainian'\nur: 'Urdu'\nvi: 'Vietnamese'\nyua: 'Yucatec Maya'\nyue: 'Cantonese (Traditional)'\nzh-Hans: 'Chinese Simplified'\nzh-Hant: 'Chinese Traditional'")
 .setTimestamp()
 .setFooter("Requested By "+message.author.username,message.author.avatarURL());
 const Paginator = new BasePaginator({
    pages: [lang1,lang2,lang3], //The pages, can contain string or message embed
    remove: "❌", //The emoji to despawn the paginator
    reset: "🔴", //The emoji to reset the paginator to first page
    reaction: ["◀️", "▶️"], //The emoji to move previous or next page
    removeReaction: false, //Remove the user reaction when used
    removeAtEnd: false, //Remove the reactions when the reaction collector is ended
    timeout: 100000, //The timeout for the reaction collector ended (in ms)
    pageCount: false
})
    if(message.content.startsWith('$languages'))
       Paginator.spawn(message.channel).then(message.channel.send('the pagination will timeout after 100000ms'))
})

client.login('token')
