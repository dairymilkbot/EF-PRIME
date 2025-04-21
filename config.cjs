// config.js - Optimus Prime Bot Configuration
// Author: Frank kaumba dev

const fs = require("fs");
require("dotenv").config();
const config = {

  SESSION_ID: process.env.SESSION_ID || "EF-PRIME;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUJSZzBYZGpOdS95YlV2VHJFclduYkFSM0JUU2xKUitlaDlwZm9POFdYST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidXhkbzUxU0RnNERMMjhKbm94WXJZeHRjYlZXa0VRZlV3UlRzdWltTFVDUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLRmFpTHNiRUJqTU92dVNadW8rOVlxZGVHTHBWcGRYL0l6QnZ1K1BlU0gwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFOUJBSlFPWFdlQ1Rld2NkMThISWt1MlBMcVlxMjhJQk5DSkZialhpZGtnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNPWHRXeDRCek4rNXBKQ3NodVQwMkpSUVRGNjJaUlcraW41Z2hjTEd0MEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRVSW5pWUJvbnlLUXN5M1EzbVVPd3F2dGUvekFaL1U3dkxZaWJUWnpGVVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUtSd01YaVUxSGk2ekhTaXZYajg5SDRnVE5QRlJ6dU5BY0xxeVFRVkVXUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1JmRnAreFJPNVZYV2VJeFNDYlVCRlFkdzJpMWFnaENmMTJQMmlXeGMxTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilp1MC9qaXRvMVR4dmtyWGVnQWhReUd4c1BreWh4ZEV2NW81VEtUdmVkcitlRVc2endxczR5aDBLUzdETTFLSFFuY1FCRGRSM1VQM2VWRWppeHprSkFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU1LCJhZHZTZWNyZXRLZXkiOiJFeGV0RUZLQyt6K2VPVjNrckUrMGd4UXZPaVBNczFTMFo5U0ZVYnUrQ1hNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijg4MDE3NDU1MTc2NDJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMzZCOUZFNTczREJENURBMzE4MTFDMzc0OTc1NzI0RkQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NTI1Mzc4NH0seyJrZXkiOnsicmVtb3RlSmlkIjoiODgwMTc0NTUxNzY0MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4N0QyMENFNzUwNzY1OTA3RTE3MTlEOTlBMDU0QTJDMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ1MjUzNzg0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI4ODAxNzQ1NTE3NjQyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjdBNTdCMThEMkUzOUQ3NDA2NTI4MDM2NzFCMDE2NEM5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDUyNTM4MDJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlFscTNqOFVYUXFDSVNOeWRab3hwU2ciLCJwaG9uZUlkIjoiMDQ5OTMwZWItOGJkNi00ZTgyLWE5NzMtYmI1MjQzYzk3MzBhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllGdEN3MVR0dmh0UEJqYjM0cU5uNWsza1lYWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIdmVZTGFSTkdNY2huOGRZSWQ3ZytuSzVpZXM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTkZXWjRHQU4iLCJtZSI6eyJpZCI6Ijg4MDE3NDU1MTc2NDI6MjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVMqcyZggRMqMyoDEuCBIyovFi3TJmMqAIPCfmIzwn46A8J+SqyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHJQN2pNUWlPdVp3QVlZQWlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUlhUY2VOUlU4TWI5MitSdGU0QnJuTmw2aUFxZkREV09xaGJzMzUxckJXND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZG5hQ0VXL0xjSWpkU24vbDFXcmlKUXFyVmFJRE9VaFhObnpQWEZuQXRsQXg0SjNueU1ybnBkaVJLNG1BaGk4ZHVBbmY3ZGdQUnNxRERPTXMwWjZ1QWc9PSIsImRldmljZVNpZ25hdHVyZSI6ImZSYnpQeTUzVlN4TVc1ZnlVaTNlVGhBaFRpc3V4Zk1wTzlMK3JFK3NwZldWNHpEOCt4WTZEV2tWc3FyUklXL29LazR4WVlQTW1Iays3M3ViRkYvZUJRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiODgwMTc0NTUxNzY0MjoyNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVVjAzSGpVVlBERy9kdmtiWHVBYTV6WmVvZ0tud3cxanFvVzdOK2Rhd1Z1In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ1MjUzNzgxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdSciJ9",
  PREFIX: process.env.PREFIX || '.',
  
  // Message Protection
  ANTI_DELETE: process.env.ANTI_DELETE !== undefined ? process.env.ANTI_DELETE === 'true' : false, 
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : false, 
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY !== undefined ? process.env.AUTO_STATUS_REPLY === 'true' : false,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || '',
  
  // Communication Protocols
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
  
  // Defensive Systems
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  
  // Command Mode
  MODE: process.env.MODE || "public",
  
  // Alliance Info
  OWNER_NAME: process.env.OWNER_NAME || "🎀💫♡ Hᴜssᴀɪɴ ♡💫🎀",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "8801334089349",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyA3-FskH71WtIQbzrhMA7WAC4Th2zqSNiE",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};

module.exports = config;
