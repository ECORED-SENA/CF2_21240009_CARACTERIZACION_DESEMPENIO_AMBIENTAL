<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 3
      h1 Aspectos e impactos ambientales

    .row.justify-content-center.align-items-center.crd--whiteCustom.crd--t3.mb-5      
      .col-lg.order-2.order-lg-1
        p.mb-0.ms-lg-4 Para las diferentes organizaciones que están orientadas hacia un futuro sostenible y sustentable no solo en aspectos económicos, sino también en la parte ambiental, es de vital importancia el conocimiento de las afectaciones ambientales que trae consigo cada uno de los procesos que allí se adelantan y la manera de hacerlo es por medio de una identificación de aspectos e impactos ambientales, los cuales determinarán las medidas necesarias para la mitigación de estos.
      .col-auto.gx-0.order-1.order-lg-2.mb-4.mb-lg-0 
        img(src="@/assets/curso/tema3/t3_01.png", alt="alt").img400    

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/6_BEn9hczo8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .h3__cstm.mb-3
      h3 Tipos de aspectos ambientales
      .title_icon

    .row.justify-content-center.mb-4
      .col-lg-7
        p Según la Norma ISO 14001:2015 un aspecto ambiental es un elemento que deriva de la actividad empresarial de la organización y que tiene contacto o puede interactuar con el medio ambiente.
        .crd.crd--mint.crd--brad.mb-4
            .cta_icon_01
              figure
                img(src="@/assets/curso/recursos/icon_cta_02.svg", alt="alt").img85.m-auto
            p.ms-3.mb-4 #[strong Para conocer más sobre los aspectos e impactos ambientales que menciona la Norma se invita a revisar el siguiente enlace:]
            .row
              .col-auto         
                a.anexo.mb-4(:href="obtenerLink('/downloads/NTC_ISO_14001_2015.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p #[strong Recurso.] ISO 14001:2015                      
      
      .col-lg-5
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema3/t3_02.png", alt="alt").m-auto

    p.mb-5 Los aspectos ambientales pueden ser directos o indirectos, los cuales se describen en la siguiente figura:

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        .titulo-sexto.color-acento-contenido
          h5 Figura 4. 
          span Aspectos ambientales
        figure
          img(src="@/assets/curso/tema3/t3_03.svg", alt="alt").m-auto

    p.mb-5 Como puede ver también se encuentran dentro de los aspectos e impactos ambientales los tipos que pueden afectar directamente un proceso en una organización; vea un poco más de ellos:

    .bg_img_01.pb-5.mb-5
      .row.justify-content-center
        .col-lg-9
          ImagenInfografica.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema3/t3_04.svg',alt='')

            .crd.crd--mint.p-4(x="41%" y="17.5%" numero="+")
              .h5.mb-2 Emisiones atmosféricas
              p.mb-0 Es el tipo de contaminación generada por la emisión, mezcla o acumulación de contaminantes a la atmósfera, ya sean provenientes de fuentes naturales o antropogénicas.

            .crd.crd--mint.p-4(x="19.5%" y="62.5%" numero="+")
              .h5.mb-2 Residuos inertes
              p.mb-0 Son residuos que no tienen reacción química o biológica y que no se descomponen, ni se descomponen muy lentamente. Los ejemplos son arena y hormigón.

            .crd.crd--mint.p-4(x="52%" y="58%" numero="+")
              .h5.mb-2 Vertidos de agua
              p.mb-0 Estas aguas han sido alteradas por acciones antrópicas, por lo tanto requieren de un tratamiento previo a ser vertidas a algún cuerpo de agua.

            .crd.crd--mint.p-4(x="72.7%" y="18.5%" numero="+")
              .h5.mb-2 Consumo de energía
              p.mb-0 Hace referencia al gasto total de energía utilizada.              
              
            .crd.crd--mint.p-4(x="21%" y="77.4%" numero="+")
              .h5.mb-2 Consumo de agua
              p.mb-0 Es la cantidad de agua que utiliza una persona para sus actividades diarias de aseo, limpieza y consumo.

            .crd.crd--mint.p-4(x="76.5%" y="71%" numero="+")
              .h5.mb-2 Residuos peligrosos
              p.mb-0 Son los residuos no reciclables y que presentan peligro por tener propiedades que puedan presentar riesgos para la salud y para el medio ambiente.

      .h3__cstm.mb-4
        h3 Clasificación de los aspectos ambientales
        .title_icon

      .row.justify-content-center
        .col-auto
          figure
            img(src="@/assets/curso/recursos/icon_01.svg", alt="alt").img85
        .col
          p.mb-0 Los aspectos ambientales se clasifican como significativos y no significativos. Estos últimos corresponden a los impactos que son lo suficientemente notables como para marcar una gran diferencia en el medio ambiente. La importancia del aspecto ambiental depende en gran medida del funcionamiento de la organización y su ubicación. Para ello, existen dos categorías distintas de aspectos ambientales, pero ¿cuáles son?, conózcalas:

        .col-lg-10.mt-4
          .row.justify-content-center
            .col-auto
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema3/t3_05.png", alt="alt").img450.m-auto
            .col-auto
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema3/t3_06.png", alt="alt").img450.m-auto

    .h3__cstm.mb-4
      h3 Identificación de los aspectos ambientales
      .title_icon

    p.mb-5 Permite conocer cuáles son las situaciones en las que las actividades, productos y servicios pueden afectar al medio ambiente y de esta manera poder conocer qué tipos de impactos son susceptibles de generarse, con el fin de hacer la evaluación dentro del sistema de gestión ambiental de la organización.

    .row.justify-content-center.mb-4
      .col-lg-5.mb-4.mb-lg-0
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema3/t3_07.png", alt="alt").img450
      .col-lg-7
        .h3__cstm.mb-4
          h3 Impactos ambientales
          .title_icon
        p Los impactos ambientales son todas aquellas alteraciones al medio ambiente que son generadas por el ser humano, ya sea de manera directa o indirecta por un proyecto, acción, obra o labor en un área determinada. 
        .row.mb-4
          .col-auto
            figure
              img(src="@/assets/curso/recursos/icon_01.svg", alt="alt").img85
          .col
            p.mb-0 Toda actividad que pueda causar un impacto ambiental en alguna de sus fases estará obligada a someterse al sistema de evaluación de impacto ambiental para determinar con claridad la magnitud de estos. 
        p.mb-0 Por medio de la identificación de impactos ambientales se busca hacer una evaluación y valoración de los efectos presentes como resultado de las actividades, productos o servicios en una organización, además, se pretende mediante la evaluación poder hallar soluciones para prevenir, mitigar o controlar dichos impactos. 

    p.mb-5 Los impactos ambientales se pueden establecer de acuerdo con los tipos que se encuentran en el recurso de aprendizaje que se muestra a continuación:

    .bg_grad_01
      .row.justify-content-center.mb-5
        .col-10.col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in")
          .crd_hover_txt.clr--01
            .crd_hover_txt--img.mb-0              
              img(src="@/assets/curso/tema3/t3_08.jpg", alt="alt")
            .crd_hover_txt--font
              h4.mb-4 Aprovechamiento de recursos naturales
              p.mb-0 Estos recursos pueden ser utilizados para el aprovechamiento forestal, cuando son renovables y no son renovables son utilizados en extracción, como lo es el petróleo o el carbón.
        .col-10.col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in")
          .crd_hover_txt.clr--02
            .crd_hover_txt--img.mb-0              
              img(src="@/assets/curso/tema3/t3_09.jpg", alt="alt")
            .crd_hover_txt--font
              h4.mb-4  Contaminación
              p.mb-0 Acá se relacionan aquellos proyectos que dentro de su funcionamiento emitan gases a la atmósfera o que contaminen cuerpos de agua con vertimientos.
        .col-10.col-lg-4(data-aos="zoom-in")
          .crd_hover_txt.clr--03
            .crd_hover_txt--img.mb-0              
              img(src="@/assets/curso/tema3/t3_10.jpg", alt="alt")
            .crd_hover_txt--font
              h4.mb-4  Ocupación del territorio
              p.mb-0 Son aquellos proyectos que modifican las condiciones biológicas de un territorio, ya sea por uso de tierras para extracción u otro tipo de acciones donde se vean afectadas las áreas determinadas.

      .h3__cstm.mb-4
        h3 Clasificación de los impactos ambientales
        .title_icon

      .row.justify-content-center.mb-5
        .col-lg-7.order-2.order-lg-1
          p Los impactos ambientales se deben diferenciar y clasificar correctamente, ya que esto permitirá establecer las medidas que se deben tomar para remediarlos. Una buena clasificación a su vez permitirá que se evalúen adecuadamente y que se tenga un pleno conocimiento de los tiempos de ocurrencia de los mismos. 
          .row.justify-content-center
            .col-auto
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/recursos/icon_01.svg", alt="alt").img85
            .col
              p.mb-0 Dentro de los impactos ambientales se encuentran distintas clasificaciones de acuerdo con sus propiedades; por lo anterior, se invita a revisar la siguiente imagen infográfica para profundizar en el tema; recuerde hacer clic en cada icono:
        .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema3/t3_10.png", alt="alt").img500.m-auto
    
      .row.justify-content-center.mb-5
        .col-lg-10
          ImagenInfografica.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema3/t3_11.svg', alt='')

            .crd.crd--mint.p-4(x="54.5%" y="0%" numero="+")
              .h5.mb-2 Positivo o negativo
              p.mb-0 De acuerdo con los efectos resultantes sobre el medio ambiente. 

            .crd.crd--mint.p-4(x="98%" y="26%" numero="+")
              .h5.mb-2 Directo o indirecto
              p.mb-0 Esto se da cuando el impacto es producido por una acción específica del proyecto.  

            .crd.crd--mint.p-4(x="100%" y="50%" numero="+")
              .h5.mb-2 Acumulativo
              p.mb-0 Este es el resultado de la adición de impactos ambientales que ocurrieron previamente y que aún están pasando actualmente.   

            .crd.crd--mint.p-4(x="92%" y="74%" numero="+")
              .h5.mb-2 Sinérgico
              p.mb-0 Se produce cuando la aglomeración de impactos tiene una incidencia mayor que cuando se suman individualmente los impactos.

            .crd.crd--mint.p-4(x="54.5%" y="100%" numero="+")
              .h5.mb-2 Residual
              p.mb-0 Es aquel que persiste después de la implementación de medidas de mitigación.                     

            .crd.crd--mint.p-4(x="7%" y="74%" numero="+")
              .h5.mb-2 Temporal o permanente
              p.mb-0 Cuando son por un período de tiempo determinado.

            .crd.crd--mint.p-4(x="0%" y="50%" numero="+")
              .h5.mb-2 Reversible o irreversible
              p.mb-0 Estos dependen de qué tan factible es retornar a las condiciones originarias. 

            .crd.crd--mint.p-4(x="10%" y="26%" numero="+")
              .h5.mb-2 Continuo o periódico
              p.mb-0 Dependerá del período en que se exteriorice.

    .row.justify-content-center
      .col-xl-4.mb-4.mb-lg-0.d-none.d-xl-flex
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema3/t3_12.svg", alt="alt").m-auto
      .col-xl-8
        .h3__cstm.mb-4
          h3 Clasificación de los impactos ambientales
          .title_icon
        p Los impactos ambientales deben ser plenamente identificados en cada una de las etapas productivas que se realicen dentro de una organización, para que se puedan tomar las diferentes medidas correctivas, necesarias para el correcto funcionamiento del sistema productivo. Las identificaciones de estos impactos en las etapas tempranas de un proyecto permiten proyectar y planear las acciones a seguir. 
        p En el impacto ambiental existe una serie de pasos fundamentales que se deben tener en cuenta en el proceso de identificación, los cuales se mencionan en la siguiente lista:
        ul.fa-ul
          li 
            i.fa-li.fas.fa-book-open.clr--Blue
            | Afirmación de los objetivos puntuales del proyecto.
          li 
            i.fa-li.fas.fa-book-open.clr--Blue
            | Realizar un análisis de las posibilidades expertas para desempeñar el objetivo.
          li 
            i.fa-li.fas.fa-book-open.clr--Blue
            | Declaración de las acciones propuestas, las cuales incluyen alternativas de posibles impactos ambientales. 
          li 
            i.fa-li.fas.fa-book-open.clr--Blue
            | Caracterización de las condiciones del medio ambiente previo al inicio del proyecto. 
          li 
            i.fa-li.fas.fa-book-open.clr--Blue
            | Contar con un análisis de costos y beneficios.
          li 
            i.fa-li.fas.fa-book-open.clr--Blue
            | Realizar el análisis de los impactos ambientales que estén relacionados con las acciones planteadas.
          li 
            i.fa-li.fas.fa-book-open.clr--Blue
            | Evaluar los impactos de las acciones que previamente se proponen y sus afectaciones al medio ambiente.
          li 
            i.fa-li.fas.fa-book-open.clr--Blue
            | Realizar un resumen y sus respectivas recomendaciones.

    p.mb-5 Recuerde que para identificar los impactos ambientales es necesario conocer primero los aspectos ambientales dentro de la organización, de las actividades, productos o servicios y cómo estos afectan el medio ambiente. Partiendo de lo anterior, a continuación, se describen algunas variables ambientales que se deben tener en cuenta como factores contaminantes: 

    .row.justify-content-center
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta crd--blue")
          .row(titulo="Atmósfera").justify-content-center
            .col-lg.mb-4.mb-lg-0.ms-5
              h5 Factor contaminante
              p Los factores contaminantes pueden ser gases, lluvia ácida, aerosoles o ruido.

              h5 Identificación
              p Se identifican por medio de los índices de calidad del aire. Emisiones de CO2.
            .col-auto
              figure
                img(src="@/assets/curso/tema3/t3_14.png", alt="alt").img250.m-auto

          .row(titulo="Ruido").justify-content-center
            .col-lg.mb-4.mb-lg-0.ms-5
              h5 Factor contaminante
              p Son todos aquellos sonidos indeseables o que exceden los decibeles permitidos. 

              h5 Identificación
              p Nivel de presión acústica.<br>Decibelímetro.
            .col-auto
              figure
                img(src="@/assets/curso/tema3/t3_15.png", alt="alt").img250.m-auto

          .row(titulo="Agua").justify-content-center
            .col-lg.mb-4.mb-lg-0.ms-5
              h5 Factor contaminante
              p Son aquellos provenientes de acciones industriales o contaminantes orgánicos. 

              h5 Identificación
              p Índice de calidad de aguas.<br>PH.<br>Oxígeno disuelto.<br>Coliformes.
            .col-auto
              figure
                img(src="@/assets/curso/tema3/t3_16.png", alt="alt").img250.m-auto

      .col-lg-4.d-none.d-lg-flex
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema3/t3_13.svg", alt="alt").img400.m-auto

    .row.justify-content-center
      .col-lg-4.d-none.d-lg-flex
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema3/t3_17.svg", alt="alt").img400.m-auto
          
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta crd--blue")
          .row(titulo="Capacidad de los suelos").justify-content-center
            .col-lg.mb-4.mb-lg-0.ms-5
              h5 Factor contaminante
              p Erosión.<br>Inundación.<br>Pérdida de capacidad de los suelos.<br>Cambios topográficos.

              h5 Identificación
              p % de cubierta vegetal.<br>% de pedregosidad.<br>Producción agraria.
            .col-auto
              figure
                img(src="@/assets/curso/tema3/t3_18.png", alt="alt").img250.m-auto

          .row(titulo="Paisaje").justify-content-center
            .col-lg.mb-4.mb-lg-0.ms-5
              h5 Factor contaminante
              p Estos factores pueden verse determinados por la variación de vegetación, junto con la aridez del terreno o los cambios en el uso del suelo. 

              h5 Identificación
              p Método de valoración directa subjetiva.<br>Valoración indirecta.
            .col-auto
              figure
                img(src="@/assets/curso/tema3/t3_19.png", alt="alt").img250.m-auto

          .row(titulo="Fauna").justify-content-center
            .col-lg.mb-4.mb-lg-0.ms-5
              h5 Factor contaminante
              p La pérdida de hábitat por contaminantes,  incendios, inundaciones o remoción en masa. 

              h5 Identificación
              p Estará determinado por la abundancia de especies y sus diferentes variedades.
            .col-auto
              figure
                img(src="@/assets/curso/tema3/t3_20.png", alt="alt").img250.m-auto

          .row(titulo="Vegetación").justify-content-center
            .col-lg.mb-4.mb-lg-0.ms-5
              h5 Factor contaminante
              p Se puede dar por incendios, inundaciones o remoción en masa, lo cual lleva a una pérdida de la cubierta vegetal.

              h5 Identificación
              p Se deberán identificar especies endémicas, autóctonas y la diversidad entre ellas.
            .col-auto
              figure
                img(src="@/assets/curso/tema3/t3_21.png", alt="alt").img250.m-auto

    separador

    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1  Matriz de aspectos e impactos ambientales

    .row.justify-content-center.mb-4
      .col-lg-7.mb-5.mb-lg-0
        p Es una de las herramientas fundamentales dentro de un sistema de gestión ambiental, ya que al ser una exigencia de la Norma ISO 14001 que regula estos sistemas se convierte en un paso para la obtención de la certificación ambiental. 
        p La matriz ambiental de la Norma ISO 14001 busca que todos los proyectos planteados en la empresa sean ambientalmente positivos, es decir, que se alineen con el cuidado del medio ambiente, desde su planeación hasta su finalización y resultados. Por lo tanto, se entiende que esta matriz funcionará como un instrumento de planificación en el cual se vinculan las variables ambientales evidenciadas dentro de todas las etapas del proceso productivo de la organización. 
        .row
          .col-auto
            figure
              img(src="@/assets/curso/recursos/icon_01.svg", alt="alt").img85
          .col
            p.mb-0 Además, las matrices de impacto ambiental son una base fundamental para la toma de decisiones, porque la información que contiene permite hacer proyecciones a corto, mediano y largo plazo y así poder determinar las acciones de mejora a seguir. 

      .col-lg-5
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema3/t3_22.png", alt="alt").m-auto

    p.mb-5 Sabiendo esto, a continuación, podrá encontrar algunas de las ventajas de la implementación de estas matrices dentro de la organización, por lo que se invita a revisar el siguiente recurso de aprendizaje:

    .row.justify-content-center
      .col-lg-10
        PasosA.color-acento-contenido.mb-5(tipo="l")
          .row
            .col
              h3 Impacto ambiental 
              p Facilita la identificación del impacto ambiental del proyecto mientras que ofrece recomendaciones para su adecuada atención y manejo. Además, permite identificar las normas y requisitos ambientales que debe ejecutar cada organización para cumplir con las regulaciones del sector.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/t3_23.svg', alt='').img125
          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/t3_24.svg', alt='').img125
            .col
              h3.text-start Viabilidad técnica 
              p.text-start Sirve para identificar la viabilidad técnica de los procesos al indicar la disponibilidad de los recursos naturales que se pueden necesitar para su desarrollo.
            
          .row
            .col
              h3 Cumplimiento de normas 
              p Posibilita el cumplimiento de las normas y regulaciones de tipo ambiental, así como la obtención de licencias y autorizaciones dentro de este ámbito. 
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/t3_25.svg', alt='').img125
          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/t3_26.svg', alt='').img125
            .col
              h3.text-start Costo de medidas 
              p.text-start Determina el costo de las medidas de manejo que se deben implementar, apoyando la viabilidad económica del proyecto.

      .col-lg-10
        .crd.crd--mint.crd--brad.mb-4
          .cta_icon_01
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/recursos/icon_cta_02.svg", alt="alt").img125.m-auto
          p.ms-4.mb-4 Para profundizar en su aprendizaje se invita a revisar la norma que a continuación se menciona, con el fin de aclarar los conceptos vistos en esta temática.
          .row.ms-2
            .col-auto      
              a.anexo(:href="obtenerLink('/downloads/NTC_ISO_14001_2015.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p Anexo. NORMA ISO 14001:2015   

    separador

    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Valoración de aspectos e impactos

    .row.justify-content-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        .crd.crd--blue.mb-4
          p.mb-0 Para identificar y comprender los aspectos ambientales es necesario identificar las actividades, productos y servicios que desarrolla la organización, definiendo entradas y salidas de materiales o energía, procesos y tecnología usados, instalaciones, lugares, métodos de transporte y factores humanos; así como los cambios en el ambiente, ya sean adversos o beneficiosos, que son el resultado total o parcial de aspectos ambientales.
        p La evaluación ambiental tiene como objetivo la verificación de los parámetros y normativas que actualmente se encuentran vigentes para conocer el estado de los componentes del entorno, lo cual facilita planificar acciones a tomar, con el fin de mantener o mejorar las condiciones del medio ambiente. 
        p Se debe entender que las relaciones que se manejan entre los aspectos ambientales y sus respectivos impactos asociados son de causa y efecto; es por esto que se requiere una buena comprensión de aquellos aspectos que tienen o pueden tener impactos significativos sobre el ambiente, ya que de la identificación de las actividades que desarrolla la entidad pueden surgir muchos aspectos ambientales e impactos asociados.
        .row
          .col-auto 
            figure
              img(src="@/assets/curso/recursos/icon_01.svg", alt="alt").img85
          .col
            p.mb-0 La identificación de los aspectos ambientales significativos y sus impactos asociados es necesaria para determinar cuándo se necesita control o mejora y para establecer prioridades para las acciones de gestión. 

      .col-lg-5
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema3/t3_27.png", alt="alt").img500.m-auto

    .row.justify-content-center.aling-items-center
      .col-lg-9
        .crd.crd--mint.crd--brad.ms-4.mb-4
          .cta_icon_01
            figure
              img(src="@/assets/curso/recursos/icon_cta_02.svg", alt="alt").img125.m-auto
          p.ms-4.mb-4 Para profundizar en el tema sobre aspectos e impactos ambientales se invita a revisar el siguiente documento del Idiger.
          .row.ms-2
            .col-auto      
              a.anexo(:href="obtenerLink('/downloads/PLE_GU_01.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p Anexo. Guía técnica para la identificación de aspectos e impactos ambientales 
      .col-lg-3.d-none.d-lg-flex
        figure
          img(src="@/assets/curso/tema3/t3_28.svg", alt="alt").m-auto

    separador

    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3  Matriz de Leopold

    .row.justify-content-center.mb-5
      .col-lg-7
        p La evaluación, al ser uno de los pasos fundamentales en el impacto ambiental, requiere conocer el proceso que se debe realizar, sobre todo al situarlo desde el manejo y utilización de la matriz de Leopold.
        p En la década de 1970 el Dr. Med. Luna Leopold y algunos colaboradores desarrollaron proyectos de construcción con influencia, enfoque y contenido particularmente útiles para la evaluación preliminar de estos proyectos que predicen un gran impacto ambiental. Ahora bien, #[strong.clr--DarkGreen ¿cómo o cuál es el uso de esta matriz que viene de décadas atrás y aún sigue su uso?] Pues bien, para conocer esta respuesta, se puede decir que la forma de usar la matriz de Leopold se puede resumir en los siguientes pasos:
        
      .col-lg-5
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema3/t3_29.png", alt="alt").m-auto


    .bg_img_01.pb-5.mb-5
      .row.justify-content-center.mb-5
        .col-lg-10
          SlyderF.SlyderF--cstm.mb-5(columnas="col-lg-6 col-xl-4")

            .crd.crd--number(data-crd-number="1")
              .tl_01            
              .ps-center
                p Limite la esfera de atribución.
              .br_01

            .crd.crd--number(data-crd-number="2")
              .tl_01            
              .ps-center
                p Determine las acciones que ejerce el proyecto en el área.
              .br_01

            .crd.crd--number(data-crd-number="3")
              .tl_01            
              .ps-center
                p Determine para cada acción los elementos que se ven afectados.
              .br_01

            .crd.crd--number(data-crd-number="4")
              .tl_01            
              .ps-center
                p Determine el significado de cada elemento en una escala de 1 a 10.
              .br_01

            .crd.crd--number(data-crd-number="5")
              .tl_01            
              .ps-center
                p Determine el tamaño de cada acción en cada elemento en una escala de 1 a 10.
              .br_01

            .crd.crd--number(data-crd-number="6")
              .tl_01            
              .ps-center
                p Determine si el tamaño es positivo o negativo.
              .br_01

            .crd.crd--number(data-crd-number="7")
              .tl_01            
              .ps-center
                p Determine cuántas medidas de proyecto influyen en el medio ambiente, en la desagregación positiva y negativa.
              .br_01

            .crd.crd--number(data-crd-number="8")
              .tl_01            
              .ps-center
                p Se deben añadir los resultados de las acciones. 
              .br_01

            .crd.crd--number(data-crd-number="9")
              .tl_01            
              .ps-center
                p Determine cuántos factores ambientales se ven afectados por el proyecto que se adoptan en positivos y negativos. 
              .br_01

            .crd.crd--number(data-crd-number="10")
              .tl_01            
              .ps-center
                p Agregue resultados de los elementos del medio ambiente. 
              .br_01
            
      p.mb-5 Finalizando esta temática tenga presente que los proyectos o actividades que deben ser sometidas al Sistema de evaluación de impacto ambiental son los que se detallan en el siguiente recurso de aprendizaje, por lo que se sugiere que los tenga en cuenta en su vida laboral, pues puede utilizarlas en todo el territorio nacional:

      .row.justify-content-center
        .col-lg-10
          SlyderF(columnas="col-lg-6 col-xl-4")

            .crd.crd--white.crd--brad.crdH100
              .tl_02           
              .ps-center
                figure
                  img(src="@/assets/curso/tema3/t3_30.svg", alt="alt").img110.m-auto
                p.text-center.mb-0 Acueductos, presas, drenajes o aquellas actividades que alteren los cuerpos naturales de agua.
              .br_02

            .crd.crd--white.crd--brad.crdH100
              .tl_02           
              .ps-center
                figure
                  img(src="@/assets/curso/tema3/t3_31.svg", alt="alt").img110.m-auto
                p.text-center.mb-0 Líneas de transmisión de energía de alto voltaje.
              .br_02

            .crd.crd--white.crd--brad.crdH100
              .tl_02           
              .ps-center
                figure
                  img(src="@/assets/curso/tema3/t3_32.svg", alt="alt").img110.m-auto
                p.text-center.mb-0 Centrales generadoras de energía mayores a 3 MW.
              .br_02

            .crd.crd--white.crd--brad.crdH100
              .tl_02           
              .ps-center
                figure
                  img(src="@/assets/curso/tema3/t3_33.svg", alt="alt").img110.m-auto
                p.text-center.mb-0 Reactores y establecimientos nucleares.
              .br_02

            .crd.crd--white.crd--brad.crdH100
              .tl_02           
              .ps-center
                figure
                  img(src="@/assets/curso/tema3/t3_34.svg", alt="alt").img110.m-auto
                p.text-center.mb-0 Aeropuertos, terminales de buses, automotores, vías férreas, estaciones de servicio y autopistas.
              .br_02

            .crd.crd--white.crd--brad.crdH100
              .tl_02           
              .ps-center
                figure
                  img(src="@/assets/curso/tema3/t3_35.svg", alt="alt").img110.m-auto
                p.text-center.mb-0 Puertos, vías de navegación, astilleros y terminales marítimos.
              .br_02

            .crd.crd--white.crd--brad.crdH100
              .tl_02           
              .ps-center
                figure
                  img(src="@/assets/curso/tema3/t3_36.svg", alt="alt").img110.m-auto
                p.text-center.mb-0 Proyectos de turismo y desarrollo urbano. 
              .br_02

            .crd.crd--white.crd--brad.crdH100
              .tl_02           
              .ps-center
                figure
                  img(src="@/assets/curso/tema3/t3_37.svg", alt="alt").img110.m-auto
                p.text-center.mb-0 Proyectos industriales o inmobiliarios que se ejecuten en zonas declaradas latentes o saturadas. 
              .br_02

            .crd.crd--white.crd--brad.crdH100
              .tl_02           
              .ps-center
                figure
                  img(src="@/assets/curso/tema3/t3_38.svg", alt="alt").img110.m-auto
                p.text-center.mb-0 Proyectos de desarrollo minero, incluidos los de carbón, petróleo y gas.  
              .br_02

            .crd.crd--white.crd--brad.crdH100
              .tl_02           
              .ps-center
                figure
                  img(src="@/assets/curso/tema3/t3_39.svg", alt="alt").img110.m-auto
                p.text-center.mb-0 Oleoductos, gasoductos, ductos mineros u otros análogos. 
              .br_02

            .crd.crd--white.crd--brad.crdH100
              .tl_02           
              .ps-center
                figure
                  img(src="@/assets/curso/tema3/t3_40.svg", alt="alt").img110.m-auto
                p.text-center.mb-0 Ejecución de obras, programas o actividades en parques nacionales, reservas nacionales y santuarios de la naturaleza.
              .br_02

            .crd.crd--white.crd--brad.crdH100
              .tl_02           
              .ps-center
                figure
                  img(src="@/assets/curso/tema3/t3_41.svg", alt="alt").img110.m-auto
                p.text-center.mb-0 Agroindustrias, planteles y establos de crianza, lechería y engorda de animales.
              .br_02

            .crd.crd--white.crd--brad.crdH100
              .tl_02           
              .ps-center
                figure
                  img(src="@/assets/curso/tema3/t3_42.svg", alt="alt").img110.m-auto
                p.text-center.mb-0 Proyectos de desarrollo o explotación forestal en suelos de bosques nativos. 
              .br_02

            .crd.crd--white.crd--brad.crdH100
              .tl_02           
              .ps-center
                figure
                  img(src="@/assets/curso/tema3/t3_43.svg", alt="alt").img110.m-auto
                p.text-center.mb-0 Proyectos de explotación intensiva o de cultivos que utilicen el recurso hidrológico.  
              .br_02

            .crd.crd--white.crd--brad.crdH100
              .tl_02           
              .ps-center
                figure
                  img(src="@/assets/curso/tema3/t3_44.svg", alt="alt").img110.m-auto
                p.text-center.mb-0 Proyectos de saneamiento ambiental. 
              .br_02

            .crd.crd--white.crd--brad.crdH100
              .tl_02           
              .ps-center
                figure
                  img(src="@/assets/curso/tema3/t3_45.svg", alt="alt").img110.m-auto
                p.text-center.mb-0 Proyectos donde se aplique productos químicos de manera masiva.
              .br_02

            .crd.crd--white.crd--brad.crdH100
              .tl_02           
              .ps-center
                figure
                  img(src="@/assets/curso/tema3/t3_46.svg", alt="alt").img110.m-auto
                p.text-center.mb-0 Proyectos de desarrollo, cultivo o explotación, en las áreas mineras, agrícolas y forestales. 
              .br_02

    p.mb-5 Como parte de su aprendizaje se invita a ver los siguientes contenidos, con el fin de aclarar los temas vistos en el componente formativo:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9
        .crd.crd--mint.crd--brad.ms-4.mb-4
          .cta_icon_01
            figure
              img(src="@/assets/curso/recursos/icon_cta_02.svg", alt="alt").img125.m-auto
          p.ms-4.mb-4 #[strong Para profundizar en el tema sobre aspectos de impactos ambientales se invita a revisar el siguiente video institucional.]
          .row.ms-2
            .col-auto      
              a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=rE-m9ZYs0u8" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p.mb-0 Qué son Aspectos e Impactos Ambientales

      .col-lg-3.d-none.d-lg-flex
        figure
          img(src="@/assets/curso/tema3/t3_47.svg", alt="alt").m-auto

    p.mb-5 Para concluir este tema se invita a ver el siguiente video clase, en el que se aclaran varios contenidos clave que debe tener en cuenta.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/WCqlNKyQs2c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      

          

          


            


      
    
              
            
      


            

            

              

            


    

    
    
   

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
