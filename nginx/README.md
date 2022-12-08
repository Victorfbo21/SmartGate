# SSL Cert

## Create Folders

```
```

## Run Command

``` 
export LETSENCRYPT_EMAIL=caioarruda@gmail.com
export DNSNAME=dev-autogt.c2atec.com

docker run --rm     -p 443:443 -p 80:80 --name letsencrypt     -v "/home/$USER/ssl/etc/letsencrypt:/etc/letsencrypt"     -v "/home/$USER/ssl/var/lib/letsencrypt:/var/lib/letsencrypt"     quay.io/letsencrypt/letsencrypt:latest     certonly -n -m $LETSENCRYPT_EMAIL -d $DNSNAME --standalone --agree-tos
```

