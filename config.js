const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUJkaFVwYWlYSStUNXU1L0hHaStpSTFHS2UzYXhheXNjMldwTTZ5em4xdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0dvSTliNXdGZHFBc25UNk5LN3MxOWFqdGtSc2FIcEMwWFBCYTNkUklYMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRRDd5dzZMakJ5a0kwT25LMnZOcU5oUWZnb3ppSGZMZFNRUjBpN2VvSkdRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBYjBFbzVHN2lWRzZ2REZBN2RRVElpbzB3K0ErYjJKVW03ZVpOTVI0aXdRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlFV0s4YXJFc3o0ekVzdmxVUEdFbkkzbWE0UzlLL1BPYml6MXVhbU16azg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpxU1VzT010UzBoLzIvOTNudCt2bXVPQVpMRGtNbXlFaEpkUUtYMlgwbTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU5tVER2OS9odGw3azQ3YVhPMzhSaXdkUTlzdStWQTI4OXdZMVRVUVlFZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1lxZWVWNVZCK0NtR0FZQzIxQldVN1BkMUFxZWd2N1hNVWtMWHFQZCtpND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZpcVB2MklrNG51WG54V21kdWVMMjlMV1BtY3dqbVl0TEt5cEZ2b3Njdyt6cDVJd2ZYM3dOZ1Yxa1p0VEg0RnRldVhkR0FXbTFGS2cwZXduRDZvMWd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQyLCJhZHZTZWNyZXRLZXkiOiJobHlJdmZzRHU4UldHbEdqVnRsWkQxNmY5ckczeWNHTDJhbldVMFAySkNFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzE3MDMyMzA0NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQ0Y5NzBDNEU2MTNGNTRDQTEwMDNCQzYxQUMwRDA2QyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzcwNDc3MjcwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxNzAzMjMwNDVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUM2NTFDQUVENUE4NEM5NkFCRTk5N0ZDM0M4RkZDRjMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3MDQ3NzI3MH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoid1ZkTVNvSElTVldJbm83eXRkSnBtdyIsInBob25lSWQiOiIzNGMwOTcyNy00MTk2LTRhMGYtODgxOC0xMmE3MzgyY2NjNzgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWmNLU0lsdVB3N0N5WTlGcCtuSmJIeXdiNzhZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJuTXlCcWFqRFVINVY4ekpucjBOMzA0NXhtMD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJYMVJFNEM1SCIsIm1lIjp7ImlkIjoiOTIzMTcwMzIzMDQ1OjdAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI1MTAyOTA5MzY3OTM1NDo3QGxpZCIsIm5hbWUiOiLwn4y4In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMVGs4UEFHRU1XdG5jd0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJsMk9vTGFKSFljQzJHLy9PcUs4ZFB5QkdqQ1orVmtBOVNXY0RpdzZIR0U0PSIsImFjY291bnRTaWduYXR1cmUiOiJXQ1BpRy8weUtzV1JpdEtIM2tsZ2liZWZVZFd4cGRvdXg5MkdabWh6RFVoZnRLaVQ1TGtnZm4xL05rbkdXbXNONjlRS1RVRjg1NUxsaWxZTC8vdGFEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoibXErSGc5cUlnRlVwbUtYMnNtRXMxVjFRUmZYbGFGNGpyOS9YRmIyNStmQTNWMUFFS2o0d2txbUVSUklobTFseGpSRHRZUkJTUkgxbE9EUjBxakU2aWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxNzAzMjMwNDU6N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaZGpxQzJpUjJIQXRodi96cWl2SFQ4Z1Jvd21mbFpBUFVsbkE0c09oeGhPIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQ0FnRiJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NzA0NzcyNjYsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTGFlIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY DARK-BOT 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qpnazl.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "DARK-BOT",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "DARK-BOT",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045910",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*DARK-BOT*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ DARK Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qpnazl.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
