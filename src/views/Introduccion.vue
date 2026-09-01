<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .caja-1.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1_p
            p.mb-0 En los servicios de seguridad, la atención al cliente constituye un componente estratégico para proteger las instalaciones, prevenir conflictos y fortalecer la confianza institucional. Su gestión exige protocolos, comunicación efectiva, criterios de calidad y procedimientos coherentes en cada interacción.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/intro/img1.png', alt='' style="width: 500px").m-auto
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/intro/img2.png', alt='' style="width: 500px").m-auto
        .col-xl
          .row.align-items-center.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/intro/img3.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 Este componente formativo aborda los momentos de verdad y el ciclo del servicio como referentes para reconocer la experiencia del usuario. Además, integra estrategias de atención presencial y tecnológica, sistemas de servicio, gestión de relaciones con clientes y organización del tiempo. También desarrolla principios para planificar eventos, seleccionar canales de comunicación, aplicar normas de netiqueta y actuar con claridad en contextos de seguridad.
          .caja-2(data-aos="fade-left")
            p.mb-0 Finalmente, incorpora las dimensiones del modelo Servqual, el uso de las PQRSF, el tratamiento de quejas y la respuesta ante contingencias. Estos conocimientos permiten que el personal actúe con empatía, precisión, oportunidad y profesionalismo, mientras articula la satisfacción del cliente con los objetivos, la mejora continua, la reputación organizacional y la seguridad en entornos de atención y servicio.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
