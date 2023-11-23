<template>
  <div class="px-5 px-sm-10 px-md-15 px-lg-20">
    <h1 class="text-center mt-5 mt-sm-6 mt-md-7 mt-lg-8 rh">
      VALORACION DE SERVICIO
    </h1>
    <div
      class="header-valoracion mt-13 mt-sm-14 mt-md-15 mt-lg-16 d-flex"
    >
      <v-avatar
        :size="
          $vuetify.breakpoint.xs
            ? 100
            : $vuetify.breakpoint.sm
            ? 120
            : $vuetify.breakpoint.md
            ? 140
            : $vuetify.breakpoint.lg
            ? 160
            : 180
        "
      >
        <img
          alt="Avatar"
          src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
        />
      </v-avatar>
      <div class="ml-3 ml-sm-6 ml-md-7 ml-lg-8">
        <v-card-title primary-title class="rh py-1 py-sm-3 py-md-5">
          Luis Martinez
        </v-card-title>
        <v-card-text class="rmh"> Electronica </v-card-text>
      </div>
    </div>
    <div class="trabajo realizado">
      <h2 class="text-center mt-13 mt-sm-14 mt-md-15 mt-lg-16 rh">
        TRABAJO REALIZADO
      </h2>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style></style>
