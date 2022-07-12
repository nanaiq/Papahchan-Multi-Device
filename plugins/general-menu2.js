import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
conn.sendHydrated(m.chat, '*『 ɪɴᴛʀᴏᴅᴜᴄᴛɪᴏɴ 』*', `HALLO, SAYA ADALAH BOT WHATSAPP YANG DI BERI NAMA X-ZC,SC INI DI KEMBANGKAN OLEH SESEORANG YANG BERNAMA PAPAH-CHAN,BOT INI MASIH DALAM TAHAP PENGEMBANGAN JADI JIKA ANDA MENEMUKAN BUG MOHON DI MAKLUMI,SILAHKAN PILIH TOMBOL MENU DI BAWAH UNTUK MENAMPILKAN LIST MENU BOT\nᴅᴀᴛᴇ: ${date}\nᴛɪᴍᴇ: ${time} ﹙ɢᴍᴛ +7:00)`.trim(), './media/broadcast.jpg', 'http://tiny.cc/Nathalie', 'ISTAGRAM', null, null, [
[`ᴍᴇɴᴜ`, '.m'],
[`\nɢᴡᴇ ꜱᴀɴɢᴇ ᴅᴇɴɢᴀɴ ᴀɴɪᴍᴇʜ`, 'Bilek']
], m, {asLocation: true})
}
handler.help = ['menu']
handler.tags = ['general']
handler.command = /^(menu)$/i

export default handler
