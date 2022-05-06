export default {
  global: {
    componenteFormativo: 'Desempeño ambiental',
    descripcionCurso:
      'Este componente hace referencia a las formas y técnicas de obtener información primaria, secundaria y terciaria, con el fin de identificar los procesos productivos de una organización y plasmarlos en un diagrama de flujo con todos sus procesos para la correcta identificación y evaluación de aspectos e impactos ambientales asociados a los procesos productivos. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Técnicas de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Instrumentos de recolección',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos, usos y aplicaciones',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Procesos de sistemas productivos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Diagrama de flujo',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Ciclos de procesos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Aspectos e impactos ambientales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Matriz de aspectos e impactos ambientales',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Valoración de aspectos e impactos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Matriz de Leopold',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Alcaldía Mayor de Bogotá. (2015). <i>Guía técnica para la identificación de aspectos e impactos ambientales PLE-GU-01 Versión 3.</i>',
      link:
        'https://www.idiger.gov.co/documents/20182/297947/PLE-GU-01+Guia+Para+la+Identificacion+de+Aspectos+e+Impactos+Amb+V3.pdf/db462a5d-9133-4248-aa1d-422b2d9a105c',
    },
    {
      referencia:
        'García, E. & Solano, J. (s.f.). <i>Guía práctica de estudio 5: diagramas de flujo.</i>',
      link: 'http://odin.fi-b.unam.mx/salac/practicasFP/fp_p5.pdf',
    },
    {
      referencia:
        'Universidad de Guadalajara. (s.f.) <i>Clasificación general de las fuentes de información.</i> ',
      link:
        'http://biblioteca.udgvirtual.udg.mx/portal/clasificacion-general-de-las-fuentes-de-informacion',
    },
  ],
  glosario: [
    {
      termino: 'Aspecto ambiental',
      significado:
        'Son todas las actividades humanas que tienen influencia sobre el entorno en donde se desarrollan.',
    },
    {
      termino: 'Diagrama de flujo',
      significado:
        'Representa la esquematización gráfica de un algoritmo, el cual muestra gráficamente los pasos o procesos a seguir para alcanzar la solución de un problema. Su correcta construcción es sumamente importante porque a partir del mismo se escribe un programa en algún lenguaje de programación.',
    },
    {
      termino: 'Impacto ambiental',
      significado:
        'Son las consecuencias de las actividades humanas que repercuten sobre el medio ambiente, generando un impacto ambiental en el entorno en el cual operan, ya sea positivo o negativo, el cual incluye el aire, el agua, el suelo, la flora, la fauna, los seres humanos y sus interrelaciones.',
    },
    {
      termino: 'Elementos de protección personal',
      significado:
        'Elementos diseñados para la protección, evitando accidentes y enfermedades profesionales.',
    },
    {
      termino: 'Matriz aspectos e impactos',
      significado:
        'Son una base fundamental para la toma de decisiones frente a los impactos ambientales que se determinen y evalúen dentro de la organización. ',
    },
    {
      termino: 'Variables ambientales ',
      significado:
        'Son aquellas que influyen en el desarrollo ambiental dentro de un contexto específico. Cuando se realiza una evaluación ambiental se analizan los efectos que unas variables pueden producir en otras, a través de las interacciones que ocurren entre ellas.',
    },
  ],
  complementario: [
    {
      texto:
        'Fernández, M. (2019). <i>Técnicas e instrumentos para la recolección de datos</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=1gM3QPRTbFQ',
    },
    {
      texto:
        'Cogollo, J. (2020). <i>¿Qué es un diagrama de flujo? ¿cómo hacer diagramas de flujo paso a paso + ejemplos?</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Kucgc6NpGwc&t=58s',
    },
    {
      texto:
        'Alcaldía Mayor de Bogotá. (2015). <i>Guía técnica para la Identificación de aspectos e impactos ambientales PLE-GU-01 Versión 3.</i>',
      tipo: 'Texto Digital.',
      descarga: '/downloads/PLE_GU_01.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ana Vela Rodríguez Velásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor metodológico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Magdi Khalifah',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '---',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '---',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
