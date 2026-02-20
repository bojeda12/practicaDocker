# practicaDocker
Proceso de configuracion de docker
COMANDOS UTILIZADOS EN EL PROYECTO

Este proyecto implementa integración continua (CI/CD) utilizando GitHub,
contenedores con Docker, pruebas unitarias con Jest y publicación de
imágenes en Docker Hub.

  ------------------------------------------
  1) INICIALIZACIÓN DEL PROYECTO (Node.js)
  ------------------------------------------

Inicializar proyecto: npm init -y

Instalar dependencias: npm install

Instalar Jest: npm install –save-dev jest

Ejecutar aplicación: node index.js

O: npm start

  ---------------------------------
  2) PRUEBAS UNITARIAS Y MÉTRICAS
  ---------------------------------

Ejecutar pruebas: npm test

Ejecutar cobertura: npx jest –coverage

La carpeta generada automáticamente: coverage/

  -----------
  3) DOCKER
  -----------

Ver versión: docker –version

Login Docker Hub: docker login

Construir imagen: docker build -t usuario/mi-app .

Ver imágenes: docker images

Ejecutar contenedor: docker run -p 3000:3000 usuario/mi-app

Ver contenedores activos: docker ps

Detener contenedor: docker stop

Subir imagen: docker push usuario/mi-app

Descargar imagen: docker pull usuario/mi-app

  --------
  4) GIT
  --------

Inicializar repositorio: git init

Ver estado: git status

Agregar archivos: git add .

Crear commit: git commit -m “Mensaje del commit”

Conectar repositorio remoto: git remote add origin
https://github.com/usuario/repositorio.git

Subir cambios: git push -u origin main

Clonar repositorio: git clone https://github.com/usuario/repositorio.git

Crear nueva rama: git checkout -b feature/nueva-funcion

Cambiar de rama: git checkout main

  -------------------
  5) GITHUB ACTIONS
  -------------------

Archivo del workflow: .github/workflows/docker.yml

Se ejecuta automáticamente con: git push

Este proceso: - Ejecuta pruebas unitarias - Calcula cobertura -
Construye imagen Docker - Publica imagen en Docker Hub

  ----------------------------------
  6) ESTRUCTURA FINAL DEL PROYECTO
  ----------------------------------

. ├── index.js ├── package.json ├── package-lock.json ├── Dockerfile ├──
.github/ │ └── workflows/ │ └── docker.yml ├── tests/ │ └── app.test.js
└── coverage/

