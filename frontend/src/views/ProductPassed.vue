<template>
  <div class="passedpage">
    <h5 class="text-dark mt-2 mb-2">Phòng đã đặt</h5>
    <div class="col">
      <div class="row">
        <ul class="list-group col">
          <li
            class="list-group-item m-2"
            v-for="(usr, index) in user"
            :key="usr._id"
            @click="userActive(index)"
          >
            {{ usr.roomname }}
          </li>
        </ul>
        <div class="col card text-center p-2">
          <h4 class="card-header">{{ active.roomname }}</h4>
          <h4>Thông tin người đặt</h4>
          <h5>Tên : {{ active.username }}</h5>
          <h5>SĐT : {{ active.phonenumber }}</h5>
          <div class="row m-2">
            <button @click="deleteUser" class="btn btn-secondary mr-2 col">
              Đã xử lý
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UserService from "@/services/user.service";
export default {
  data() {
    return {
      user: [],
      active: {},
    };
  },
  methods: {
    async deleteUser() {
      if (confirm("Bạn có chắc bỏ qua ?")) {
        try {
          // await UserService.delete(this.active._id);
          // this.$router.push({ name: "passed" });
          this.user = await UserService.getAll();
        } catch (error) {
          console.log(error);
        }
      }
    },
    async getUsers() {
      this.user = await UserService.getAll();
      console.log(this.user);
    },
    userActive(index) {
      this.active = this.user[index];
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>
