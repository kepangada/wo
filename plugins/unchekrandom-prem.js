//   •-- MADE BY --•
//   | Letta - Sama && Papah-Chan ! 💗🐰
//   •-------------•
// CREDITS ! JANGAN DIUBAH, JANGAN DIHAPUS !!
// NOTE : UBAH APIKEY DI CONFIG.JS

//------ FUNCTION & MODULE
function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
     }
   
let { MessageType } = (await import('@adiwajshing/baileys')).default
import fetch from 'node-fetch'

//---------------------------------
let handler  = async (m, { conn, command, args, usedPrefix, DevMode, isPrems }) => {
	
	// ------- OTHER ------
  if (global.db.data.chats[m.chat].nsfw == false && m.isGroup) return conn.sendButton(m.chat, '❗ ᴏᴘᴛɪᴏɴs ɴsғᴡ ᴅɪᴄʜᴀᴛ ɪɴɪ ʙᴇʟᴜᴍ ᴅɪɴʏᴀʟᴀᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ',botdate, null, [['ᴇɴᴀʙʟᴇ', '.on nsfw']], m)
  
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let ch = db.data.chats[m.chat].premnsfw
  //--------------------------

//---------------------SOURCE

//> Default
let res = 'https://api.lolhuman.xyz/api/random/nsfw/'
let api = '?apikey=e54205a4ca2caa368cc067bb'

//> Lolhuman
let resl = 'https://api.lolhuman.xyz/api/random2/'
let apil = '?apikey=8e66d0934cf741bfd2182c16'

//> Xteam
let xres = 'https://api.xteam.xyz/randomimage/'
let xapi = '?APIKEY=ebb6251cc00f9c63'
//--------------------------------

// ••••••••••••••••• OPTIONS •••••••••••

// > Example :
// OPTIONS
// • false = Free
// • true = premium

let ahegao = true
let anal = true
let ass = true
let blowjob = true
let cums = true
let ecchi = true
let ero = true
let erofeet = true
let erogirl = true
let holoero = true
let erokitsune = true
let eroneko = true
let eroyuri = true
let feet = true
let femdom = true
let futanari = true
let girlsolo = true
let hentai = true
let holo = true
let jahy = true
let kitsune = true
let kuni = true
let loli = true
let manga = true
let milf = true
let mstrb = true
let neko = true
let panties = true
let pussy = true
let oppai = true
let spank = true
let tentacles = true
let thighs = true
let tits = true
let trap = true
let uniform = true
let waifu = true
let yaoi = true
let yuri = true

//-------------------------------------

//---------- TEXT -----------
let next = 'ɴ ᴇ x ᴛ'
let fot = botdate
let txtprem = '❗ ᴋʜᴜsᴜs ᴜsᴇʀ ᴘʀᴇᴍɪᴜᴍ\nʜᴀʀᴀᴘ ʜᴜʙᴜɴɢɪ ᴏᴡɴᴇʀ ᴜɴᴛᴜᴋ ᴍᴇᴍʙᴇʟɪ ᴘʀᴇᴍɪᴜᴍ ! 📞'
let p = '🅟 | '
let f = 'Ⓕ | '

let tekk = `\`\`\`➩ Random Image Nsfw ${args[0] ? args[0].capitalize() : false}\`\`\` `
  let teks = `┊ 📮 Silahkan Pilih Dibawah!
┊› Atau ketik ${usedPrefix}akun -
❏──···––`
//---------------------------

//--------- BUTTON SELECTIONS ----------
const sections = [
   {
	title: '◤◢◣◥◤◢◣◥◤◢◣◥◤◢◣◥◤◢◣◥◤◢◣◥◤◢◣◥◤◢◣◥',
	rows: [
	{title: `${(ch == true ? false : ahegao) == true ? p : f}` + "A • Ahegao", rowId: ".nsfw ahegao"},
	{title: `${(ch == true ? false : anal) == true ? p:f}` + "A • Anal", rowId: ".nsfw anal"},
	{title: `${(ch == true ? false : ass) == true ? p:f}` + "A • Ass", rowId: ".nsfw ass"},
	{title: `${(ch == true ? false : blowjob) == true ? p:f}` + "B • BlowJob", rowId: ".nsfw blowjob"},
	{title: `${(ch == true ? false : cums) == true ? p:f}` + "C • Cumsluts", rowId: ".nsfw cums"},
	{title: `${(ch == true ? false : ecchi) == true ? p:f}` + "E • Ecchi", rowId: ".nsfw ecchi"},
	{title: `${(ch == true ? false : ero) == true ? p:f}` + "E • Ero", rowId: ".nsfw ero"},
  //{title: `${(ch == true ? false : erofeet) == true ? p:f}` + "E • Ero Feet", rowId: ".nsfw erofeet"},
	{title: `${(ch == true ? false : erogirl) == true ? p:f}` + "E • Ero Girl", rowId: ".nsfw erogirl"},
	{title: `${(ch == true ? false : holoero) == true ? p:f}` + "E • Ero Holo", rowId: ".nsfw holoero"},
  //{title: `${(ch == true ? false : erokitsune) == true ? p:f}` + "E • Ero Kitsune", rowId: ".nsfw erokitsune"},
  //{title: `${(ch == true ? false : eroneko) == true ? p:f}` + "E • Ero Neko", rowId: ".nsfw eroneko"},
  //{title: `${(ch == true ? false : eroyuri) == true ? p:f}` + "E • Ero Yuri", rowId: ".nsfw eroyuri"},
	{title: `${(ch == true ? false : feet) == true ? p:f}` + "F • Feet", rowId: ".nsfw feet"},
	{title: `${(ch == true ? false : femdom) == true ? p:f}` + "F • Femdom", rowId: ".nsfw femdom"},
	{title: `${(ch == true ? false : futanari) == true ? p:f}` + "F • Futanari", rowId: ".nsfw futanari"},
  //{title: `${(ch == true ? false : girlsolo) == true ? p:f}` + "G • Girl Solo", rowId: ".nsfw girlsolo"},
	{title: `${(ch == true ? false : hentai) == true ? p:f}` + "H • Hentai", rowId: ".nsfw hentai"},
	{title: `${(ch == true ? false : holo) == true ? p:f}` + "H • Holo", rowId: ".nsfw holo"},
	{title: `${(ch == true ? false : jahy) == true ? p:f}` + "J • Jahy", rowId: ".nsfw jahy"},
  //{title: `${(ch == true ? false : kitsune) == true ? p:f}` + "K • Kitsune", rowId: ".nsfw kitsune"},
  //{title: `${(ch == true ? false : kuni) == true ? p:f}` + "K • Kuni", rowId: ".nsfw kuni"},
	{title: `${(ch == true ? false : loli) == true ? p:f}` + "L • Loli", rowId: ".nsfw loli"},
	{title: `${(ch == true ? false : manga) == true ? p:f}` + "M • Manga", rowId: ".nsfw manga"},
	{title: `${(ch == true ? false : milf) == true ? p:f}` + "M • Milf", rowId: ".nsfw milf"},
	{title: `${(ch == true ? false : mstrb) == true ? p:f}` + "M • Mstrb", rowId: ".nsfw mstrb"},
	{title: `${(ch == true ? false : neko) == true ? p:f}` + "N • Neko", rowId: ".nsfw neko"},
	{title: `${(ch == true ? false : oppai) == true ? p:f}` + "O • Oppai", rowId: ".nsfw oppai"},
	{title: `${(ch == true ? false : panties) == true ? p:f}` + "P • Panties", rowId: ".nsfw panties"},
	{title: `${(ch == true ? false : pussy) == true ? p:f}` + "P • Pussy", rowId: ".nsfw pussy"},
  //{title: `${(ch == true ? false : spank) == true ? p:f}` + "S • Spank", rowId: ".nsfw spank"},
	{title: `${(ch == true ? false : tentacles) == true ? p:f}` + "T • Tentacles", rowId: ".nsfw tentacles"},
	{title: `${(ch == true ? false : thighs) == true ? p:f}` + "T • Thighs", rowId: ".nsfw thighs"},
  //{title: `${(ch == true ? false : tits) == true ? p:f}` + "T • Tits", rowId: ".nsfw tits"},
	{title: `${(ch == true ? false : trap) == true ? p:f}` + "T • Trap", rowId: ".nsfw trap"},
	{title: `${(ch == true ? false : uniform) == true ? p:f}` + "U • Uniform", rowId: ".nsfw uniform"},
	{title: `${(ch == true ? false : waifu) == true ? p:f}` + "W • Waifu", rowId: ".nsfw waifu"},
	{title: `${(ch == true ? false : yaoi) == true ? p:f}` + "Y • Yaoi", rowId: ".nsfw yaoi"},
	{title: `${(ch == true ? false : yuri) == true ? p:f}` + "Y • Yuri", rowId: ".nsfw yuri"},
	]
    },
]

const listMessage = {
  text: teks,
  footer: '┏- - - - -  INFO - - - - -\n┊ 🅟 = Premium\n┊ Ⓕ = Free\n┗•',
  title: `❏––––[ *AKUN UNCHEK* ]–––`,
  buttonText: "- -ALL AKUN- -",
  sections
}
//--------------------------------


//------------ CASE NSFW ! ------------
  try {
    if (/(akun|allakun)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
case 'Facebook Utama!':
        if ((ch == true ? false : ahegao) == true) { 
	    if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		}
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'ahegao' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
          break
          
case 'Free Fire':
         if ((ch == true ? false : anal) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
         }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(resl + 'anal' + apil)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
           break
            
case 'Pubg':
         if ((ch == true ? false : ass) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'ass' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
             
case 'Super sus':
         if ((ch == true ? false : blowjob) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          let bj = await(await fetch(`https://api.waifu.pics/nsfw/blowjob`)).json()
          conn.sendButton(m.chat, tekk, fot, bj.url, [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'Clash of Clans':
         if ((ch == true ? false : cums) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(resl + 'cum' + apil)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'Mobile Legends':
         if ((ch == true ? false : ecchi) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'ecchi' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'Roblox':
         if ((ch == true ? false : ero) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'ero' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'Tiktok':
         if ((ch == true ? false : eroFeet) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'feet' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'Call of Duty':
         if ((ch == true ? false : erogirl) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'lewdanimegirls' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'Genshin impact':
         if ((ch == true ? false : holoero) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'holo' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'Stumble guys':
         if ((ch == true ? false : erokitsune) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(resl + 'erok' + apil)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'Fr legends':
         if ((ch == true ? false : eroneko) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(resl + 'eron' + apil)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'Instagram':
         if ((ch == true ? false : spank) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'spank' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'Lord mobile':
         if ((ch == true ? false : tentacles) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'tentacles' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'Rise of Kingdoms':
         if ((ch == true ? false : tits) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'tits' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'Garena Blockman Go':
         if ((ch == true ? false : thighs) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'thighs' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'Garena Bad wars':
         if ((ch == true ? false : trap) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          let tr = await(await fetch(`https://api.waifu.pics/nsfw/trap`)).json()
          conn.sendButton(m.chat, tekk, fot, tr.url, [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'Garena blockman Editor':
         if ((ch == true ? false : uniform) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'uniform' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'Zooba':
         if ((ch == true ? false : waifu) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          let wf = await(await fetch(`https://api.waifu.pics/nsfw/waifu`)).json()
          conn.sendButton(m.chat, tekk, fot, wf.url, [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'Ragnarok X':
         if ((ch == true ? false : yaoi) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'yaoi' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'Hide online':
         if ((ch == true ? false : yuri) == true) { 
	     if (!isPrems) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'yuri' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
default:
         return await conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo: { mentionedJid: [m.sender] }})
        }
        } else if (/hentong/i.test(command)) {
               const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
               switch (_type) {
           case 'A':
               break
           case '':
               break
default:
          return conn.sendButton( m.chat, caption, fot, null, [`⋮☰ Menu`, `.menu`], m)
         }
        }
       } catch (err) {
                      m.reply("Error\n\n\n" + err.stack)
      }
//-----------------------------

}

handler.help = ['akun <type>', 'allakun <type>']
handler.tags = ['nsfw', 'premium']
handler.command = /^(akun|allakun)/i

export default handler
