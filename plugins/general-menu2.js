import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
conn.sendHydrated(m.chat, '*『 INFORMASI 』*', `HALLO, SAYA ADALAH BOT WHATSAPP YANG DI BERI NAMA X-ZC, ANDA BISA MENDAPATKAN SC INI DARI BERBAGAI SUMBER, BOT INI MASIH DALAM TAHAP PENGEMBANGAN JADI JIKA ANDA MENEMUKAN BUG MOHON DI MAKLUMI SEMENTARA WAKTU, SILAHKAN PILIH TOMBOL MENU DI BAWAH UNTUK MENAMPILKAN LIST MENU BOT\nᴅᴀᴛᴇ: ${date}\nᴛɪᴍᴇ: ${time} ﹙ɢᴍᴛ +7:00)`.trim(), './media/broadcast.jpg', 'http://tiny.cc/Nathalie', 'ISTAGRAM', null, null, [
[`ᴍᴇɴᴜ`, '.m'],
[`\nɢᴡᴇ ꜱᴀɴɢᴇ ᴅᴇɴɢᴀɴ ᴀɴɪᴍᴇʜ crot crot ah ah ah`, 'Bilek']
], m, {asLocation: true})
}
handler.help = ['menu']
handler.tags = ['general']
handler.command = /^(menu)$/i

export default handler
