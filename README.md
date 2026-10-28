# Scelte Digitali

Percorso didattico interattivo in italiano per la scuola secondaria di secondo grado: dieci situazioni quotidiane per ragionare sulle conseguenze delle proprie scelte online.

**Demo:** https://antoniorasulo89.github.io/scelte-digitali/

## Caratteristiche

- **10 scenari**: email di phishing, condivisione di foto, SMS con link sospetto, codice di verifica, password prestata, commenti nel gruppo, concorso falso, app fuori dagli store, immagini generate dall'AI, voce clonata.
- **Quattro schermate**: Home con mappa del percorso, Scenario, Feedback, Riepilogo.
- **Tre scelte per scenario**, con conseguenza e spiegazione; si può riprovare senza penalità.
- **Accessibilità**: testi brevi, caratteri grandi, contrasto elevato, navigazione da tastiera, messaggi annunciati ai lettori di schermo, lettura ad alta voce con la voce del browser.
- **Nessun account, nessun dato raccolto, nessuna chiamata di rete**: l'app funziona anche offline.
- **Nessuna dipendenza**: solo HTML, CSS e JavaScript.

## Come si usa

- Online: apri la [demo](https://antoniorasulo89.github.io/scelte-digitali/).
- In locale: scarica il repository e apri `index.html` con un browser. Non serve un server.

## Struttura

```
index.html    le quattro schermate
style.css     stile, responsive e accessibilità
script.js     dati dei 10 scenari, logica, lettura ad alta voce
```

Per aggiungere o modificare uno scenario si interviene sull'elenco `SCENARIOS` in `script.js`; mappa, avanzamento e riepilogo si aggiornano automaticamente.

## Nota

Messaggi, account, domini e immagini sono simulati e inventati a scopo didattico. I link, i video e i messaggi vocali non si aprono.
