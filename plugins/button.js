let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "📍H͞A͞L͞O͞ C͞U͞K͞ 📍\n⚡🅰🌱🅰 ♈ARIE TUBE♈ \nPilih menu\nDan Jangan Lupa Baca Dibawah ini\n\nUntuk All menu\n\nsilahkan ketik .smenu atau #allmenu\n\nownerвoт : 088245009287\n\nBerani Spam = Banned\nTelp = Blok\n\n\nJoin Group WhatsApp\nhttps://chat.whatsapp.com/KnirErZQfuMAzNUqk0eICy\n\nSubscribe Channel Gw\nhttps://youtube.com/channel/UC0rPHvwr0sJtaccF8Mm1Xng\n\nYT : ®🌴ARIE TUBE🌴",
                        "description": "*©ARIE TUBE*",
                        "buttonText": "ＹＴ ARIE TUBE",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": `'Download Menu`,
                                        "description": "\nArie Tube Channel",
                                        "rowId": ".downloadmenu"
                                    },{
                                        "title": "Database Menu",
                                        "description": "\nArie Tube Channel",
                                        "rowId": ".dbmenu"                 
                                    },{
                                        "title": "Button Menu",
                                        "description": "\nArie Tube Channel",
                                        "rowId": ".button"                 
                                    },{
                                    	"title": "All Menu",
                                        "description": "\nArie Tube Channel",
                                        "rowId": ".allmenu"                 
                                    },{
                                        "title": "Jadibot Menu",
                                        "description": "\nArie Tube Channel",
                                        "rowId": ".jadibotmenu"                 
                                    },{
                                        "title": "Owner Menu",
                                        "description": "\nArie Tube Channel",
                                        "rowId": ".ownermenu"                 
                                    },{
                                        "title": "Hentai Menu",
                                        "description": "\nArie Tube Channel",
                                        "rowId": ".hentaimenu"                 
                                    },{
                                        "title": "Absen Menu",
                                        "description": "\nArie Tube Channel",
                                        "rowId": ".absenmenu"                 
                                    }, {
                                        "title": " Group Setting",
                                        "description": "\nArie Tube Channel",
                                        "rowId": ".groupset"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
handler.command = ['menu']
handler.register = true
module.exports = handler