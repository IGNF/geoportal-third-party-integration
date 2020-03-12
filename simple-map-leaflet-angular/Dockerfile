# commandes :
# docker build -t dockerize-angular-app .
# docker build -t dockerize-angular-app --build-arg http_proxy --build-arg https_proxy .
# ex. --build-arg http_proxy=http://proxy.ign.fr:3128 --build-arg https_proxy=http://proxy.ign.fr:3128
# docker run -it -p 8888:80 --rm --name dockerize-angular-app-1 dockerize-angular-app
# avec un accès à notre app sur http://localhost:8888

# docker run -it dockerize-angular-app sh

# proxy settings dans docker :
# cf. https://docs.docker.com/config/daemon/systemd/#httphttps-proxy
# ajouter ou commenter les fichiers :
#  /etc/systemd/system/docker.service.d/http-proxy.conf
#  /etc/systemd/system/docker.service.d/https-proxy.conf
# sudo systemctl daemon-reload
# sudo systemctl restart docker
# systemctl show --property=Environment docker

# étape de build
FROM node:lts-alpine as build-stage

# RUN export http_proxy=${http_proxy}
# RUN export https_proxy=${https_proxy}
# RUN npm config set https-proxy {http_proxy}
# RUN npm config set proxy ${https_proxy}

# définit le dossier 'app' comme dossier de travail
WORKDIR /app

# copie 'package.json' et 'package-lock.json' (si disponible)
# cf. http://bitjudo.com/blog/2014/03/13/building-efficient-dockerfiles-node-dot-js/
COPY package*.json ./

# installe les dépendances du projet
RUN npm install

# hack avec angular !
RUN sed -i "s/node: false/node : {\n\t\tfs: 'empty',\n\t\tglobal: true,\n\t\tcrypto: 'empty',\n\t\t tls: 'empty',\n\t\tnet: 'empty',\n\t\tprocess: true,\n\t\tmodule: false,\n\t\tclearImmediate: false,\n\t\tsetImmediate: false\n\t}/" node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/browser.js

# copie les fichiers et dossiers du projet dans le dossier de travail
# (par exemple : le dossier 'app')
COPY . .

# construit l'app pour la production en la minifiant
RUN npm run build

# RUN unset http_proxy
# RUN unset https_proxy

# étape de production
FROM nginx:stable-alpine as production-stage

# copie du dossier des binaires dans nginx
COPY --from=build-stage /app/dist/simple-map-leaflet-angular /usr/share/nginx/html

# expose le service
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
