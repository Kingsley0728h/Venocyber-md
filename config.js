//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingsleyallela575@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv:/URI/sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority";";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "24104552653";
global.sudo = process.env.SUDO || "24104552653";
global.owner = process.env.OWNER_NUMBER || "24104552653";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "composing";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "24104552653";
global.read_status_from = process.env.READ_STATUS_FROM || "24104552653";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0hnU2RXUXRGcDdldDY1UUpMd1o0b0ExdmNGdWUxcVRVaXdJQllpWkVGbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTFA5eUd6QVBZUHNKM2ozVFRybTJ2WUFKYlhqRHdKMEhFQzZUcUQwR3NTcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTVppbSt5TnhGbnRLZUhXWk8zZ2I2VHA3ZVdhVDBMNDRycjVmMW50K2tFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKc0JtSmNna0tHa1ZVN3BkQjZJZ2F5TEdSWG5QWHF2SGtUanVSUzMrMFJVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBHTndHTGltQXUzNm1HamxiekI4Y1VML2J1ejJpSHRRRitrZUNOakxWMzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InIxajdzZ0cySGhuUlpqWURMV2p0WjRNZ2Qxdlg4Y0N2T21KUDNvTjNFV2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUdLczZTVC9UTzlVdUJ5ZWZUeTlDNjJ5R3IzVlEveFhxV0lyN0R2Y1Jsbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVklNSnEwWWVsZ1kvZjgvbERWenM1L0syUEJIWFM1OGh6bHNnYlVNdURHaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVqU1M4MEpYODNGY0xjT2NJR05TMDhQVUdDaUtmalluc0xZaFNFVlUyTnZJUnB3bUMzbnNXWGI5K3lvdkhKRklVYmtoUVZZWHY3VHRTWlB1UjZKNmpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAzLCJhZHZTZWNyZXRLZXkiOiIycmNQS1lwNUtWZ1BRU09RS2MrZ3hSRkRlaklRY3F5Z0JjVGFibm9ub2Y0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJvbjdQT2w4aFJiZXRhaEpLdmJuanZBIiwicGhvbmVJZCI6ImZiNDQxZTY0LTJhMTItNGUwYy04NzliLTEwMjFlOTQyNjY2OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyTGJZbVVjaDF5UXB5U29kb3FxbmVlWjg5d0k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0k1VTFVd3V4L3lWWFpXVEZQYVV3RE5DL2VjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJQNUxGOVdWIiwibWUiOnsiaWQiOiIyNDEwNDU1MjY1Mzo1N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJraW5nc2xleSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnl3a1Y4UWlKRGN0QVlZRHlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZ09jbWtnUFJRcG8zZTZpVHZsWUoxaUFaRGZOQmxsS1Z4KzRoNFJFbHZuMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoibVFuRS8wMzFYeU45dnkwRUx6MDRZcGYxRkZITjdqNHZNOFdiU0w2Y29zbjlDbm1OTVUxQUxEclRVMGVTNTQxbldjYjhYM1JQQkRmTFNCTUIydHFsQWc9PSIsImRldmljZVNpZ25hdHVyZSI6IllMVjFhVThxeW1ibXBCR2ZxNytmUEZrZlhwS2lndHVVSFZWL1pTck9heTZycmFOMTV6Qkh4NS91cUo1U25LZjV2eTE2V2xOOXFPVVVsWFZ0WXhPQWhnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjQxMDQ1NTI2NTM6NTdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWURuSnBJRDBVS2FOM3Vvazc1V0NkWWdHUTN6UVpaU2xjZnVJZUVSSmI1OSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTE3NDAzNywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDQncifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
