<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white i
      h1 Introducción
   
    .row.justify-content-center.align-items-center.crd--emeraldBlue.mb-5
      .bl_00.d-none.d-lg-flex
      .col-lg.order-2.order-lg-1
        p.mb-0.ms-lg-4.text-white Las diferentes organizaciones que buscan mejorar sus procesos productivos y alcanzar un desempeño ambiental óptimo son cada vez más, no solo por voluntad propia, sino también por las exigencias normativas que avanzan a pasos agigantados a nivel mundial; es por esto que se implementan muchas metodologías reconocidas y validadas a nivel internacional, con las cuales se pueden identificar las afectaciones ambientales en las que incurre la organización. Por lo anterior, se invita a consultar el siguiente video que le permitirá tener un panorama del componente formativo que tratará las temáticas relacionadas con ello:
      .col-auto.gx-0.order-1.order-lg-2.mb-4.mb-lg-0  
        img(src="@/assets/curso/introduccion/intro.png", alt="alt").img400
          
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/bl3CmXWXGl4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    

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
