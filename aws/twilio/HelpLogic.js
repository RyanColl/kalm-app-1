const twilio = require("twilio");
const { ssid, secret } = require("../credentials/twilio.creds");
const client = new twilio(ssid, secret);

const sendMessages = (...numbers) => {
  //this works
  // client.messages.create({
  //             to: `6047618865`,
  //             from: '12569265040',
  //             body: 'Please attempt to reach your friend. This is an automated message that is sent when your friend is reaching out for help. Please do not reply to this message. Please contact your friend immediately.'
  //         })
  for (let number in numbers) {
    client.messages.create({
      to: `${number}`,
      from: "12569265040",
      body: "Please attempt to reach your friend. This is an automated message that is sent when your friend is reaching out for help. Please do not reply to this message. Please contact your friend immediately.",
    });
  }
};
module.exports = { sendMessages };
