<script>
import Card from "./Card.vue";

export default {
  components: {
    Card,
  },
};
</script>

<template>
  <section class="services section-padding">
    <h2 class="text-uppercase fw-bold text-center">Sumatorio de Contenido</h2>
    <!-- Card1 -->
    <Card title="Contenido #1">
      <p class="lead">
        Desarrollo Frontend con librerias del lado del cliente
        <br /><br />
        1. Introduccion a JavaScript Básico. <br />
        2. Introduccion a las librerrias (Vue.js y Bootstrap). <br />
        3. Redering declarativo y manipulacion del DOM. <br />
        4. Introduccion al rendenring declarativo. <br />
        5. Expresiones, propiedades y control de flujos con directivas.
        <br />
        6. Renderizado de lista. <br />
        7. Menejo de eventos clases y estilos en tiempo real. <br />
        8. Sistema de componentes. <br />
        9. Crear componentes custom. <br />
        10. Comunicacion entre componentes: propiedades y eventos.
      </p>
    </Card>

    <Card title="Contenido #2">
      <p class="lead">
        Desarollo Backend con el Framework del lado del servidor y base de datos
        <br /><br />
        1. Introduccion al Desarollo con PHP. <br />
        2. Declaracion de variables. <br />
        3. Declaracion de funciones. <br />
        4. Programacion Orientada a Objetos. <br />
        5. Conexion a base de datos. <br />
        6. Introduccion a Laravel <br />
        7. CRUD con Laravel. <br />
      </p>
    </Card>

    <Card title="Contenido #3">
      <p class="lead">
        Incorporando tecnologias de Servidor Web <br /><br />
        1. Formularios Laravel. <br />
        2. Sistema de ruta y controladores. <br />
        3. Validacion de datos. <br />
        4. Blame: Sistema de plantillas avanzado. <br />
        5. Trajando con Laravel/UI. <br />
        6. Creacion de API REST con Laravel. <br />
        7. Consumo de API REST. <br />
      </p>
    </Card>
    <Card title="Contenido #4">
      <p class="lead">
        Eventos y Clases <br /><br />
        1. Eventos.<br />
        2. Manejadores de eventos. <br />
        3. Modificadores de eventos. <br />
        4. Clases y estilos en tiempo real. <br />
      </p>
    </Card>
    <Card title="Contenido #5">
      <p class="lead">
        Componentes <br /><br />
        1. Sistema de Componentes.<br />
        2. Introducción al sistema de Componentes. <br />
        3. Crear Componentes Custom. <br />
      </p>
    </Card>
    <Card title="Contenido #7">
      <p class="lead">
        Introducción al desarrollo con php.<br /><br />
        1. ¿Qué es php?<br />
        2. Cómo funciona PHP. <br />
        3. ¿Qué puede hacer con PHP?. <br />
        4. Ventajas de utilizar PHP. <br />
      </p>
    </Card>
    <Card title="Contenido #8">
      <p class="lead">
        Estructuras repetitivas y ciclos o loops en PHP.<br /><br />
        1. Bucles.<br />
        2. Arrays.<br />
        3. Tipos de Matrices.<br />
        4. Funciones en PHP. <br />
        5. Funciones integradas en PHP. <br />
      </p>
    </Card>
    <Card title="Contenido #9">
      <p class="lead">
        Programación orientada a objetos.<br /><br />
        1. Abstracción.<br />
        2. Encapsulamiento.<br />
        3. Herencia.<br />
        4. Polimorfismo. <br />
        5. Clase. <br />
      </p>
    </Card>
    <Card title="Contenido #10">
      <p class="lead">
        Clases abstractas e interfaces.<br /><br />
        1. Clases Abstractas.<br />
        2. Interfaces.<br />
      </p>
    </Card>
    <Card title="Contenido #11">
      <p class="lead">
        Introducción a Laravel.<br /><br />
        1. MVC.<br />
        2. HTTP.<br />
        3. ¿ Que es laravel ?.<br />
        4. Características. <br />
        5. Ecosistema. <br />
        5. Servidores. <br />
      </p>
    </Card>
  </section>
</template>
