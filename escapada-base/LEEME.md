# Escapada (base)

App para escapadas de un día o un fin de semana. Todo lo que cambia de un viaje a otro está en **viaje.js**; el resto (index.html) no se toca.

## Hacer una escapada nueva
1. Copiar esta carpeta con el nombre de la nueva app.
2. **viaje.js**
   - `PFX`: prefijo propio (por ejemplo `"tol-"`). Cada app el suyo, porque todas comparten javierov.github.io.
   - `APP`, `STATS` y los textos de `T` (fecha, lugar, origen, avisos de antes, durante y después).
   - `TRANSPORTE`: `"coche"` (ruta por carretera y parada «Coche aparcado») o `"tren"`.
   - `ANF`: casa a la que se va (título, hora, caras para la llegada) o `null` si no hay.
   - `GR` y `FR`: la pandilla y sus frases; `[]` si no hay (se oculta la sección y el juego).
   - `ST` (paradas del plan), `RN` (rincones), `R` (comer), `LLUVIA`, `PLATOS`, `TAREAS`, `TREN` (el viaje), `BN` (banner), `CARS` (fotos grandes), `VIA0` (ruta aproximada), `CAJA` (zona del mapa sin internet), `BANY`/`BDN` (destino y origen).
3. **fotos/**: las fotos de los lugares con los nombres que usa viaje.js.
4. **sw.js**: cambiar `V` y `T` al prefijo nuevo y el `startsWith(...)` igual al prefijo.
5. **manifest.json** e iconos: nombre e icono de la app.
6. Antes de entregar, revisar la lista obligatoria (checklist del proyecto).

## Siempre incluido
Plan con «Hoy», mapa (Esri) con «Dónde estoy», tiempo, comer, **Mis fotos** (el usuario sube las suyas, quedan en su teléfono) y **Mi video** (se crea en el teléfono con música y se puede descargar o compartir).

## Al cambiar algo
Subir la versión `V` de sw.js (viaje.js y las fotos se guardan en el teléfono).
