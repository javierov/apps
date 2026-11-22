# Escapada (base)

Una sola base para todas las apps de viaje: una escapada de un día, un fin de semana o unas vacaciones de varias ciudades. Todo lo que cambia de un viaje a otro está en **viaje.js**; el resto (index.html) no se toca. Lo que no se pone en viaje.js, no aparece.

- **1 día** (sin `DIAS`): se ve como «Escapada a Banyoles», con el plan por horas y «Hoy».
- **Varios días** (con `DIAS`): «Día a día» con una tira de días arriba del plan; «Hoy» dice qué toca ahora y, por la noche, qué viene mañana.
- **Varias ciudades** (con 2 o más `CIUDADES`): las fotos grandes de la portada pasan a ser tarjetas de ciudad, y el mapa tiene «Ciudades» con el recorrido.

Para ver un viaje de varios días con todo encendido: abrir la app con **?ejemplo=vacaciones** (usa `ejemplo-vacaciones.js`, que sirve de modelo para copiar).

## Hacer una app nueva
1. Copiar esta carpeta con el nombre de la nueva app (se puede borrar `ejemplo-vacaciones.js`).
2. **viaje.js**
   - `PFX`: prefijo propio (por ejemplo `"tol-"`). Cada app el suyo, porque todas comparten javierov.github.io.
   - `APP`, `STATS`, `NOMBRE` (saludo; `""` = sin nombre), `ESTILO` (estilo por defecto, por ejemplo `"luminoso"`) y los textos de `T`.
   - `TRANSPORTE`: `"coche"` (ruta por carretera, «Coche aparcado» y «Carretera» en el mapa) o `"tren"`.
   - `ANF`: casa a la que se va (título, hora, nota) o `null`.
   - Un día: `ST` (paradas), `Y`, `M` (mes desde 0), `DIA`, `FIN`.
   - Varios días: `DIAS = [{f:"2026-12-11", c:"Ciudad", t:"Título", w:"Subtítulo", st:[paradas como ST], fin:minutos}]`. La ciudad es donde se duerme ese día.
   - `CIUDADES = [{n:"Girona", f:"foto", ll:[lat,lon], pais:"España", noches:2, norm:[máx,mín]}]` (`norm` = tiempo normal del mes, se ve si aún no hay previsión).
   - `RN` (rincones: el tercer dato es el número de la parada o el nombre de la ciudad), `R` (comer; el noveno dato es la ciudad), `RT`, `PLATOS` (el tercer dato, la ciudad), `LLUVIA`, `TAREAS`, `TREN` (el viaje de ida), `BN` (banner; sin `BN` se usan las fotos de las ciudades), `CARS` (fotos grandes de 1 ciudad), `VIA0`, `CAJA`, `BANY`/`BDN`.
3. **Módulos de vacaciones** (en viaje.js; si no se ponen, no aparecen):
   - `TRAYECTOS`: trenes, vuelos, buses… con fecha, horas, número y consejo. Salen en «Útil», en el día y en «Hoy». Los vuelos tienen «Estado del vuelo».
   - `RESERVAS`: alojamientos, trenes y entradas para marcar como hechos y apuntar el código (se guarda en el teléfono).
   - `GASTOS`: presupuesto por día, moneda y nota. Pestaña propia si caben (máximo 6 pestañas); si no, dentro de «Útil».
   - `MONEDAS`: conversor; la primera es la moneda del lugar. Tasas del día con internet, y las de viaje.js sin internet.
   - `EMERGENCIAS`: teléfonos que se marcan al tocarlos (y WhatsApp si se pone el cuarto dato).
   - `FOTOS_MAX`: cuántas fotos caben (por defecto 40 en un día y 300 en varios días).
4. **fotos/**: las fotos de los lugares y las ciudades con los nombres que usa viaje.js.
5. **sw.js**: cambiar `V` y `T` al prefijo nuevo y el `startsWith(...)` igual al prefijo.
6. **manifest.json** e iconos: nombre e icono de la app.
7. Antes de entregar, revisar la lista obligatoria (checklist del proyecto).

## Siempre incluido
Plan con «Hoy», mapa (Esri) con «Dónde estoy», tiempo (una previsión por ciudad, unos 15 días antes), comer, **Mis fotos** (el usuario sube las suyas, quedan en su teléfono; en un viaje largo se ordenan por día y se marcan ⭐ favoritas) y **Mi video** (se crea en el teléfono con música, de 30 a 60 s; en un viaje largo: resumen con las favoritas, o una ciudad o un día).

## Prueba de fecha
`#prueba-21-12` = día 21 a las 12:00 (`#prueba-21-1230` = 12:30). En un viaje de varios días, el número es el día del mes.

## Al cambiar algo
Subir la versión `V` de sw.js (viaje.js y las fotos se guardan en el teléfono).
