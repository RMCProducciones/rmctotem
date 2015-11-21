@echo off
git pull
rd /q /s app\cache\prod
actualizar-bd.bat