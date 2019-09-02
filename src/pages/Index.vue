<template>
  <Layout>
    <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16">
      <div class="flex flex-wrap content-center text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left">
        <div class="text-green-700 leading-tight pb-3">Comunidad boliviana de Vue.js 🇧🇴</div>
        <p class="text-lg sm:text-xl pb-1">Todo lo que se realiza en Vue.js Bolivia es parte de la comunidad, y por lo tanto es un bien común.</p>
      </div>
      <div class="mt-8 sm:mt-0">
        <g-image src="../../static/developer.svg" alt="hero" class="mx-auto sm:mx-0" />
      </div>
    </div> <!-- end hero -->

    <div class="container-inner mx-auto">
      <p class="text-lg sm:text-xl pb-4"><a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">Vuejs</a> es un Framework progresivo de Javascript que en base a comunidades, ha logrado colocarse como una de las herramientas mas utilizadas para el desarrollo de grandes aplicaciones.</p>
      <p class="text-lg sm:text-xl pb-4">La comunidad boliviana de Vue.js, es un grupo de amigos apasionados por el desarrollo web y tecnologias javascript, que busca compartir conocimientos de forma libre, con el fin de fortalecer a los miembros de la comunidad para generar conocimiento y buenas vibras.</p>
      
      <div class="flex justify-between items-center py-6">
        <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
          <g-image src="../../static/mind_map.svg" alt="browser" />
        </div>
        <div class="w-1/2 px-8 hidden sm:flex justify-end">
          <g-image src="../../static/code_review.svg" alt="mobile" />
        </div>
      </div>
    </div>

    <last-projects />

    <contact-form />

  </Layout>
</template>

<script>
import ContactForm from '../components/ContactForm'
import LastProjects from '../components/LastProjects'
export default {
  metaInfo: {
    title: 'Vue.js Bolivia'
  },
  components: {
    LastProjects,
    ContactForm
  }
}
</script>

