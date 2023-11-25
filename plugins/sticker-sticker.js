import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, args, usedPrefix, command, text }) => {
let stiker = false
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''

if (!/webp|image|video/g.test(mime) && !text) return m.reply(`*[🛑] EL VÍDEO O IMAGEN PARA CONVERTIR EN STICKER? ${usedPrefix + command}*`)
if (/video/g.test(mime)) if ((q.msg || q).seconds > 10) return m.reply('*[🛑] NO SEAS PNDJ DÓNDE VISTE UN STICKER DE 15 SEGUNDOS*')

if (/webp|image|video/g.test(mime)) {
let img = await q.download?.()
let out
stiker = await sticker(img, false, global.packname, global.author)
await conn.reply(m.chat, `_Esperame bro soy algo lento... 🐢_\n\n_*Recuerda tener paciencia evita ser baneado*_\n\n_*by TurboBot*_`, m)
  
if (!stiker) {
if (/webp/g.test(mime)) out = await webp2png(img)
else if (/image/g.test(mime)) out = await uploadImage(img)
else if (/video/g.test(mime)) out = await uploadFile(img)
if (typeof out !== 'string') out = await uploadImage(img)
stiker = await sticker(false, out, global.packname, global.author)
  
if (!stiker) errorMessage = 'ERROR'
}} else if (args[0]) {
if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)
else return m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙀𝙇 𝙀𝙉𝙇𝘼𝘾𝙀 / 𝙐𝙍𝙇 / 𝙇𝙄𝙉𝙆 𝙉𝙊 𝙀𝙎 𝙑𝘼́𝙇𝙄𝘿𝙊*')}

if (stiker) {
conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
} else {
console.log(stiker)
}}

handler.command = /^(s(tickers?)?(image|video|gif|img)?)$/i
export default handler

const isUrl = (text) => {
return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))}
  
