## Színkereső játék

Induláskor (betöltés) megjelenik:
-a cím, kód, kattintás-szán, gratuláció
-külön szekcióban grid-négyzetek (64db)
-a szekció alatt "újrakezdés" gomb

## Működés:
-Betöltés: guessed color (rgb()), random color -> négyzetek, aktív gomb

-Kattintás a négyzeteken:
    -Keret a kattintottra, szín-kód kivitele, összehasonlítás, game-status beállítása, kattintás-szám (ha még nem volt kattintva)
    -Ha kitalálták a színt -> piros-keret, inaktítivtás

-Gombra kattintás:
    -számláló nullázása
    -új színek, új kód, játékállapot beállitsása, keretek le,

## Állapotok:
-Négyzetek állapota:
    -id, háttérszín, clicked, found, sorszám
    
-Globális állapotok:
    -kattintás-szám, game-status, kitalálandó szín, 