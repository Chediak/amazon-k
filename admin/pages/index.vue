  <template>
  <main>
    <div class="a-spacing-large"></div>

    <div class="container-fuid browsing-history">
      <div class="row">
        <div class="col-sm-8 col-8">
          <h1 class="a-size-large a-spacing-none a-text-normal">Cadastro</h1>
          <div class="a-spacing-large"></div>

          <!-- Button -->
          <nuxt-link to="/products" class="a-button-buy-again">Produto</nuxt-link>

          <nuxt-link to="/owner" class="a-button-buy-again"> Cliente</nuxt-link>
          <nuxt-link to="/category" class="a-button-buy-again"> Categoria</nuxt-link>

          <!-- Listing Page -->
        </div>
      </div>
    </div>
    <div class="a-spacing-large"></div>
    <div class="container-fluid browsing-history">
      <div class="row">
        <div
        v-for="(product, index) in products" 
        :key="product._id"
        class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6 br bb"
        >
        <div class="history-box">
          <!---Product Image --->
          <a href="#" class="a-link-normal">
            <img :src="product.photo" class="img-fluid" />
          </a>
          <!--Product Title -->
          <div class="a-spacing-top-base asin-title">
            <span class="a-text-normal">
              <div class="p13n-sc-truncated">{{ product.title }}</div>
            </span>
          </div>

          <!-- Product Rating -->
          <div class="a-row">
            <a href="#">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </a>
          <span class="a-letter-space"></span>
          <span class="a-color-tertiary a-size-small asin-reviews">(1732)</span>
        </div>
        <!-- Product Price -->
        <div class="a-row">
          <span class="a-size-base a-color-price">
          <span class="p13n-sc-price">${{ product.price }} </span>
          </span>
        </div>

        <!-- Product Buttons -->
        <div class="a-row">
          <nuxt-link to="#" class="a-button-history margin-right-10">Atualizar</nuxt-link>
          <nuxt-link to="#" class="a-button-history margin-right-10">Apagar</nuxt-link>
        </div>
      </div>
    </div>      
    </div>
      </div>
  </main>
</template>

<script>
export default {
  /* Async data is fetching data before nuxt page finished loading on the browser.
  It is good for SEO because the data will be loaded first*/
  async asyncData({ $axios }) {
    try {
      let response = await $axios.$get("http://localhost:3000/api/products");
      console.log(response);
      return {
        products: response.products
      };
    } catch (err) {}
  },
};
</script>

<style>
</style>