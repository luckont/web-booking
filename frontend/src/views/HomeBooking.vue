<template>
  <div class="home">
    <div class="mb-2">
      <InputSearch v-model="searchText" />
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="https://decordi.vn/wp-content/uploads/2021/09/thiet-ke-phong-ngu-mau-den-phong-cach-toi-gian.jpg"
          class="d-block w-100"
          alt="..."
          style="height: 300px"
        />
        <div class="carousel-caption d-none d-md-block">
          <h1>Nhà trọ dành riêng cho Sinh Viên</h1>
          <p>Nhà trọ Sinh Viên - Ngôi nhà thứ 2 của các bạn Sinh Viên !</p>
        </div>
      </div>
    </div>

    <h5 class="text-dark mt-2 mb-2">Tất cả phòng</h5>

    <div class="row"
    
    >
      <div
        class="container col-3 mb-3"
        v-for="(product, index) in products"
        :key="product._id"
        :class="{ active: index === activeIndex }"
      >
        <div class="" v-if="product.status == false">
          <img
          class="img-fluid"
          v-bind:src="product.image"
          style="height: 300px; width: 300px"
        />
        <h4 class="mt-2 mb-0">{{ product.name }}</h4>
        <p class="m-0">
          <i class="fa-solid fa-location-dot"></i>
          {{ product.address }}
        </p>
        <p class="m-0">Loại {{ product.description }}</p>
        <p class="m-0">Liên hệ {{ product.phone }}</p>
        <p class="m-0">Giá <strong>{{ product.price }}</strong> nghìn/tháng</p>
        <h5 v-if="product.status == false" 
        class="text-success">Còn phòng</h5>
        <button
          @click="setRoomName(product.name)"
          type="button"
          class="btn btn-secondary"
          data-toggle="modal"
          data-target="#myModal"
        >
          Đặt ngay
        </button>
        </div>
      </div>
      <!-- The Modal -->
      <div class="modal" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <!-- Modal Header -->
            <div class="modal-header">
              <h4 class="modal-title">Nhập thông tin</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
              <input
                v-model="username"
                type="text"
                id="disabledTextInput"
                class="form-control"
                placeholder="Nhập tên của bạn"
              />
              <input
                v-model="phonenumber"
                type="text"
                id="disabledTextInput"
                class="form-control mt-2"
                placeholder="Nhập số điện thoại"
              />
            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                Đóng
              </button>
              <button
                @click="handleBooking()"
                type="button"
                class="btn btn-success"
                data-dismiss="modal"
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer bg-dark text-center text-light p-2 mb-2">
      <h5>Thông tin liên hệ</h5>
      <p class="m-0">SĐT/Zalo 0973373373</p>
      <p class="m-0">Chủ nhà trọ Đinh Đại Lực B1910100</p>
      <p class="m-0">Email: LucB1910100@student.ctu.edu.vn</p>
    </div>
  </div>
</template>
<script>
import InputSearch from "@/components/InputSearch.vue";
import ProductService from "@/services/product.service";
import UserService from "@/services/user.service";

export default {
  components: {
    InputSearch,
  },
  data() {
    return {
      products: [],
      message: "",
      searchText: "",
      username: "",
      phonenumber: "",
      roomname: "",
    };
  },
  methods: {
    async retrieveProducts() {
      try {
        this.products = await ProductService.getAll();
      } catch (error) {
        console.log(error);
      }
    },
    async handleBooking() {
      let payload = {
        roomname: this.roomname,
        username: this.username,
        phonenumber: this.phonenumber,
      };

      try {
        await UserService.create(payload);
        this.message = "Phòng được thêm thành công.";
        alert("Thông tin của bạn đã được gửi đi! Chúng tôi sẽ liên hệ cho bạn sớm nhất!");
      } catch (error) {
        console.log(error);
      }
    },
    refreshList() {
      this.retrieveProducts();
      this.activeIndex = -1;
    },
    setRoomName(name) {
      this.roomname = name;
    },
  },
  mounted() {
    this.refreshList();
  },
};
</script>
