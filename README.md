# Tangerine Variable Renaming Examples
This repository contains an example of strategy for using couchdb-wedge to rename variables in different ways.

## Debug
Run debugger on the test file.

```
node --inspect-brk test.js
```

Then go to chrome://inspect/#devices in Chrome and click inspect on the test.js process. 



## Test
Install node.js on your machine then run the following. Note there is test data in the stubs folder.

```
node test.js
```


## Run
Install Docker on your machine, copy config.defaults.sh to config.sh and update the couchdb connection string, optionally the process name if you are going to have more than one of these running, and then run the following command.

```
./start.sh
```
