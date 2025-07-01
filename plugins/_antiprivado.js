export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
  if (m.isBaileys && m.fromMe) return !0
  if (m.isGroup) return !1
  if (!m.message) return !0

  if (
    m.text.includes('PIEDRA') ||
    m.text.includes('PAPEL') ||
    m.text.includes('TIJERA') ||
    m.text.includes('serbot') ||
    m.text.includes('jadibot')
  ) return !0

  const chat = global.db.data.chats[m.chat]
  const bot = global.db.data.settings[this.user.jid] || {}

  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`❗ *ALERTA PRIVADA ACTIVADA*\n\n📵 @${m.sender.split`@`[0]} este número no está autorizado.\n\n💬 *Frase del día:*\n*“No cualquiera tiene acceso a la leyenda de los Tazos Dorados 🥇”*\n\n📬 Si quieres tu propio bot o contactar a mi creador, hazlo por aquí:\n👉 https://wa.me/5212882233102`, false, {
      mentions: [m.sender]
    })
    await this.updateBlockStatus(m.chat, 'block')
  }

  return !1
}
