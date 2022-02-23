# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.


## how to start


```bash=
git clone https://git.twcc.ai/twcc/manual
cd manual/
git checkout 189-docusaurus
curl -fsSL https://deb.nodesource.com/setup_17.x | sudo -E bash -
sudo apt-get install -y nodejs
npm install
twccli net vcs -s 2486100 -p 3000 -in -cidr 0.0.0.0/0
npx docusaurus start --host 0.0.0.0
```
