## 1. base os operations

```
sudo pip3 install -U pip
sudo pip3 install -U ansible
ansible-play -v 01.os_hardening.yaml
ansible-play -v 02.create_ramdisk.yaml
```

- To accerate page loading, we use ramdisk for cache all static assets.
- Ramdisk is mount in `/var/www/ramdisk`, and total disk space current is 2GB


## 2. install nginx and copy configs
```
sudo apt update; sudo apt install nginx
ansible-play -v 03.put_nginx_conf.yaml
```

## 3. open 80 port for all 

- you can use WebUI or TWCC-CLI to do so

## 3. install certbot

```
    8  sudo snap install core; sudo snap refresh core
   10  sudo snap install --classic certbot
   11  sudo ln -s /snap/bin/certbot /usr/bin/certbot
   61  sudo certbot --nginx -d www.twcc.vip -d staging.twcc.vip -d preview.twcc.vip -d man.twcc.vip
```

Currently we use 4 domain for each stage.
- www.twcc.vip (dummy)
- man.twcc.vip (production)
- preview.twcc.vip (preview)
- staging.twcc.vip (stage)
