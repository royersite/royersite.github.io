const frases = [
    // Visiones
    `En el mundo pelearán por ser número uno  
    A ninguno de ellos les importa la gente  
    Como jugando a los vaqueros en Puente Llaguno  
    Unos cuantos pistoleros matarán inocentes`,
    
    `Se caerán las dos torres del país más poderoso  
    Terroristas colosos secuestrarán aviones  
    Sus misiones son matar aunque el precio sea costoso  
    Yo, pero no te impresiones, que solo son visiones`,
    
    `Llegará un nuevo virus para acabar con el mundo  
    Y en menos de un segundo millones tendrán sida  
    Perderán la vida, tan despacio como rotundo  
    Porque la vacuna tal vez nunca sea conseguida`,
    
    `Toda la juventud se va a perder en la moda  
    Bien sea usar drogas o saber usar pistolas  
    Creen que tienen bolas y terminarán como todas  
    Las personas que quieren cagar arriba 'e la cola`,
    
    `La ignorancia se va a apoderar de las escuelas  
    Solo habrá mujerzuelas, se perderán valores  
    Modificarán nuestra bandera y su emblema  
    Yo, pero no te impresiones, que solo son visiones`,
    
    `Crearán teléfonos que podrás llevar contigo  
    Bastante creativo, la primera impresión  
    Pero será otra nueva adicción para tus sentidos  
    Además del internet y de la televisión`,
    
    `Aumentará el número de seres homosexuales  
    Infidelidades, ya no existirán verdades  
    Sexo con animales, aberraciones sexuales  
    Traerán todo tipo de extrañas enfermedades`,
    
    `Más de setenta mil muertes violentas habrá por año  
    No es extraño que el odio habite en los corazones`,
    
    // Quisiera
    `Quisiera volver a nacer  
    Ser más niño otra vez  
    No preocuparme por el mal  
    Que estoy por conocer  
    Para no ver a mis familiares fallecer  
    Y no entender a un mundo  
    Cruel con sed de poder`,
    
    `Solo jugar, reír sin pensar en sobrevivir  
    Inocente del mundo vil, solo ser feliz`,
    
    `Quisiera ir al pasado y ver rectificados  
    Errores cometidos que hoy en día me cuestan caro`,
    
    `Quisiera ir al futuro y verme  
    Cuando sea un anciano  
    Regresar al presente consciente y  
    Corregir lo malo`,
    
    `Quisiera ser el tiempo y  
    Pararme si estoy contento  
    Pasear en alegrías, correr en sufrimientos`,
    
    `Quisiera ser la verdad y asesinar la mentira  
    Tener la voluntad de no llorar si siento ira  
    Quisiera que las traiciones no causen heridas`,
    
    `Quisiera ser el viento y  
    Llevarme palabras necias  
    Ser el buen pensamiento en la  
    Conciencia del que piensa`,
    
    // Hace falta soñar
    `Mil preguntas me invadieron sin respuestas (la más simple fue)  
    Si hay un justo Dios, ¿por qué esto ha de pasar?`,
    
    `Pensar que un avión de guerra cuesta más que construir una escuela  
    Donde pudieron formar niños de esta era  
    Que hoy en día son delincuentes o mujerzuelas`,
    
    `Las anticonceptivas están prohibidas  
    Por una iglesia que no aprecia el número de muertes por el sida  
    Cuya cura no ha podido ser conseguida  
    Aunque la prioridad es encontrar en el espacio vida`,
    // Un Día en el Barrio
    `El planeta está mal y muchos ya lo dieron por perdido  
    Que en algunos años seremos nueve billones ya  
    De los cuales tres o más no tendrán un hogar jamás`,
    
    `Incluso hasta la educación de hoy en día  
    Está basada en repetí' alguna vil filosofía  
    Estudiar importa, sí, pero pa' abrir tu mentecilla  
    Qué cerrada no funciona, tal cual como una sombrilla`,
    
    `Después fue de las manos, hay bombas bajo donde estamos  
    Que no han estallado porque alguna mano no ha deseado  
    Es un chiste confiar que existe un gobernante honrado  
    El poder puede corromper a cualquier ser humano`,
    
    `El hombre por instinto busca el beneficio propio, guerra eterna  
    Hoy por petróleo, como antes por opio, observa`,
    
    `El estado hace las leyes, pero bien francos  
    Pasan barcos con toneladas de drogas de los narcos`,
    
    `Como la tele los maneja como quiere  
    Y en lugar de fichas juegan ajedrez  
    Pero con seres, puede`,
    
    `Debes decidir  
    Si al rebaño seguir  
    O pensar diferente  
    Pelea contra ti  
    Tu mayor enemy`,
    
    `¡Ponte de pie! Contra los entes que no les conviene  
    Que tú pienses diferente a los demás`,
    
    `El mundo está mal, mucho más mal de lo que crees  
    No puedes confiar ni siquiera en los diarios que lees  
    Todo está preparado y previamente pagado y comprado`,
    
    `Ya nadie se ama  
    El mundo está mal, el racismo vive  
    Me atrevo a pensar que es casi igual que antes inclusive`,
    
    `Trabajo escaso, países sumidos en el fracaso  
    Y Estados Unidos derramando el vaso  
    Mientras la religión sigue destruyendo a su paso  
    El intelecto con su plan perfecto pa' torcernos los brazos`,
    
    `Abra los ojos y vea que la cosa está fea  
    En la pista droga y sexo dominan al mundo  
    Como un futbolista a su balón  
    Cuando ensaya su truco en el callejón  
    Donde nacen los sueños que se van como agua en colador`,
    
    `Rimar no es don  
    Como si lo es con corazón, rimar me tendrán que matar  
    Pa' que no escriba más pasajes  
    Aunque habrás matado al mensajero, pero no al mensaje`,
    
    `Un día más, un día menos en el barrio  
    Un día más, un día menos en el mundo cruel  
    Un día más, un día menos en el barrio  
    Un día más, un día menos en el mundo cruel`,
    
    // Mucho gusto
    `Nací donde los mediodías son de treinta y tres grados pa' arriba  
    Y las mujeres aquí están más buenas que la comida  
    Donde un carro nuevo cuesta al menos el sueldo de diez años  
    Y una casa cuesta al menos el precio de cien carros`,
    
    `Soy de un país con miles de leyes sin aplicar  
    Con sesenta muertos semanales, solo en la capital  
    Por ende, muy pocas cosas me sorprenden`,
    
    `He visto policías matando gente inocente  
    Y he visto gente no inocente siendo presidente, ¿entiendes?`,
    
    `Parezco un loco respecto a la mayoría, salgo poco  
    Me gusta más la oscuridad que el día  
    Tengo mal carácter y un par de problemas psicológicos  
    No creo en la Biblia sino en razonamientos lógicos`,
    
    `Vengo de un barrio donde a veces comía  
    La misma pasta todos los días, con agua a veces ni fría  
    Pero todavía hambre no he pasado, nada me lo han regalado  
    Por eso soy frío como un soldado`,
    
    `No quiero dormir, no quiero ahorrar nunca mi fuerza  
    Ojalá se mueran todos los gobernantes que mientan  
    Quiero abrir la puerta del zoológico a los animales  
    Y encerrar allí a todos los oficiales criminales`,
    
    `Quiero que inventen ya la vacuna contra el racismo  
    Y que el planeta acepte que en el fondo todos somos lo mismo`,
    
    `Quiero que las municiones se conviertan en pan  
    Y que los superhéroes salgan de la serie donde están  
    Yo quiero que la avaricia nunca le gane al honor  
    Y que la única religión en el mundo se llame amor`,
    // Aceptas?
    `Sigo creyendo que el opio es la religión  
    Y la televisión que adormece mentes en mi nación  
    No es una solución dar educación a los pobres  
    Si les das una pobre educación`,
    
    `Esta es mi canción, tal vez no es la mejor del mundo  
    Pero es la canción que cree en que podemos vivir juntos  
    Los blancos, negros, amarillos o rojos  
    Y el color de piel no importe más que el color de tus ojos`,
    
    `Recuerdo que de niño quise un telescopio  
    Y ver con ojos propios los planetas que nos rodean  
    Hoy quiero un telescopio donde se vea el futuro  
    Y en este haya paz y un mundo seguro`,
    
    `En serio, quisiera raptar varios líderes mundiales  
    Y mostrarles la vida en nuestros barrios marginales  
    Que sepan lo que es nacer sin ser rico de cuna  
    Estudiar, trabajar, sudar, sin tener ayuda ninguna`,
    
    `Rogar a Jesús pa' conseguir cualquier empleo  
    Aunque este sea totalmente contrario a tus deseos`,
    
    `Me concentro y veo que una guerra está germinando  
    Pueblos asesinando y surgiendo otro asesino al mando  
    El llanto reina y el mañana es rojo  
    Y me preocupo al pensar qué verán mis hijos al abrir los ojos (¡Woa!)`,
    
    // Na Good
    `Muchos dicen que estoy loco y tal vez un poco
    A veces pienso tengo un mecanismo inmenso dentro' el coco
    La doctora dice que me debe medicar
    Pero sabes que en el fondo me fascina odiar
    Es tan brutal, algo natural de mis cromosomas`,
    
    `Me temo que a veces me canso de ser bueno
    Como cuando no quieres besar sino acaba en los senos
    Algo así más o menos, tal vez un poco más obsceno
    Cuando se trata de un lápiz y un papel y un lapicero`,
    
    // De Mi Muerte
    `Debes amar sin miedo a ser traicionado
    Aunque sin darle prioridad al que prioridad no te ha dado, claro`,
    
    // A dónde se fue la conciencia
    `La conciencia se fue, la moda nos gobierna
    En ellos quién roba por droga
    En ellas abrir más las piernas
    La lucha eterna, el discriminar por dinero`,
    
    `Que dios maldiga esta era de apariencias
    Y que alguien me diga ¿A dónde se fue la conciencia?`,
    
    // Epílogo
    `No habrá quien rompa el respeto que me he ganado
    Por eso detestan recordar que seré recordado
    Como un soldado del [[hip-hop]] latinoamericano
    Y pa' callarme tendrán que mirarme en sangre bañado`,

    `Bien o mal, no hacen más na' que hablar de mí
    Ni mi mujer me piensa tanto así`,
    
    // Uno por Ellas
    `Y es que se acostumbran a salir con trapitos de seducir
    ¿Viste como se le notan las nalgotas en su perfil?
    Preparada pal piropo, pose lista pa' la foto
    Olor a flor, en short o falda, a todos nos carga locos`,

    `Mujeres, mujeres preciosas nos invaden
    Uno por ellas aunque mal paguen, ya tú sabes
    [[Out of my head it's glowing]]
    [[Out of my head it's glowing]]
    Out of my head it's glowing
    Out of my head it's glowing`,
    
    // Canbiate
    `No importa que corra la sangre hasta que corre nuestra sangre
    Vivimos en una sociedad de cobardes
    Nadie asume sus fallas, el prójimo siempre es culpable`,
    
    `Los tiempos cambian, nada dura para siempre
    Y pa' limar diferencias tengo que ser diferente`,

    `Yo no sé si existe un dios
    Pero de existir estoy casi seguro que no es un catire con melena
    Sino más bien esa voz que la mayoría ignoramos
    Y escuchamos al meternos en problemas`,
    
    // Índigo
    `Volvió el índigo indetenible
    Ahorren sus coritos lindos porque aquí no sirven
    Mi calibre es punto [[Can]] con balas de [[Serbero]]
    Doy disparos certeros a avisperos full de raperos`,

    `Aunque comprendo a los que me odian cuando hablo
    Ya que en toda religión con dioses nunca faltan diablos`,

    `Tengo un establo de verdades que galopan cual tropas
    Vientos en popa cual gotas que botan copas`,
    
    `Si abres la boca tienes que elegir una opción
    Recibir mi respeto, bro, o buscar dizque competición
    Pero si eliges la segunda situación tendrás que hacerme felación mientras pides la bendición`,

    `La verdad se sirve cruda
    La realidad se mezcla pura
    La sinceridad se viste desnuda (ni más ni menos)
    Yo soy el índigo del papel y el tintero
    No me llamen MC ni rapero solo [[(Canserbero)]]`,

    `Es fácil hablar de más, decir que son perfectos
    Muchos me investigan pa' después hablar de mis defectos`,

    `Como pueden ver soy un verso en carne viva
    Pero ya hay muchos que me envidian y los ojos me esquivan
    Quieren escupirme pero yo estoy muy arriba
    Y si escupes pa'rriba, en la cara te cae saliva`,

    `Soy la verdad, la desnuda sinceridad
    Así me disparen a matar, mi letra será recordada
    En cambio usted me tiene que reconocer
    Que te enseñé to' lo que sabes, pero no to' lo que sé`,
    
    // Clima Tropical
    `Y  yo no sé si tú y yo vivimos en el mismo país
    Pero te juro que así es en el mío
    Tragedias, racismo, clasismo
    Tierra de clima tropical, pero habitantes fríos`,
    
    `Y aunque todavía se quieren, estar juntos no pueden
    Porque ahora le deben respeto a sus nuevas compañías`,
    
    `La creyente dice: "Busca a Cristo, que él te salva"
    Niño responde con una patá' en las nalgas
    Y es que no hay oración buena cuando la tripa te suena`,
    
    `La abuela se está asfixiando, casi no pue' respirar
    Pero en el hospital (¿Ah?) dicen que tengo que esperar
    Que hay que darle prioridad al borracho con picá 'e zancudo
    Nada personal (Na'), sólo que él sí tiene seguro`,
    
    `La autopista sin luz y los pueblos sin asfaltado
    Mientras da un discurso bonito el jefe de estado
    Ve cuánto ha aumentado el petróleo desde el año pasado
    Por ca' mil barriles producidos hay un desempleado`,

    `La papa está escasa, la tasa de la violencia en alza
    ¿Belleza natural? Cierto ¿Paraíso? Completa farsa
    Porque en el paraíso no se amenazan, se abrazan`,
    
    // La Voz
    `Yo soy sincero así no quiera
    Las cosas verdaderas se dicen a la ligera aunque estas hieran`,

    `Yo estoy consciente que el dinero domina la esfera
    Pero nunca venderé mi esencia ni aunque Cristo quiera`,
    
    // Vida
    `El tiempo pasará, no más guerras empezarán
    La felicidad llegará y con lágrimas terminará
    La historia se reescribirá, mis canciones se olvidarán
    Otras criaturas nacerán, mejorarán y empeorarán`,
    
    `Un viejo a solas sintonizando un recuerdo
    Un deportista bajo la lluvia corriendo
    Un hombre enfermo desahuciado sonriendo
    Una pareja a la orilla del mar se besa anocheciendo
    [[I just can't understand]]`,

    `Un pueblo calla, una injusticia se comete
    Dos naciones batallan para probar quién es más fuerte
    Un diciembre, un enero, una religión, un credo
    Un rico, un pobre, un blanco, un negro
    Un loco, un cuerdo, [[Canserbero]]`,

    `Idiomas, monedas, gobiernos, fronteras
    Océanos, desiertos, selvas, bosques, cordilleras
    Nacer y crecer, reproducirse, fallecer
    Dormir, comer, escuchar, ver, tocar, probar, oler
    Olvidar, conocer, descubrir, entender
    Alcanzar, fracasar, todo está mal o todo está bien`,

    `No más odio, no más hambre, no más ambición
    No más desigualdades tontas, no más división
    No más llanto, no más guerra, no más muerte
    Y más vida, más vida, más vida`,

    `No más fundamentalismos, no más opresión
    No más ignorancia en pueblos, no más exclusión
    No más hambre, no más muerte, no más guerra
    Y más vida, más vida, más vida`,
    
    // No Justice
    `Que injusto es escuchar mentiras siendo verdadero
    O fallecer primero por tener menos dinero
    Que injusto es que pueda comer cuando quiero
    Sabiendo que hay gente muriendose de hambre en el mundo entero`,

    `Ya estoy cansado de ver gente sufriendo el presente
    Por problemas latentes, por un pasado inconsciente
    Como injusta es la muerte cuando ataca de frente
    Y solo sufre el que queda, el que muere se ira por siempre`,

    `Injusto es ver que en hospitales mueran las personas
    De enfermedades fatal o victimas de pistola
    Es la injusticia de ver niñas perdida en las drogas
    O en ese mismo hospital y muertas porque alguien las viola`,

    `There is no justice and i wanna know where the peace is
    Foolish people is killing while you're sitting by doing
    Forget about the money put the gun down
    And dont fuck this
    Let's do something(bis)`,
    
    `Asomando el techo por la noche ayer hable con dios
    Le pregunte por que lo injusto y no me respondió
    Por que usted le dio tanto a unos cuantos
    Y a otros tantos les dio poco
    Y el tipo se hizo el loco y me dejo ahí solo hablando con yo`,
    
    `Pasar paginas, rapido como eso se van lapidas
    Puntos insignificantes somos en la inmensidad
    Yo hablo hoy quizá mañana no recordaras
    Pero mi pesar podría hacer resaltar una gota de mar`,
    
    // Buenas Noches 
    `Jóvenes que por moda se meten a malandro
    Niñas tirando porque eso es lo que se está usando
    Niños que no pueden ni levantar la pistola
    Mujeres criando más de cinco niños sola`,
    
    // Siempre
    `Odio, amor, cariño, ira, fuerza, sonrisas, respeto, vida
    ¡Así soy! ¡yo!, ¡guau! ¡así soy yo!
    Sueños, metas, experiencias en mi cerebro yacen vividas
    Y no quiero morir ¡todavía no!`,
        
    `Yo no soy de este cuento, yo no soy de este tiempo
    Es mucho sentimiento para un humilde cuerpo
    Mucho conocimiento para tan poco tiempo
    Injusticias vividas que no entiendo`,
    
    // Advertencia 
    `Me malinforman no se conforman con las migajas
    Y creen que hablando paja
    Van a callar un movimiento llamado sinceridad, realidad, verdad o cómo quieran
    Ni disparándome podrán hacer que mi voz muera`,
        
    `Sé que soy un problema un vidrio dentro e'sus zapatos
    Una piña bajo sus brazos una gran mancha en su contrato`,
        
    `Se reunen los fines pa'decir que son raperos
    Cantando hasta pop y moviendo el hueco del trasero
    Odio hablar de esto desperdiciar una gran pista
    Pero, ¿cómo hago? Si me sobra letra pa' los masoquiztas`,
        
    `Un exceso e' palabras que los trauma
    Que cortan desplace de hipócritas en esta fauna
    Soy verdadero guerrero con el tintero artillero
    Pero mejor conocido por [[Canserbero]]`,
        
    `Dicen: "si se crió en un barrio entoces, ¿por qué habla así?"
    Como si en los barrios no enseñaran a leer y a escribir`,
        
    `Ya deben admitir la peor pobreza es la mental
    Y que mi gran fortuna esta en mi forma de pensar
    Que no concuerda con la inmadurez de los chamos de ahora
    Que adoran solo la popularidad y la moda
    Por eso es que aún ahora en pleno siglo [[XXI]]
    Nos tildan de tercer mundo aunque solo exista uno`,
        
    `Niñas portan silicón, niños portan un cañón
    Y a los 10 tienen sexo por que así dice la canción, wuh
    Pero su mayor preocupación no es el cese de la violencia ni la educación`,
        
    `¿Restaría corazón acaso a la verdad que he escrito?
    ¿A esa mínima parte que han oido de mis eruditos?
    Orgulloso estoy de ser blanquito, a mi viejo igualito
    Pues no me identifico con tu racismo maldito`,
        
    `Pero si en realidad vamos al caso
    El que no aprende de lo malo, vive del fracaso
    Por eso siempre serán como la moda de corto plazo
    ¿Acaso no ven que no hay comparación mía con ustedes?
    No quería decirlo así para no herirlos pero, ¿qué quieren?`,
    
    // El Mundo Ya Se Acabó 
    `A veces pienso que no hay almas
    Que fueron cambiadas por armas, nalgas, faldas
    O cualquier cosa que cueste pero no valga
    Nos embarcó la calma en esta tormenta que ya no escampa`,
        
    `Quizás no tengo la razón, es mi opinión lo que comento
    Transmitir un pensamiento amor y rencor por ejemplo
    Yo', describir un sentimiento o explicar con rimas mi decepción
    Como en este momento que me siento ignorado o incomprendido
    Por esas masas que abrazan los faltos de sentido`,
        
    `Hermanos, el mundo ya se acabó
    No creas en mí, cree en ti y ve tú alrededor
    Estamos en tiempo extra
    Aquí la vida no cuenta en venta están los corazones
    Hermanos, el mundo ya se acabó
    No creas en mí, cree en ti y ve tú alrededor
    Estamos en tiempo extra
    La vida no cuenta, en venta está el alma`,
        
    `Drogas, muertes, hambre, terrorismo
    Violaciones, epidemias, extorsiones
    Tantos odiándome por lo que cantó yo
    Mira a tú alrededor y dime si el mundo no se acabó
    Al menos eso es lo que pienso yo`,
    
    // Jeremías 17-5 
    `Me siento como un loco al tratar de confiar yo todavía
    En alguien en el planeta de la hipocresía
    ¡Válgame, soy un iluso! Tan bravo que me la doy
    Y el abuso es natural que en contra de mí den uso, mundo sucio`,
        
    `Ojalá se ahoguen los que siempre mienten
    Y una vez en el infierno, que se quemen para siempre`,
        
    `Y de corazón digo que la sucia venganza mata el alma y la envenena
    Pero cuando de traición se trata sí, vale la pena
    La palabra vale, la trampa sale`,
        
    `Y si alguna te falla, cámbiala por perra`,
        
    `Yo soy la vida y la muerte, y no creo en nada
    Ni en leyendas vivas, ni en leyendas muertas, ni resucitadas`,
        
    `Una mano te corta la otra, como dijo [[Tempo]]
    Y las acciones no se las lleva el viento
    Que te perdone Cristo si existe
    Porque si por mí puedo cantar esto mientras meo en tu tumba triste`,
        
    `Dios no puede duplicarme lo que pienso cuando te observo
    Porque más de una vez no puedo entrar al infierno`,
        
    `Deja de llorar, maldita puta
    Que yo no he botado lágrimas`,
    
    // Seamos Honestos 
    `Desde la cuna hasta la tumba una guerra
    en el planeta de agua llamado tierra
    ven como hierran o sea erramos los humanos`,
    
    // Guía Para la Acción 
    `Hay que leer, hay que aprender, hay que crecer
    Hay que atacar sin olvidarnos defender
    Hay que cambiar para hacer entender
    Que somos parte del mundo, no del tercer`,
        
    `Hay que sembrar valores en los menores
    Porque el futuro es hoy pero ojalá mañana se mejore, sí`,
        
    `Es un gran don creer en Dios y su existencia
    Pero no podemos negarnos a comprender la ciencia
    En animales la fuerza es supervivencia, pero en humanos
    La supervivencia es la inteligencia`,
        
    `Yo  también quiero mi casa con piscina
    Pero más quisiera no ver más niños en la esquina
    Bájate en cualquier barrio y camina
    ¿Tu crees que esa vida es justa en un país lleno de riqueza divina?`,
    
    // Es Épico
    `Él me llevó donde [[Cerbero]] (ah)
    Que dijo no morderme porque le gusta mi nombre de rapero, ja
    Si lo ves de esa forma, pude tener suerte
    Irónica es la vida, pero también irónica es la muerte`,
        
    `No entendía nada, pregunté por Cristo
    Y noté que se burlaban porque nadie lo había visto
    Otros dijeron que fue un truco de su iglesia
    Para gobernar al mundo con su majestuosa empresa`,
        
    `Son demasiadas dudas, pensamientos vagos
    Gente buena en el infierno, ¿o es que en algo fueron malos? (malos)
    Por algo están aquí, aunque no lo acepten
    Debo hallar ahora una manera de huir de la muerte`,
        
    `Recordé que en la tierra donde había nacido
    Existía una leyenda del diablo con un tal [[Florentino]]
    Obviamente, un cuento, pero inteligente
    Para irme de este infierno, infierno literalmente`,
        
    `Debo aclarar que hay un factor clave que olvidas
    Los miedos se van en el momento en que pierdes la vida
    Se dice que el amor masacra tus insultos
    Pero yo te mataré con más odio, para ser justo (¡ey!)`,
        
    `Yo sueño con amor porque sé que, en el fondo, nosotros amamos`,
        
    `Te recuerdo que Dios no existe, y lo que viste en aquel túnel
    No fue más que simples ángeles comunes`,
        
    `Dudar y no creer es algo muy distinto
    Y si dudo de Dios, es porque no lo he visto`,
    
    // Pensado en ti
    `Como un paracaidista que olvidó el paracaídas
    Así se derrumbó este amor
    Y ni siquiera porque alguno de los dos quería
    Sino por no tener un buen detector de mentiras
    Porque de esa manera, en mi memoria vieras
    La causa del problema, también la solución
    Quizás me comprendieras, a menos que creyeras
    Que no tengo defectos o soy el nuevo Dios`,
        
    `De nada sirve recordarte los besos de ojos cerrados
    Los abrazos y sonrisas del pasado, los sueños trazados
    Las veces que hemos llorado
    Por cosas que han pasado y hemos superado`,
        
    `Los juegos, los secretos, los momentos contentos,
    Los sobrenombres tiernos
    Que serían cursis de no ser por esto que sentimos
    Que nos mantuvo siempre unidos
    Y en sus tiempos libres hace que el mundo tenga sentido`,
        
    `Estoy tan confundido, no sé si llorar
    Molestarme, o sentarme a pensar, buscarte, o solamente esperar
    Sigo dudando que en algo sirva rezar
    Y he llegado a pensar que o Dios no existe o Dios es bipolar`,
        
    `Esto es como caminar en círculos por horas
    Como ver a un gato perseguir su cola
    Es algo ilógico estar con otra persona y preguntarnos
    Cómo hubiese sido si te hubieses permitido amarnos`,
        
    `No te diré que creo que moriré sin ti
    Porque no creo, no creo, no creo, no creo
    Tú sabes que soy un guerrero
    No te diré que no puedo vivir sin ti
    Porque sí puedo, sí puedo, sí puedo, sí puedo
    Sencillamente es que no quiero`,
        
    `Y si morimos y hay un cielo, me escaparé del infierno
    Y te haré el amor en una nube en honor a nuestros recuerdos
    Mira lo cursi que me has convertido
    Si esto no es amor entonces soy un loco sin motivo`,
        
    `Quiero seguir vivo sólo para
    Algún día decirte en tu cara que aún te amo
    Aunque aún todo puede ser diferente
    Si nos juntamos y cambiamos este tema por uno que diga
    "Vivieron felices para siempre"
    Vivieron felices para siempre`,
    
    // Maquiavélico
    `El único detalle es que la ciencia no ha podío, no
    Crear esas maquinitas del tiempo
    Por eso creo que nos resulte un poquitico bien jodío
    Volver a los días en que tu cuerpo
    Estaba convertido en río sobre el mío
    Dejando escapar seguío esos orgasmitos lentos`,
        
    `Escribo solo versos tristes
    En algún patético me convertiste, releo lo que escribiste
    Cuando éramos felices o más o menos felices
    Y sentía como mariposas lo que hoy sé que son lombrices`,
        
    `Estoy en esos tiempos en que gota a gota
    La mente se agota, pasan los días y apenas lo notas
    La rutina es implacable, el mal humor te arropa
    Y luces como un don Nadie con cualquier ropa`,
        
    `Hoy solo quiero pensar en cosas que me hagan reír
    Sí, que me hagan ser feliz
    Dejar de mirar gris y en nubes de paz revolcarme
    Arrancar de raíz todo recuerdo infeliz, ¿y ahora?
    Si te preguntan, di que estoy pensando en mí`,
        
    `Pudo haber sido por mí, pudo haber sido por ti
    Pudo haber sido cualquier cosa
    Pudo haber sido incluso el aleteo de una mariposa
    El hecho es que nos perdimos para siempre
    El hecho es que nos perdimos para siempre
    El hecho es que nuestro amor llegó a su muerte`,
        
    `Es maquiavélico meditar
    A solas donde tú viviste todo con ella
    Como una voz que te dice que a las estrellas
    Un dedo no puede ocultar, no`,
    
    // Querer Querernos
    `Fue plenitud lo que sentí, estando dentro de ti
    Bailando por adentro de tu cuerpo
    Algo tan simple como que yo voy en ti y tú vas en mí
    Como dos piezas que encajan perfecto`,
        
    `Sólo queda una hembra y su complemento
    Por eso es tan natural querer querernos
    Y  ahora quién sabe cuándo, volvamos a vernos`,
        
    `Besaba yo tus pies para estar en tus huellas
    Mi lengua rozaba tus piernas y entre ellas
    Y como una vil "leguleya"
    Peleabas por el derecho a elegir en que posición ver las estrellas`,
        
    `Podías reír, sudar, gemir, hablar
    Para explicarme porque parecía ibas a llorar
    Y yo tocándote, como quien se estira por la mañana
    Y hace ruidos de placer al hacer que nada en la cama
    Sobran las palabras debería callarme ya`,
        
    `Si, a través de mis ojos tú te vieras
    Y en mi cuerpo sintieras lo que me inspiras
    Te vieras con sed abrazarte quisieras
    Ya esa es la forma como estos ojos te miran`,
        
    `Iba aterrizando en las nubes de trampolines
    Fueron tus senos los que usé como almohadines
    Y antes que se termines esta corta canción
    Olvidaba decirte
    Que me encantó hacerte el amor`,
    
    // De la Vida Como Pelicula, Tragedia, Comedia y Ficcion
    `Nacer, crecer, reproducirse, morir
    Pues estar vivo no es precisamente igual a vivir
    Estoy enloqueciendo, hay tanto que quisiera no haber descubierto
    Siento que soy un muerto que vive encubierto`,
        
    `Vivimos entrenando para hacer dinero
    O estudiando cosas que a veces ni siquiera queremos
    Esculpiendo nuestros cuerpos pa estar buenas y buenos
    Pues sabemos que pa ver corazones todos son ciegos`,
        
    `Admito que a veces me cansa luchar
    Y quisiera dormir para jamás despertar
    Pero recuerdo esos momentos
    Que varias veces me dieron aliento
    Y que me hacen agradecer cuando despierto`,
        
    `Borrón y cuenta nueva
    La vida es una sola y siempre saldrá el sol después que llueva
    Lástima que hay cosas que de la mente no salen (nah)
    Y que te obligan a no ver igual a los que creías que valen
    Pero dale, que nadie va a esperar por ti
    El mundo no se va a parar porque tú te sientas así`,

    `Mientras me escuchas, hay gente haciendo el amor
    Gente haciendo guerra, gente agonizando, a lo mejor
    Gente haciéndose preguntas y dándose golpes de pecho
    Por gente que simplemente no le duele lo que ha hecho`,
    
    `El  mundo está lleno de gente que camina sin sentido
    Se te hace duro pensar (uaoh)
    Que exista otro ser vivo
    Que valga la pena entregarle tus latidos
    Ya sea para procrear o hacer amigos
    Pero si a ver vamos, nos vamos tal cual como nacimos`,
    
    `Trata de salvar lo que valga la pena
    Y bota lo que ya no sirva
    Bótalo aunque te duela
    Preocúpate por ti y disfruta plenamente mientras puedas
    Porque lo único seguro es que te mueras`,
    
    // Stupid Love Story
    `Estaban en lo cierto nuestros allegados
    Aún no he muerto de amor a pesar que así pensamos
    ¿No?, al menos así lo pensé yo
    Contento hubiese asesinado
    Por recuperar tus ojos bellos`,
    
    `Anoche mientras dormía bajo Dios
    Y me dijo que vos ya te olvidaste de mí
    Y sí, gracias a Dios que ya ni creo en Dios
    Así que olvidé su voz y me dormí para soñarte aquí`,
    
    `Cuarenta y pico años después y aún te pienso
    Y comienzo a pensar que es tiempo de olvidarme de tus besos
    Al menos no perdí el sentido del humor
    Pues, mi sentido del amor sin ti
    Es sin sentido, por supuesto`,
    
    `Pero él nunca pensó lo que ella pensaba
    Y es que durante años ella por él también esperaba
    Nunca se acercó porque en su foto feliz se notaba, y al fin y al cabo
    Eso era lo que ella deseaba también (yeah)
    Eso era lo que ella deseaba también (yeah-yeah-yeah)
    Eso era lo que ella deseaba también (ajá, ajá)`,
    
    // El Primer Trago
    `Un año más sin ti físicamente, pero en mi mente siempre
    No sabes cuánto te quiero
    Y no se muere quien se va
    Solo se muere el que se olvida
    Al fin y al cabo, la muerte va tan segura de ganar...`,
        
    `Me afecta pensar que no hay reencarnación
    Que no hay nada después de la muerte, la religión mintió
    Pensar que no verás más a quien se marchó
    Decir que nunca volverás a abrazar a quien ya murió`,
        
    `Ya ni puedo odiar ni amar, estoy como cansado
    Siento que no es importante nada por lo que he luchado`,
        
    `El humano es envidioso y codicioso por placeres, objetos
    Y una sed de ser poderoso
    Como si algo de eso cierra la herida
    Que se abre cuando, tarde o temprano, se nos va una vida querida`,
        
    // Así Mismo
    `Hoy en día hablan mal de mí a la ligera
    Como si me interesará
    Como que si me conocieran
    Como si supieran mi nombre real, no [[Canserbero]]
    Yo no soy rapero, sino que sé rimar y soy sincero`,
        
    `Trabajo nueve horas al día, una sola es pa la comida
    En diez minutos como
    50 para hacer poesía
    Por la noche leo y oigo beats de Vito y Leo
    Y el domingo voy arrecho al techo a grabar lo que creo`,
        
    `Sigo sacando, veo medio a los que me ven mal
    Ninguno afronta que rimando verdad soy un animal
    Qué me podrán callar
    De muerto y de pie sepultao
    Pero de mil canciones tergiversarán lo que he rimado, woah`,
        
    `You know is Can, Can, once again con el micro
    Amarillo, azul y rojo, ocho estrellas en mi pecho escrito
    Si me maldicen no me afecta porque estoy maldito
    Por cierto, si el rap ha muerto, cállame y lo resucito`,
        // Cuando Vayas Conmigo
    `"Nadie es dueño de nadie" me dijo alguien una vez
    "Nadie puede atar los pies ni siquiera del que te acompaña"`,
        
    `Confiar en quien amas no sé si es virtud o defecto
    Más aun sabiendo que nada es eterno ni perfecto
    (Es mentira)`,
        
    `La mente es extraña: ayuda, pero a veces daña
    La duda deambula, qué fácil es pensar que me engaña
    Que me falla; consciencia no razona con hormonas`,
        
    `Solo la ira de pensar que me habla con mentiras
    Me hace desear quitarle la dicha de respirar`,
    
    `La verdad duele, aunque peor es la sospecha
    Y desesperación que se aprovecha de tus sentidos
    Es que; "sexos opuestos nunca podrán ser amigos"
    Por eso no mires a nadie cuando estés conmigo`,
        
    `Una vez alguien dijo que está en peligro de extinción
    La confianza y la balanza está en contra del corazón
    Vivimos en persecución de fidelidad ficticia
    Vínculos de codicia, círculos que te envician`,
        
    `Los buenos instantes mueren lentamente en mi mente
    No obstante, los recuerdos de traiciones son permanentes`,
        
    `Lamentablemente Dinero asesinó a Te Quiero
    Y el amor no es ciego cuando el que ama está ciego de celos
    Es que no puedo creer en quien en sí no tuvo confianza
    Traicionó y pide perdón con lágrimas falsas`,
        
    `Tú eres la causa de esta sensación que no respiro
    De estas ansias de olvido y a la vez de estar contigo
    Tú causas estos celos en que estoy cautivo
    Por eso no mires a nadie cuando estés conmigo`,
        
    `Yo, yo, yo, yo, creo que voy
    Solito a estar, cuando me muera
    He sido el incomprendido
    Ni tú ni nadie me ha querido
    Tal como soy`,
        
    // En el Valle de las Sombras
    `Hace falta más que valor pa' afrontar la muerte
    Puedes correr pero no puedes esconderte`,
        
    `Mire, a mí me pueden hacer cultos completos odiándome
    Tengo el control de mi mente, vivo autoevaluándome`,
        
    `I will fear no evil never, 'cause I'm already dead
    I walk through the valley of the shadow of death
    I will fear no evil never, 'cause I'm already dead`,
        
    `Con insomnio y en ayuna escribo estos pasajes de mi vida
    Enamorado de los prados de mi ira`,
        
    `Me exigen sinceridad, de varón a varón
    Pero se ofenden cuando digo lo que son
    Entonces corazón
    ¿Te ofendo con sinceridad, ah?
    ¿O te miento por educación?`,
        
    `Muchos aún andaban preguntando
    Si lo mío era suerte o casualidad
    No voy a decir lo que estoy pensando
    Porque casi to' lo que pienso se me hace realidad
    Pero soy un tipo con poca paciencia
    Por eso nunca he dicho que no poseo debilidad`,
        
    `Si cortan mis manos gritaré mis líricas
    Si cortan mi lengua rapearé con mímicas`,
    
    // Mundo de Piedra
    `Al llegar pagó por la mejor prostituta que había
    Una rubia de infarto, la mete para el cuarto
    Entre sus piernas prueba el tacto y comienza el acto
    Pero menos de un minuto escucha unos pasos entrar y
    Murió Carlos ipso facto`,
        
    `Your heart is made of stone
    My heart is made of stone
    We are living in a stone world
    My heart is made of stone
    Your heart is made of stone
    We are living in a stone world`,
        
    `Continuando con las informaciones
    El país se hunde en la mierda
    Mientras las autoridades no hacen nada al respecto
    Y la sociedad se pierde en una indetenible decadencia de valores`,
        
    // Mañana Será otro Día
    `De rencor lloraba
    Quizás por la soledad que me acompañaba
    Solo interrumpida por un padre que en alcohol se ahogaba`,
        
    `Dijo que hay cosas bellas que aprecia mejor ahora
    Que no ve por causa de un cáncer sin cura
    Como la piel desnuda de tu pareja en tus brazos
    Como brindar ayuda a tu hijo y ver su primer paso
    Como ver el horizonte del mar o
    Simplemente apreciar, el desfile de un ocaso`,
        
    `Cuando sientas que la vida te ignora
    Llora pero valora mientras sonrías
    Alguien decía que no siempre lloverá
    En cambio siempre
    Mañana será otro día`,
        
    `La indecisión forma parte del ser humano
    Luchamos por metas
    Que al tocarla no nos conformamos
    Decimos ¡todo esta malo!`,
        
    // Ni de Oro ni Goldfield
    `Entro con serenidad también con la mortalidad de un cáncer
    Prendas, apariencias, vestimentas no hacen un [[hip-hop]]
    Mis primeras rimas escupidas en esquinas
    Hoy en día son poesías esculpidas en tarimas`,
        
    `Esperanzas y enseñanzas me hacen fuerte
    A veces odio esta vida aunque le temo a la muerte`,
        
    `Yo ejercito solo el machete y la mente por que solo los débiles quieren siempre cuerpos fuertes`,
        
    `Vivo entre sonrisas, llantos, alegrías, despechos
    Busco sonreír cuando me siento insatisfecho
    No creo en religiones oraciones ni supersticiones
    Creo en lo que veo y callo si no hallo explicaciones`,
        
    `No creo en el destino por que yo creo mi destino
    Consigo críticos, obstáculos en mi camino
    Corrijo erráticos, pretéritos, de mc's mezquinos
    Prefiero ser músico clásico, antes que asesino`,
        
    `Es [[Can]] y no místico, de flow explicito, pacifico en mi físico letal en lo lingüístico
    Como Da Vinci, artístico, único en cada átomo
    Solo que yo uso un micro para hacer mis clásicos
    Sismos derriban mentes en mi metabolismo`,
        
    `Yo amo la esencia, odio el racismo, amo el respeto, odio el egoísmo`,
        
    // Ley del Hielo
    `¡Hey!, ¿acaso es la ley del hielo?
    Si es así, prometo no pelear de nuevo y hacer mis deberes
    Por favor dime que me quieres
    O no pararé de hacer berrinches tirado en el suelo`,
        
    `No comprendo nada, casi a diario me ve un doctor
    Que dice que estoy mal, aunque yo no siento ningún dolor`,
        
    `Las hojas del árbol de mi alma, todas se han ido
    Me niego a aceptar lo que me quieren hacer ver
    Todo esto que está pasando no tiene sentido
    No hay motivo pa aceptar lo que no puede ser`,
        
    `Y aunque a veces no entiendo por qué no está conmigo
    Sigo creyendo que sus razone' ha de tener
    No puedo negar que estoy bastante confundido
    Voy a encontrarla ahora mismo donde sea que esté`,
        
    `(Basta de este juego, basta de este juego, ya)
    Cierro los ojos y ahí estás, los abro y noto que estoy ciego
    Cuando por fin te encuentro, trato de alcanzarte y nunca puedo
    (Nunca puedo, trato de alcanzarte y nunca puedo)
    Si no apareces pronto juro que te buscaré en el Cielo`,
        
    // Sin Mercy
    `No comparen mi música y lírica histórica
    De gran retórica con tu contaminación sónica
    No comparen a un falso vestido de cordero
    Con el más odiado por hablarles claro, con [[Canserbero]]`,
        
    `No saben si soy un poeta o hardcore
    O mejor un poeta hardcore, boleta o escritor
    A lo mejor todo eso en un licuador
    El hecho es que dividí todo en dos, mi voz y el ecuador`,
        
    // El Purgatorio
    `No se sabe bien lo que hacemos aquí
    Se supone que pagar por algo ruin
    Se rumora la existencia de infiernos
    Con fuegos y hielo, y de un cielo su jardín`,
        
    `Se dice que estamos acá porque en vidas pasadas
    Condescendimos al odio
    Ese robó, aquel mató, aquel violó
    Ese estafó, y yo, tan vil como cualquiera`,
        
    `Tengo una dura batalla personal
    Que se libra mucho más allá del bien y el mal
    No se sabe bien lo que me puede deparar
    Pero podría disparar en defensa personal`,
        
    `Burócratas, psicópatas y un dictador
    Autómatas, astronautas, más de un pastor
    Vagando a los senderos de la condenación
    De los siete pecados ninguno tiene salvación`,
        
    // Perdiendo la Fe
    `Y yo sé que es necesario en algún dios tener la fe
    Pa en momentos buenos a su nombre agradecer
    Pero cuando sé de tantos inocentes que han matado
    Me pregunto si Dios estaba ocupado`,
        
    `Me dicen que agradezca a Dios cuando algo me salga bien (woh)
    Pero si, a ver, vamos, los malos rezan también`,
        
    `Yo te aseguro que el que mata por placer
    Reza también para que sus planes no se le echen a perder
    Por eso yo no creo que Dios a mí me haya ayudado
    Cuando en todo caso hubiese ayudado primero
    A los niños de Etiopía que a diario habían rezado
    Y sin embargo por desnutrición se fueron`,
        
    `La guerra es testigo de que quizás no estoy erróneo
    Que quizás somos las fichas de un juego entre Dios y el Demonio
    O sino, ¿qué sentido tiene una vida llena de llanto sin salida
    Dirigida por el señor odio?`,
        
    `Diga, ¿qué tiene de justo que un hijo te nazca enfermo
    Y se vaya al descanso eterno por un sida de herencia materno?
    Por eso no doy gracias cuando me despierto
    Ya que quizá esté ofendiendo a tantos inocentes muertos`,
        
    `Que me digan, ¿qué hay de justo que yo coma cuando quiera
    Mientras en aceras nuestros indígenas su adiós esperan?
    Por eso no doy gracias cuando estoy comiendo
    Ya que quizá esté ofendiendo a los que de hambre estén muriendo`,
        
    `Entiendo que hay muchas, las cosas que aún no entiendo
    Y que tal vez existen seres supremo y todopoderoso
    Pero cuando en la calle veo lo que estoy viendo
    Noto que esos seres no son muy buenos ni nada generosos`,
        
    // Y la Felicidad Qué?
    `Gritarle a tu pareja, ignorar a tu vieja
    Cuando te aconseja
    ¿Y la felicidad qué?
    Trabajar sin descansar, tener sexo y no amar
    Criticar
    ¿Y la felicidad qué?`,
        
    `La vida es un parpadeo
    Donde la meta es ser feliz, al menos así yo lo veo
    Nos preocupamos por estupideces y olvidamos
    Que al morir solo llevamos lo que disfrutamos`,
        
    `Y es que esta vida
    All we need is love, all we need is hope, yeah (es un ratico, sí)
    All we need is love, yeah, aprovéchala, vívela, vívela
    All we need is love, all we need is hope, yeah, (es un ratico, sí)
    Aprovéchala`,
        
    `Trato e buscar motivos
    Que me respondan por qué estamos vivos
    Y después de muchas noches sin dormir he comprendido que
    All we need is love, all we need is hope, yeah
    All we need is love, son, all we need is`,
        
    `Mientras la vida se escapa sin retroceso
    Hoy no se pueden dar besos en lugares públicos
    Donde sí se puede hacer campaña a los políticos`,
        
    //La Sabia Escuela
    `Ando con pie derecho en un país de izquierda
    Donde se ahogan en la moda, lo demá' importa una mierda
    Cuerdas presidenciales tu cerebro lavan
    Más la vanidad que hace que la humildad se queme en lava`,
        
    `No te equivoques, que no te está hablando cualquiera
    Yo me equivoqué, no soy de la vieja, soy de La Sabia Escuela`,
        
    `A mí no me inspiró el que se creyó violento
    Para mí, underground es el que aprendió del barrio y fue honesto
    ¿Qué soy el mejor?, les contesto que no es cierto
    Aunque si digo no tener talento, júzguenme que miento`,
    
    // Interludio
    `Tiene el último [[BlackBerry]] y el último [[iPhone]]
    Se viste como una perrita de reality show
    Para luego preguntarse por qué solo atrae chulos
    Y nulos que solo quieren su cul...`
];

