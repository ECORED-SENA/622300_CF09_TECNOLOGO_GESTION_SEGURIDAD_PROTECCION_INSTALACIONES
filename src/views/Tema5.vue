<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Calidad y contingencias en el servicio
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La calidad del servicio requiere una gestión sistemática orientada al cumplimiento de las expectativas del cliente y a la mejora continua. Asimismo, exige preparación para responder ante situaciones imprevistas que puedan afectar la atención, la seguridad o la reputación de la organización.
          .caja-4(data-aos="flip-up")
            .row.align-items-center
              .col-xl-auto.col-md-2.mb-3.mb-lg-0.mb-md-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/intro/img3.svg', alt='' style="width: 60px").m-auto
              .col-xl.col-md-10
                p.mb-0 Este tema aborda las características del servicio de calidad, la gestión de las PQRSF, el tratamiento de quejas y la respuesta ante contingencias.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t5/img1.png', alt='' style="width: 500px").m-auto
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.1 Características de un servicio de calidad
      p.mb-5 La calidad del servicio es multidimensional y depende de diferentes aspectos valorados por el cliente. El modelo Servqual establece cinco dimensiones que permiten analizar la experiencia y determinar el nivel de cumplimiento del servicio prestado (Parasuraman et al., 1988). La evaluación de la calidad del servicio comprende las siguientes dimensiones:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img2.png", alt="" style="width: 400px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Tangibilidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponde a la apariencia de las instalaciones, los equipos, el personal y los materiales utilizados durante la prestación del servicio.
            .row(titulo="Fiabilidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Es la capacidad de prestar el servicio prometido de manera precisa, coherente y conforme con las condiciones establecidas.
            .row(titulo="Capacidad de respuesta").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Representa la disposición para atender las necesidades del cliente y proporcionar un servicio ágil y oportuno.
            .row(titulo="Seguridad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprende el conocimiento, la cortesía y la capacidad del personal para generar confianza y credibilidad.
            .row(titulo="Empatía").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Consiste en proporcionar una atención individualizada, basada en la comprensión de las necesidades particulares del cliente.
      .caja-1.mb-0(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1_p
            p.mb-0 Estas dimensiones se articulan con principios de la gestión de la calidad establecidos en la NTC-ISO 9001, como el enfoque al cliente, el liderazgo y la mejora continua (Organización Internacional de Normalización, 2015). Asimismo, el valor agregado permite diferenciar el servicio mediante beneficios adicionales que fortalecen la satisfacción y la lealtad del cliente (Serna, 1999; Zeithaml y Bitner, 2002).
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t5/img3.png', alt='' style="width: 500px").m-auto
      Separador
      #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.2 Concepto y uso de las PQRSF
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img4.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p El sistema de peticiones, quejas, reclamos, sugerencias y felicitaciones (PQRSF) es un mecanismo formal para recopilar y gestionar las manifestaciones de los clientes. Su aplicación permite identificar necesidades, valorar el servicio y obtener información para la mejora continua. Su propósito se relaciona con las orientaciones de la ISO 10002 para el tratamiento de las quejas en las organizaciones (Organización Internacional de Normalización, 2018b).
      p.mb-5 La información gestionada mediante las PQRSF cumple las siguientes funciones:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t5/img5.jpg', alt="" ).m-auto
              h4.text-center Identificar fallos
              .caja-3_p
                p.mb-0  Permite detectar problemas recurrentes en los productos, servicios o procesos de la organización.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t5/img6.jpg', alt="" ).m-auto
              h4.text-center Capturar oportunidades de mejora
              .caja-3_p
                p.mb-0 Convierte las quejas y sugerencias en información útil para ajustar los procesos e impulsar la innovación.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t5/img7.jpg', alt="" ).m-auto
              h4.text-center Reforzar buenas prácticas
              .caja-3_p
                p.mb-0 Facilita el reconocimiento y la réplica de las actuaciones que generan satisfacción y felicitaciones.
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img8.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p El análisis de las PQRSF favorece el control de las solicitudes, la medición de la satisfacción y la toma de decisiones orientadas al mejoramiento del servicio y al fortalecimiento de la relación con los clientes.
      p.mb-5 El siguiente video amplía la importancia de las PQRSF y su contribución a la fidelización, la evaluación del servicio y la mejora continua.
      figure(data-aos="zoom-in").mb-0
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Atención PQR
      Separador
      #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.3 Atención y tratamiento de quejas y requerimientos del cliente
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La gestión de quejas permite reconocer las causas de la inconformidad y proporcionar soluciones orientadas a recuperar la confianza del cliente. Ante un problema, este puede permanecer en la organización, expresar su inconformidad o abandonar la relación; por ello, resulta fundamental facilitar la comunicación y gestionar eficazmente cada caso (Setó, 2004).
          .caja-2.color-2(data-aos="fade-right")
            p.mb-0 Las normas ISO 10002 e ISO 10003 proporcionan orientaciones para el tratamiento interno de las quejas y la resolución externa de controversias (Organización Internacional de Normalización, 2018b, 2018c).
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t5/img9.png', alt='' style="width: 500px").m-auto
      .row.justify-content-center.mb-5
        .col-lg-8
          .caja-2.text-center(data-aos="zoom-in")
            p.mb-0 El tratamiento de una queja comprende las siguientes fases:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Recepción
                p.mb-0 Identificar al cliente y el tipo de queja, además de registrar la información relevante de manera organizada y respetuosa.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t5/img10.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t5/img11.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Análisis
                p.mb-0 Examinar el origen, la importancia y la frecuencia de la queja para establecer las causas del problema.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Decisión y solución
                p.mb-0 Seleccionar una respuesta viable, adaptada a las características del caso, y comunicarla de manera clara y oportuna.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t5/img12.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t5/img13.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Seguimiento
                p.mb-0 Verificar la aplicación y efectividad de la solución, así como el nivel de satisfacción alcanzado por el cliente.
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t3/img12.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 La aplicación ordenada de estas fases permite atender la inconformidad, prevenir su repetición y convertir la queja en una oportunidad para fortalecer el servicio y recuperar la confianza del cliente.
      p.mb-5 Se invita al aprendiz a participar en este pódcast sobre el tratamiento de quejas en los servicios de seguridad. Mediante un caso aplicado, podrá reconocer cómo una inconformidad puede convertirse en una oportunidad para recuperar la confianza del cliente.
      .row.align-items-center.m-0.mb-0
        .col-xl
          .row.align-items-center.justify-content-center.caja-6(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t5/img14.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="De la inconformidad a la confianza: gestión efectiva de quejas"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t5/img15.png" style="max-width: 510px").m-auto
      Separador
      #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.4 Contingencias
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2.mb-3(data-aos="fade-right")
            p.mb-0 Una contingencia es un acontecimiento imprevisto capaz de afectar la continuidad del servicio o la seguridad operacional. Su gestión requiere anticipar los riesgos, establecer medidas de respuesta y disponer los recursos necesarios para reducir sus consecuencias.
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t2/img15.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 Este enfoque se relaciona con el pensamiento basado en riesgos de la NTC-ISO 9001, que establece la planificación de acciones para abordar riesgos y oportunidades (Organización Internacional de Normalización, 2015).
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t5/img16.png', alt='' style="width: 500px").m-auto
      .row.justify-content-center.mb-5
        .col-lg-8
          .caja-2(data-aos="zoom-in")
            p.mb-0 La gestión de contingencias puede organizarse mediante las siguientes acciones:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Identificar riesgos
                p.mb-0 Reconocer los acontecimientos que pueden interrumpir el servicio o afectar la seguridad.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t5/img17.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t5/img18.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Valorar consecuencias
                p.mb-0 Establecer la probabilidad y el impacto de cada situación.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Preparar la respuesta
                p.mb-0 Definir procedimientos, responsables, recursos y canales de comunicación.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t5/img19.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t5/img20.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Actuar ante el evento
                p.mb-0 Aplicar las medidas establecidas y coordinar la respuesta.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Evaluar y mejorar
                p.mb-0 Analizar los resultados y ajustar los planes de contingencia.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t5/img21.png', alt='' style="width: 300px").m-auto
      p.mb-5 La preparación anticipada reduce la improvisación, favorece la continuidad del servicio y fortalece la capacidad de respuesta de la organización ante situaciones adversas.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tipos de contingencias
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img15.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Las contingencias pueden originarse en fallas tecnológicas, incidentes de seguridad, afectaciones reputacionales o circunstancias que impidan el desarrollo de un evento. Cada situación requiere medidas de prevención y respuesta acordes con sus características. La siguiente tabla relaciona algunos tipos de contingencias con ejemplos y posibles medidas de respuesta:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 2.
        span Tipos de contingencias
      .tabla-a(data-aos="zoom-in").mb-5
        table
          caption Tabla con fines didácticos que presenta los tipos de contingencias.
          thead
            tr
              th.ajuste-border-tabla.texto-left Tipo de Contingencia
              th.ajuste-border-tabla.texto-left Ejemplo
              th.texto-left Posible Solución
          tbody
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Falla Técnica
              td.ajuste-border-tabla.texto-left Caída del sistema de control de acceso o de la plataforma de venta de entradas en línea.
              td.texto-left Implementar sistemas de respaldo (redundancia), tener un protocolo de acceso manual preparado y un equipo técnico de respuesta rápida.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Incidente de Seguridad
              td.ajuste-border-tabla.texto-left Un altercado entre visitantes o la detección de un objeto sospechoso durante un evento.
              td.texto-left Disponer de personal de seguridad capacitado en desescalada de conflictos, protocolos de evacuación claros y coordinación con las fuerzas de seguridad.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Crisis de Reputación
              td.ajuste-border-tabla.texto-left Una queja masiva y viral en redes sociales sobre un mal servicio o un fallo de seguridad.
              td.texto-left Tener un plan de comunicación de crisis, monitorear activamente las redes sociales y responder de manera rápida, transparente y empática.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Cancelación de Evento
              td.ajuste-border-tabla.texto-left Cancelación de último minuto debido a condiciones meteorológicas extremas o incomparecencia del artista principal.
              td.texto-left Contratar un seguro de cancelación, tener un plan de comunicación claro para los asistentes y establecer una política de devolución de entradas eficiente.
      p.mb-0 La identificación de estos escenarios facilita la preparación de respuestas específicas, la asignación de responsabilidades y la reducción de los efectos que una contingencia puede generar sobre las personas, el servicio y la reputación institucional.

</template>

<script>
import audio1 from '@/assets/curso/temas/t5/audios/audio-ej.mp3'
export default {
  name: 'Tema5',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
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
