@echo off

echo ==============================
echo Avvio Diego (Produzione)
echo Porta: 3000
echo ==============================

cd /d C:\Users\Administrator\diego

if not exist .next (
  echo Prima build in corso...
  npm run build
)

echo Avvio server...
npm run start -- -p 3002

pausee