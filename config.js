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


global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEpYTXFES3lpeS8rL0VmL2NlMGRHKzQ3MHlOWU5GcGlLZk4wTEc1Y2czTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoickpqUFgxTXVWdmVjb0JvMENNUTdGZzI4QkFDWVl6VjJ4UTRsYlhEQ2JHQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDRlo0cmFWUmpzRzZtL1AwS3RudW9xaHhESG9JVEhxMVR6aGRBWjlDV1cwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpK2NIQVhHWktzNDhCZ0FwNkJCall3SzhuaGo1cXRjYnp1WG5vd04yR2dzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktGdUFiQ2lYbXZuRVExV3p0N2JLUnFKaXd6VzJtY2cvUUJEdmc4STY2WEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhVVDA5OGlHSHljREFPRGlBSDkxYTJYZjBBeG5VN1J5RFlyUVM1NU1URDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0k3c2FkejN5bERQUTRtTXJtcWE4R0VkYXRWR0hJb08xNWRpSjlYNmptWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTS96MktURWpOa09mSU5ZM2Jnbk43NllhcVBvN1BhVnhreVB4Q1IyazFoZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNvR2xmTmtJZU05NVVoS2ZOK0c5S3E5V3hrbzc5dGpZVkhrWXg4WXN4MDgwVEYrcUZYUUtaR1RISTRFMTd2U3dhbTRWYTU2L0ZSbmhja2R0cUROckFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE5LCJhZHZTZWNyZXRLZXkiOiJFRUR1RjY4eFdLWDJncXZFc2J1bUx4VkJ1T1NTU0hxcjUxaHpDRXJiVG0wPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzI5MzEyMjU2NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDRTk3NDdENTFEQkEwODI3MEFDODgxOTIwQUU2QzExMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyODUxOTQ4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMyOTMxMjI1NjZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjEyOUQ1NzQwN0RDNDkwOTQ5RDlGMUY4RUZEQUE1OTIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjg1MTk0OH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiVVlJS0kxSjFTTW1IUENsbXRhbTk3USIsInBob25lSWQiOiJlNzQwNGQ1MC0yOGRkLTQ1M2UtYWNlZC1lMDY4ZTU0OGU4YmMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM1pHL2FORGt4eFhFMVdzMEtGSlNENndtK0g4PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVlM2xpWSt2TUV5Q2NzeEJVOXEySXNNdkNwVT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJDNVNZWlZZRiIsIm1lIjp7ImlkIjoiOTIzMjkzMTIyNTY2OjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J+Yh/CdkIfwnZi24ba78J2YiPCdmKrwnZaL8J2QgCDwnZiy8J2VkvCdmoLwnZWa8J2QjC7imaXvuI4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xYTG02WURFTnZFd3JVR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImpyNE13SGNJRDlJV0NraksrMTZCY2oxMGRPSUZqdjMyYWhoYVU4VzhibDA9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImZlc0g0WFpFbEd3K1pzeWxmNXc2MkhXRzVDQkpEN09PemFHWDVENkQ5VkNLbVAvRk1STGNqMnNJNlU5UFpBdWJ2ck9tR0tqRVlwWGs2cisycFB1SERnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJmYzlzc3puU1RkVzN4aitWWG1KQmR0UHN5anpwcU5aald3ZlQ3b1FaeHpYdjZsSmJiYW5BbWgzYndCWUdWVWpvL0JBWVJOWWovOXprYks1QU9zeVZEZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzI5MzEyMjU2Njo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlk2K0RNQjNDQS9TRmdwSXl2dGVnWEk5ZEhUaUJZNzk5bW9ZV2xQRnZHNWQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI4NTE5NDQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRGljIn0="
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
