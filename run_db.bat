@echo off

cd C:\Program Files\MongoDB\Server\4.4\bin
mongod --port 27017 --dbpath C:\xampp\htdocs\machchitai\data_mongo
echo finish
pause