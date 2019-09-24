<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div v-if="pokemon">{{ pokemon.name }} is comming from a graphql api</div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'home',
  apollo: {
    pokemon: gql`
      query {
        pokemon(name: "Pikachu") {
          id
          name
        }
      }
    `,
  },
}
</script>
