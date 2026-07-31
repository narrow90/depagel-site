@echo off
chcp 65001 >nul
setlocal EnableExtensions

set "BASE=%~dp0public\images\prodotti"

if not exist "%BASE%" (
  echo ERRORE: cartella non trovata:
  echo %BASE%
  echo.
  echo Metti questo file .bat nella cartella principale del progetto, accanto a package.json.
  pause
  exit /b 1
)

echo Rinomina immagini prodotti...
echo.
echo --- Basi ---
pushd "%BASE%\Basi"
if errorlevel 1 (
  echo ERRORE: cartella Basi non trovata.
  goto :nextfolder
)
if exist "pasta frolla.png" (
  if exist "pasta-frolla.png" (
    echo SALTATO: "pasta-frolla.png" esiste gia.
  ) else (
    ren "pasta frolla.png" "pasta-frolla.png"
    echo OK: "pasta frolla.png" ^> "pasta-frolla.png"
  )
) else (
  if not exist "pasta-frolla.png" echo NON TROVATO: "pasta frolla.png"
)
if exist "pasta sfoglia.png" (
  if exist "pasta-sfoglia.png" (
    echo SALTATO: "pasta-sfoglia.png" esiste gia.
  ) else (
    ren "pasta sfoglia.png" "pasta-sfoglia.png"
    echo OK: "pasta sfoglia.png" ^> "pasta-sfoglia.png"
  )
) else (
  if not exist "pasta-sfoglia.png" echo NON TROVATO: "pasta sfoglia.png"
)
if exist "tappo per sfogliata mignon.png" (
  if exist "tappo-per-sfogliata-mignon.png" (
    echo SALTATO: "tappo-per-sfogliata-mignon.png" esiste gia.
  ) else (
    ren "tappo per sfogliata mignon.png" "tappo-per-sfogliata-mignon.png"
    echo OK: "tappo per sfogliata mignon.png" ^> "tappo-per-sfogliata-mignon.png"
  )
) else (
  if not exist "tappo-per-sfogliata-mignon.png" echo NON TROVATO: "tappo per sfogliata mignon.png"
)
if exist "tappo per sfogliata.png" (
  if exist "tappo-per-sfogliata.png" (
    echo SALTATO: "tappo-per-sfogliata.png" esiste gia.
  ) else (
    ren "tappo per sfogliata.png" "tappo-per-sfogliata.png"
    echo OK: "tappo per sfogliata.png" ^> "tappo-per-sfogliata.png"
  )
) else (
  if not exist "tappo-per-sfogliata.png" echo NON TROVATO: "tappo per sfogliata.png"
)
popd
:nextfolder
echo.
echo --- Dolci ---
pushd "%BASE%\Dolci"
if errorlevel 1 (
  echo ERRORE: cartella Dolci non trovata.
  goto :nextfolder
)
if exist "apollina-cosa d'aragosta.png" (
  if exist "apollina-o-coda-d-aragosta.png" (
    echo SALTATO: "apollina-o-coda-d-aragosta.png" esiste gia.
  ) else (
    ren "apollina-cosa d'aragosta.png" "apollina-o-coda-d-aragosta.png"
    echo OK: "apollina-cosa d'aragosta.png" ^> "apollina-o-coda-d-aragosta.png"
  )
) else (
  if not exist "apollina-o-coda-d-aragosta.png" echo NON TROVATO: "apollina-cosa d'aragosta.png"
)
if exist "brioche ciock .png" (
  if exist "brioche-ciock.png" (
    echo SALTATO: "brioche-ciock.png" esiste gia.
  ) else (
    ren "brioche ciock .png" "brioche-ciock.png"
    echo OK: "brioche ciock .png" ^> "brioche-ciock.png"
  )
) else (
  if not exist "brioche-ciock.png" echo NON TROVATO: "brioche ciock .png"
)
if exist "conchiglia cioccolato.png" (
  if exist "conchiglia-cioccolato.png" (
    echo SALTATO: "conchiglia-cioccolato.png" esiste gia.
  ) else (
    ren "conchiglia cioccolato.png" "conchiglia-cioccolato.png"
    echo OK: "conchiglia cioccolato.png" ^> "conchiglia-cioccolato.png"
  )
) else (
  if not exist "conchiglia-cioccolato.png" echo NON TROVATO: "conchiglia cioccolato.png"
)
if exist "conchiglia pannalatte e amarena.png" (
  if exist "conchiglia-pannalatte-e-amarena.png" (
    echo SALTATO: "conchiglia-pannalatte-e-amarena.png" esiste gia.
  ) else (
    ren "conchiglia pannalatte e amarena.png" "conchiglia-pannalatte-e-amarena.png"
    echo OK: "conchiglia pannalatte e amarena.png" ^> "conchiglia-pannalatte-e-amarena.png"
  )
) else (
  if not exist "conchiglia-pannalatte-e-amarena.png" echo NON TROVATO: "conchiglia pannalatte e amarena.png"
)
if exist "conchiglia pannalatte.png" (
  if exist "conchiglia-pannalatte.png" (
    echo SALTATO: "conchiglia-pannalatte.png" esiste gia.
  ) else (
    ren "conchiglia pannalatte.png" "conchiglia-pannalatte.png"
    echo OK: "conchiglia pannalatte.png" ^> "conchiglia-pannalatte.png"
  )
) else (
  if not exist "conchiglia-pannalatte.png" echo NON TROVATO: "conchiglia pannalatte.png"
)
if exist "cornetto albicocca.png" (
  if exist "cornetto-albicocca.png" (
    echo SALTATO: "cornetto-albicocca.png" esiste gia.
  ) else (
    ren "cornetto albicocca.png" "cornetto-albicocca.png"
    echo OK: "cornetto albicocca.png" ^> "cornetto-albicocca.png"
  )
) else (
  if not exist "cornetto-albicocca.png" echo NON TROVATO: "cornetto albicocca.png"
)
if exist "cornetto biciock.png" (
  if exist "cornetto-biciock.png" (
    echo SALTATO: "cornetto-biciock.png" esiste gia.
  ) else (
    ren "cornetto biciock.png" "cornetto-biciock.png"
    echo OK: "cornetto biciock.png" ^> "cornetto-biciock.png"
  )
) else (
  if not exist "cornetto-biciock.png" echo NON TROVATO: "cornetto biciock.png"
)
if exist "cornetto bifrutta.png" (
  if exist "cornetto-bifrutta.png" (
    echo SALTATO: "cornetto-bifrutta.png" esiste gia.
  ) else (
    ren "cornetto bifrutta.png" "cornetto-bifrutta.png"
    echo OK: "cornetto bifrutta.png" ^> "cornetto-bifrutta.png"
  )
) else (
  if not exist "cornetto-bifrutta.png" echo NON TROVATO: "cornetto bifrutta.png"
)
if exist "cornetto cereali e miele.png" (
  if exist "cornetto-cereali-e-miele.png" (
    echo SALTATO: "cornetto-cereali-e-miele.png" esiste gia.
  ) else (
    ren "cornetto cereali e miele.png" "cornetto-cereali-e-miele.png"
    echo OK: "cornetto cereali e miele.png" ^> "cornetto-cereali-e-miele.png"
  )
) else (
  if not exist "cornetto-cereali-e-miele.png" echo NON TROVATO: "cornetto cereali e miele.png"
)
if exist "cornetto cereali vuoto.png" (
  if exist "cornetto-cereali-vuoto.png" (
    echo SALTATO: "cornetto-cereali-vuoto.png" esiste gia.
  ) else (
    ren "cornetto cereali vuoto.png" "cornetto-cereali-vuoto.png"
    echo OK: "cornetto cereali vuoto.png" ^> "cornetto-cereali-vuoto.png"
  )
) else (
  if not exist "cornetto-cereali-vuoto.png" echo NON TROVATO: "cornetto cereali vuoto.png"
)
if exist "cornetto cioccolato.png" (
  if exist "cornetto-cioccolato.png" (
    echo SALTATO: "cornetto-cioccolato.png" esiste gia.
  ) else (
    ren "cornetto cioccolato.png" "cornetto-cioccolato.png"
    echo OK: "cornetto cioccolato.png" ^> "cornetto-cioccolato.png"
  )
) else (
  if not exist "cornetto-cioccolato.png" echo NON TROVATO: "cornetto cioccolato.png"
)
if exist "cornetto crema.png" (
  if exist "cornetto-crema.png" (
    echo SALTATO: "cornetto-crema.png" esiste gia.
  ) else (
    ren "cornetto crema.png" "cornetto-crema.png"
    echo OK: "cornetto crema.png" ^> "cornetto-crema.png"
  )
) else (
  if not exist "cornetto-crema.png" echo NON TROVATO: "cornetto crema.png"
)
if exist "cornetto pistacchio.png" (
  if exist "cornetto-pistacchio.png" (
    echo SALTATO: "cornetto-pistacchio.png" esiste gia.
  ) else (
    ren "cornetto pistacchio.png" "cornetto-pistacchio.png"
    echo OK: "cornetto pistacchio.png" ^> "cornetto-pistacchio.png"
  )
) else (
  if not exist "cornetto-pistacchio.png" echo NON TROVATO: "cornetto pistacchio.png"
)
if exist "cornetto vegano.png" (
  if exist "cornetto-vegano.png" (
    echo SALTATO: "cornetto-vegano.png" esiste gia.
  ) else (
    ren "cornetto vegano.png" "cornetto-vegano.png"
    echo OK: "cornetto vegano.png" ^> "cornetto-vegano.png"
  )
) else (
  if not exist "cornetto-vegano.png" echo NON TROVATO: "cornetto vegano.png"
)
if exist "cornetto vuoto.png" (
  if exist "cornetto-vuoto.png" (
    echo SALTATO: "cornetto-vuoto.png" esiste gia.
  ) else (
    ren "cornetto vuoto.png" "cornetto-vuoto.png"
    echo OK: "cornetto vuoto.png" ^> "cornetto-vuoto.png"
  )
) else (
  if not exist "cornetto-vuoto.png" echo NON TROVATO: "cornetto vuoto.png"
)
if exist "danese pasta di mandorle .png" (
  if exist "danese-pasta-di-mandorle.png" (
    echo SALTATO: "danese-pasta-di-mandorle.png" esiste gia.
  ) else (
    ren "danese pasta di mandorle .png" "danese-pasta-di-mandorle.png"
    echo OK: "danese pasta di mandorle .png" ^> "danese-pasta-di-mandorle.png"
  )
) else (
  if not exist "danese-pasta-di-mandorle.png" echo NON TROVATO: "danese pasta di mandorle .png"
)
if exist "fagottino cioccolato.png" (
  if exist "fagottino-cioccolato.png" (
    echo SALTATO: "fagottino-cioccolato.png" esiste gia.
  ) else (
    ren "fagottino cioccolato.png" "fagottino-cioccolato.png"
    echo OK: "fagottino cioccolato.png" ^> "fagottino-cioccolato.png"
  )
) else (
  if not exist "fagottino-cioccolato.png" echo NON TROVATO: "fagottino cioccolato.png"
)
if exist "fagottino crema.png" (
  if exist "fagottino-crema.png" (
    echo SALTATO: "fagottino-crema.png" esiste gia.
  ) else (
    ren "fagottino crema.png" "fagottino-crema.png"
    echo OK: "fagottino crema.png" ^> "fagottino-crema.png"
  )
) else (
  if not exist "fagottino-crema.png" echo NON TROVATO: "fagottino crema.png"
)
if exist "fagottino vuoto.png" (
  if exist "fagottino-vuoto.png" (
    echo SALTATO: "fagottino-vuoto.png" esiste gia.
  ) else (
    ren "fagottino vuoto.png" "fagottino-vuoto.png"
    echo OK: "fagottino vuoto.png" ^> "fagottino-vuoto.png"
  )
) else (
  if not exist "fagottino-vuoto.png" echo NON TROVATO: "fagottino vuoto.png"
)
if exist "girella cioccolato .png" (
  if exist "girella-cioccolato.png" (
    echo SALTATO: "girella-cioccolato.png" esiste gia.
  ) else (
    ren "girella cioccolato .png" "girella-cioccolato.png"
    echo OK: "girella cioccolato .png" ^> "girella-cioccolato.png"
  )
) else (
  if not exist "girella-cioccolato.png" echo NON TROVATO: "girella cioccolato .png"
)
if exist "girella uvetta.png" (
  if exist "girella-uvetta.png" (
    echo SALTATO: "girella-uvetta.png" esiste gia.
  ) else (
    ren "girella uvetta.png" "girella-uvetta.png"
    echo OK: "girella uvetta.png" ^> "girella-uvetta.png"
  )
) else (
  if not exist "girella-uvetta.png" echo NON TROVATO: "girella uvetta.png"
)
if exist "maxi ciambella zuccherata.png" (
  if exist "maxi-ciambella-zuccherata.png" (
    echo SALTATO: "maxi-ciambella-zuccherata.png" esiste gia.
  ) else (
    ren "maxi ciambella zuccherata.png" "maxi-ciambella-zuccherata.png"
    echo OK: "maxi ciambella zuccherata.png" ^> "maxi-ciambella-zuccherata.png"
  )
) else (
  if not exist "maxi-ciambella-zuccherata.png" echo NON TROVATO: "maxi ciambella zuccherata.png"
)
if exist "misto mignon.png" (
  if exist "misto-mignon.png" (
    echo SALTATO: "misto-mignon.png" esiste gia.
  ) else (
    ren "misto mignon.png" "misto-mignon.png"
    echo OK: "misto mignon.png" ^> "misto-mignon.png"
  )
) else (
  if not exist "misto-mignon.png" echo NON TROVATO: "misto mignon.png"
)
if exist "pasticciotto leccese.png" (
  if exist "pasticciotto-leccese.png" (
    echo SALTATO: "pasticciotto-leccese.png" esiste gia.
  ) else (
    ren "pasticciotto leccese.png" "pasticciotto-leccese.png"
    echo OK: "pasticciotto leccese.png" ^> "pasticciotto-leccese.png"
  )
) else (
  if not exist "pasticciotto-leccese.png" echo NON TROVATO: "pasticciotto leccese.png"
)
if exist "sfogliata frolla.png" (
  if exist "sfogliata-frolla.png" (
    echo SALTATO: "sfogliata-frolla.png" esiste gia.
  ) else (
    ren "sfogliata frolla.png" "sfogliata-frolla.png"
    echo OK: "sfogliata frolla.png" ^> "sfogliata-frolla.png"
  )
) else (
  if not exist "sfogliata-frolla.png" echo NON TROVATO: "sfogliata frolla.png"
)
if exist "sfogliata riccia.png" (
  if exist "sfogliata-riccia.png" (
    echo SALTATO: "sfogliata-riccia.png" esiste gia.
  ) else (
    ren "sfogliata riccia.png" "sfogliata-riccia.png"
    echo OK: "sfogliata riccia.png" ^> "sfogliata-riccia.png"
  )
) else (
  if not exist "sfogliata-riccia.png" echo NON TROVATO: "sfogliata riccia.png"
)
if exist "strudel mela .png" (
  if exist "strudel-mela.png" (
    echo SALTATO: "strudel-mela.png" esiste gia.
  ) else (
    ren "strudel mela .png" "strudel-mela.png"
    echo OK: "strudel mela .png" ^> "strudel-mela.png"
  )
) else (
  if not exist "strudel-mela.png" echo NON TROVATO: "strudel mela .png"
)
popd
:nextfolder
echo.
echo --- Salati ---
pushd "%BASE%\Salati"
if errorlevel 1 (
  echo ERRORE: cartella Salati non trovata.
  goto :nextfolder
)
if exist "arancino bianco .png" (
  if exist "arancino-bianco.png" (
    echo SALTATO: "arancino-bianco.png" esiste gia.
  ) else (
    ren "arancino bianco .png" "arancino-bianco.png"
    echo OK: "arancino bianco .png" ^> "arancino-bianco.png"
  )
) else (
  if not exist "arancino-bianco.png" echo NON TROVATO: "arancino bianco .png"
)
if exist "arancino rosso.png" (
  if exist "arancino-rosso.png" (
    echo SALTATO: "arancino-rosso.png" esiste gia.
  ) else (
    ren "arancino rosso.png" "arancino-rosso.png"
    echo OK: "arancino rosso.png" ^> "arancino-rosso.png"
  )
) else (
  if not exist "arancino-rosso.png" echo NON TROVATO: "arancino rosso.png"
)
if exist "crocchè.png" (
  if exist "crocche.png" (
    echo SALTATO: "crocche.png" esiste gia.
  ) else (
    ren "crocchè.png" "crocche.png"
    echo OK: "crocchè.png" ^> "crocche.png"
  )
) else (
  if not exist "crocche.png" echo NON TROVATO: "crocchè.png"
)
if exist "frittatina  di pasta.png" (
  if exist "frittatina-di-pasta.png" (
    echo SALTATO: "frittatina-di-pasta.png" esiste gia.
  ) else (
    ren "frittatina  di pasta.png" "frittatina-di-pasta.png"
    echo OK: "frittatina  di pasta.png" ^> "frittatina-di-pasta.png"
  )
) else (
  if not exist "frittatina-di-pasta.png" echo NON TROVATO: "frittatina  di pasta.png"
)
if exist "frittele d'alghe.png" (
  if exist "frittelle-d-alghe.png" (
    echo SALTATO: "frittelle-d-alghe.png" esiste gia.
  ) else (
    ren "frittele d'alghe.png" "frittelle-d-alghe.png"
    echo OK: "frittele d'alghe.png" ^> "frittelle-d-alghe.png"
  )
) else (
  if not exist "frittelle-d-alghe.png" echo NON TROVATO: "frittele d'alghe.png"
)
if exist "fritto misto.png" (
  if exist "fritto-misto.png" (
    echo SALTATO: "fritto-misto.png" esiste gia.
  ) else (
    ren "fritto misto.png" "fritto-misto.png"
    echo OK: "fritto misto.png" ^> "fritto-misto.png"
  )
) else (
  if not exist "fritto-misto.png" echo NON TROVATO: "fritto misto.png"
)
if exist "panino napoletano.png" (
  if exist "panino-napoletano.png" (
    echo SALTATO: "panino-napoletano.png" esiste gia.
  ) else (
    ren "panino napoletano.png" "panino-napoletano.png"
    echo OK: "panino napoletano.png" ^> "panino-napoletano.png"
  )
) else (
  if not exist "panino-napoletano.png" echo NON TROVATO: "panino napoletano.png"
)
if exist "rustico mignon.png" (
  if exist "rustico-mignon.png" (
    echo SALTATO: "rustico-mignon.png" esiste gia.
  ) else (
    ren "rustico mignon.png" "rustico-mignon.png"
    echo OK: "rustico mignon.png" ^> "rustico-mignon.png"
  )
) else (
  if not exist "rustico-mignon.png" echo NON TROVATO: "rustico mignon.png"
)
popd
:nextfolder
echo.
echo Operazione completata.
echo Ora riavvia Next.js con: npm run dev
pause
endlocal