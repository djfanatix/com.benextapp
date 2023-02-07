# Benext
This app adds support for Zipato devices in Homey. Only z-wave devices are supported for now.
See APPSTORE.md for more information about this app.

## Development
- This app is using [HomeyConfig composer](https://www.npmjs.com/package/node-homey-config-composer).   
- Please file Pull Requests on the *master* branch of this repository.

### Setup
- install athom-cli: `npm install -g homey`
- install homey-config-composer: `npm install -g node-homey-config-composer`
- login to your homey: `homey login`

### Run
- To run this app, use command `npm run-script run`
- To install this app, use command `npm run-script install`

### TODO:
- registerRunListener nakijken
- zoeken naar callback
- WT-RFID.EU driver aanmaken voor init settings
