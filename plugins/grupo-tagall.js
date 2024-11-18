let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `@tutofav ${pesan}`
let teks = `*Activo. Pasen, pasen, compren, compren*\n${oi}\n\n*＠ｃｅｏｇｅｒｉｐｉｕｍ．ｄｚｎ🫶🏻*\n`
for (let mem of participants) {
teks += `🐭 @${mem.id.split('@')[0]}\n`}
teks += `FaverBot`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) } )
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
