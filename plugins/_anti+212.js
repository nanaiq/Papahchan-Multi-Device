let handler = m => m

handler.before = async function (m) {
   if (m.sender.startsWith('212' || '212')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('see u next time')
conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
   }
   
   if (m.sender.startsWith('234' || '234')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('see u next time')
conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
   } 
    }

export default handler
