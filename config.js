const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="muhammadmuzammilhaqnawazarain@gmail.com"
global.location="Pakistan, Islamabad."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github=process.env.GITHUB|| "https://github.com/itxmemuzammil/Muzammil-MD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VajzERVFy72FxXdllv2y";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VajzERVFy72FxXdllv2y" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/a6c7556a03ceb8ed447d8.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "258867532400" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "258867532400";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "258867532400";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "258867532400,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://hitdev-qr.onrender.com";


global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUV6KytlUXlNZ0swRHBkcTdJWGZrdTRPMXlNUlN0QjRET2dQdWZUY1hFND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV3p1cENRZHptZXlIem1Pc1BmZEYvZHNvRzdEcHc5clNGMEN6eDM2amZGcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFR2U0VDJrcUhuSnRMQkpxTnpyRU1VUlQxUFppQitVaS8yZlRxMFl6VjBZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWd3pTZUhpdjdVanIwcm9kTFR2L1kzSDRldE4vb05TVDl4Mm5acjU1cm1VPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlDempjTVpkUWhySFRLYkhUSWlHRmxmRjNZeUdZazlnL1doQlRYcllYWFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhCaWNJTmFqRUcrbjVLWExkQU9INnJKVW9EQk91aWdjbmRCQnF0S1E2REE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUlocTlRbDVvVGZmaHg3dm9zMU8xYytSMVJtcUZudEJpRFBHSlZYWEFsMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVhJK1M5TDl1WjBJSXBtbEtYMm8rNVFmcWtZNTRJVWdwVHRNNi9PMlZSaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9uU3pKMDNpcGVoTVlyMTlKS3AvVlRYbmh4L1dadzY5OWY4SmQvKytBeXhOS0ZKTjg4WEVseXBTRlMyZWcybDJJWkVIbFdra2k0QjlUK0k4VktiOUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg4LCJhZHZTZWNyZXRLZXkiOiJLWm9UVVNkTjh1QUI3RWllajd1OFQ5WDhvQnFpSHJIM2lxSW4xdEE3VVhNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzA4MzkwMDAwNkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQkY1Q0M1OUIwN0VEQzhCNjA0NTI1ODY3NEI0RDBFRCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyODcyNTEyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMwODM5MDAwMDZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNUJBMERDRUI1MUZGMjk1MzkxNUFFQjE2NDZCODc4RUYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjg3MjUxMn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiTTcyc2RfNkRSa2FwSmRSdnVmMmFyUSIsInBob25lSWQiOiIwNGU3N2NlYi1mNDZlLTRlN2EtYThkOC1lNGI2MjY2NWNhNzEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXRtTnhHT2xLVVBoRmpmQWxHL21KQXhEVEhBPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhWVnd1a0tKVDNyd0VhUHlqZHpYWnhLMHF1bz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJDNExRVEhFVCIsIm1lIjp7ImlkIjoiOTIzMDgzOTAwMDA2OjE2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlJhamEgU2FhYiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHJ6aG9BRkVMRGx3N1VHR0FvZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWFJtclZGVU5wVWdwUnk1WjBBL3NuSUxzRktVbTFTenBLZTZoaWYvKytFaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiemZMRGFLUW5CbVBrZytRc1RzcDN2bUNYVWVCOWNkSVFERDlTeGFxNCsvSE1ubm9JaGh2Nzl0NWloR1pzMVg3S1IyODBQRGZweHBPbjRpWkpXMmZqQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6IkdmVmVNcFVFRENyMHlvOGlTY1p3MzZzT3NvY09NTWFZbFZLMXhFNEFhNU5MUitpb0ZNd1dOZWwvRHNMazN2ZHR2bjg0TDJNSDVlY0tPeStsNTZsL0JRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMDgzOTAwMDA2OjE2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlYwWnExUlZEYVZJS1VjdVdkQVA3SnlDN0JTbEp0VXM2U251b1luLy92aEoifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI4NzI1MDksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQXhrIn0="
module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: HITDEV-MD Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0",
  caption : process.env.CAPTION || "『© 𝑴𝒖𝒛𝒂𝒎𝒎𝒊𝒍 𝑴𝑫 𝑶𝒇𝒇𝒊𝒄𝒊𝒂𝒍』" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʜɪᴛᴅᴇᴠ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • ʜɪᴛᴅᴇᴠ ᴛᴇᴄʜ』*\n youtube.com/@hitdeveloper0"),
 
  author : process.env.PACK_AUTHER|| "Muzammil - MD",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ᴍᴜᴢᴀᴍᴍɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Muzammil",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "HITDEV"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
