/* =========================================================
   EJEMPLO de viaje de varios días y dos ciudades, con todos los módulos de vacaciones encendidos.
   Se ve abriendo la app con ?ejemplo=vacaciones al final de la dirección.
   Para una app real: copiar lo que sirva a viaje.js (que es el que se carga siempre).
   ========================================================= */
const PFX="escv-";
const VIAJE=(()=>{
const APP="Girona y Banyoles";
const STATS="Base (ejemplo vacaciones)";
const T={
  lugar:"Girona", origen:"Barcelona", origenIni:"B",
  sub:"Del 11 al 13 de diciembre · 3 días", sub2:"En tren y bus desde Barcelona · dos ciudades",
  antes:"empieza el viaje a Girona y Banyoles.",
  antesLista:[["train","El tren sale de Barcelona por la mañana: mira «Útil › Trayectos»."],["ticket","Revisa «Mis reservas»: falta confirmar algo."]],
  hoyAntes:"¡Hoy empieza el viaje! El tren sale por la mañana.",
  hoyLista:[["case","Chaqueta, zapatillas cómodas y el celular cargado."]],
  despues:"Ojalá el viaje haya estado buenísimo.",
  fin:"Se acabó el viaje. ¡Buen regreso a Barcelona!",
  planNota:"Las horas son aproximadas: es un viaje para ir sin apuro.",
  comer:"Dónde comer y los dulces de cada ciudad."
};
const TRANSPORTE="tren";
const ANF=null;
const CAJA=null;
const NOMBRE="";
const ESTILO="noche";
const BANY=[41.9831,2.8249],BDN=[41.3793,2.1404];
/* ciudades: nombre, foto (fotos/<f>.jpg), coordenadas, valores normales del mes [máx, mín] */
const CIUDADES=[
 {n:"Girona",f:"",ll:[41.9831,2.8249],norm:[14,3]},
 {n:"Banyoles",f:"lago",ll:[42.1185,2.7655],norm:[13,2]}];
/* días: fecha, ciudad, título, subtítulo y paradas (igual que ST) */
const DIAS=[
 {f:"2026-12-11",c:"Girona",t:"Llegada y el casco antiguo",w:"El río Onyar, la catedral y el barrio judío",st:[
  {h:"9:30",m:570,n:"Tren a Girona",ic:"train",la:41.9792,lo:2.8170,q:"Estació de Girona",
   t:"Desde Barcelona Sants o Passeig de Gràcia. El tren de alta velocidad tarda unos 40 minutos; el regional R11, cerca de 1 h 30.",
   tip:"Desde la estación de Girona al casco antiguo son unos 15 minutos caminando.",dur:"40 min – 1 h 30"},
  {h:"11:30",m:690,n:"Las casas del Onyar",ico:"plaza",ic:"walk",la:41.9856,lo:2.8237,q:"Pont de les Peixateries Velles Girona",
   t:"Las casas de colores colgadas sobre el río. La mejor vista es desde el puente de hierro rojo de les Peixateries Velles.",
   tip:"Por la mañana el sol da de frente a las fachadas: buen momento para las fotos.",dur:"45 min"},
  {h:"13:30",m:810,n:"Almuerzo en la Rambla",ic:"food",la:41.9846,lo:2.8240,q:"Rambla de la Llibertat Girona",go:"comer",gt:"Dónde comer",
   t:"La Rambla de la Llibertat tiene soportales con terrazas y bares para almorzar.",dur:"1 h 15 min"},
  {h:"15:00",m:900,n:"Catedral de Girona",ico:"iglesia",ic:"church",la:41.9874,lo:2.8263,q:"Catedral de Girona",
   t:"La escalinata barroca de 90 escalones lleva a la catedral, con la nave gótica más ancha del mundo.",
   tip:"La entrada incluye la basílica de Sant Feliu. Mejor mirar el horario en la web antes de ir.",dur:"1 h"},
  {h:"16:15",m:975,n:"El Call, el barrio judío",ic:"walk",la:41.9866,lo:2.8253,q:"Call jueu Girona",
   t:"Callejuelas de piedra y escaleras estrechas: uno de los barrios judíos medievales mejor conservados de Europa.",dur:"45 min"},
  {h:"17:15",m:1035,n:"Paseo de la Muralla",ico:"atardecer",ic:"walk",la:41.9851,lo:2.8281,q:"Passeig de la Muralla Girona",
   t:"Un camino sobre la muralla medieval con torres y miradores sobre la ciudad.",tip:"En diciembre oscurece pronto: mejor ir antes de las 17:30.",dur:"1 h"}]},
 {f:"2026-12-12",c:"Banyoles",t:"Girona por la mañana y el lago",w:"Los baños árabes y, en bus, a Banyoles",st:[
  {h:"10:00",m:600,n:"Baños árabes",ic:"art",la:41.9888,lo:2.8261,q:"Banys Àrabs Girona",
   t:"Unos baños del siglo XII inspirados en los baños árabes, con una sala de columnas y una cúpula muy fotogénica.",dur:"45 min"},
  {h:"11:00",m:660,n:"Sant Pere de Galligants",ico:"iglesia",ic:"church",la:41.9895,lo:2.8268,q:"Sant Pere de Galligants Girona",
   t:"Un monasterio románico con un claustro pequeño y tranquilo, a dos pasos de los baños.",dur:"40 min"},
  {h:"13:00",m:780,n:"Bus a Banyoles",ic:"bus",la:41.9800,lo:2.8175,q:"Estació d'autobusos de Girona",
   t:"Desde la estación de autobuses de Girona, junto a la de tren. El viaje dura cerca de 30 minutos.",dur:"30 min"},
  {h:"14:00",m:840,n:"Almuerzo en la Plaça Major",ico:"plaza",ic:"cup",la:42.11807,lo:2.76538,q:"Plaça Major Banyoles",go:"comer",gt:"Dónde comer",
   t:"La plaza de soportales del siglo XIII, el corazón del pueblo.",dur:"1 h 15 min",img:"plaza"},
  {h:"15:30",m:930,n:"Vuelta al lago",ico:"lago",ic:"walk",la:42.1165,lo:2.7622,q:"Passeig Darder Banyoles",
   t:"El lago natural más grande de Cataluña, con las casetas de pesca del siglo XIX en la orilla.",tip:"La vuelta entera son unos 6,5 km, casi planos.",dur:"1 h 30 min",img:"lago"}]},
 {f:"2026-12-13",c:"Banyoles",t:"Banyoles y vuelta a casa",w:"El monasterio, Porqueres y el regreso",st:[
  {h:"10:00",m:600,n:"Monasterio de Sant Esteve",ico:"iglesia",ic:"church",la:42.1206,lo:2.76945,q:"Monestir de Sant Esteve Banyoles",
   t:"El monasterio benedictino del que nació el pueblo, fundado en el año 812.",dur:"45 min",img:"monasterio"},
  {h:"11:30",m:690,n:"Santa Maria de Porqueres",ico:"atardecer",ic:"church",la:42.1186,lo:2.7471,q:"Església de Santa Maria de Porqueres",
   t:"Una iglesia románica pequeñita al otro lado del lago. Caminando por la orilla son unos 30 minutos.",dur:"1 h",img:"porqueres"},
  {h:"16:00",m:960,n:"Vuelta a Barcelona",ic:"train",la:null,lo:null,q:"",
   t:"Bus a Girona y, desde allí, tren a Barcelona.",dur:"1 h 30 – 2 h"}]}];
const RN=[
 ["La escalinata de Sant Domènec","Una de las escaleras más bonitas del casco antiguo, entre muros de piedra.","Girona",41.9869,2.8247,"Pujada de Sant Domènec Girona"],
 ["Les pesqueres","Casetas de pesca del siglo XIX en la orilla del lago, cada una con su muellecito.","Banyoles",42.1158,2.7618,"Pesquera Marimon Banyoles"]];
const LLUVIA=[["art","El <b>Museo de Historia de los Judíos</b>, en el Call de Girona."],["umb","Lleven un paraguas plegable."]];
const RT={comer:["Dónde comer","food","comer/tapas.png"],dulce:["Dulces","cake","comer/dulces.png"]};
/* comer: nombre, tipo, precio, nota, búsqueda, zona, lat, lon, CIUDAD */
const R=[
 ["Terrazas de la Rambla","comer","€€","Bares y restaurantes bajo los soportales, con menú del día.","Rambla de la Llibertat Girona","Rambla de la Llibertat",41.9846,2.8240,"Girona"],
 ["Rocambolesc","dulce","€","La heladería de los hermanos Roca: helados con formas divertidas.","Rocambolesc Girona","Casco antiguo",41.9853,2.8221,"Girona"],
 ["Can Pons","comer","€","Bar-café en los soportales de la Plaça Major, en una antigua mercería.","Can Pons Plaça Major Banyoles","Plaça Major",42.1179,2.7651,"Banyoles"],
 ["Fleca Carbó","dulce","€","Panadería de 1901 donde venden la tortada banyolina, el bizcocho típico.","Fleca Pastisseria Carbó Plaça Major 19 Banyoles","Plaça Major, 19",42.1182,2.7656,"Banyoles"]];
const PLATOS=[["cake","<b>Xuixo</b>: el dulce frito relleno de crema, típico de Girona.","Girona"],["cake","<b>Tortada banyolina</b>: bizcocho finísimo con azúcar glas.","Banyoles"]];
const TAREAS=[["billetes","Comprar los billetes de tren"],["abrigo","Chaqueta abrigada: en diciembre las mañanas son frías"],["bateria","Celular cargado y el cargador"]];
/* ---- módulos de vacaciones: si no se ponen, no aparecen ---- */
/* trayectos: fecha, de, a, tipo (tren, avion, bus, coche, barco), sale, llega, número, estaciones, empresa, duración, consejo */
const TRAYECTOS=[
 {f:"2026-12-11",de:"Barcelona",a:"Girona",tipo:"tren",sale:"9:30",llega:"10:10",est:"Barcelona Sants → Girona",emp:"Renfe",dur:"40 min",tip:"El regional R11 es más barato, pero tarda cerca de 1 h 30."},
 {f:"2026-12-12",de:"Girona",a:"Banyoles",tipo:"bus",sale:"13:00",est:"Estación de autobuses de Girona → Banyoles",emp:"TEISA",dur:"30 min",tip:"La estación de autobuses está junto a la de tren."},
 {f:"2026-12-13",de:"Banyoles",a:"Girona",tipo:"bus",sale:"16:00",emp:"TEISA",dur:"30 min"},
 {f:"2026-12-13",de:"Girona",a:"Barcelona",tipo:"tren",emp:"Renfe",dur:"40 min – 1 h 30"}];
/* reservas: grupos y lista [id, grupo, nombre, detalle, web, urgente] */
const RESERVAS={grupos:{aloj:["Alojamiento","bed"],tren:["Trenes y buses","train"],ent:["Entradas","ticket"]},lista:[
 ["al-gir","aloj","Girona · 11–12 dic","",""],
 ["al-ban","aloj","Banyoles · 12–13 dic","",""],
 ["tr-ida","tren","Tren Barcelona → Girona · vie 11","Renfe","https://www.renfe.com"],
 ["tr-vue","tren","Tren Girona → Barcelona · dom 13","Renfe","https://www.renfe.com"],
 ["en-cat","ent","Catedral de Girona · vie 11","Mirar el horario de diciembre","",1]]};
/* gastos: presupuesto por día (0 = sin límite), moneda y una nota */
const GASTOS={presupuesto:60,moneda:"EUR",nota:"60 € al día por persona, sin contar el alojamiento."};
/* conversor: la primera es la moneda del lugar; tasas aproximadas para usar sin internet */
const MONEDAS={lista:[["EUR","Euro"],["CLP","Peso chileno"],["USD","Dólar"]],tasas:{EUR:1,CLP:1100,USD:1.16}};
/* emergencias: número, nombre, nota, WhatsApp (opcional) */
const EMERGENCIAS=[["112","Emergencias","Gratis desde cualquier celular, también sin saldo."],["091","Policía Nacional","Robos y denuncias."],["061","Urgencias médicas","En Cataluña también sirve el 112."]];
return {APP,STATS,T,TRANSPORTE,ANF,CAJA,NOMBRE,ESTILO,BANY,BDN,CIUDADES,DIAS,RN,LLUVIA,RT,R,PLATOS,TAREAS,TRAYECTOS,RESERVAS,GASTOS,MONEDAS,EMERGENCIAS};
})();
