# send-mail

simple tool to help send mail from cli

## install

```bash
npm i -g send-mail
```

## usage

```bash
send-mail -s <your service> -u <your email user> -p <your email password or token> -t <target email> -h <mail header> -c <mail content>
```

live sample

```bash
send-email-to -s QQ -u no.such.mail.box@qq.com -p nosuchmailpass -t theo.sun@outlook.com -h 'HI Theo' -c 'this is content, nice to see you theo'
```