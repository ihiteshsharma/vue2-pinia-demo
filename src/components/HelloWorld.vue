<template>
  <div class="hello">
    <h1>{{ firstName }}</h1>
    <h1>{{ lastName }}</h1>
    <button @click="changeName">Change Name</button>
  </div>
</template>

<script>
import { storeToRefs } from 'pinia'
import { useStore } from '../store'

export default {
  name: 'HelloWorld',
  // props: {
  //   msg: String
  // },
  setup(){
    const store = useStore()
    const { firstName, lastName } = storeToRefs(store)
     return {
      firstName, lastName
    }
  },
  // setup(){
  //    return {
  //     firstName: 'Local First Name',
  //     lastName: 'Local Last Name'
  //   }
  // },
  methods: {
    changeName(){
      const store = useStore()
      store.setName().then(() => console.log(" done"))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
