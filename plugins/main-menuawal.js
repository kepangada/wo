import { cpus as _cpus, totalmem, freemem } from 'os'
import util from 'util'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
import { join } from 'path'
import fetch from 'node-fetch'
import { promises } from 'fs'
import moment from 'moment-timezone'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
    let pp = 'https://telegra.ph/file/efbf6b53a658d683aaa71.jpg'
    let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
    let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
  const used = process.memoryUsage()
  const cpus = _cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
  let old = performance.now()
  let neww = performance.now()
  let speed = neww - old
    let cap = `*HALLO BRE ๐ ${conn.getName(m.sender)}*
๐ค ษดแดแดแด: WannTrue BOT
๐ Cสแดแดแดแดส Bแดแด: @${nomorown.split`@`[0]}
โ๏ธ Pแดแดกแดส Bส: @${nomorwa.split`@`[0]}
๐งฉ แด?แดสsษชแดษด: 7.9.8
๐ สษชสสแดสส: Bot WhatsApp By WannTrue

โณ แดแดฉแดษชแดแด: ${uptime}
๐ แดแดแดแดสแดsแด: ${totalreg}

๐ แดแดแดแด: ${date}
โ แดษชแดแด: ${time} ๏นษขแดแด +5:30๏น

๐ป sแดสแด?แดส ษชษดาแด :
โฎ แดฉษชษดษข: ${speed} แดs
โฎ สแดแด: ${format(totalmem() - freemem())} / ${format(totalmem())}

๐ฌ แดกสแดแดsแดแดฉแดฉ sแดแดแดแดs :
โฎ ${groupsIn.length} - Group Chats
โฎ ${groupsIn.length} - Groups Joined
โฎ ${groupsIn.length - groupsIn.length} - Groups Left
โฎ ${chats.length - groupsIn.length} - Personal Chats
โฎ ${chats.length} - Total Chats
`
await conn.sendButtonDoc(m.chat, cap, botdate, 'Command ๐ช', usedPrefix + 'listmenu', fkontak, {
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
                    body: 'ยฉ ๐๐ค๐ฒ๐๐ผ๐ญ',
    containsAutoReply: true,
    mediaType: 1,
    mediaUrl: hwaifu.getRandom(), 
    renderLargerThumbnail: true,
    showAdAttribution: true,
    sourceId: 'ยฉ ๐๐ค๐ฒ๐๐ผ๐ญ',
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: sgc,
    thumbnail: await(await fetch(pp)).buffer(),
    thumbnailUrl: sgc,
    title: 'โฐ โโโ โจ WannTrue โฉ โโโโ โฐ'
				}
			}
})
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu|help)$/i

export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
