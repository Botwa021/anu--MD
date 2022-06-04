let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'donasi'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hai 👋
┏──「 Donasi • Dana 」─⬣
│ • Gopay : 088233832771
│ • Dana : 088233832771
│ • Pulsa : 089612698583
┗────────⬣
┏──「 *NOTE* 」─⬣
│ > Ingin donasi? wa.me/6288233832771
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *usr/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
┗────────⬣`
  conn.sendButtonImg(m.chat, fla + teks, anu, instagram, 'Menu', '.help', m) 
}
handler.help = ['donasi', 'donate']
handler.tags = ['xp', 'info']
handler.command = /^(donasi|donate)$/i

module.exports = handler
