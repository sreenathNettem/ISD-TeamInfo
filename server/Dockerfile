FROM ibmcom/ibmnode

RUN apt-get update && apt-get install -y apt-utils unattended-upgrades \
    libsasl2-dev libssl-dev libxml2-dev nano && \
    rm -rf /var/lib/apt/lists/* && \
    unattended-upgrades -d && \
    npm i -g yarn


WORKDIR /opt/ibm/skyline

COPY package*.json ./
RUN npm install


COPY . .


	
EXPOSE 80
EXPOSE 443

CMD ["node", "server.js"]