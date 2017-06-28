# send-mail

simple tool to help send mail from cli

## install

```bash
npm i -g https://github.com/Soontao/send-mail
```

## usage

```bash
send-mail -s <your service> -u <your email user> -p <your email password or token> -t <target email> -h <mail header> -c <mail content>
```

live sample

```bash
send-email-to -s QQ -u no.such.mail.box@qq.com -p nosuchmailpass -t theo.sun@outlook.com -h 'HI Theo' -c 'this is content, nice to see you theo'
```

## Adavance

With config

```bash
send-mail --save -s QQ -u no.such.mail.box@qq.com -p nosuchmailpass -t theo.sun@qq.com
```

And you can use the saved config later

```bash
send-mail -h 'Hi theo' -c 'nice to see you here'
```

Delete config

```bash
send-mail --clean
```
