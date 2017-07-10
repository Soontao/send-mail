# send-mail

simple tool to help send mail from cli

## install

```bash
npm i -g https://github.com/Soontao/send-mail
```

## usage

help from cli

```bash
$ send-mail --help

simple tool to help send mail from cli

Options:
  -s, --service  service name, for example, QQ
  -u, --user     auth user
  -p, --pass     auth user password, or toekn
  -t, --target   target email address
  -h, --header   email title
  -c, --content  email content
  --save         save current config to user main directory
  --clean        clean config

```

cli command template

```bash
send-mail -s <your service> -u <your email user> -p <your email password or token> -t <target email> -h <mail header> -c <mail content>
```

live sample

```bash
send-mail -s QQ -u no.such.mail.box@qq.com -p nosuchmailpass -t theo.sun@outlook.com -h 'HI Theo' -c 'this is content, nice to see you theo'
```

## Adavance

With config

```bash
send-mail --save -s QQ -u no.such.mail.box@qq.com -p nosuchmailpass
```

And you could use the saved config later

```bash
send-mail -t 'theo.sun@qq.com' -h 'Hi theo' -c 'nice to see you here'
# same as send-mail -s QQ -u no.such.mail.box@qq.com -p nosuchmailpass -t 'theo.sun@qq.com' -h 'Hi theo' -c 'nice to see you here'
```

Delete config

```bash
send-mail --clean
```
