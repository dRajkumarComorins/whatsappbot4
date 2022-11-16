const qrcode = require("qrcode-terminal");

const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");
const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

// client.on("ready", (message) => {
//   console.log("Client is ready!");
 
//   client.getChats().then((chats) => {
//     console.log("heloochat", chats[0]);
//     client.sendMessage(
//       chats[0].id._serialized,
//       "hello this is an automatedmessage"
//     );
//     // console.log("fetchmessage", client.message.body(chats[0].id._serialized));

//   });
// });


 
client.on("message",(message) => {
  console.log("message", message);
  const content = message.body;
  if (content === "Hi" || content === "Hello" ) {
   client.sendMessage(message.from,"Thank you for contacting Karka Academy 😊\n  We will be in touch with you soon! \n Meanwhile, please let us know the following details: \n👤 Name: \n🎓 Degree: \n 🗓️ Year of graduation: \n 🏫 College: \n 🏅 Branch of engineering or degree: \n This information will help us serve you better \n ✌Thanks")
  } 
  // else if (content === "hell" || "jdf"){
  //   client.sendMessage(message.from,"Thanks for you sending your details")
  // }

});

client.initialize();



// const meme = await axios("https://meme-api.herokuapp.com/gimme").then(
//   (res) => res.data
// );
// client.sendMessage(message.from, await MessageMedia.fromUrl(meme.url));