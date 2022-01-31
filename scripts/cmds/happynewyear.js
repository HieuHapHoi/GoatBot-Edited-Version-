this.config = {
  name: "happynewyear",
  version: "1.0.0",
  author: { 
    name: "HieuHapHoi", 
    contacts: "owner"
  },
  cooldowns: 5,
  role: 0,
  shortDescription: "Chúc mừng năm mới",
  longDescription: `Chúc Mừng Năm Mới`,
  category: "",
  guide: `{prefix}{name}: Chúc mừng năm mới`
};

module.exports = {
  config: this.config,
  start: async function({ event,api,message }) {
    const fs = require("fs-extra")
   
   
   
   
   return message.reply("You think you can use it?")
   
   
   
   
  //  let msg = ({
  //     body: `HAPPY NEW YEAR 2022
  //     Chúc bạn có một năm mới dồi dào sức khỏe và đặc biệt:
  //     + Đừng gay như Đạt gay
  //     + Đừng nghiện cờ bạc như Duy Vũ và Woang Trường
  //     + Đẹp trai như trai lạnh lùng Đinh Tuấn Hunq
  //     + Không ngu như Tú ngu và Luộc ngu
  //     + Không nứng như Minh gay
  //     + Đừng nghiện liên quân như Khạn gay
  //     + Trở thành idol như Thjnh gay
  //     Và còn nhiều thứ nữa.`,
  //     attachment:[
  //       fs.createReadStream(__dirname+'/cache/happyny.gif')
  //     ],
  //   })
  //   return message.reply(msg)
  }
}