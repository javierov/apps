/* =========================================================
   DATOS DEL VIAJE — lo único que cambia de una escapada a otra.
   Las fotos de los lugares van en fotos/ con el nombre que se usa aquí.
   ========================================================= */
/* prefijo propio para lo que se guarda en el teléfono (cada app el suyo) */
const PFX="esc-";
const VIAJE=(()=>{
const map=q=>"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(q);
/* ---- general ---- */
const APP="Escapada a Banyoles";        /* título de la app */
const STATS="Banyoles";                 /* nombre en el contador de visitas */
const T={
  lugar:"Banyoles", origen:"Badalona", origenIni:"B",
  dia:"sábado 21", diaLargo:"El sábado 21 de noviembre",
  sub:"Sábado 21 de noviembre · de día", sub2:"En coche desde Badalona · lago y pueblo",
  antes:"es la escapada a Banyoles con Ramón, Elisabeth y el Flaco.",
  antesLista:[["car","Te pasan a buscar a las 8:00 en punto, en coche desde Badalona."],["home","Almuerzo en la casa del Flaco y Pilar: la dirección ya está en «Casa del Flaco»."]],
  hoyAntes:"¡Hoy es el día! Te pasan a buscar a las 8:00 en punto.",
  hoyLista:[["case","Chaqueta, zapatillas cómodas y el celular cargado."],["home","Almuerzo en la casa del Flaco y Pilar: «Casa del Flaco» tiene el botón para llegar."]],
  despues:"Ojalá Banyoles haya estado buenísimo.",
  fin:"Se acabó la escapada. ¡Buen viaje de vuelta a Badalona!",
  tiempo:"El tiempo del sábado en Banyoles",
  planNota:"Las horas son aproximadas: es un día para ir sin apuro. Todo el paseo por el pueblo y el lago es gratis.",
  viaje:"El viaje en coche", viajeIco:"ic-auto.webp",
  comer:"Para llevar al almuerzo, el bocadillo de la tarde y los dulces del pueblo.",
  pandilla:"La pandilla de hoy"
};
/* transporte: "coche" (ruta por carretera y botón «Coche aparcado») o "tren" */
const TRANSPORTE="coche";
/* anfitrión (casa a la que se va); null si no hay */
const ANF={titulo:"Casa del Flaco", sub:"13:45 · almuerzo", re:"banyoles|porqueres|girona|\\d{5}",
  bienvenida:["¡Bienvenidos!","Benvinguts!"], caras:["grupo/flaco-mask2","grupo/pilar-mask2"]};
/* zona del mapa que se guarda para usar sin internet: [norte, oeste], [sur, este] */
const CAJA=[[42.1300,2.7430],[42.1120,2.7720]];
const NOMBRE="Javier",Y=2026,M=10,DIA=21,FIN=20*60+30;
const FDIR="Urb. Puig de Fontpudosa, 23, 17820 Banyoles",FLL=[42.11155,2.75638];
const BANY=[42.1185,2.7655],BDN=[41.4500,2.2474];
const ST=[
 {h:"8:00",m:480,n:"Salida de Badalona",ico:"auto",ic:"car",la:BDN[0],lo:BDN[1],q:"Banyoles",dir:1,
  t:"Ramón y Elisabeth te pasan a buscar a las 8:00 en punto. Son unos 120 km y 1 h 20 min por la AP-7 hasta la salida 6 (Girona Nord) y después la C-66 hasta Banyoles.",
  tip:"Si quieren parar a tomar un café, el área de servicio del Montseny queda más o menos a mitad de camino.",dur:"1 h 20 min"},
 {h:"9:30",m:570,n:"Coche aparcado 🚙",ico:"parking",ic:"pin",car:1,la:null,lo:null,q:"",
  t:"Al aparcar, toca «📍 Aparqué aquí» y el teléfono guarda dónde quedó el coche. A la vuelta, «Volver al coche» los lleva caminando hasta él.",
  tip:"Apunten también algo cercano que sirva de referencia: una tienda, un cartel, el número de la calle.",dur:"10 min"},
 {h:"9:40",m:580,n:"Paseo por el lago y las pesqueras",ico:"lago",ic:"walk",la:42.1165,lo:2.7622,q:"Passeig Darder Banyoles",
  t:"El lago de Banyoles es el lago natural más grande de Cataluña. Por la orilla hay unas veinte «pesqueras»: casetas del siglo XIX junto al agua, con su muellecito, que se usaban para pescar y bañarse.",
  tip:"La vuelta entera al lago son unos 6,5 km, algo más de una hora caminando y casi plana. Como llegan temprano, hay tiempo para la vuelta entera. Si no les tinca tanto, basta con el tramo de las pesqueras, por el Passeig Darder.",dur:"1 h 30 min",img:"lago"},
 {h:"11:15",m:675,n:"Plaça Major",ico:"plaza",ic:"cup",la:42.11807,lo:2.76538,q:"Plaça Major Banyoles",
  t:"La plaza de soportales del siglo XIII, con sus arcos de piedra y plátanos enormes. Es el corazón del pueblo; los sábados hay algunos puestos de fruta y verdura. Buen momento para un café bajo los soportales.",
  tip:"Si van a comprar algo para el almuerzo, háganlo aquí antes de las 13:30: la panadería Carbó, en esta misma plaza, cierra al mediodía.",dur:"1 h",img:"plaza",go:"comer"},
 {h:"12:30",m:750,n:"Barrio Viejo y monasterio de Sant Esteve",ico:"iglesia",ic:"church",la:42.1206,lo:2.76945,q:"Monestir de Sant Esteve Banyoles",
  t:"El monasterio benedictino de Sant Esteve se fundó en el año 812 y de él nació el pueblo. Por el camino: la iglesia gótica de Santa Maria dels Turers, la plaza de la Font y la muralla.",
  tip:"Desde la Plaça Major, sigan la calle de les Escrivanies hasta la calle del Puig, que termina en el monasterio. Son unos 5 minutos.",dur:"45 min",img:"monasterio"},
 {h:"13:45",m:825,n:"Almuerzo con el Flaco",ico:"casa",ic:"home",la:FLL[0],lo:FLL[1],q:"",flaco:1,
  t:"A la casa del Flaco y Pilar, en la urbanización Puig de Fontpudosa, a cerca de 1 km al sur del centro y del lago. El botón «Cómo llegar en coche» los lleva hasta la puerta.",
  tip:"Si al final hacen pícnic, el Passeig de la Draga tiene mesas de piedra y fuentes, justo al lado del lago.",dur:"2 h 30 min"},
 {h:"16:15",m:975,n:"Santa Maria de Porqueres",ico:"atardecer",ic:"church",la:42.1186,lo:2.7471,q:"Església de Santa Maria de Porqueres",
  t:"Una iglesia románica pequeñita del siglo XII, al otro lado del lago, rodeada de pasto y árboles. En coche son 5 minutos; caminando por la orilla, unos 30.",
  tip:"El sol se pone hacia las 17:20: desde esta orilla se ve muy bonito sobre el agua y el pueblo.",dur:"40 min",img:"porqueres"},
 {h:"17:15",m:1035,n:"Bocadillo de la tarde",ico:"bocadillo",ic:"food",la:42.1179,lo:2.7651,q:"bocadillos Banyoles",go:"comer",
  t:"Un bocadillo y algo para tomar antes de volver. Hay varios bares de bocadillos buenos cerca del centro y del lago.",
  tip:"Las opciones están en la pestaña Comer. Si quieren algo dulce para el camino, las panaderías vuelven a abrir a las 17:00.",dur:"45 min"},
 {h:"19:00",m:1140,n:"Vuelta a Badalona",ico:"auto",ic:"car",la:BDN[0],lo:BDN[1],q:"Badalona",dir:1,
  t:"Mismo camino de vuelta: C-66 hasta Girona y AP-7 hacia Barcelona. Unos 1 h 20 min; un sábado por la tarde puede haber más tráfico al llegar.",
  tip:"Que Ramón no maneje cansado: si hace falta, paren en el área del Montseny.",dur:"1 h 20 min"}];
const RN=[
 ["Las pesqueras del Jardín Histórico","Cerca de veinte casetas de mediados del siglo XIX en la orilla, cada una con su arquitectura. Están protegidas por la Generalitat.",3,42.1158,2.7618,"Pesquera Marimon Banyoles"],
 ["La Llotja del Tint","Un edificio medieval donde se teñían telas: una de las pocas industrias medievales que se pueden visitar en Cataluña.",5,42.1199,2.7672,"Llotja del Tint Banyoles"],
 ["La muralla y sus glorietas","Un tramo de la muralla medieval con unos miradores góticos en lo alto, en pleno Barrio Viejo.",5,42.1189,2.7684,"Muralla de Banyoles"],
 ["Museo Darder","El centro de interpretación del lago, en la plaza dels Estudis. Explica por qué el agua del lago sale desde abajo, del subsuelo. Ideal si llueve.",4,42.1191,2.7663,"Museu Darder Banyoles"],
 ["El pueblo neolítico de La Draga","Junto al estacionamiento: reconstrucción de un poblado de hace unos 7.000 años, uno de los más antiguos de la península.",2,42.1266,2.7598,"Parc Neolític de la Draga Banyoles"]];
const LLUVIA=[["art","El <b>Museo Darder</b>, en la plaza dels Estudis, explica el lago por dentro. Mejor mirar el horario del sábado en Google Maps."],["cup","Un café bajo los soportales de la Plaça Major: en <b>Can Pons</b>, una antigua mercería de 1891 convertida en bar."],["church","El monasterio de Sant Esteve y Santa Maria dels Turers se ven bien aunque llueva: el Barrio Viejo está a pocos pasos de la plaza."],["car","Santa Maria de Porqueres se puede ver desde el coche, sin bajarse, si llueve fuerte."],["umb","Lleven un paraguas en el coche, por si acaso."]];
const RT={llevar:["Para llevar al almuerzo","cart","ic-mochila.webp"],boca:["Bocadillo de la tarde","food","ic-bocadillo.webp"],dulce:["Dulces de Banyoles","cake","comer/dulces.png"]};
const R=[
 ["Puestos de la Plaça Major","llevar","€","Los sábados hay algunos puestos de fruta y verdura bajo los soportales. Buen sitio para llevar fruta de estación.","Plaça Major Banyoles","Plaça Major",42.11807,2.76538],
 ["Spar Banyoles","llevar","€","Supermercado chico en pleno centro, para lo práctico: pan, quesos, embutidos, vino y bebidas.","Spar Plaça dels Turers 3 Banyoles","Plaça dels Turers, 3",42.1197,2.7672],
 ["Bonpreu","llevar","€","Supermercado más grande, con buena charcutería y vinos catalanes. Los domingos cierra; el sábado está abierto.","Bonpreu Carrer Mata 11 Banyoles","Carrer de Mata, 11",null,null],
 ["Fleca Carbó","llevar","€","Panadería fundada en 1901, en la misma plaza. Aquí venden la «tortada banyolina», el bizcocho típico del pueblo: un buen regalo para la casa del Flaco. El sábado abre de 7:30 a 13:30 y de 17:00 a 20:00.","Fleca Pastisseria Carbó Plaça Major 19 Banyoles","Plaça Major, 19",42.1182,2.7656],
 ["Tank","boca","€","De los bares mejor valorados del pueblo: cervezas y bocadillos, con raciones generosas. Dicen que el de cerdo desmechado es muy bueno.","Tank la birra i els entrepans Banyoles","Centro",null,null],
 ["Hop","boca","€","Cafetería que presume de tener «los mejores bocadillos»; los clientes destacan el buen trato y el café.","Hop cafeteria bar Banyoles","Centro",null,null],
 ["El Cèntric","boca","€","Bar de pueblo, práctico, con tapas, bocadillos y hamburguesas. A un paso del Barrio Viejo y del lago.","El Cèntric hamburgueseria Banyoles","Cerca del Barrio Viejo",null,null],
 ["Can Pericus","boca","€€","Gastrobar en la plaza de Catalunya, abierto de martes a domingo desde las 7:30. Bueno para picar algo más elaborado.","Can Pericus Plaça Catalunya 3 Banyoles","Plaça de Catalunya, 3",42.1160,2.7660],
 ["Can Pons","boca","€","Bar-café en los soportales de la Plaça Major, en una antigua mercería de 1891. Ideal para el café o una cerveza con vista a la plaza.","Can Pons Plaça Major Banyoles","Plaça Major",42.1179,2.7651],
 ["Forn Figueras","dulce","€","Panadería de la familia Figueras desde 1925. Su dulce típico es la «cansalada de la Puda»: bizcocho con merengue que imita la forma del tocino. Abre por la tarde desde las 16:30.","Forn Figueras Plaça dels Estudis 7 Banyoles","Plaça dels Estudis, 7",42.1191,2.7663],
 ["Can Japet","dulce","€","Panadería de la plaza de la Font. Su especialidad es el «cargol de Banyoles», un caracol de masa crujiente con chocolate.","Forn de pa Can Japet Plaça de la Font 5 Banyoles","Plaça de la Font, 5",42.1188,2.7667],
 ["Fleca Padrés","dulce","€","Su pastelero ganó el concurso al mejor xuixo del mundo: un dulce relleno de crema y frito, típico de Girona.","Fleca Pastisseria Padrés Carrer Major 30 Banyoles","Carrer Major, 30",null,null]];
const PLATOS=[["cake","<b>Tortada banyolina</b>: bizcocho finísimo con azúcar glas, receta del siglo XIX. Se compra en Carbó."],["cake","<b>Cargol de Banyoles</b> (Can Japet) y <b>cansalada de la Puda</b> (Figueras)."],["cake","<b>Xuixo</b>: el dulce frito relleno de crema de la zona de Girona."]];
const TAREAS=[["regalo","Algo para llevar a la casa del Flaco y Pilar (la tortada de Carbó es buena idea)"],["abrigo","Chaqueta: junto al lago la mañana es fresca"],["zapatos","Zapatillas cómodas para caminar por la orilla"],["efectivo","Algo de efectivo para los puestos de la plaza"],["bateria","Celular cargado (y el cargador del coche)"]];
const TREN=[["car","Unos <b>120 km y 1 h 20 min</b>: AP-7 hacia Girona, salida 6 (Girona Nord), y la C-66 hasta Banyoles."],["ticket","La AP-7 ya no tiene peajes en este tramo."],["pin","<b>Estacionamiento gratis</b> junto al lago: Passeig de la Draga (unas 50 plazas) y Passeig Darder."],["info","Al llegar, para ir a la casa del Flaco usen el botón «Cómo llegar» de «Casa del Flaco»: abre Google Maps con la ruta en coche."]];
const GR=[["Javier","Chileno · el de la app","javier@3",'#3f6fd8'],["Ramón","Catalán · al volante","ramon@4","#2f9e6e"],["Elisabeth","De Honduras · la sonrisa del grupo","elisabeth@3","#d9822b"],["Flaco","Chileno · el anfitrión en Banyoles","flaco@4","#8a5cc7"],["Pilar","Catalana · la anfitriona","pilar@1","#c94f7c"]];
const BN=[["lago","EL LAGO"],["plaza","PLAÇA MAJOR"],["monasterio","SANT ESTEVE"]];
const CARS=[["lago","El lago","El lago natural más grande de Cataluña",2],["plaza","Plaça Major","11:15 · soportales del siglo XIII",3],["monasterio","Sant Esteve","12:30 · el monasterio del año 812",4],["porqueres","Santa Maria de Porqueres","16:15 · románica, junto al agua",6]];
const FR=[["¡Al tiro, vamos a Banyoles!","¡Se me quedó el pase del metro!","Les quería traer galletas, pero traje hambre"],
 ["Qué te iba a decir…","Extraño a Bella","¡Yo conduzco, ustedes cantan!","¡Hostia, tío! Me traje la llave de la masía","No puedo ir, juega el Barça","¡Que te calles!"],
 ["¡Qué tuanis este paseo!","¡Foto, foto, todos juntos!","Ustedes están raros…","Pero es que tú nunca me haces caso, Ramón","Namasté 🙏"],
 ["¡Pasen, pasen, están en su casa!","¡Bienvenidos a Banyoles, po!","¡La fideuá está lista!"],
 ["Benvinguts a casa!","¿Un cafetito antes de pasear?","Avui fa un dia preciós"]];
const VIA0=[[41.4500,2.2474],[41.4740,2.2420],[41.5080,2.2440],[41.5560,2.2590],[41.5940,2.3010],[41.6400,2.3900],[41.6900,2.4900],[41.7400,2.6200],[41.8000,2.7400],[41.9000,2.8000],[41.9650,2.8170],[42.0100,2.8290],[42.0450,2.8180],[42.0850,2.7980],[42.1100,2.7750],[42.1185,2.7655]];
return {APP,STATS,T,TRANSPORTE,ANF,CAJA,NOMBRE,Y,M,DIA,FIN,FDIR,FLL,BANY,BDN,ST,RN,LLUVIA,RT,R,PLATOS,TAREAS,TREN,GR,BN,CARS,FR,VIA0};
})();
