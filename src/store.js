import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  // other options...
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      firstName: 'Hitesh',
      lastName: 'Sharma',
      userData: []
    }
  },
  actions: {
    async setName(){
			try{
				this.userData = await fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json())
				let [ firstName, lastName ] = this.userData[0].name.split(" ")
				this.firstName = firstName
				this.lastName = lastName
				}catch(err){
					return err
				}
		}
  }
})