const container = document.getElementById("mainContent");

let currentIndex = -1;
let firstAppearance = true; // solo para la primera vez

// ÍNDICE ALEATORIO SIN REPETIR
function getNextIndex() {
    let i;

    do {
        i = Math.floor(Math.random() * frases.length);
    } while (i === currentIndex && frases.length > 1);

    currentIndex = i;
    return i;
}

//  PROTEGER PALABRAS ESPECÍFICAS
function protectWords(text) {
    return text.replace(
        /\[\[(.*?)\]\]/g,
        '<span translate="no" style="display:inline; white-space:inherit;">$1</span>' // Puedo agregar class a este para darle estilos
    );
}

// CREAR SLIDE
function createSlide() {
    const p = document.createElement("p");
    p.className = "sentence-part";

    // AQUÍ está el cambio clave
    p.innerHTML = protectWords(frases[getNextIndex()]);

    return p;
}

// INTERSECTION OBSERVER
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            if (firstAppearance) {
                firstAppearance = false;

                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, 2000);
            } else {
                entry.target.classList.add("visible");
            }

            const slides = container.querySelectorAll(".sentence-part");

            if (entry.target !== slides[slides.length - 1]) return;

            const newSlide = createSlide();
            container.appendChild(newSlide);
            observer.observe(newSlide);
        });
    },
    {
        root: container,
        threshold: 0.6
    }
);

// INIT
function init() {
    for (let i = 0; i < 2; i++) {
        const slide = createSlide();
        container.appendChild(slide);
        observer.observe(slide);
    }
}

init();
