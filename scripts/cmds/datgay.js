this.config = {
  name: "datgay",
  version: "1.0.0",
  author: { 
    name: "HieuHapHoi", 
    contacts: "owner"
  },
  cooldowns: 5,
  role: 0,
  shortDescription: "Ảnh của Đạt gay",
  longDescription: `Đưa ra ảnh về Đạt gay`,
  category: "",
  guide: "{prefix}{name}: Đưa ra ảnh về Đạt gay"
};
  
module.exports = {
  config: this.config,
  start: async function({ event, api,message }) {
    const fs = require("fs-extra")
    let msg = ({
      body: 'Một số ảnh về Đạt Gay:',
      attachment:[
        fs.createReadStream(__dirname+'/cache/d1.png'),
        fs.createReadStream(__dirname+'/cache/d2.png'),
      ],
    })
  return message.reply(msg)
  }
};