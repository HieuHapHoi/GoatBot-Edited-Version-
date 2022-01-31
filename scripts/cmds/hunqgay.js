this.config = {
  name: "hunqgay",
  version: "1.0.0",
  author: { 
    name: "HieuHapHoi", 
    contacts: "owner"
  },
  cooldowns: 5,
  role: 0,
  shortDescription: "Ảnh của Hunq",
  longDescription: `Đưa ra ảnh về Hunq Gay`,
  category: "",
  guide: `{prefix}{name} + thuộc tính: Đưa ra hình ảnh về Hưng.Những thuộc tính có sẵn:
  + hunqgaidit: ảnh về Hunq đang gãi đít
  + hunqlanhlung: ảnh về lạnh lùng boi Đinh Tuấn Hunq
  + hunqhocbai: ảnh về Hunq đang học bài`
};
  
module.exports = {
  config: this.config,
  start: async function({ message, args }) {
    const fs = require("fs-extra")
    
    // message.reply(`>>>>> Danh sách album ảnh của Hunq <<<<<
    // 1. Hunq Đang Học Bài
    // 2. Hunq Lạnh Lùng Boiii
    // 3. Hunq Đang Gãi Đít`)

    let list = {
      "hunqhocbai": 0,
      "hunqlanhlung": 1,
      "hunqgaidit" : 2
    }

    if(!Object.keys(list).includes(args[0])){
      return message.reply(`Vui lòng nhập lại`);
    }
    
    if(args[0] == "hunqhocbai"){
           let msg = ({
              body: 'Ảnh về Hunq đang học bài',
              attachment:[
                    fs.createReadStream(__dirname+'/cache/hunqhb1.png'),
                    fs.createReadStream(__dirname+'/cache/hunqhb2.png'),
                   fs.createReadStream(__dirname+'/cache/hunqhb3.png'),
                   ],
             })
     return message.reply(msg)
    }
    if(args[0] == "hunqlanhlung"){
           let msg = ({
              body: 'Ảnh về Hunq lạnh lùng boi',
              attachment:[
                    fs.createReadStream(__dirname+'/cache/hunqngau1.png'),
                   ],
             })
     return message.reply(msg)
    }
    if(args[0] == "hunqgaidit"){
      let msg = ({
        body: 'Ảnh về Hunq đang gãi đít',
        attachment:[
          fs.createReadStream(__dirname+'/cache/hunqgaidit.png'),
        ],
      })  
      return message.reply(msg);
    }
  },
  
    // else{
    //   return message.reply(args[0])
    // }
    // if(list[args[0]] == 1) {
    //   return message.reply('Gà')
    // }
    
    

  //   let player = list[args[0]]

  //   message.reply(player)  
};