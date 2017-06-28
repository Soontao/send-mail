#!/usr/bin/env node
var Promise = require('bluebird')
var nodeMailer = require('nodemailer')
var argv = require('optimist').argv

var transporter = nodeMailer.createTransport({
  'service': argv.s,
  'pool': 'false',
  'auth': {
    'user': argv.u,
    'pass': argv.p
  }
});

transporter.sendMail({
  from: `"${argv.u}" ${argv.u}`,
  to: argv.t,
  subject: argv.h,
  text: argv.c
}, (err, info) => {
  if (err) {
    console.error(err.message)
    process.exit(1)
  }
  else {
    console.log('Mail has been sent.')
    process.exit()
  }
})
