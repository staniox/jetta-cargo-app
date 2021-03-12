<template>
  <div id="app" class="bg-light text-dark">
    <Form/>
  </div>
</template>

<script>
import Form from './components/Form'

export default {
  name: 'App',
  components: {
    Form
  }
}
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  padding: 1em 0.5em;
  overflow: auto;
  box-sizing: border-box;

}
</style>
