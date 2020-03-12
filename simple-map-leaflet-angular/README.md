# Exemple d'application Angular avec l'extension leaflet du Geoportail.

## Creation d'un projet Angular

https://angular.io/guide/quickstart#first-component

https://github.com/angular/angular-cli

https://code.tutsplus.com/tutorials/creating-your-first-angular-app-components-part-1--cms-30113

## Installation des dépendences

> npm install

### FIXME

patch :  
Dans le fichier "node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/browser.js" remplacer :
>node: false  

par :  
   >node: {  
            fs: 'empty',  
            global: true,  
            crypto: 'empty',  
            tls: 'empty',  
            net: 'empty',  
            process: true,  
            module: false,  
            clearImmediate: false,  
            setImmediate: false  
        }

cf. ISSUES : https://gist.github.com/niespodd/1fa82da6f8c901d1c33d2fcbb762947d

```bash
sed -i "s/node: false/node : {\n\t\tfs: 'empty',\n\t\tglobal: true,\n\t\tcrypto: 'empty',\n\t\t tls: 'empty',\n\t\tnet: 'empty',\n\t\tprocess: true,\n\t\tmodule: false,\n\t\tclearImmediate: false,\n\t\tsetImmediate: false\n\t}/" node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/browser.js
```

## Execution

> ng serve

ou

> npm run start

Puis ouvrir le navigateur sur l'url suivante : http://localhost:4200/

![Exemple Image](exemple.png)
