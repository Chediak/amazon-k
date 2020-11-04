<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-section">
            <div class="a-spacing-top-medium"></div>
            <h2 style="text-align: center">Novo Produto</h2>
            <form>

              <!-- Category Dropdown -->
              <div class="a-spacing-top-medium">
                <label>Categoria</label>
                <select class="a-select-option" >
                  <option value="Funilaria">Funilaria</option>
                  <option value="Pintura">Pintura</option>
                  <option value="3M">3M</option>
                  <option value="Reparo">Reparo</option>
                  <option value="Freagem">Freagem</option>
                  <option value="Mecânica">Mecânica</option>
                  <option value="Borracharia">Borracharia</option>
                  v-model="categoryID">
                  <option
                    v-for="category in categories"
                    :value="category._id"
                    :key="category._id"
                  >
                    {{ category.type }}
                  </option>
                </select>
              </div>

              <!-- Owner Dropdown -->
              <div class="a-spacing-top-medium">
                <label>Plano</label>
                <select class="a-select-option" v-model="ownerID">
                  <option value="Bronze">Bronze</option>
                  <option value="Prata">Prata</option>
                  <option value="#Ouro">#Ouro</option>
                  <option
                    v-for="owner in owners"
                    :value="owner._id"
                    :key="owner._id"
                    >{{ owner.name }}</option
                  >
                </select>
              </div>

              <!--Title Input -->
              <div class="a=spacing-top-medium">
                <label style="margin-bottom: 0px">Título</label>
                <input
                  type="text"
                  class="a-input-text"
                  style="width: 100%"
                  v-model="title"
                />
              </div>

              <!-- Price Input -->
              <div class="a=spacing-top-medium">
                <label style="margin-bottom: 0px">Preço</label>
                <input
                  type="number"
                  class="a-input-text"
                  style="width: 100%"
                  v-model="price"
                />
              </div>

              <!-- Stock Quantity -->
              <div class="a=spacing-top-medium">
                <label style="margin-bottom: 0px">Qnt. Estoque</label>
                <input
                  type="number"
                  class="a-input-text"
                  style="width: 100%"
                  v-model="stockQuantity"
                />
              </div>

              <!-- Description Text Area -->
              <div class="a=spacing-top-medium">
                <label style="margin-bottom: 0px">Descrição</label>
                <textarea
                  placeholder="Provide details such as a product descritpion"
                  style="width: 100%"
                  v-model="description"
                ></textarea>
              </div>

              <!-- Photo File -->
              <div class="a=spacing-top-medium">
                <label style="margin-bottom: 0px">Foto</label>
                <div class="a-row a-spacing-top-medium">
                  <label class="choosefile-button">
                    <i class="fal fa-plus"></i>
                    <input type="file" @change="onFileSelected" />
                    <p style="margin=top: -70px">{{ fileName }}</p>
                  </label>
                </div>
              </div>

              <!-- Button -->
              <hr />
              <div class="a-spacing-top-large">
                <span class="a-button-register">
                  <span class="a-button-inner">
                    <span class="a-button-text" @click="onAddProduct">Add Product</span>
                  </span>
                </span>
              </div>
            </form>
          </div>
        </div>
        <div class="col-sm-8"></div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      let categories = $axios.$get("http://localhost:3000/api/categories");
      let owners = $axios.$get("http://localhost:3000/api/owners");

      const [catResponse, ownerResponse] = await Promise.all([
        categories,
        owners
      ]);

      console.log(catResponse);

      return {
        categories: catResponse.categories,
        owners: ownerResponse.owners
      };
    } catch (err) {
      console.log(err);
    }
  },

  data() {
    return {
      categoryID: null,
      ownerID: null,
      title: null,
      price: 0,
      descritpion: "",
      selectedFile: null,
      stockQuantity: 1,
      fileName: ""
    };
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile);
      this.fileName = event.target.files[0].name;
    },
    async onAddProduct() {
      let data = new FormData();
      data.append("title", this.title);
      data.append("price", this.price);
      data.append("description", this.descritpion);
      data.append("OwnerID", this.OwnerID);
      data.append("stockQuantity", this.stockQuantity);
      data.append("categoryID", this.categoryID);
      data.append("photo", this.selectedFile, this.selectedFile.name);

      let result = await this.$axios.$post(
        "http://localhost:3000/api/products",
        data
      );

      this.$router.push("/");
    }
  }
};
</script>
