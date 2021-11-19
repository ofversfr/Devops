

const { App, ExpressReceiver } = require("@slack/bolt");
require("dotenv").config();
// Initializes your app with your bot token and signing secret
const receiver = new ExpressReceiver({signingSecret: process.env.SLACK_SIGNING_SECRET});

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  receiver
});



receiver.router.post("/knowledge", (req,res) => {
  let body = "Hellooo";
  return res.send(body);
});


(async () => {
  const port = 3000
  // Start your app
  await app.start(process.env.PORT || port);
  console.log(`⚡️ Slack Bolt app is running on port ${port}!`);
})();