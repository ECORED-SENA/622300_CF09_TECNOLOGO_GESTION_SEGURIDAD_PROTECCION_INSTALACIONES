<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Gestión del servicio y eventos
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La gestión del servicio integra estrategias, personas y recursos para proporcionar una experiencia coherente y de calidad. En este contexto, los eventos permiten aplicar los principios del servicio mediante la planificación y coordinación de cada interacción con los participantes.
          .caja-2.color-2(data-aos="fade-right")
            p.mb-0 Los siguientes apartados desarrollan los sistemas de gestión del servicio, la relación con el cliente, la organización del tiempo y la planificación de eventos.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img1.png', alt='' style="width: 500px").m-auto
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Triángulo del servicio
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img2.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p El triángulo del servicio permite analizar la calidad de la atención a partir de la relación entre la estrategia, el personal y los sistemas de la organización. Estos elementos deben articularse y orientarse hacia la satisfacción del cliente (Albrecht, 2006; García, 2016).
      p.mb-5 El modelo integra tres factores fundamentales centrados en las necesidades del cliente:
      .row.justify-content-center.mb-5
        .col-xl-5
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 1.
            span Factores del triángulo del servicio
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/t3/img3.svg', alt='El triángulo del servicio sitúa al cliente en el centro y articula tres componentes esenciales: estrategia de servicio, personal y sistemas amigables. Su integración orienta la organización hacia una atención coherente, eficiente y enfocada en satisfacer sus necesidades y expectativas.').m-auto
      p.mb-5 Los factores del triángulo del servicio, se detallan a continuación:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Estrategia de servicio")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img4.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Estrategia de servicio
              p.mb-0 Es la visión y el compromiso de la organización para unificar todos sus procesos hacia la satisfacción de las exigencias del cliente. Define qué es un servicio excelente para la empresa y cómo se va a entregar.
        .py-3.py-md-4(titulo="Empleados (la gente)")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img5.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Empleados (la gente)
              p.mb-0 Son el enlace directo con el público. Deben estar sensibilizados, capacitados y comprometidos con la estrategia de servicio para poder ejecutarla eficazmente.
        .py-3.py-md-4(titulo="Sistemas amigables para el cliente")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img6.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Sistemas amigables para el cliente
              p.mb-0 Comprenden todos los procesos, instalaciones, métodos y herramientas diseñados para facilitar la experiencia del cliente, priorizando sus intereses por encima de la conveniencia interna de la organización.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 El cliente interno en el triángulo del servicio
      .caja-1.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1_p
            p.mb-0 El cliente interno corresponde a los colaboradores que reciben información, recursos y apoyo de la organización para cumplir sus funciones. La calidad de este servicio interno influye directamente en la atención proporcionada al cliente externo.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t3/img7.png', alt='' style="width: 500px").m-auto
      .row.justify-content-center.mb-5
        .col-xl-8
          .caja-4(data-aos="flip-up")
            .row.align-items-center
              .col-xl-auto.col-md-2.mb-3.mb-lg-0.mb-md-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/intro/img3.svg', alt='' style="width: 85px").m-auto
              .col-xl.col-md-10
                p.mb-0 En los servicios de seguridad, esta relación puede sintetizarse mediante la siguiente secuencia:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Apoyo organizacional
                p.mb-0 La empresa proporciona información, recursos, capacitación y condiciones adecuadas.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img8.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img9.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Bienestar del personal
                p.mb-0 Los vigilantes, supervisores y operadores se sienten valorados, informados y respaldados.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Desempeño profesional
                p.mb-0 El personal actúa con compromiso, empatía y disposición de servicio.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img10.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img11.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Satisfacción del usuario
                p.mb-0 El cliente recibe una atención coherente con los estándares institucionales.
      p.mb-0 El #[i endomarketing] contribuye a alinear al personal con la visión, los valores y los objetivos de la organización. En seguridad privada, esta práctica fortalece la motivación del equipo y favorece una atención profesional y coherente con la estrategia de servicio (Álvarez et al., 2013, como se cita en Duque Fierro et al., 2016; Morales Ospina, 2019).
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Sistemas de atención y servicio al cliente
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img15.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Las organizaciones disponen de diversos sistemas y canales para interactuar con sus clientes y responder a sus necesidades. Su adecuada selección y gestión favorece un servicio accesible, eficiente y coherente con los valores institucionales. Los sistemas y canales de atención se clasifican de la siguiente manera:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Canales de comunicación directa")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img13.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Canales de comunicación directa
              p.mb-0 Comprenden la atención presencial en puntos de servicio u oficinas y la atención telefónica. Permiten una interacción inmediata y personalizada con el cliente.
        .py-3.py-md-4(titulo="Canales digitales")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img14.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Canales digitales
              p.mb-0 Incluyen el correo electrónico, las redes sociales, los chats en vivo y las aplicaciones de mensajería. Favorecen la inmediatez, la trazabilidad y la disponibilidad del servicio.
        .py-3.py-md-4(titulo="Sistemas de autoservicio")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img15.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Sistemas de autoservicio
              p.mb-0 Integran portales web, aplicaciones móviles y quioscos interactivos mediante los cuales los clientes pueden consultar información y gestionar solicitudes de manera autónoma.
        .py-3.py-md-4(titulo="Sistemas de gestión de retroalimentación (PQRSF)")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img16.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Sistemas de gestión de retroalimentación (PQRSF)
              p.mb-0 Comprenden buzones de sugerencias, formularios en línea y otros medios formales para recopilar peticiones, quejas, reclamos, sugerencias y felicitaciones de manera estructurada.
      p.mb-0 La implementación estratégica de estos sistemas y canales optimiza la experiencia del cliente, fortalece la reputación institucional y mejora la capacidad de respuesta ante contingencias o cambios en el entorno.
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 #[i Customer Relationship Management] (CRM)
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img17.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p La gestión de relaciones con el cliente (CRM, por sus siglas en inglés) permite centralizar y administrar la información generada durante las interacciones con los usuarios. Esta herramienta facilita el conocimiento estratégico de sus características y preferencias, así como el manejo eficiente de sus datos dentro de la organización (Montoya y Boyero, 2013). Un CRM no se limita al uso de un software; también constituye una estrategia de negocio apoyada en la tecnología para fortalecer la relación con los clientes.
      p.mb-5 Sus principales aplicaciones en la gestión del servicio y la seguridad pueden organizarse de la siguiente manera:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Centralización de información
                  p.mb-0 Integra datos de contacto, solicitudes, interacciones, preferencias y antecedentes del cliente en un mismo sistema.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img18.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Personalización del servicio
                  p.mb-0 Permite adaptar la atención a las características, necesidades y preferencias registradas de cada cliente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img19.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Anticipación de necesidades
                  p.mb-0 Facilita el análisis de la información para reconocer tendencias y responder oportunamente a los requerimientos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img20.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Gestión de quejas
                  p.mb-0 Favorece el registro, seguimiento y tratamiento organizado de las inconformidades comunicadas por los clientes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img21.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Apoyo a la seguridad
                  p.mb-0 Contribuye a identificar patrones de comunicación, antecedentes de quejas y situaciones que requieren valoración preventiva.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img22.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 La aplicación del CRM fortalece la toma de decisiones, la continuidad de la atención y el conocimiento del cliente. En el ámbito de la seguridad, la información registrada puede apoyar la identificación oportuna de situaciones potencialmente riesgosas.
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.4 Manejo y organización del tiempo en atención al cliente
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img23.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p La rapidez y el cumplimiento de los tiempos establecidos influyen en la percepción de calidad del servicio. Por ello, la gestión del tiempo debe reducir esperas y facilitar respuestas oportunas. La ISO 10001 destaca la puntualidad como principio para prestar el servicio con la mayor celeridad posible (Organización Internacional de Normalización, 2018a; Siviachay et al., 2023).
      p.mb-5 La gestión eficaz del tiempo en la atención al cliente puede desarrollarse mediante las siguientes acciones:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Planificar la atención
                p.mb-0 Definir actividades, responsables y tiempos de respuesta.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img24.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img25.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Establecer prioridades
                p.mb-0 Atender los requerimientos según su urgencia, complejidad e impacto.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Cumplir los tiempos
                p.mb-0 Desarrollar cada actuación dentro de los plazos establecidos.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img26.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img27.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Realizar seguimiento
                p.mb-0 Verificar el estado de las solicitudes y comunicar oportunamente los avances.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Aplicar mejoras
                p.mb-0 Identificar demoras y ajustar los procedimientos para optimizar la atención.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img28.png', alt='' style="width: 300px").m-auto
      p.mb-0 Estas acciones contribuyen a disminuir los tiempos de espera, organizar la carga de trabajo y proporcionar respuestas oportunas, lo cual fortalece la satisfacción y la confianza del cliente.
      Separador
      #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.5 Eventos
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img29.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Los eventos reúnen diferentes públicos y permiten proyectar la calidad del servicio de seguridad. En este contexto, cada interacción influye en la imagen institucional; por ello, el personal debe aplicar los protocolos con comunicación efectiva, empatía, firmeza y profesionalismo.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Concepto y tipos de eventos
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img30.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Un evento es un acontecimiento público o privado, previamente organizado, que reúne personas en un lugar y tiempo determinados para cumplir un propósito común. Su naturaleza y finalidad permiten establecer diferentes tipos de eventos (Sagarmanta, s. f.).
      p.mb-5 Según su propósito y las características de sus participantes, los eventos pueden clasificarse en los siguientes tipos:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 1.
            span Tipos de eventos
          .tabla-a(data-aos="zoom-in")
            table
              caption Tabla con fines didácticos que presenta los tipos de eventos.
              thead
                tr
                  th.ajuste-border-tabla.texto-left Tipo de Evento
                  th.texto-left Descripción
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Deportivos
                  td.texto-left Actividades centradas en la participación de deportistas, como competiciones, presentaciones o celebraciones.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Culturales
                  td.texto-left Actos que buscan fomentar creencias, valores y tradiciones, como conciertos, obras de teatro o exposiciones.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Religiosos
                  td.texto-left Encuentros motivados por la fe y creencias compartidas.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Empresariales
                  td.texto-left Acciones para fomentar una marca o producto, como ferias, congresos, convenciones o lanzamientos.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Académicos
                  td.texto-left Actividades con fines de enseñanza o capacitación, como seminarios, foros, congresos o talleres.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Políticos
                  td.texto-left Organizados por partidos políticos para dar a conocer programas, presentar candidaturas o realizar campañas.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Institucionales
                  td.texto-left Acontecimientos organizados por la administración pública o entidades privadas, como inauguraciones y homenajes.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Familiares
                  td.texto-left Celebraciones de carácter personal y privado, como bodas, cumpleaños o bautizos.
      p.mb-5 Cada tipo de evento requiere condiciones particulares de organización, atención y seguridad, de acuerdo con su propósito, cantidad de participantes y características del lugar.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Etapas y estructura general de un evento 
      .caja-5.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t3/img31.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-5_p
            p.mb-0 La organización de un evento requiere una estructura que permita convertir una idea en un proyecto viable, coordinar su desarrollo y evaluar los resultados alcanzados. Este proceso se organiza en cinco etapas fundamentales (Sagarmanta, s. f.).
      .row.justify-content-center.mb-5
        .col-xl-8
          .caja-4(data-aos="flip-up")
            .row.align-items-center
              .col-xl-auto.col-md-2.mb-3.mb-lg-0.mb-md-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/intro/img3.svg', alt='' style="width: 85px").m-auto
              .col-xl.col-md-10
                p.mb-0 La planificación y realización de un evento comprende las siguientes etapas:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Planificación estratégica
                p.mb-0 Se definen el concepto, los objetivos, el público objetivo y el plan general del evento.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img32.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img33.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Plan de negocio
                p.mb-0 Se establecen el presupuesto, los costos, las fuentes de financiación y la viabilidad económica.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Comunicación
                p.mb-0 Se determinan las estrategias y los canales para promocionar el evento y y convocar al público objetivo.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img34.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img35.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Ejecución
                p.mb-0 Se gestionan los permisos, proveedores, recursos, infraestructura y operaciones necesarias para desarrollar el evento.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Cierre y análisis
                p.mb-0 Se realizan los cierres administrativo y financiero, se evalúan los resultados y se identifican oportunidades de mejora.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img36.png', alt='' style="width: 300px").m-auto
      .row.align-items-center.mb-0
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t3/img12.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 La articulación de estas etapas facilita el cumplimiento de los objetivos, la asignación adecuada de los recursos y la coordinación de las actividades necesarias para el desarrollo seguro y eficiente del evento.

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
