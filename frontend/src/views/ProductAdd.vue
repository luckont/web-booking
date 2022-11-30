<template>
    <div v-if="product" class="page">
      <h4>Thêm phòng</h4>
      <ProductForm
        :product="product"
        @submit:product="addProduct"
      />
      <p>{{ message }}</p>
    </div>
  </template>
      <script>
  import ProductForm from "@/components/ProductForm.vue";
  import ProductService from "@/services/product.service";
  export default {
    components: {
      ProductForm,
    },
    data() {
      return {
        product: {},
        message: "",
      };
    },
    methods: {
         async addProduct(data) {
        try {
          await ProductService.create(data);
          confirm("Phòng được thêm thành công.");
        } catch (error) {
          console.log(error);
        }
      },
  
    },
    created() {
      this.message = "";
    },
  };
  </script>