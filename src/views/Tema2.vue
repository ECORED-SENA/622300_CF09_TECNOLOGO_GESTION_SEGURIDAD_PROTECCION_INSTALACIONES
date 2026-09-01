<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Proceso de atención al cliente
      .caja-1.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1_p
            p.mb-0 La excelencia en el servicio al cliente depende de procesos estandarizados y estrategias definidas que orienten cada interacción, garanticen una experiencia consistente y reduzcan las inconsistencias en la atención.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t2/img1.png', alt='' style="width: 500px").m-auto
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Momentos de verdad
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img2.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Los momentos de verdad son interacciones que influyen en la percepción del servicio y la confianza institucional. En seguridad, requieren profesionalismo, empatía y claridad para favorecer una experiencia positiva y el cumplimiento de los procedimientos (Moreno, 2009; Restrepo et al., 2006).
      p.mb-5 El siguiente video profundiza en las clases de momentos de verdad y su incidencia en las decisiones y la satisfacción del cliente:
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Momentos de verdad
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tipos según la naturaleza del contacto
      p.mb-5 Los momentos de verdad pueden producirse mediante la interacción directa con el personal o a través de recursos tecnológicos y elementos institucionales. Según el medio utilizado, el contacto puede clasificarse en personal o impersonal.
      .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
        .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t2/img4.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Contacto personal
          p Se produce mediante la interacción directa entre el personal y el cliente, por lo que influye significativamente en su percepción y respuesta emocional.
          p.mb-0 #[b Ejemplo:] un guarda de seguridad saluda cordialmente a un visitante, verifica su identificación de manera eficiente y proporciona indicaciones claras.
        .col-xl-6.col-md-10.tarjeta.color-primario.text-white.p-5
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t2/img5.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Contacto impersonal
          p Ocurre a través de sistemas, señalización, instalaciones u otros medios que no requieren la intervención directa del personal.
          p.mb-0 #[b Ejemplo:] la señalización de emergencia clara, accesible y comprensible facilita la orientación y transmite preparación institucional para proteger a los ocupantes.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ciclo del servicio
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img6.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p El ciclo del servicio comprende la secuencia de interacciones que experimenta el cliente, desde el contacto inicial hasta la finalización de la atención; las cuales, se conocen como momentos de verdad. Su análisis permite identificar puntos críticos, corregir fallas y fortalecer la calidad, la eficiencia y la fidelización (Restrepo et al., 2006).
      p.mb-5 Las principales interacciones del ciclo se organizan de acuerdo con el recorrido del cliente y son las siguientes:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Recepción
                p.mb-0 Se establece el contacto inicial con el visitante y se identifica el motivo de su ingreso.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img7.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img8.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Verificación
                p.mb-0 Se confirman la identidad, la autorización y los datos requeridos para permitir el acceso.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Orientación
                p.mb-0 Se proporcionan indicaciones claras sobre las normas, el procedimiento y el lugar de destino.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img9.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img10.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Acompañamiento
                p.mb-0 Se facilita el desplazamiento autorizado dentro de las instalaciones, según los protocolos establecidos.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Cierre
                p.mb-0 Se finaliza la atención y se recopila información sobre la satisfacción con el servicio.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img11.png', alt='' style="width: 300px").m-auto
      .row.justify-content-center.mb-0
        .col-lg-10
          .caja-2(data-aos="zoom-in")
            p.mb-0 Si en alguno de estos pasos se detecta una demora o una actitud poco cordial, se puede intervenir con capacitaciones o ajustes operativos para garantizar una atención más eficiente y empática (Restrepo et al., 2006).
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Estandarización en el servicio al cliente
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img12.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 La estandarización del servicio al cliente se fundamenta en la #[b NTC-ISO 9001], sobre gestión de la calidad; la #[b ISO 10001], relacionada con los códigos de conducta; y la #[b ISO 10002], orientada al tratamiento de quejas. Estas normas respaldan la definición de criterios comunes para reducir variaciones y garantizar una atención coherente con los compromisos de calidad de la organización (Organización Internacional de Normalización, 2015, 2018a, 2018b). Un manual de servicio al cliente debe integrar los siguientes componentes:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img13.png", alt="" style="width: 250px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Políticas de servicio").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Establecen el compromiso de la organización con la calidad del servicio y la satisfacción del cliente.
            .row(titulo="Protocolos de comunicación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Definen el tono, el lenguaje y los canales apropiados para las interacciones presenciales y digitales.
            .row(titulo="Procedimientos para la gestión de PQRSF").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Orientan la recepción, el análisis, la solución y el seguimiento de peticiones, quejas, reclamos, sugerencias y felicitaciones.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Guías para la atención de contingencias").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Determinan las actuaciones ante fallas en los sistemas, incidentes de seguridad, quejas masivas y otras situaciones imprevistas.
            .row(titulo="Estándares de interacción").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Establecen pautas de comportamiento para el saludo, la atención respetuosa, la comunicación asertiva y la despedida.
            .row(titulo="Indicadores de desempeño").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permiten evaluar la eficacia del servicio mediante tiempos de respuesta, niveles de satisfacción y cumplimiento de los procedimientos.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img14.png", alt="" style="width: 280px").m-auto
      p.mb-0 Estos componentes favorecen una atención uniforme, facilitan la evaluación del desempeño y respaldan la mejora continua del servicio (Organización Internacional de Normalización, 2015, 2018a, 2018b).
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Protocolos
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img15.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Los protocolos de servicio reúnen normas, instrucciones y recomendaciones que orientan y estandarizan la interacción con clientes internos y externos. Su aplicación favorece una atención coherente, respetuosa y eficaz, de acuerdo con el contexto organizacional (Restrepo et al., 2006). A partir del concepto de protocolo, se proponen los siguientes criterios para orientar su aplicación en el ámbito de la seguridad:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t2/img16.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img17.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Uniformidad
                  p.mb-0.text-center Aplicar las mismas pautas ante situaciones equivalentes.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img18.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Claridad
                  p.mb-0.text-center Comunicar normas e instrucciones de manera comprensible.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img19.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Oportunidad
                  p.mb-0.text-center Intervenir dentro de los tiempos establecidos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img20.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Trazabilidad
                  p.mb-0.text-center Registrar las actuaciones y novedades relevantes.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img21.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Adaptación
                  p.mb-0.text-center Ajustar la actuación al contexto sin incumplir el procedimiento.
          .row.justify-content-center.mb-5
            .col-lg-10
              .caja-2.color-1(data-aos="zoom-in")
                p.mb-0 Estos criterios fortalecen la confianza, facilitan el cumplimiento de las normas y favorecen una actuación preventiva, coherente y centrada en las personas.  
      p.mb-5 El siguiente video amplía la función de los protocolos y su adaptación a las características del cliente y a las transformaciones tecnológicas.
      figure(data-aos="zoom-in").mb-0
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Protocolos de servicios al cliente
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Estrategias de atención cara a cara
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La atención cara a cara constituye un momento de verdad que influye directamente en la percepción del cliente. Su efectividad requiere cortesía, disposición ante las necesidades y un trato personalizado que permita valorar a cada persona de manera individual (Leppard y Molyneux, 2000).
          .caja-2.color-2(data-aos="fade-right")
            p.mb-0 El modelo Servqual complementa este enfoque mediante dos dimensiones especialmente relevantes para la interacción presencial (Parasuraman et al., 1988).
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img22.png', alt='' style="width: 500px").m-auto
      p.mb-5 Las siguientes dimensiones orientan una atención personalizada y generan confianza durante la prestación del servicio:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img23.jpg', alt="" ).m-auto
                  h4.text-center Empatía
                  .caja-3_p
                    p.mb-0.text-center Capacidad para comprender las necesidades particulares del cliente y proporcionarle una atención individualizada.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img24.jpg', alt="" ).m-auto
                  h4.text-center Seguridad
                  .caja-3_p
                    p.mb-0.text-center Conocimiento, cortesía y capacidad del personal para transmitir confianza y credibilidad durante la interacción.
          p.mb-0 La aplicación conjunta de la empatía y la seguridad favorece una atención respetuosa, confiable y adaptada a las necesidades del cliente.
          Separador
          #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 2.5 Estrategias de atención mediante medios tecnológicos 
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2.mb-3(data-aos="fade-right")
            p.mb-0 La tecnología ha ampliado los canales de atención y la capacidad de los clientes para comunicar públicamente sus experiencias. Por ello, las organizaciones deben gestionar estos medios con criterios que fortalezcan la confianza y protejan su reputación (Blanco y Segarra-Oña, 2017; Morales Ospina, 2019).
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t2/img12.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 La norma ISO 10008 establece orientaciones para favorecer transacciones de comercio electrónico confiables y satisfactorias (Organización Internacional de Normalización, 2022).
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img25.png', alt='' style="width: 500px").m-auto
      p.mb-5 La atención mediante medios tecnológicos puede orientarse mediante las siguientes estrategias:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Transparencia informativa")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img26.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Transparencia informativa
              p.mb-0 Proporcionar información precisa, completa, comprensible y no engañosa sobre los servicios, precios, políticas, términos y condiciones.
        .py-3.py-md-4(titulo="Seguridad de las transacciones")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img27.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Seguridad de las transacciones
              p.mb-0 Proteger los datos personales y financieros mediante sistemas y procedimientos confiables que favorezcan interacciones digitales seguras.
        .py-3.py-md-4(titulo="Accesibilidad y usabilidad")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img28.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Accesibilidad y usabilidad
              p.mb-0 Disponer plataformas comprensibles y funcionales que faciliten el acceso, la navegación y la realización de trámites por parte de diferentes usuarios.
      p.mb-0 La aplicación de estas estrategias favorece una atención digital confiable, reduce las barreras de acceso y fortalece la relación entre la organización y sus clientes.

</template>

<script>
export default {
  name: 'Tema2',
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
