<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <a href="/" class="navbar-brand">Nhà trọ Sinh viên</a>
    <div class="mr-auto navbar-nav">
      <li class="nav-item">
        <router-link :to="{ name: 'booking' }" class="nav-link">
          Trang chủ
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'passed' }" class="nav-link">
          Phòng đã đặt
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'intro' }" class="nav-link">
          Giới thiệu
        </router-link>
      </li>
      <li class="nav-item ">
        <router-link :to="{ name: 'home' }" class="nav-link">
          Admin
        </router-link>
      </li>
    </div>
  </nav>
</template>
