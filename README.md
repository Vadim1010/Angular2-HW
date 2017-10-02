# WINDOWS only. In terminal as administrator
npm install -g node-pre-gyp

# install the repo with npm
npm install

# start the server
npm start

# start the json-server
npm install -g json-server

cd ./json-server

json-server --watch db.json