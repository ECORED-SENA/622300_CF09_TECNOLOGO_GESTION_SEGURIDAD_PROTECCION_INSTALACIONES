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
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Líder del Ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: '',
          cargo: '',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: '',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: '',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
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
