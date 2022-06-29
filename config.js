// Bismillahirrahmanirrahim
// thank you to ALLAH Swt
// thank you to Nurutomo as wabot-aq
// thank you to ariffb as stikerinbot
// thank you to botstylee
// thank you to bochilgaming as games-wabot
// thank you to benni ismael
// thank you to zerochanBot
// thank you to fernazer
// thank you to MikeBot Dev Team
// thank you to ALL Bot creator
// and thanks you to who support my Bot

gc1 = 'https://tinyurl.com/ya4dpmdv'
gc2 = 'https://chat.whatsapp.com/GaRWLEYSSQO8Vof0uHOrGp'
gc3 = 'https://chat.whatsapp.com/Hzm9su1OR0VF5uBXLtb0SB'
global.linkGC = ['https://tinyurl.com/ya4dpmdv', ''] // ganti jadi group lu
global.owner = ['6285608625102','6285810425814'] // Put your number here //owner eval
global.kontak = ['6285608625102','6285810425814'] //Ketika ada yang ngetik #owner
global.mods = ['0'] // Want some help?
global.prems = ['6285608625102','6285810425814'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com', 
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.xteam.xyz': 'Dawnfrostkey',
  'https://api.lolhuman.xyz': 'e54205a4ca2caa368cc067bb',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

lolkey = 'e54205a4ca2caa368cc067bb'
zekskey = 'apivinz'
xteamkey = 'Dawnfrostkey'
//xteam        MIMINETBOT
namaig = 'leonvx._'
namagithub = 'Bl4ck-lion'
kasihcaption = `Instagram.com/leonvx._`
namakontak1 = 'ZakuroDev'
namakontak2 = 'Rama Agung Supriyadi'

//kasihcaption = `Instagram.com/leonvx._`

// Sticker WM
global.packname = 'Yui - Chan' // ganti aja
global.author = 'By Rama Agung Supriyadi' // ganti aja

//yyy
bc = 'Yui - Chan' //мυяѕι∂ Broadcast
footer = `\n _*By Rama Agung Supriyadi*_`
namabot = `Yui - Chan`
namalu = 'Rama Agung Supriyadi'


// 
wait = '_*Loading...*_'
global.wait = '_*Loading...*_'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!\nKalo Mau main Disini aja\nhttps://chat.whatsapp.com/FnNAbem8o6r4pgLhSdO8Q9'
global.nsfw = 'Fitur NSFW Dimatikan\nKetik *!enable* *nsfw* untuk menggunakan fitur ini!\n“Katakanlah kepada orang laki-laki yang beriman: Hendaklah mereka menahan pandanganya, dan memelihara kemaluannya; … Katakanlah kepada wanita yang beriman: Hendaklah mereka menahan pandangannya, dan kemaluannya, dan janganlah mereka Menampakkan perhiasannya, kecuali yang (biasa) nampak dari padany,” \n(TQS. Al-Nur [24]: 30-31).'
global.eror = '_*Server Error kak*_'

global.image = "https://telegra.ph/file/78431196350142176603c.jpg"

// Ubah saja SC dari MursidXzy
global.image = 'https://telegra.ph/file/78431196350142176603c.jpg'//thumbnail

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 50 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
