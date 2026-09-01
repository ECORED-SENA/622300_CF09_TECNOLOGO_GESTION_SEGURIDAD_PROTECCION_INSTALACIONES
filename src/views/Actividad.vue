<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Evaluación de conocimientos sobre protocolos de servicio al cliente',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión de los conceptos, estrategias y procedimientos relacionados con la atención al cliente, la comunicación empresarial, la calidad del servicio, las PQRSF, los eventos y la gestión de contingencias en contextos de seguridad.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué se entiende por momento de verdad en la gestión del servicio al cliente?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una revisión periódica de los resultados financieros alcanzados por la organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un procedimiento interno para supervisar las actividades ejecutadas por todo el personal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una interacción en la que el cliente forma una percepción del servicio recibido.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Una estrategia comercial para subir las ventas corporativas de nuevos productos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Cuál es la finalidad de analizar el ciclo del servicio?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Identificar puntos críticos y diseñar estrategias para mejorar la experiencia del cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Establecer correctivos al personal que incumpla los horarios establecidos del servicio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Determinar costos financieros generados al prestar los servicios solicitados por el cliente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Clasificar a los clientes según el valor económico de compras realizadas en la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es el propósito principal de los protocolos de servicio al cliente?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Disminuir el contacto entre sí los colaboradores y los usuarios atendidos por la organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reemplazar las políticas institucionales por decisiones particulares de su personal encargado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Limitar la atención a clientes solo a los canales tecnológicos disponibles en la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Estandarizar las interacciones para garantizar una atención coherente, respetuosa y eficaz.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué característica corresponde a la atención cara a cara?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Utiliza las plataformas digitales para gestionar las solicitudes de cada cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Promueve la cortesía, la receptividad y el trato personalizado al cliente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Elimina la atención directa para reducir los tiempos de espera de cada cliente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Registra automáticamente los datos personales suministrados por el cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué debe garantizarse durante la atención mediante medios tecnológicos?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La eliminación permanente de los canales presenciales disponibles hoy en la organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La transparencia informativa, la seguridad transaccional y la accesibilidad de las plataformas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La divulgación pública de los datos personales registrados por los clientes de la organización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La restricción de todo servicio digital para usuarios con necesidades particulares de atención.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué elementos integran el triángulo del servicio?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Los proveedores, los inversionistas, los productos y los competidores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La planeación, las finanzas, la contabilidad, la publicidad y la evaluación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Los competidores, los mercados y los productos de la organización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La estrategia de servicio, los empleados, los sistemas y el cliente central.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué relación existe entre el cliente interno y el servicio externo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El trato recibido por los empleados influye en la atención brindada al cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La satisfacción externa depende de los precios establecidos por la organización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El cliente interno determina las decisiones económicas de los usuarios externos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La calidad interna reemplaza los protocolos usados durante la atención al público.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cuál es la función principal de un sistema CRM?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reemplazar a los empleados encargados de atender a los requerimientos de todos los clientes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Administrar los recursos económicos utilizados en campañas de comunicación institucional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Centralizar y analizar información para conocer y gestionar estratégicamente a los clientes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Controlar únicamente el ingreso o acceso de visitantes a las instalaciones de la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál de los siguientes corresponde a un sistema de autoservicio?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una oficina presencial que permite atender peticiones con el apoyo directo de un asesor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una llamada telefónica atendida personalmente por un colaborador de la organización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una reunión para solucionar las inconformidades comunicadas por el o los clientes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un portal web que permite gestionar solicitudes sin intervención directa del personal.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Por qué es importante gestionar adecuadamente el tiempo de atención?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque los tiempos de espera influyen en la percepción de calidad del servicio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Porque permite eliminar los procedimientos para atender a los diferentes usuarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque exige resolver las peticiones mediante los canales de autoservicio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque evita registrar las interacciones realizadas entre el personal y los clientes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿En qué fase de un evento se establecen los objetivos y el público objetivo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'En la fase de comunicación y promoción dirigida al público seleccionado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'En la fase de ejecución y coordinación de las actividades programadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'En la fase de planificación estratégica y formulación general del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'En la fase de cierre contable y evaluación final de los resultados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué actividad se realiza durante el cierre y análisis de un evento?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Establecer o definir el concepto y el público objetivo al cual se destina la actividad planificada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Evaluar los resultados alcanzados y analizar las lecciones aprendidas durante su realización.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Gestionar los permisos, proveedores e instalaciones requeridos para ejecutar el evento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Diseñar el plan comunicativo para promocionar y divulgar las actividades previstas ante el público.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué caracteriza a la comunicación síncrona?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La interacción ocurre en tiempo real y permite tomar decisiones rápidas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La información se intercambia en momentos distintos por correos y foros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Los mensajes se dirigen exclusivamente a personas externas de la organización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La comunicación queda limitada a documentos formales y reportes escritos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Cuál es una característica de la expresión escrita en contextos de seguridad?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Emplear expresiones informales para simplificar los informes de los incidentes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Incorporar opiniones personales al redactar informes sobre los incidentes ocurridos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Emplear términos ambiguos para proteger la identidad del personal de seguridad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Redactar los hechos con claridad y objetividad para facilitar su análisis posterior.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué práctica corresponde a las normas de netiqueta?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Emplear expresiones coloquiales para crear cercanía con los participantes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Incluir saludo, asunto claro y despedida formal en los mensajes digitales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Contactar a clientes fuera del horario laboral sin permiso organizacional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Usar emoticonos para reemplazar explicaciones en mensajes institucionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            'Según el modelo Servqual, ¿qué significa fiabilidad en el servicio?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mantener instalaciones modernas con materiales visuales bastante atractivos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Brindar atención personalizada según las preferencias de todos los clientes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Prestar el servicio prometido de una forma precisa, consistente y confiable.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Proporcionar respuestas inmediatas sin aplicar los procedimientos acordados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Cuál es el propósito del sistema de PQRSF?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Registrar las felicitaciones recibidas únicamente por el personal interno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Aplicar sanciones inmediatas al personal referido en las quejas recibidas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Capturar la voz del cliente y facilitar la mejora continua del servicio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Sustituir los canales de atención empleados para resolver las solicitudes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Cuál es la primera fase del tratamiento de una queja?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Recibir la queja, identificar al cliente y registrar la información relevante.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Seleccionar la solución final y comunicarla oportunamente al cliente afectado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Investigar las causas y establecer la frecuencia del inconveniente presentado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Confirmar después si la respuesta ofrecida sí satisfizo plenamente al cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué acción corresponde al seguimiento de una queja?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Clasificar la queja según origen, frecuencia e importancia institucional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Registrar los datos del cliente y describir claramente la queja recibida.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Elegir una solución acorde con el perfil y las necesidades de un cliente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Confirmar que la solución fue efectiva y que el cliente quedó satisfecho.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué acción permite gestionar una falla técnica en el control de acceso?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Suspender la atención y esperar hasta el restablecimiento completo de todo el sistema local.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Activar el respaldo, aplicar el protocolo manual y solicitar asistencia técnica inmediata.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Permitir el ingreso de visitantes sin efectuar los controles de identificación establecidos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Trasladar la responsabilidad de la contingencia directamente a todos los usuarios afectados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
