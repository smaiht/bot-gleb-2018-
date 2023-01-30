const express = require("express");
const app = express();
const http = require("http");

app.use(express.static("public"));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});

const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});


//////////////////////////////////////////////////// - db
const axios = require("axios");
const windows1251 = require("windows-1251");
const fs = require("fs");
let FormData = require("form-data");
var cron = require("node-cron");

const puppeteer = require("puppeteer");

let Canvas = require("canvas");
let Image = Canvas.Image;
const { createCanvas, loadImage } = require("canvas");
//////////////////////////////////////////////////// - vk
const token = process.env.tokenPublic;
const tokenUser = process.env.tokenUser;
const VkBot = require("node-vk-bot-api"),
  user = new VkBot(tokenUser),
  bot = new VkBot(token);
bot.startPolling();
//////////////////////////////////////////////////// - var

setInterval(() => {
http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

let start = [
  "Звоню в дурку...",
  "Снимаю маску...",
  "Кашляю в метро...",
  "Подключаюсь к китайскому VPN...",
  "Получаю образцы вируса...",
  "Скупаю все запасы гречки как долбоеб...",
  "Надеваю пакет на голову...",
  "Вскрываю труп Юры Климова..."
];

let check = [
  "Занимаюсь дистанционным обучением...",
  "Покупаю билет в Ильинку...",
  "Договариваюсь хотя бы на ВИЧ...",
  "Уточняю инфу у ректора...",
  "Протираю смартфон салфеточкой...",
  "Иду на контакт с преподами...",
  "Флексю под коронавирус как дикий ящер..."
];

let results = [
  "Сегодня на карантин отправляется ",
  "Обладателем короновируса становится ",
  "Оказывается, того странного китайского мальчика трахнул(а) ",
  "Сегодня положительный результат показал только ",
  "Сегодня коронавирус переходит в ",
  "Сегодня коронуется  ",
  "Только что стало известно, что час назад на крантин закрылся "
];

let grats = [
  ". Земля тебе пухом!",
  ". Сиди-ка ты дома!",
  ". Возможно тебе повезет в другой раз!",
  ". Лови сифилис бонусом!",
  ". Держи освобождение от физры!",
  ". В следующей жизни будьте осторожны!"
];

let kto = "бессмертных";
let peerID = 2000000003;
let timer = 49020;

let koj = [1, 4, 5, 6, 12, 13, 14, 15, 16, 18, 11];

//////////////////////////////////////////////////// - triggers

bot.command(/привет/, msg => {
  msg.reply("Привет, пупсик!");
});

bot.command(/нет\W?$/, msg => {
  let text = msg.message.text;
  if (text[text.length - 1].toLowerCase() === "т") {
    msg.reply(`Пидора ответ`);
  } else {
    msg.reply(`Пидора ответ${text[text.length - 1].toLowerCase()}`);
  }
});

bot.command(/да\W?$/, msg => {
  let text = msg.message.text;
  if (text[text.length - 1].toLowerCase() === "а") {
    msg.reply(`Пизда`);
  } else {
    msg.reply(`Пизда${text[text.length - 1].toLowerCase()}`);
  }
});

bot.command(/а*х+а+х/, ctx => {
  let userId = ctx.message.peer_id || ctx.message.peer_id;
  bot
    .execute("messages.send", {
      message: "ахахахахха",
      random_id: new Date().getTime(),
      peer_id: userId,
      sticker_id: 9011
    })
    .then(r => {
      //console.log(r);
    })
    .catch(console.log);
});

bot.command("Инициирую", msg => {
  msg.reply("Очко своё инициируй, пёс");
});

bot.command(/^бунд/, ctx => {
  upload(ctx, "/bund.jpg");
});

bot.command(/^нефть/, ctx => {
  upload(ctx, "/oil.jpg");
});

//////////////////////////////////////////////////// - newyear

let newyear = [
  "В Новый год желаю счастья,\nБесконечного добра.\nПусть мечты и все желанья\nИсполняются всегда!",
  "Желаю этот Новый год\nОтметить ярко и красиво,\nПусть всем он радость принесет,\nКак можно больше позитива!\nПускай на сессиях удача\nСопровождает вас всегда,\nЧтоб все вы слова «пересдача»\nНе знали в жизни никогда!",
  "Ребята, в этот Новый год\nЖелаю всем повеселиться!\nПусть чудо в эту ночь придет\nИ с вами волшебство случится!\nЖелаю, чтоб в новом году\nЕще умней вы становились!\nПусть вас во всем успехи ждут,\nК чему б вы в жизни ни стремились!",
  "Одногруппники, ребята,\nС Новым годом вас, друзья,\nНовых взлетов и успехо\nПожелать хочу вам я.\n\nЧтоб учеба вам давалась,\nБыло весело всегда,\nСессия легко сдавалась,\nОбошла вас чтоб беда.",
  "С Новым годом поздравляю,\nПусть все будет лучше всех!\nВсе исполнятся желания,\nВ доме будет радость, смех.\n\nВсем везения желаю,\nЧтоб сбывались все мечты.\nБлагоденствия без края\nИ душевной красоты!",
  "с нг короч"
];

bot.command(/новым годом/, msg => {
  msg.reply(newyear[Math.floor(Math.random() * newyear.length)]);
});

//////////////////////////////////////////////////// - get joke
let shutka = num => {
  return axios
    .request({
      method: "GET",
      url: `http://rzhunemogu.ru/RandJSON.aspx?CType=${koj[num]}`,
      responseType: "arraybuffer",
      responseEncoding: "binary"
    })
    .then(res => {
      console.log(res.config.url);
      let rawjoke = windows1251.decode(res.data.toString("binary"));
      return rawjoke.slice(12, rawjoke.length - 2);
    });
};
//////////////////////////////////////////////////// - joke letter limit
let shortjoke = (msg, num) => {
  shutka(num).then(res => {
    if (res.length > 300) {
      shutka(num).then(res => {
        if (res.length > 300) {
          shutka(num).then(res => {
            msg.reply(res);
          });
        } else {
          msg.reply(res);
        }
      });
    } else {
      msg.reply(res);
    }
  });
};
//////////////////////////////////////////////////// - joke reply
bot.command("!шутка", msg => {
  let str = msg.message.text;
  let letter = str[str.length - 1];
  console.log(letter);
  let num = parseInt(letter);

  if (num >= 0) {
    shortjoke(msg, num);
  } else {
    shortjoke(msg, 10);
  }
});
//////////////////////////////////////////////////// - jokes list
bot.command("!шутки", msg => {
  msg.reply(
    "Отправь !шуткаХ, где Х:\n\n0 - Анекдот;\n1 - Афоризмы;\n2 - Цитаты;\n3 - Тосты;\n4 - Рассказы (+18);\n5 - Стишки (+18);\n6 - Афоризмы (+18);\n7 - Цитаты (+18);\n8 - Тосты (+18);\n9 - Статусы (+18); \n\n!шутка - Анекдот (+18);"
  );
});
//////////////////////////////////////////////////// - post
let otvet = (mess, userId) => {
  bot.execute("messages.send", {
    message: mess,
    random_id: new Date().getTime(),
    peer_id: userId
    //sticker_id: 9011,
  });
};
//////////////////////////////////////////////////// - searching
bot.command("!кто", msg => {
  let peer = msg.message.peer_id;
  if (peer === peerID) {
    let timedata = fs.readFileSync("./last.json");
    let time = JSON.parse(timedata);
    let proshlo = msg.message.date - time.message.date;

    if (proshlo < timer) {
      msg.reply(
        `Крутить можно только каждые 13ч 37мин \nОсталось ${Math.floor(
          (timer - proshlo) / 60
        )} мин`
      );
    } else {
      let data = fs.readFileSync("./top.json");
      let top = JSON.parse(data);

      bot
        .execute("messages.getConversationMembers", {
          peer_id: peerID
        })
        .then(r => {
          let pidori = r.profiles;
          let N = Math.floor(Math.random() * pidori.length);
          let pidor = pidori[N];

          let isNew = 1;

          top.forEach(x => {
            if (x.id === pidor.id) {
              x.wins++;
              isNew++;
            }
          });

          if (isNew === 1) {
            let newpidor = Object.assign({}, pidor, { wins: 1 });
            top.push(newpidor);
          }

          let newdata = JSON.stringify(top, null, 2);
          fs.writeFile("top.json", newdata, error => {
            console.log;
          });

          let last = JSON.stringify(msg, null, 2);
          fs.writeFile("last.json", last, error => {
            console.log;
          });

          //msg.reply(`Глеб дня - @${pidor.screen_name} (${pidor.first_name} ${pidor.last_name})`);
          let winner = `@${pidor.screen_name} (${pidor.first_name} ${pidor.last_name})`;

          N = Math.floor(Math.random() * start.length);
          setTimeout(() => {
            otvet(start[N], peer);
          }, 500);

          N = Math.floor(Math.random() * check.length);
          setTimeout(() => {
            otvet(check[N], peer);
          }, 2000);

          N = Math.floor(Math.random() * results.length);
          let NN = Math.floor(Math.random() * grats.length);

          setTimeout(() => {
            otvet(results[N] + winner + grats[NN], peer);
          }, 3500);
        })
        .catch(console.log);
    } // - ot timera
  } else {
    // - ot peer'a
    // msg.reply(`В этой беседе ${kto.toLowerCase()} только ты`);
  }
});
//////////////////////////////////////////////////// - top
bot.command("!топ", msg => {
  let peer = msg.message.peer_id;
  if (peer === peerID) {
    let data = fs.readFileSync("./top.json");
    let top = JSON.parse(data);

    top.sort((b, a) => parseFloat(a.wins) - parseFloat(b.wins)); ///////////////////// nado bi razobratsa s etoi huetoi

    let max = top.length;
    let j = 1;
    if (max < 10) {
      j = max;
    } else {
      j = 10;
    }

    let list = `Топ ${j} ${kto}: \n \n`;

    // top.forEach(x => list += `${x.first_name} ${x.last_name} - ${x.wins} раз. \n`);
    for (let i = 0; i < j; i++) {
      list += `${top[i].first_name} ${top[i].last_name} - ${top[i].wins} раз. \n`;
    }

    msg.reply(list);
  } else {
    msg.reply(`В этой беседе ${kto.toLowerCase()} только ты`);
  }
});
//////////////////////////////////////////////////// - printing text
let labels = ctx => {
  let text = ctx.message.text.toUpperCase().split("@");

  let width = 800;
  let height = 500;
  let textheight = 0.8 * height;
  let textwidth = 0.8 * width;

  const canvas = createCanvas(width, height);
  const ttx = canvas.getContext("2d");

  let randomColor = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)}, ${Math.random()})`;
  ttx.fillStyle = text[2] ? text[2] : randomColor;
  ttx.fillRect(0, 0, canvas.width, canvas.height);

  let fsize = 36;
  ttx.lineWidth = 6;
  ttx.font = `bold ${fsize}pt Impact`;
  //ttx.rotate(0.1)
  ttx.fillStyle = "white";
  ttx.strokeStyle = "black";
  ttx.textAlign = "center";
  ttx.textBaseline = "center";

  let linesheight = 0;

  let words = text[1].split(" ");

  for (fsize = 10; fsize < 72; fsize += 1) {
    ttx.font = `bold ${fsize}pt Impact`;

    var lines = [];
    var line = "";

    for (var n = 0; n < words.length; n++) {
      // Add next word to line
      var linePlus = line + words[n] + " ";
      // If added word exceeds rect width...
      if (ttx.measureText(linePlus).width > textwidth && n != 0) {
        // ..."prints" (save) the line without last word
        lines.push(line);
        // New line with ctx last word
        line = words[n] + " ";
      } else {
        // ...continues appending words
        line = linePlus;
      }
    }
    lines.push(line);
    linesheight = (lines.length - 1) * fsize * 1.6;
    if ((lines.length + 1) * fsize * 1.6 > textheight) {
      break;
    }
    let checker = false;
    lines.forEach(line => {
      if (ttx.measureText(line).width > textwidth) {
        checker = true;
      }
    });
    if (checker) {
      break;
    }
  }
  let spaceX = 0.5 * width;
  let spaceY = 0.5 * height;
  let lineHeight = 0;

  for (var k in lines) {
    ttx.strokeText(
      lines[k],
      spaceX,
      spaceY + lineHeight - linesheight / 2 + fsize / 2
    );
    ttx.fillText(
      lines[k],
      spaceX,
      spaceY + lineHeight - linesheight / 2 + fsize / 2
    );
    lineHeight += fsize * 1.6;
  }

  fs.writeFileSync("meme.jpeg", canvas.toBuffer());
};
//////////////////////////////////////////////////// - reply text@image
bot.command(/^!текст/, ctx => {
  labels(ctx);
  upload(ctx, "/meme.jpeg");
});
//////////////////////////////////////////////////// - edit meme
let fitting = (punches, columns, rows, format, ctx, image, meme) => {
  let text = ctx.message.text.toUpperCase().split("@");

  const canvas = createCanvas(image.width, image.height);
  const ttx = canvas.getContext("2d");

  ttx.drawImage(image, 0, 0, image.width, image.height);

  let fsize = 36;
  ttx.lineWidth = 6;
  ttx.font = `bold ${fsize}pt Impact`;
  //ttx.rotate(0.1)
  ttx.fillStyle = "white";
  ttx.strokeStyle = "black";
  ttx.textAlign = "center";
  ttx.textBaseline = "center";

  let colwidth = image.width / columns;
  let rowheight = image.height / rows;

  let xm = 0.05 * colwidth;
  let ym = 0.05 * rowheight;

  let textwidth = colwidth - 2 * xm;
  let textheight = rowheight - 2 * ym;

  let linesheight = 0;

  for (let q = 1; q <= punches; q++) {
    let words = text[q].split(" ");

    for (fsize = 10; fsize < 72; fsize += 1) {
      ttx.font = `bold ${fsize}pt Impact`;

      var lines = [];
      var line = "";

      for (var n = 0; n < words.length; n++) {
        // Add next word to line
        var linePlus = line + words[n] + " ";
        // If added word exceeds rect width...
        if (ttx.measureText(linePlus).width > textwidth && n != 0) {
          // ..."prints" (save) the line without last word
          lines.push(line);
          // New line with ctx last word
          line = words[n] + " ";
        } else {
          // ...continues appending words
          line = linePlus;
        }
      }
      lines.push(line);
      linesheight = (lines.length - 1) * fsize * 1.6;
      if ((lines.length + 1) * fsize * 1.6 > textheight) {
        break;
      }
      let checker = false;
      lines.forEach(line => {
        if (ttx.measureText(line).width > textwidth) {
          checker = true;
        }
      });
      if (checker) {
        break;
      }
      //console.log(lines)
    }

    // let spaceX = xm + (q - 1) * colwidth;
    // let spaceY = ym + (q - 1) * rowheight;
    let spaceX = (q - 0.5) * colwidth;
    let spaceY = (q - 0.5) * rowheight;
    let lineHeight = 0;

    switch (format) {
      case "drake":
        ttx.fillStyle = "black";
        ttx.strokeStyle = "white";
        spaceX = colwidth / 2 + colwidth;
        break;

      case "toRight":
        spaceY = rowheight / 2;
        break;

      case "toDown":
        ttx.fillStyle = "black";
        ttx.strokeStyle = "white";
        spaceX = colwidth / 2;
        break;

      case "mem":
        if (q != 2) {
          spaceY = 0.5 * rowheight;
        } else {
          spaceY = (rows - 0.5) * rowheight - linesheight;
        }
        spaceX = colwidth / 2;
        break;

      default:
        break;
    }

    for (var k in lines) {
      ttx.strokeText(
        lines[k],
        spaceX,
        spaceY + lineHeight - linesheight / 2 + fsize / 2
      );
      ttx.fillText(
        lines[k],
        spaceX,
        spaceY + lineHeight - linesheight / 2 + fsize / 2
      );
      lineHeight += fsize * 1.6;
    }
  }
  fs.writeFileSync(meme, canvas.toBuffer());
};
//////////////////////////////////////////////////// - upload image
let upload = (ctx, meme) => {
  let userId = ctx.message.peer_id || ctx.message.peer_id;
  bot
    .execute("photos.getMessagesUploadServer", {
      peer_id: userId
    })
    .then(r => {
      let form = new FormData(); //Create multipart form
      form.append("photo", fs.createReadStream(__dirname + meme));
      axios
        .post(r.upload_url, form, { headers: form.getHeaders() })
        .then(res => {
          bot
            .execute("photos.saveMessagesPhoto", {
              photo: res.data.photo,
              server: res.data.server,
              hash: res.data.hash
            })
            .then(res => {
              bot
                .execute("messages.send", {
                  //message: "Отличный мем получился!",
                  random_id: new Date().getTime(),
                  peer_id: userId,
                  attachment: "photo" + res[0].owner_id + "_" + res[0].id
                })
                .then(res => {
                  //console.log(res);
                })
                .catch(error => {
                  console.log(error);
                });
            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(error => {
          console.log(error);
        });
    })
    .catch(error => {
      console.log(error);
    });
};
//////////////////////////////////////////////////// - commands@memes
bot.command(/^!двери/, ctx => {
  loadImage("dveri.jpg").then(image => {
    fitting(3, 3, 5, "toRight", ctx, image, "meme.jpeg");
  });
  upload(ctx, "/meme.jpeg");
});

bot.command(/^!мозг/, ctx => {
  loadImage("brain.jpg").then(image => {
    fitting(4, 2, 4, "toDown", ctx, image, "meme.jpeg");
  });
  upload(ctx, "/meme.jpeg");
});

bot.command(/^!дрейк/, ctx => {
  loadImage("drake.jpg").then(image => {
    fitting(2, 2, 2, "drake", ctx, image, "meme.jpeg");
  });
  upload(ctx, "/meme.jpeg");
});

bot.command(/^!не нужно/, ctx => {
  loadImage("dont.jpg").then(image => {
    fitting(2, 1, 8, "mem", ctx, image, "meme.jpeg");
  });
  upload(ctx, "/meme.jpeg");
});

bot.command(/^!пух/, ctx => {
  loadImage("pooh.jpg").then(image => {
    fitting(2, 2, 2, "drake", ctx, image, "meme.jpeg");
  });
  upload(ctx, "/meme.jpeg");
});

//////////////////////////////////////////////////// - add a public
bot.command(/^!добавить/, ctx => {
  let text = ctx.message.text.split("@");

  let publicsdata = fs.readFileSync("./jsons/publics.json");
  let publics = JSON.parse(publicsdata);

  let newPub = true;
  publics.forEach(name => {
    if (publics[name] === text[1]) {
      newPub = false;
    }
  });

  if (newPub === true) {
    publics.push(text[1]);
  }
  let newdata = JSON.stringify(publics, null, 1);
  fs.writeFile("./jsons/publics.json", newdata, error => {
    console.log;
  });
});
//////////////////////////////////////////////////// - get a meme from a public
bot.command(/^!мем/, ctx => {
  let text = ctx.message.text.split("@");

  let publicsdata = fs.readFileSync("./jsons/publics.json");
  let publics = JSON.parse(publicsdata);

  let newsfeed = text[1]
    ? text[1]
    : publics[Math.floor(Math.random() * publics.length)];

  getWall(newsfeed, 100)
    .then(res => {
      let userId = ctx.message.peer_id || ctx.message.peer_id;
      let randomPost = Math.floor(Math.random() * 100);

      bot
        .execute("messages.send", {
          //message: "ахахахахха",
          random_id: new Date().getTime(),
          peer_id: userId,
          attachment:
            "wall" + res[randomPost].owner_id + "_" + res[randomPost].id
        })
        .catch(error => {
          console.log(error);
        });
    })
    .catch(error => {
      console.log(error);
    });
});
///////////////////////////////////////////////////
let getWall = (name, q) => {
  return user
    .execute("wall.get", {
      domain: name,
      count: q
    })
    .then(res => {
      let posts = res.items;
      return posts;
    });
};

//////////////////////////////////////////////////// - schedule

let schedule = async function(txt, ctx, dayid) {
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.goto("https://students.bmstu.ru/schedule/list", {
    waitUntil: "networkidle2"
  });

  let groups = await page.evaluate(() =>
    Array.from(document.querySelectorAll("a.btn-default")).map(x => ({
      group: x.text.trim(),
      link: x.href
    }))
  );

  let ssilka;
  groups.forEach(x => {
    if (x.group === txt) {
      ssilka = x.link;
    }
  });
  //console.log(ssilka);
  if (ssilka !== undefined) {
    await page.setViewport({ width: 1100, height: 3000 });
    await page.goto(ssilka, { waitUntil: "networkidle2" });

    let classics;
    let clippics;
    let daynum;

    if (dayid < 7) {
      daynum = dayid;
      classics = ".col-md-6.hidden-xs";
    } else {
      daynum = 0;
      classics = ".row";
    }

    const element = await page.$$(classics);
    const box = await element[daynum].boundingBox();

    if (dayid < 7) {
      clippics = {
        x: box.x,
        y: box.y,
        width: box.width,
        height: box.height
      };
    } else {
      clippics = {
        x: box.x,
        y: box.y + 75,
        width: box.width,
        height: box.height - 75
      };
    }

    await element[daynum].screenshot({
      path: "./example.png",
      //fullPage: true,
      clip: clippics
    });
    await browser.close();
    await upload(ctx, "/example.png");
  } else {
    ctx.reply('Не понял. Напиши по примеру: "пары см8-93"');
  }
};

//////////////////////////////////////////////////// - jokes list

bot.command(["расписание", "пары"], ctx => {
  let text = ctx.message.text.toUpperCase().split(" ");

  let na = text.indexOf("НА");
  if (na > 0) {
    text.splice(na, 1);
  }
  // console.log(text);

  let key = text[1];
  let dayID;
  let daysdata = fs.readFileSync("./schedule/days.json");
  let days = JSON.parse(daysdata);

  if (key === "ЗАВТРА") {
    let date = new Date();
    dayID = date.getDay() - 1 + 1;
    // console.log(dayID);
    // console.log(typeof dayID);
  } else if (key === "СЕГОДНЯ") {
    let date = new Date();
    dayID = date.getDay() - 1;
    // console.log(dayID);
    // console.log(typeof dayID);
  } else if (key === "НЕДЕЛЮ") {
    dayID = 7;
  } else {
    days.forEach(day => {
      if (
        key.substring(0, 2) === day.name ||
        key.substring(0, 4) === day.name2
      ) {
        dayID = day.id;
        // console.log(dayID);
        // console.log(typeof dayID);
      }
    });
  }

  let userID = ctx.message.from_id || ctx.message.user_id;
  let peerId = ctx.message.peer_id || ctx.message.peer_id;

  if (dayID === -1) {
    bot.execute("messages.send", {
      message: "В воскресенье выходной, ебанько",
      random_id: new Date().getTime() - 158,
      peer_id: peerId
    });
  } else if (dayID !== undefined) {
    let gra = getGroup(userID);
    bot
      .execute("users.get", {
        user_ids: userID
      })
      .then(r => {
        let messg = `${r[0].first_name} ${r[0].last_name}, группа ${gra}. Подожди пару секунд, сейчас я найду твоё расписание!`;

        bot.execute("messages.send", {
          message: messg,
          random_id: new Date().getTime() - 228,
          peer_id: peerId
        });
      })
      .catch(console.log);

    schedule(gra, ctx, dayID);
  } else {
    bot.execute("messages.send", {
      message: "Уже ищу, секунду!",
      random_id: new Date().getTime() - 128,
      peer_id: peerId
    });
    schedule(key, ctx, 8);
  }
});

//////////////////////////////////////////////////// - jokes list
let getGroup = ctx => {
  let gruppa;
  let groupsdata = fs.readFileSync("./schedule/groups.json");
  let groups = JSON.parse(groupsdata);
  groups.forEach(group => {
    group.list.forEach(id => {
      if (id === ctx) {
        gruppa = group.name;
      }
    });
  });
  return gruppa;
};
//////////////////////////////////////////////////// - jokes list

let prepodInfo = function(ctx) {
  let peerId = ctx.message.peer_id || ctx.message.peer_id;
  let text = ctx.message.text.toUpperCase().split(" ");

  let prepodID;

  let prepodsdata = fs.readFileSync("./schedule/prepods.json");
  let prepods = JSON.parse(prepodsdata);

  prepods.forEach(prepod => {
    text.forEach(word => {
      if (word.substring(0, 5) === prepod.last.substring(0, 5).toUpperCase()) {
        prepodID = prepod.id;
      }
    });
  });

  if (typeof prepodID === "number") {
    let prep = prepods[prepodID];
    bot
      .execute("messages.send", {
        message: `${prep.last} ${prep.name} ${prep.otche} \n ${prep.tel} \n ${prep.mail}   `,
        random_id: new Date().getTime(),
        peer_id: peerId
      })
      .then()
      .catch(console.log);
  } else {
    ctx.reply(
      `В моей базе нет такого препода. Чтобы добавить препода напиши через пробелы: \n!препод Фамилия Имя Отчество Телефон Почта`
    );
  }
};

bot.command(/почта/, ctx => prepodInfo(ctx));
bot.command(/как зовут/, ctx => prepodInfo(ctx));
bot.command(/номер/, ctx => prepodInfo(ctx));
bot.command(/телефон/, ctx => prepodInfo(ctx));

//////////////////////////////////////////////////// - jokes list

bot.command("!препод", ctx => {
  console.log(ctx);
  let peerId = ctx.message.peer_id || ctx.message.peer_id;
  let text = ctx.message.text.split(" ");

  let prepodsdata = fs.readFileSync("./schedule/prepods.json");
  let prepods = JSON.parse(prepodsdata);

  let newPrep = true;
  prepods.forEach(name => {
    if (
      name.last.substring(0, 5).toUpperCase() ===
      text[1].substring(0, 5).toUpperCase()
    ) {
      newPrep = false;
    }
  });

  if (newPrep) {
    prepods.push({
      last: text[1],
      name: text[2] ? text[2] : "-",
      otche: text[3] ? text[3] : "-",
      tel: text[4] ? text[4] : "-",
      mail: text[5] ? text[5] : "-",
      id: prepods.length
    });

    let newdata = JSON.stringify(prepods, null, 1);
    fs.writeFile("./schedule/prepods.json", newdata, error => {
      console.log;
    });

    bot.execute("messages.send", {
      message: `Препод ${text[1]} успешно добавлен! `,
      random_id: new Date().getTime() - 128,
      peer_id: peerId
    });
  } else {
    bot.execute("messages.send", {
      message: `Этот препод уже есть в базе`,
      random_id: new Date().getTime() - 128,
      peer_id: peerId
    });
  }
});
//////////////////////////////////////////////////
// bot.event('message_edit', (ctx) => {
//   ctx.reply('...')
// });

// let lol = 316958167;
// let loli = [];

bot.command(/рулетка/, ctx => {
  let userID = ctx.message.from_id || ctx.message.user_id;
  let peerId = ctx.message.peer_id || ctx.message.peer_id;

  let pulya = Math.floor(Math.random() * 100);
  console.log(pulya);
  let result = "";

  if (pulya > 71) {
    result = "можешь проебать!";
  } else {
    result = "тебе нужно по-любому идти!";

    if (pulya === 8) {
      bot.execute("messages.removeChatUser", {
        chat_id: peerID - 2000000000,
        user_id: userID
      });
      bot.execute("messages.send", {
        message: "ой, а что случилось такое?",
        random_id: new Date().getTime() - 22,
        peer_id: peerId
      });
    }
  }

  bot
    .execute("users.get", {
      user_ids: userID
    })
    .then(r => {
      let messg = `${r[0].first_name} ${r[0].last_name}, ${result}`;

      bot.execute("messages.send", {
        message: messg,
        random_id: new Date().getTime() - 228,
        peer_id: peerId
      });
    })
    .catch(console.log);
});

// bot.event("message_new", ctx => {

//   //let peerId = ctx.message.peer_id || ctx.message.peer_id;

//   //let cc = ctx.message.conversastion_message_id;
//   //let ct = ctx.message.id;
// let cc = ctx.message.conversation_message_id;
// console.log(cc);

//         bot
//           .execute("messages.getConversationMembers", {
//             peer_id: 2000000003
//           })
//           .then(r => {
//               let members = r.profiles;
//           let members2 = [];

//               members.forEach(x => {
//                 //console.log(x.id)
//                 members2.push(x.id)
//               })

//               bot.execute("users.get", {
//                 user_ids: members2,
//                 fields: 'bdate'
//               }).then(r => {
//                 let infas = [];
//                 r.forEach(x => {
//                   //console.log(x);
//                   if (x.bdate || true) {
//                     infas.push({"name": x.first_name,
//                                 "lname": x.last_name,
//                                 "bdate": x.bdate});
//                     let newdata = JSON.stringify(infas, null, 1);
//                     fs.writeFile("./jsons/bdates.jsааon", newdata, error => {
//                     console.log;
//                     });
//                   }
//                 });
//                 //console.log(infas);
//               })
//             })

//           .catch(console.log);

// });

//   let iduser = ctx.message.from_id || ctx.message.user_id;
//   let idm = ctx.message.conversation_message_id || ctx.message.message_id;

//   console.log(idm);

//   if (lol === iduser) {
//     bot
//       .execute("users.get", {
//         user_ids: iduser
//       })
//       .then(r => {

//      bot.execute("messages.addChatUser", {
//       chat_id: peerID-2000000000,
//       //message: "ололололо",
//       user_id: lol
//     }).then(r => console.log(r)).catch(console.log);
bot.command(/вирус/, ctx => {
  let getInfo = async function() {
    const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
    const page = await browser.newPage();
    await page.goto("https://coronavirus-monitor.ru/", {
      waitUntil: "networkidle2"
    });

    let info = await page.evaluate(() => {
      // const tet = Array.from(document.querySelectorAll("div.amount")).map(
      //   x => x.innerText
      // );
      const tet1 = document
        .querySelectorAll(".b-totals")[0]
        .children[0].innerText.replace(/\n/g, ": ");
      const tet2 = document
        .querySelectorAll(".b-totals")[0]
        .children[1].innerText.replace(/\n/g, ": ");
      const tet3 = document
        .querySelectorAll(".b-totals")[0]
        .children[2].innerText.replace(/\n/g, ": ");
      const tet4 = document
        .querySelectorAll(".b-totals")[0]
        .children[3].innerText.replace(/\n/g, ": ");

      let tet = `${tet1}\n${tet2}\n${tet3}\n${tet4}`;
      return tet;
    });

    let keks = await page.evaluate(() => {
      const tet = Array.from(
        document.querySelectorAll(".js-statistics-russia > .statistics-row")
      ).map(x => x.innerText);
      return tet;
    });

    await browser.close();

    let s = "";

    keks.forEach(x => {
      x = x.replace(/\n/g, " ");
      s += `\n${x}`;
    });

    let datas = `${info} \n\nСтатистика в России:\n${s}  `;

    ctx.reply(datas);
  };

  getInfo();
});

//cron.schedule('*/5 * * * * *', () => {
cron.schedule("37 13 0 * * *", () => {
  //console.log('running a task every minute');
  let today = new Date();

  let dd = String(today.getDate());
  let mm = String(today.getMonth() + 1);
  //var yyyy = today.getFullYear();

  today = dd + "." + mm;

  console.log(today);

  let bdatesdata = fs.readFileSync("./jsons/bdates.json");
  let bdates = JSON.parse(bdatesdata);

  bdates.forEach(x => {
    if (x.bdate === today) {
      bot.execute("messages.send", {
        message: `${x.name} ${x.lname}, поздравляю тебя с днём рождения!`,
        random_id: new Date().getTime() - Math.floor(Math.random() * 1000),
        peer_id: peerID
      });

      shutka(8).then(res => {
        bot.execute("messages.send", {
          message: res,
          random_id: new Date().getTime() - Math.floor(Math.random() * 555),
          peer_id: peerID
        });
      });
    }
  });
});

bot.command(
  [
    "доллар",
    "евро",
    "бакс",
    "курс",
    "йен",
    "йены",
    "usd",
    "yen",
    "стипуха глеба"
  ],
  ctx => {
    let peerId = ctx.message.peer_id || ctx.message.peer_id;

    let usd;
    let eur;
    let yen;
    let gleb = "0.00000 (+0.000)";

    axios.get("http://www.floatrates.com/daily/rub.json").then(res => {
      usd = res.data.usd.inverseRate;
      eur = res.data.eur.inverseRate;
      yen = res.data.jpy.inverseRate;

      bot.execute("messages.send", {
        message: `Доллар = ${usd}\nЕвро = ${eur}\nЙен = ${yen}\nСтипуха Глеба = ${gleb}`,
        random_id: new Date().getTime() - 218,
        peer_id: peerId
      });
    });
  }
);

bot.command(["биткоин", "биток", "бетховен"], ctx => {
  let peerId = ctx.message.peer_id || ctx.message.peer_id;

  let btcu;
  let btcr;

  axios.get("https://blockchain.info/ticker").then(res => {
    btcu = res.data.USD;
    btcr = res.data.RUB;

    bot.execute("messages.send", {
      message: `1 BTC = ${btcu.last} ${btcu.symbol} = ${btcr.last} ${btcr.symbol}`,
      random_id: new Date().getTime() - 218,
      peer_id: peerId
    });
  });
});
