<script>
export default {
  data () {
    return {
      countries: [
        {
          name: 'Nigeria',
          description: "Nigeria is a large country that has a varied topography. It is about twice the size of the U.S. state of California and is located between Benin and Cameroon. It is the most populated country in africa"
        },
        {
          name: 'USA',
          description: "The United States of America (USA), commonly known as the United States (U.S. or US) or America, is a country comprising 50 states, a federal district, five major self-governing territories, and various possessions."
        },
        {
          name: 'China',
          description: "The People's Republic of China, simply known as China (Chinese:中国, pinyin: zhōng guó)is located in East Asia. It is the world's most populous country, with a population of around 1.404 billion. It is a unified multi-ethnic country with the Han nationality as the main nation."
        },
        {
          name: 'Argentina',
          description: "Argentina is a vast country located in the southern part of South America. The eighth largest country in the world, it is the second largest country in South America after Brazil, and it's about one-third the size of the United States. Argentina is bordered by the Andes Mountains and Chile to the west."
        },
         {
          name: 'Cameroon',
          description: "Cameroon is sometimes described as 'Africa in miniature' because it exhibits all the major climates and vegetation of the continent: mountains, desert, rain forest, savanna grassland, and ocean coastland. Cameroon can be divided into five geographic zones."
         },
         {
          name: 'Somalia',
          description: "With a land area of 637,657 square kilometers, Somalia's terrain consists mainly of plateaus, plains and highlands. Its coastline is more than 3,333 kilometers in length, the longest of mainland Africa and the Middle East. It has been described as being roughly shaped like a tilted number seven."
        }
      ],
      showDialog: false
    }
  },
  props: {
    //Every props of components send here.
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    //where you write methods or functions used in your component
    triggerAction(action){
      this.$swal(`The Country ${action} ?`,
                `Would you like this country ${action} ?`,
                'question');
    }
  },
  beforeMount: function () {
    this.$nextTick(function () {
      // Before Component is Mounted
    })
  },
  mounted: function () {
    this.$nextTick(function () {
      // When Component is Mounted
    })
  },
    destroyed: function () {
    this.$nextTick(function () {
      // When Component is Destroyed
    })
  },
  render () {
    return (
      <div>
        <div class="content">
          <br/>
              <h2>Where we are ? </h2>
            <br/>
          <main class="country-wrapper">
            {
              this.countries.map(country => {
                return (
                  <MdCard class="country-container">
                    <md-card-header>
                      <a onClick={() => this.triggerAction(country.name)} class="country-link">
                        <h3 class="country-name ">{country.name}</h3>
                      </a>
                    </md-card-header>
                    <md-card-content>
                      <article class="country-description">{country.description}</article>
                    </md-card-content>
                  </MdCard>
                )
              })
            }
          </main>
        </div>
      </div>
    )
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.content{
  width: 100%;
  .country-wrapper{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .country-container{
      display: flex;
      flex-direction: column;
      text-align:start;
      margin-left: auto;
      margin-right: auto;
      margin-top: 1em;
      margin-bottom: 1em;
      padding: .5em;
      width: 28%;
      border: .08em solid #c4c4c4;
      .country-name{
        margin: 0;
        margin-bottom: 1em;
      }
        .country-link{
          font-size: 20px;
          font-weight: 600;
          color:#2c3e50;
        }
      .country-link:hover{
            text-decoration: none;
            color:#2980b9;
            cursor: pointer;
      }
    }
  }
}
</style>