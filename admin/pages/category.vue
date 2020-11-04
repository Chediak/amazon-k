<template>
  <main>
    <div class="container-fluid c-section"></div>
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-6">
        <div class="a-spacing-top-medium"></div>
        <h2>Adicionar Nova Categoria</h2>
        <form>
          <div class="a-spacing-top-medium">
            <label>Tipo</label>
            <input class="a-input-text" style="width: 100%" v-model="type" />
          </div>
          
          <!-- Button -->
          <hr />
          <div class="a-spacing-top-large">
            <span class="a-button-register">
              <span class="a-button-inner">
                <span class="a-button-text" @click="onAddCategory">
                  Adicionar Categoria</span
                >
              </span>
            </span>
          </div>
        </form>
        <br />
        <ul class="list-group-item">
           <li v-for="category in categories" :key="category._id">{{category.type}}</li>
        </ul>
      </div>
      <div class="col-sm-3"></div>
    </div>
  </main>
</template>

<script>
export default {
    async asyncData({ $axios }) {
        try {
            let response = await $axios.$get(
                "http://localhost:3000/api/categories");
                return {
                    categories: response.categories
                };
        } catch (err) {
            console.log(err);
        }
    },


    data() {
        return {
            type: ""
        };
    },

    methods:{
        async onAddCategory() {
            try {
                let data = { type: this.type };
                let response = await this.$axios.$post(
                "http://localhost:3000/api/categories",
                data
            );
      
                this.categories.push(data);
                
            } catch (err) {
                console.log(err);
                
            }
        }
     }
};
</script>
