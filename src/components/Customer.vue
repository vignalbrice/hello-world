<template>
  <div class="customer">
    <h1>Hello, {{ msg }} </h1>
    <br/>
    <h2>I'm a Reseller</h2>
    <p>There are <b>{{ totalTvCount }}</b> TVs!</p>
        <img v-for="item in totalTvCount" src="../assets/TV.png" class="tv-icon" v-bind:key="item.id"/><br/>
    <p v-show="!totalTvCount">I can't buy any..</p>
      <md-button 
      class="md-raised"
      v-show="!totalTvCount"
      @click="fillTvStock">
      Re-Fill TV Stock
    </md-button>
    <h3> List of Customers </h3>
      <md-card v-for="item in user" v-bind="user" v-bind:key="item.id" class="md-card">
        <md-card-header>
          <h3>{{ item.name || item.nom }}</h3>
        </md-card-header>
        <md-card-content>
          <p>Email : {{ item.email }}</p>
          <p><img src="../assets/panier.jpg" class="panier-icon"/> Tv's : {{ item.Tvs === null ? 0 : item.Tvs}}</p>
        </md-card-content>
        <md-card-actions>
             <md-button
                class="md-raised"
                :disabled="!item.Tvs"
                v-on:click="id = item.id"
                @click="clearUserBasket">
                Clear Basket
             </md-button>
             <md-button 
                class="md-raised"
                :disabled="!totalTvCount"
                v-on:click="id = item.id"
                @click="buyTv">
                Buy TV
            </md-button>
        </md-card-actions>
      </md-card>
      <br/>
      <br/>
      <a href="#" v-on:click="showDialog = !showDialog" class="add-customer">Would you want to add a new customer ?</a>
      <br/>
      <br/>
      <md-card class="md-layout-item md-size-50 
              md-small-size-60 card-add-customer"
              v-if="showDialog">
          <md-card-content>
            <md-field>
                <label for="first-name">First Name</label>
                <md-input name="firstname" id="firstname"
                  v-model="firstname"/>
            </md-field>
            <md-field>
                <label for="first-name">Email</label>
                <md-input name="email" id="email"
                  v-model="email"/>
            </md-field>
          </md-card-content>
            <md-card-actions>
              <md-button class="md-raised" @click="addUser">Add</md-button>
            </md-card-actions>
      </md-card>
  </div>
</template>
<script>
export default {
  name: 'Customer',
  props: {
    msg: String
  },
  computed: {
    totalTvCount () {
      return this.$store.state.totalTvCount
    },
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    buyTv() {
      // Dispatch the action to buy a TV
      this.$store.dispatch('removeTv',1)
      // Commit the mutation of the store for user
      this.$store.commit({type : 'addTvForUser', id: this.id, amount:1})
    },
    clearUserBasket(){
      // Commit the mutation of the store for user
      this.$store.commit({type : 'clearBasket', id: this.id, amount: null})
    },
    fillTvStock(){
      // dispatch action to Re-fill stock again
      this.$store.dispatch('addTv',10)
    },
    addUser() {
      // if firstname and email state are not empty doing that
      if(this.firstname && this.email !== ''){
        this.$store.commit({type: 'add', firstname: this.firstname, email: this.email})
        this.$swal(
          'Good job!',
          'You clicked the button!',
          'success'
        )
        this.firstname = "";
        this.email ="";
      }else {
        this.$swal({
           icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! Please fill all the fields',
        })
      }
    },
  },
  data(){
      return{
        showDialog: true,
        id:"",
        firstname:"",
        email:"",
    }
  }
}
</script>

<style scoped lang="scss">
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
  .tv-icon{
    width: 60px;
    height: 60px;
    margin: 8px;
  }
  .panier-icon{
    width: 30px;
    height: 30px;
  }
  .md-dialog {
    max-width: 768px;
    padding:30px;
  }
  .card-add-customer{
    padding: 20px;
  }
  .add-customer{
    font-size: 20px;
    font-weight: 600;
    color:#2c3e50;
  }
  .add-customer:hover{
        text-decoration: none;
        color:#2980b9;
  }
</style>