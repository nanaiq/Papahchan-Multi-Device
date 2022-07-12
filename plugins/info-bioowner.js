let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*Nama Bot* : X-ZC
*Nama* : X
*Gender* : Laki - laki
*Agama* : Islam
*Tanggal lahir* : 08 Oktober 3000
*Umur* : 0
*Kelas* : 
*Hobby* : Anu, Ya itu, Recode script bot
*Sifat* : Baik hati dan tidak sombong 🗿, Prik, Pedo? 
*Tinggal* : Mars, Pluto
*Suka* : Kamu
*Benci* : autis, seleb wangsaf kek kontol

*───────[ SOSIAL MEDIA ]───────*
*instagran* : http://tiny.cc/Nathalie
*Facebook* : Markzuberking
*Chanel Youtube* : 
*Github:* 

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
