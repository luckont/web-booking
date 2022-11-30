<script>
export default {
  props: {
    product: { type: Object, required: true },
  },
};
</script>
<template>
 <div class="row">
  <div class="img col">
      <img class="img" v-bind:src="product.image"/>
  </div>
  <div class="col">
    <div class="p-1">
      <strong>Tên:</strong>
      {{ product.name }}
    </div>
    <div class="p-1">
      <strong>Loại:</strong>
      {{ product.description }}
    </div>
    <div class="p-1">
      <strong>Địa chỉ:</strong>
      {{ product.address }}
    </div>
    <div class="p-1">
      <strong>Điện thoại:</strong>
      {{ product.phone }}
    </div>
    <div class="p-1">
      <strong>Giá:</strong>
      {{ product.price }}
    </div>
  </div>
 </div>
</template>
