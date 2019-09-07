openssl genrsa 1024 > private.key
openssl req -new -key private.key -out cert.csr
openssl x509 -req -days 365 -in cert.csr -signkey private.key -out certificate.pem
