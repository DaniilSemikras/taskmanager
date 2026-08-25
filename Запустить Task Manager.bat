@echo off
cd /d "%~dp0"
start "Task Manager server" /min cmd /c "node server.js"
timeout /t 1 /nobreak >nul
start "" "%~dp0index.html"
