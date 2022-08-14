let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0821-5415-6241]
│ •  [0821-5415-6241]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
