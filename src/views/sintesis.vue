<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.justify-content-center.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/sintesis/sin_01.png", alt="alt").m-auto
      .col-lg-7
        p Para la correcta caracterización del desempeño ambiental de determinada organización es necesario en primera medida, establecer los canales por los cuales se va a obtener la información para asegurar que sea verídica y que corresponda a las necesidades planteadas con anterioridad; una vez identificadas las fuentes de información se realizará una descripción de los procesos que se adelantan dentro del sistema productivo mediante un diagrama de flujo, que permita definir las virtudes y necesidades dentro de cada proceso presente en la organización, lo cual permitirá tener un análisis de las afectaciones al medio ambiente.
        .crd.crd--mint.mb-4
          p.mb-0 De acuerdo con lo anterior, es necesario identificar, clasificar y valorar los impactos ambientales generados en cada uno de los procesos de la organización, esto con el fin de poder determinar las medidas correctivas o preventivas necesarias para la mitigación de estos impactos y así poder generar un proceso sostenible con el medio ambiente en el que se afecte en la menor proporción. 
        p.mb-0 El desempeño ambiental de una organización estará definido por las acciones y medidas que se tomen con respecto a los impactos ambientales que se determinaron previamente. 

    p.text-center.mb-5 Vea esto resumido en el siguiente mapa conceptual, teniendo en cuenta toda la temática abordada en este componente formativo:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="alt")
      

</template>

<script>
export default {
  name: 'Sintesis',
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
