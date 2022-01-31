this.config = {
    name: "tetam",
    version: "1.0.0",
    author: { 
      name: "HieuHapHoi", 
      contacts: "owner"
    },
    cooldowns: 5,
    role: 0,
    shortDescription: "Đếm ngược tết âm lịch",
    longDescription: `Đếm ngược tết âm lịch`,
    category: "",
    guide: `{prefix}{name}: Chúc mừng năm mới`
  };
module.exports = {
    config: this.config,
    start: async function({ event,api,message }) {
      const fs = require("fs-extra")
    const t = Date.parse("February 1, 2022 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );
    
    message.reply(`「Thời gian còn lại cho Tết Âm lịch」
    >> ${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây <<`)
  }
}