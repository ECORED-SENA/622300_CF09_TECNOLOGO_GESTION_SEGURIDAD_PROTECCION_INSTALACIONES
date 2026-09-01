<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Comunicación empresarial
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La comunicación empresarial permite intercambiar información, fortalecer la cultura organizacional, gestionar las expectativas del cliente y proyectar la identidad corporativa. En los servicios de seguridad, constituye un recurso estratégico para promover el liderazgo, la confianza y la actuación coordinada del personal.
          .caja-2(data-aos="fade-right")
            p.mb-0 Este tema comprende las técnicas, los tipos, las formas de expresión, los canales y las normas aplicables a la comunicación organizacional.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img1.png', alt='' style="width: 500px").m-auto
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Técnicas de comunicación efectiva
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img15.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 La comunicación efectiva fortalece el liderazgo y contribuye a consolidar la cultura organizacional. En una cultura de servicio, debe reflejarse en prácticas que favorezcan relaciones respetuosas, mensajes comprensibles y actuaciones coherentes (Barrios, 2019; Restrepo et al., 2006). La comunicación efectiva se fundamenta en las siguientes prácticas:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img2.png", alt="" style="width: 250px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Comunicación asertiva").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Expresar ideas, necesidades e instrucciones de manera clara, directa y respetuosa.
            .row(titulo="Respeto a las personas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Reconocer el valor y las diferencias de cada persona para favorecer un diálogo constructivo.
            .row(titulo="Transparencia en el actuar").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comunicar la información con claridad y promover relaciones laborales honestas y abiertas.
      .caja-1.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1_p
            p.mb-0 Estas prácticas facilitan la comprensión de los mensajes, fortalecen las relaciones interpersonales y favorecen una actuación profesional en la prestación del servicio.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t4/img3.png', alt='' style="width: 500px").m-auto
      p.mb-5 Para sistematizar la comunicación, el apartado 7.4 de la NTC-ISO 9001 establece que la organización debe determinar los siguientes aspectos (Organización Internacional de Normalización, 2015):
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img4.png", alt="" style="width: 400px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Qué comunicar").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Define la información que debe transmitirse, como instrucciones, novedades, procedimientos, resultados o cambios organizacionales.
            .row(titulo="Cuándo comunicar").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Establece el momento y la frecuencia adecuados para comunicar la información, de acuerdo con su importancia, urgencia y propósito.
            .row(titulo="A quién comunicar").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Identifica los destinatarios internos o externos que requieren recibir la información para actuar, tomar decisiones o mantenerse informados.
            .row(titulo="Cómo comunicar").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Determina el medio, canal y formato más apropiados para transmitir el mensaje de manera clara, oportuna y comprensible.
            .row(titulo="Quién comunica").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Asigna la responsabilidad de emitir la información a una persona, cargo o área autorizada por la organización.
      p.mb-0 La definición de estos aspectos permite planificar las comunicaciones y garantizar que la información llegue al público correspondiente, mediante el canal y el momento adecuados.
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Tipos de comunicación empresarial
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img5.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p La comunicación empresarial puede clasificarse de acuerdo con el momento en que ocurre la interacción y el público al cual se dirige. Estas categorías permiten seleccionar la forma más apropiada de transmitir información en cada contexto organizacional (Universidad del Tolima, 2020).
      p.mb-5 Según la sincronía y el público destinatario, se distinguen los siguientes tipos:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Comunicación síncrona")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img6.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Comunicación síncrona
              p.mb-0 Ocurre en tiempo real y permite la interacción simultánea entre los participantes. Incluye las videoconferencias y las llamadas telefónicas; resulta útil para coordinar actividades y tomar decisiones inmediatas.
        .py-3.py-md-4(titulo="Comunicación asíncrona")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img7.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Comunicación asíncrona
              p.mb-0 Se desarrolla en momentos diferentes mediante recursos como el correo electrónico y los foros. Facilita respuestas reflexivas y conserva un registro documental de la interacción.
        .py-3.py-md-4(titulo="Comunicación interna")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img8.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Comunicación interna
              p.mb-0 Corresponde al flujo de información entre los integrantes de la organización. Favorece la coordinación, la motivación y el fortalecimiento de la cultura corporativa.
        .py-3.py-md-4(titulo="Comunicación externa")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img9.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Comunicación externa
              p.mb-0 Se dirige a clientes, proveedores y demás públicos externos. Contribuye a proyectar la identidad, la imagen y la reputación de la organización.
      p.mb-0 Estas clasificaciones pueden complementarse entre sí. Por ejemplo, una comunicación interna puede ser síncrona cuando se realiza mediante una reunión virtual o asíncrona cuando se utiliza el correo electrónico.
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.3 Expresión oral y escrita en contextos de seguridad
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img10.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p La corrección, la formalidad y las buenas maneras reflejan respeto por el interlocutor y seriedad institucional. En los servicios de seguridad, la expresión oral y escrita también cumple una función operativa, pues facilita la transmisión precisa de instrucciones, hechos y novedades (Etiqueta, protocolo y buenas maneras, s. f.).
      p.mb-5 Según el medio empleado, la comunicación en contextos de seguridad puede desarrollarse de las siguientes formas:
      .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
        .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t2/img4.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Expresión oral
          p.mb-0 Se emplea para proporcionar instrucciones, gestionar el control de accesos y reducir la tensión durante un conflicto. Requiere mensajes claros, concisos y precisos, expresados con un tono calmado, firme y respetuoso.
        .col-xl-6.col-md-10.tarjeta.color-primario.text-white.p-5
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t2/img5.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Expresión escrita
          p.mb-0 Se utiliza en informes de incidentes, comunicados y registros de seguridad. Requiere claridad, objetividad y precisión en la descripción de los hechos para facilitar su análisis y respaldar la validez operativa y jurídica de la información.
      .row.align-items-center.mb-0
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t3/img12.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 La expresión oral favorece la actuación inmediata, mientras que la escrita permite documentar los hechos. Ambas deben emplearse de manera complementaria para fortalecer la comunicación y la trazabilidad del servicio.
      Separador
      #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.4 Canales de comunicación y su uso estratégico
      p.mb-5 La elección del canal de comunicación adecuado es determinante para la eficacia del mensaje. Sagarmanta (s.f.) distingue entre dos grandes tipos de canales:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t4/img11.jpg', alt="" ).m-auto
                  h4.text-center Canales #[i Off line] (tradicionales)
                  .caja-3_p
                    p.mb-0.text-center Medios tradicionales como cartelería, radio, prensa y televisión. Siguen siendo efectivos para públicos específicos y para generar un impacto local.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t4/img12.jpg', alt="" ).m-auto
                  h4.text-center Canales #[i On line] (digitales)
                  .caja-3_p
                    p.mb-0.text-center Medios digitales como páginas web, redes sociales y correo electrónico. Permiten una segmentación muy precisa y una interacción directa con el público.
          p.mb-0 La estrategia de comunicación debe seleccionar y combinar los canales de acuerdo con el público objetivo (#[i target]) al cual se dirige el mensaje. Una elección inadecuada puede reducir su alcance, comprensión y efectividad.
          Separador
          #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 4.5 Netiqueta 
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img15.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 La netiqueta comprende las normas de comportamiento y protocolo aplicables a la comunicación virtual. Su cumplimiento permite mantener el respeto, la claridad y el profesionalismo durante las interacciones desarrolladas mediante medios digitales (Universidad del Tolima, 2020). La comunicación profesional en entornos virtuales debe considerar las siguientes normas:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img13.png", alt="" style="width: 400px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Respetar los horarios").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Ser puntual en las sesiones síncronas y respetar los horarios laborales acordados para contactar a colegas o clientes.
            .row(titulo="Organizar el espacio de trabajo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Para las videoconferencias, elegir un lugar adecuado, con buena iluminación, sin ruidos y con un fondo profesional.
            .row(titulo="Comportarse como en un entorno presencial formal").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Mantener una vestimenta adecuada y evitar acciones inapropiadas, como comer durante una reunión.
            .row(titulo="Usar un lenguaje formal y respetuoso").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Pensar antes de escribir, ser conciso, verificar la ortografía y evitar el uso de lenguaje coloquial o emoticonos que puedan ser malinterpretados.
            .row(titulo="Comunicarse con estructura").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incluir saludo, propósito del mensaje, información necesaria y despedida, de manera que el destinatario pueda comprender y responder adecuadamente.
      p.mb-0 Estas normas favorecen interacciones digitales respetuosas, ordenadas y comprensibles, además de contribuir al cuidado de la imagen profesional y de la reputación institucional.

</template>

<script>
export default {
  name: 'Tema4',
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
