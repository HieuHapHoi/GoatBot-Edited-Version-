this.config = {
    name: "taixiu",
    version: "1.0.0",
    author: { 
      name: "HieuHapHoi", 
      contacts: "owner"
    },
    cooldowns: 5,
    role: 0,
    shortDescription: "Chơi tài xỉu",
    longDescription: `Chơi tài xỉu vận may`,
    category: "",
    guide: `{prefix}{name}: Chơi tài xỉu vận may`
  };
  
  module.exports = {
    config: this.config,
    start: async function({ event,message,args }) {
      const fs = require("fs-extra");
      const userData = await usersData.getData(event.senderID);
      if (!args[0]) {
        return message.reply("Bạn phải cược tài hoặc xỉu")
      }
      const choose = args[0]
      if (choose != 'tài' && choose != 'xỉu') {
        message.reply("Chỉ đặt cược tài hoặc xỉu!")
    }
  }  
}  