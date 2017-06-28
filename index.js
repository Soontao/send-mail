#!/usr/bin/env node
var nodeMailer = require("nodemailer");
var argv = require("optimist").argv;
var os = require("os");
var fs = require("fs");
var path = require("path");
var fUserConfig = path.join(os.homedir(), "./.send_mail_config.json");

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
