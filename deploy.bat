@echo off
title Desplegador Automatico - m3-ai-studio-pro-portfolio
echo ========================================================
echo   DESPLIEGUE AUTOMATICO // m3-ai-studio-pro-portfolio
echo   Autor: Diego // M3DESIGNS
echo ========================================================
echo.
cd /d "%~dp0"

echo [1/2] Guardando cambios en Git...
git add . 2>nul
git commit -m "update: sincronizacion automatica (%date% %time%)" 2>nul
git push origin main 2>nul || git push origin master 2>nul

echo.
echo [2/2] Desplegando en Vercel...
call npx vercel deploy --prod --yes

echo.
echo ========================================================
echo   DESPLIEGUE COMPLETADO CON EXITO!
echo ========================================================
pause
