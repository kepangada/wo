let handler  = async (m, { command, conn, text }) => {
m.reply(wait)
  let id = (command.match(/[1-6]$/) || [])[0] || ''
  await conn.sendFile(m.chat, global.API('xteam', '/magernulis' + id, {
    text,
    nama: conn.getName(m.sender),
    kelas: ' '
  }, 'APIKEY'), 'nulis.jpg', 'Malas bet Lu, nulis aja males apa lagi kerja', m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})

}
handler.help = new Array(6).fill('magernulis').map((v, i) => v + (i + 1) + ' <teks>')
handler.tags = ['nulis', 'limitmenu']

handler.command = /^magernulis[1-6]?$/i

handler.limit = true

export default handler
