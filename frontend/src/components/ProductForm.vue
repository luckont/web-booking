<template>
  <Form @submit="submitProduct" :validation-schema="productFormSchema">
    <div class="form-group">
      <label for="name">Tên phòng</label>
      <Field
        name="name"
        type="text"
        class="form-control"
        v-model="productLocal.name"
      />
      <ErrorMessage name="name" class="error-feedback" />
    </div>
    <div class="form-group">
      <label for="img">Hình ảnh</label>
      <Field
        name="img"
        type="text"
        class="form-control"
        v-model="productLocal.image"
      />
      <ErrorMessage name="name" class="error-feedback" />
    </div>
    <div class="form-group">
      <label for="type">Loại</label>
      <Field
        name="type"
        type="text"
        class="form-control"
        v-model="productLocal.description"
      />
      <ErrorMessage name="email" class="error-feedback" />
    </div>
    <div class="form-group">
      <label for="address">Địa chỉ</label>
      <Field
        name="address"
        type="text"
        class="form-control"
        v-model="productLocal.address"
      />
      <ErrorMessage name="address" class="error-feedback" />
    </div>
    <div class="form-group">
      <label for="phone">Điện thoại</label>
      <Field
        name="phone"
        type="tel"
        class="form-control"
        v-model="productLocal.phone"
      />
      <ErrorMessage name="phone" class="error-feedback" />
    </div>
    <div class="form-group">
      <label for="phone">Giá</label>
      <Field
        name="price"
        type="tel"
        class="form-control"
        v-model="productLocal.price"
      />
      <ErrorMessage name="phone" class="error-feedback" />
    </div>
    <div class="form-group">
      <button class="btn btn-primary">Lưu</button>
      <button
        v-if="productLocal._id"
        type="button"
        class="ml-2 btn btn-danger"
        @click="deleteProduct"
      >
        Xóa
      </button>
    </div>
  </Form>
</template>
<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  emits: ["submit:product", "delete:product"],
  props: {
    product: { type: Object, required: true },
  },
  data() {
    const productFormSchema = yup.object().shape({
      name: yup
        .string()
        .required("Tên phải có giá trị.")
        .min(2, "Tên phải ít nhất 2 ký tự.")
        .max(50, "Tên có nhiều nhất 50 ký tự."),
      address: yup.string().max(100, "Địa chỉ tối đa 100 ký tự."),
      phone: yup
        .string()
        .matches(
          /((09|03|07|08|05)+([0-9]{8})\b)/g,
          "Số điện thoại không hợp lệ."
        ),
    });
    return {
      // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
      // productLocal để liên kết với các input trên form
      productLocal: this.product,
      productFormSchema,
    };
  },
  methods: {
    submitProduct() {
      this.$emit("submit:product", this.productLocal);
    },
    deleteProduct() {
      this.$emit("delete:product", this.productLocal.id);
    },
  },
};
</script>
