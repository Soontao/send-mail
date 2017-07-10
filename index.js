#!/usr/bin/env node
var nodeMailer = require("nodemailer");
var os = require("os");
var fs = require("fs");
var path = require("path");
var fUserConfig = path.join(os.homedir(), "./.send_mail_config.json");
var argvConfig = require("optimist")
  .usage("simple tool to help send mail from cli")
  .alias("s", "service")
  .describe("s", "service name, for example, QQ")
  .alias("u", "user")
  .describe("u", "auth user")
  .alias("p", "pass")
  .describe("p", "auth user password, or toekn")
  .alias("t", "target")
  .describe("t", "target email address")
  .alias("h", "header")
  .describe("h", "email title")
  .alias("c", "content")
  .describe("c", "email content")
  .describe("save", "save current config to user main directory")
  .describe("clean", "clean config")
var argv = argvConfig.argv

if (argv.help) {
  argvConfig.showHelp()
  process.exit()
}

if (argv.save) {
  fs.writeFileSync(fUserConfig, JSON.stringify(argv, null, " "));
  console.log("Config saved !");
  process.exit();
}

if (argv.clean) {
  fs.unlinkSync(fUserConfig);
  console.log("Config deleted !");
  process.exit();
}

if (fs.existsSync(fUserConfig)) {
  argv = Object.assign(JSON.parse(fs.readFileSync(fUserConfig)), argv);
}

var transporter = nodeMailer.createTransport({
  service: argv.s,
  pool: "false",
  auth: {
    user: argv.u,
    pass: argv.p
  }
});

transporter.sendMail(
  {
    from: `"${argv.u}" ${argv.u}`,
    to: argv.t,
    subject: argv.h,
    text: argv.c
  },
  (err, info) => {
    if (err) {
      console.error(err.message);
      process.exit(1);
    } else {
      console.log("Mail has been sent.");
      process.exit();
    }
  }
);
