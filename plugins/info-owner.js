var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = gataImg.getRandom()	
const cat = `
╭ ❖ ── ✦ ── ✦ ── ❖ ──╗
│
│ •𝐂𝐫𝐞𝐚𝐝𝐨𝐫
│ *Gael Oficial*
│
│ *Numero de mi creador*
│ *wa.me/51907913096*
│
│ •𝐒𝐨𝐩𝐨𝐫𝐭𝐞 𝐨𝐟𝐜
│ *wa.me/51967647592*
│
│
│*𝐆𝐫𝐮𝐩𝐨 𝐩𝐚𝐫𝐚 𝐩𝐫𝐨𝐛𝐚𝐫 𝐞𝐥 𝐛𝐨𝐭*
│*https://chat.whatsapp.com/FZ5NqcnUDsN6ZA8kBFnewH*
│
│*Asistencia de Turbo-Bot-Lite*
│*${asistencia}*
╰─ ❖ ── ✦ ── ✦ ── ❖ ──╝`

await conn.sendFile(m.chat, pp, 'gata.mp4', cat, fkontak)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i

export default handler
