export default {
  global: {
    Name: 'Protocolos de servicio al cliente',
    Description:
      'El componente desarrolla protocolos de atención al cliente aplicados a los servicios de seguridad. Integra momentos de verdad, canales de atención, comunicación empresarial, eventos, calidad, PQRSF, tratamiento de quejas y contingencias, con el propósito de fortalecer la experiencia del usuario, la prevención de conflictos y la confianza institucional.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Servicio al cliente en la seguridad integral',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Importancia del servicio al cliente en la seguridad integral',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Relación entre atención al cliente y protección de instalaciones',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Proceso de atención al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Momentos de verdad',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Estandarización en el servicio al cliente',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Protocolos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Estrategias de atención cara a cara',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Estrategias de atención mediante medios tecnológicos',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestión del servicio y eventos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Triángulo del servicio',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Sistemas de atención y servicio al cliente',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: '<i>Customer Relationship Management</i> (CRM)',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Manejo y organización del tiempo en atención al cliente',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Eventos',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Comunicación empresarial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Técnicas de comunicación efectiva',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos de comunicación empresarial',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Expresión oral y escrita en contextos de seguridad',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Canales de comunicación y su uso estratégico',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Netiqueta',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Calidad y contingencias en el servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Características de un servicio de calidad',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Concepto y uso de las PQRSF',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo:
              'Atención y tratamiento de quejas y requerimientos del cliente',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Contingencias',
            hash: 't_5_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'Accesibilidad',
      significado:
        'condición que permite utilizar contenidos, servicios y plataformas sin barreras relacionadas con las capacidades o necesidades de las personas.',
    },
    {
      termino: 'Atención al cliente',
      significado:
        'conjunto de actuaciones destinadas a orientar, asistir y responder a las necesidades de clientes o usuarios.',
    },
    {
      termino: 'Canal de comunicación',
      significado:
        'medio utilizado para transmitir información entre la organización y sus públicos internos o externos.',
    },
    {
      termino: 'Cliente interno',
      significado:
        'integrante de la organización que recibe servicios, información o apoyo de otras áreas para cumplir sus funciones.',
    },
    {
      termino: 'Contingencia',
      significado:
        'situación imprevista que puede afectar la continuidad, calidad o seguridad de la prestación del servicio.',
    },
    {
      termino: 'CRM',
      significado:
        'estrategia apoyada por tecnología que centraliza y analiza información para gestionar las relaciones con los clientes.',
    },
    {
      termino: 'Ciclo del servicio',
      significado:
        'secuencia de interacciones experimentadas por el cliente desde el contacto inicial hasta la finalización del servicio.',
    },
    {
      termino: 'Empatía',
      significado:
        'capacidad de comprender las necesidades particulares del cliente y proporcionar una atención individualizada.',
    },
    {
      termino: 'Estandarización',
      significado:
        'establecimiento de criterios y procedimientos comunes para garantizar consistencia en la prestación del servicio.',
    },
    {
      termino: 'Fiabilidad',
      significado:
        'capacidad de cumplir el servicio prometido de manera precisa, consistente y confiable.',
    },
    {
      termino: 'Momento de verdad',
      significado:
        'interacción directa o indirecta en la que el cliente construye una percepción sobre la organización y el servicio recibido.',
    },
    {
      termino: 'Netiqueta',
      significado:
        'conjunto de normas de comportamiento y comunicación aplicables a los entornos digitales.',
    },
    {
      termino: 'PQRSF',
      significado:
        'sistema para gestionar peticiones, quejas, reclamos, sugerencias y felicitaciones formuladas por clientes o usuarios.',
    },
    {
      termino: 'Protocolo',
      significado:
        'conjunto de normas, instrucciones y recomendaciones que orientan la actuación del personal ante situaciones determinadas.',
    },
    {
      termino: 'Servqual',
      significado:
        'modelo empleado para valorar la calidad del servicio mediante las dimensiones de tangibilidad, fiabilidad, capacidad de respuesta, seguridad y empatía.',
    },
  ],
  referencias: [
    {
      referencia:
        'Albrecht, K. (2006). La revolución de servicio (2.a ed.). Panamericana Editorial.',
      link: '',
    },
    {
      referencia:
        'Álvarez, T., Mijares, B., y Zambrano, E. (2013). Sentido de compromiso en la atención al cliente interno de la gerencia de servicios logísticos PDVSA Occidente. Telos, 15(1), 13-31.',
      link: '',
    },
    {
      referencia:
        'Barrios, R. (2019). Identidad corporativa y los valores organizacionales, desde un Liderazgo de Avanzada. Revista Scientific, 4(14), 347-366.',
      link: '',
    },
    {
      referencia:
        'Blanco, I., & Segarra-Oña, M. (2017). Estudio exploratorio del uso del e-Marketing como estrategia para micro, pequeñas y medianas empresas de servicios. Puente (Universidad Pontificia Bolivariana), 7(2), 29–37.',
      link: 'https://doi.org/10.18566/puente.v7n2.a03',
    },
    {
      referencia:
        'Duque Fierro, G. A., Saldarriaga Castrillón, J. F., y Bohorquez Ordoñez, E. (2016). El servicio al cliente y sus problemáticas actuales: tendencias investigativas. Revista Criterios, 23(1), 395-408.',
      link: '',
    },
    {
      referencia: 'Etiqueta, protocolo y buenas maneras. (s.f.).',
      link: '',
    },
    {
      referencia:
        'García, A. (2016). Cultura de servicio en la optimización del servicio al cliente. Telos: Revista de Estudios Interdisciplinarios en Ciencias Sociales, 18(3), 381–398.',
      link: '',
    },
    {
      referencia:
        'Leppard, J., y Molyneux, L. (2000). Cómo mejorar su servicio al cliente. Gestión 2000.',
      link: '',
    },
    {
      referencia:
        'Moliner Cantos, C. (2001). Recensión: Calidad de Servicio y Satisfacción del cliente. Revista de Psicología del Trabajo y de las Organizaciones, 17(2), 233-235.',
      link: '',
    },
    {
      referencia:
        'Montoya, C., y Boyero, M. (2013). El CRM como herramienta para el servicio al cliente en la organización. Revista Científica "Visión de Futuro", 17(1), 130-151.',
      link: '',
    },
    {
      referencia:
        'Morales Ospina, A. (2019). El servicio al cliente como estrategia competitiva. Revista Colombiana de Ciencias Administrativas, 1(1), 8-20.',
      link: '',
    },
    {
      referencia:
        'Moreno, A. (2009). Lineamientos para la Creación de una Cultura de Servicio al Cliente en una Empresa del Sector Alimentos: Caso Martmore Ltda. [Tesis de pregrado, Universidad del Rosario].',
      link: '',
    },
    {
      referencia:
        'Organización Internacional de Normalización. (2015). Sistemas de gestión de la calidad — Requisitos (NTC-ISO 9001:2015). Instituto Colombiano de Normas Técnicas y Certificación.',
      link: '',
    },
    {
      referencia:
        'Organización Internacional de Normalización. (2018a). Gestión de la calidad — Satisfacción del cliente — Directrices para los códigos de conducta de las organizaciones (ISO 10001:2018).',
      link: '',
    },
    {
      referencia:
        'Organización Internacional de Normalización. (2018b). Gestión de la calidad — Satisfacción del cliente — Directrices para el tratamiento de las quejas en las organizaciones (ISO 10002:2018).',
      link: '',
    },
    {
      referencia:
        'Organización Internacional de Normalización. (2018c). Gestión de la calidad — Satisfacción del cliente — Directrices para la resolución de conflictos de forma externa a las organizaciones (ISO 10003:2018).',
      link: '',
    },
    {
      referencia:
        'Organización Internacional de Normalización. (2022). Gestión de la calidad — Satisfacción del cliente — Orientación para las transacciones de comercio electrónico del negocio al consumidor (ISO 10008:2022).',
      link: '',
    },
    {
      referencia:
        'Parasuraman, A., Zeithaml, V., y Berry, L. (1988). SERVQUAL: A multiple-item scale for measuring consumer perceptions of service quality. Journal of retailing, 64(1), 12-40.',
      link: '',
    },
    {
      referencia:
        'Restrepo, C. E., Restrepo, L. S., y Estrada, S. (2006). Enfoque estratégico del servicio al cliente. Scientia Et Technica, XII(32), 289-294.',
      link: '',
    },
    {
      referencia: 'Sagarmanta. (s.f.). Organización y producción de eventos.',
      link: '',
    },
    {
      referencia:
        'Serna, H. (1999). Gerencia estratégica. Planeación y gestión (4.a ed.). 3R Ediciones.',
      link: '',
    },
    {
      referencia:
        'Setó, D. (2004). De la calidad de servicio a la fidelidad del cliente. ESIC Editorial.',
      link: '',
    },
    {
      referencia:
        'Siavichay C., E. A., Cárdenas C., M. F., Vega R., L. G., Asanza M., D. C., y Barragán-Landy, M. F. (2023). Percepción de los clientes sobre la calidad del servicio: un estudio empírico. Maskana, 14(1), 9-21.',
      link: 'https://doi.org/10.18537/mskn.14.01.01',
    },
    {
      referencia:
        'Universidad del Tolima, Facultad de Ciencias de la Educación. (2020). Netiqueta: Código de Urbanidad Digital: Protocolo, etiqueta y normas básicas.',
      link: '',
    },
    {
      referencia:
        'Zeithaml, V., y Bitner, M. J. (2002). Marketing de servicios (2.a ed.). McGraw–Hill.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06 - Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Joinner Enrique Osorio Martínez',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saacvedra',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cielo Damaris Angulo Rodríguez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
