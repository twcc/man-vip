# Docs.twcc.ai
TWCC Enterprise Documentation
=======

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Get started

```bash=
git clone https://git.twcc.ai/twcc/manual
cd manual/
git checkout -b $YOUR_BRANCH
curl -fsSL https://deb.nodesource.com/setup_17.x | sudo -E bash -
sudo apt-get install -y nodejs
npm install --global yarn
twccli net vcs -s 2486100 -p 3000 -in -cidr 0.0.0.0/0
yarn; yarn start
```
