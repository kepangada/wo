let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan No Telpon yang akan di SpamSms!\n\nMisal : !spamsms 123457890', m)

	axios.get(`https://arugaz.herokuapp.com/api/spamsms?no=${text}&jum=20`).then ((res) => {
	 	let hasil = `${res.data.logs}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['spamsms'].map(v => v + ' <no hp>')
handler.tags = ['spammer']
handler.command = /^(spamsms)$/i
handler.owner = false
handler.mods = true
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
