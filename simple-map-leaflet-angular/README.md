# Exemple d'application Angular avec l'extension leaflet du Geoportail.

## Creation d'un projet Angular

https://angular.io/guide/quickstart#first-component

https://github.com/angular/angular-cli

https://code.tutsplus.com/tutorials/creating-your-first-angular-app-components-part-1--cms-30113

## Installation des dépendences

>npm i --save geoportal-extensions-leaflet
>npm i --save leaflet
>npm i --save xmldom
>npm i --save request

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

## Execution

> ng serve

ou

> npm run start

Puis ouvrir le navigateur sur l'url suivante : http://localhost:4200/

![Exemple Image](exemple.png)
