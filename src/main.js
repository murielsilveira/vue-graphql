import ApolloClient from 'apollo-boost'
import Vue from 'vue'
import VueApollo from 'vue-apollo'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

const apolloClient = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh',
})
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

Vue.use(VueApollo)
Vue.config.productionTip = false

new Vue({
  router,
  apolloProvider,
  render: h => h(App),
}).$mount('#app')
