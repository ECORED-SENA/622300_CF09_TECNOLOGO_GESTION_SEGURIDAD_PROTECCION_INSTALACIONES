<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Servicio al cliente en la seguridad integral
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img1.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p El servicio al cliente constituye un componente estratégico de la seguridad integral, pues orienta la interacción profesional con usuarios, visitantes y demás públicos de la organización. Los apartados de este tema permiten comprender su relevancia organizacional y su articulación con la protección de las instalaciones.
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Importancia del servicio al cliente en la seguridad integral
      p.mb-5 La calidad del servicio favorece la satisfacción y fidelización del cliente, fortalece la sostenibilidad organizacional y contribuye a prevenir conflictos en contextos de seguridad. Los siguientes aspectos sintetizan los principales aportes del servicio al cliente a la organización y a la seguridad operacional:
      .bg-slider.mb-0
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Satisfacción y fidelización
                  p.mb-0 Un cliente satisfecho tiende a repetir sus compras, mantener su relación con la organización y generar recomendaciones positivas (Moliner Cantos, 2001; Morales Ospina, 2019).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img2.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Sostenibilidad organizacional
                  p.mb-0 La fidelidad del cliente constituye un activo que favorece la permanencia y competitividad de la organización en el mercado (Duque Fierro et al., 2016).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Prevención de conflictos
                  p.mb-0 Una interacción respetuosa y profesional permite reducir malentendidos, puntos de fricción y situaciones que podrían convertirse en incidentes de seguridad.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Cultura de servicio
                  p.mb-0 La orientación al cliente debe involucrar a todos los integrantes de la organización, incluido el personal encargado de la seguridad (García, 2016; Restrepo et al., 2006).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Convivencia y confianza
                  p.mb-0 La comunicación asertiva, el respeto por las diferencias y la transparencia fortalecen las relaciones y favorecen un entorno seguro y colaborativo (Restrepo et al., 2006).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img6.png', alt='' style="max-width: 500px").m-auto
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Relación entre atención al cliente y protección de instalaciones
      p.mb-5 La atención al cliente y la protección de instalaciones se articulan mediante interacciones que facilitan el cumplimiento de las normas y la identificación oportuna de riesgos. Esta relación se concreta en prácticas que fortalecen simultáneamente la experiencia del usuario y los procedimientos de seguridad; tales como:
      .row.align-items-center.mb-0
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img7.png", alt="" style="width: 410px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Contacto inicial").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El personal de seguridad constituye uno de los primeros puntos de contacto con visitantes y usuarios, por lo que su actuación influye en la confianza institucional.
            .row(titulo="Identificación oportuna").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La interacción con el público permite reconocer comportamientos inusuales, posibles amenazas o vulnerabilidades que requieren atención temprana.
            .row(titulo="Aplicación de controles").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La cortesía y la claridad durante los controles de acceso, las rondas y la orientación favorecen la cooperación y el cumplimiento de las normas.
            .row(titulo="Prevención de confrontaciones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El trato profesional reduce tensiones y evita que las dificultades surgidas durante los procedimientos se conviertan en conflictos.
            .row(titulo="Optimización de la seguridad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La colaboración de visitantes y usuarios facilita los procesos de control y permite concentrar los esfuerzos en amenazas o riesgos reales.

</template>

<script>
export default {
  name: 'Tema1',
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
