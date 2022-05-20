sudo python3 -m pip install -U pip
sudo python3 -m pip install -U ansible TWCC-CLI
#twccli net vcs -s $_TWCC_SITE_ID_ -cidr 0.0.0.0/0 -p 80
#ansible-galaxy collection install devsec.hardening
#ansible-playbook -vvv 01.os_hardening.yaml
#ansible-playbook -vvv 02.install-docker.yaml
#sudo docker ps -a

#curl -Ls https://download.newrelic.com/install/newrelic-cli/scripts/install.sh | bash && sudo NEW_RELIC_API_KEY=NRAK-6LFEXIL9A7U3W1TKLPY3O2VDS4K NEW_RELIC_ACCOUNT_ID=3447116 /usr/local/bin/newrelic install
