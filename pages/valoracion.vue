<template>
  <div class="px-2 px-md-15 px-lg-16">
    <h1 class="text-center mt-5 mt-sm-6 mt-md-7 mt-lg-8 rh">
      VALORACION DE SERVICIO
    </h1>
    <div
      :style="`width: ${
        $vuetify.breakpoint.xs ? '100%' : $vuetify.breakpoint.md ? '95%' : '90%'
      } `"
      class="header-valoracion mt-10 mt-sm-11 mt-md-12 mt-lg-13 d-flex mx-auto"
    >
      <v-avatar
        :size="
          $vuetify.breakpoint.xs
            ? 100
            : $vuetify.breakpoint.sm
            ? 125
            : $vuetify.breakpoint.md
            ? 150
            : $vuetify.breakpoint.lg
            ? 175
            : 200
        "
        class="ml-sm-4 ml-md-8 ml-lg-16"
      >
        <img
          alt="Avatar"
          src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
        />
      </v-avatar>
      <div class="ml-3 ml-sm-6 ml-md-7 ml-lg-8">
        <v-card-title class="rh py-1 py-sm-3 py-md-5 colorBlueMedium">
          Luis Martinez
        </v-card-title>
        <v-card-text class="subr labelGray"> Electronica </v-card-text>
      </div>
    </div>
    <div
      class="trabajo realizado mx-auto"
      :style="`width: ${
        $vuetify.breakpoint.xs ? '100%' : $vuetify.breakpoint.md ? '95%' : '90%'
      } `"
    >
      <h2 class="text-center mt-10 mt-sm-11 mt-md-12 mt-lg-13 rh">
        TRABAJO REALIZADO
      </h2>
      <p class="labelGray text-justify mt-5 mt-sm-7 mt-md-8 mt-lg-9 capr">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
        similique dolorum, harum nemo consequuntur in cum asperiores, delectus
        ipsa minus numquam dolorem aspernatur aliquid voluptatem laudantium
        eaque fugiat magni est! Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Qui quas nemo at consequatur ipsum consectetur aperiam
        natus, distinctio consequuntur. Optio sequi porro quis. Quidem sequi
        maxime a libero impedit ab. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Libero, similique dolorum, harum nemo consequuntur in
        cum asperiores, delectus ipsa minus numquam dolorem aspernatur aliquid
        voluptatem laudantium eaque fugiat magni est! Lorem ipsum, dolor sit
        amet consectetur adipisicing elit. Qui quas nemo at consequatur ipsum
        consectetur aperiam natus, distinctio consequuntur. Optio sequi porro
        quis. Quidem sequi maxime a libero impedit ab.
      </p>
    </div>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      @submit.prevent="submitForm"
    >
      <div
        class="mx-auto"
        :style="`width: ${
          $vuetify.breakpoint.xs
            ? '100%'
            : $vuetify.breakpoint.md
            ? '95%'
            : '90%'
        } `"
      >
        <h2 class="text-center mt-10 mt-sm-11 mt-md-12 mt-lg-13 rh">
          INGRESE SU OPINION DEL SERVICIO RECIBIDO
        </h2>
        <v-container fluid class="mt-2 mt-sm-4 mt-md-8 px-0">
          <v-textarea
            :rules="opinionRules"
            v-model="opinion"
            class="capr"
            name="input-7-1"
            background-color="transparent"
            filled
            outlined
            auto-grow
            auto-focus
          ></v-textarea>
        </v-container>
      </div>
      <div
        class="mx-auto"
        :style="`width: ${
          $vuetify.breakpoint.xs
            ? '100%'
            : $vuetify.breakpoint.md
            ? '95%'
            : '90%'
        } `"
      >
        <h2 class="text-center mt-10 mt-sm-11 mt-md-12 mt-lg-13 rh">
          INDIQUE SU VALORACION
        </h2>
        <v-container fluid class="mt-2 mt-sm-4 mt-md-8 px-0">
          <ul class="pl-0 ml-0">
            <template v-for="(i, index) in valoracion">
              <li
                :key="index"
                style="list-style: none"
                class="mt-2 mt-sm-3 mt-md-4 mt-lg-5"
              >
                <h5 class="subr light">{{ i.title }}</h5>
                <div class="d-flex align-center">
                  <v-rating
                    v-model="i.value"
                    hover
                    half-increments
                    color="orange"
                    background-color="dark"
                    length="5"
                    :size="$vuetify.breakpoint.xs? 20: $vuetify.breakpoint.sm? 25: 30"
                  ></v-rating>
                  <span v-if="i.value != 0" class="ml-1 ml-sm-2 ml-md-3 subr">{{
                    i.value
                  }}</span>
                </div>
              </li>
            </template>
          </ul>
        </v-container>
      </div>
      <div class="d-flex justify-center">
        <v-btn
          type="submit"
          :width="
            $vuetify.breakpoint.xs ? 250 : $vuetify.breakpoint.sm ? 275 : 300
          "
          :disabled="
            !valid ||
            this.valoracion.capacidad.value == 0 ||
            this.valoracion.tangibles.value == 0 ||
            this.valoracion.confianza.value == 0 ||
            this.valoracion.fiabilidad.value == 0 ||
            this.valoracion.empatia.value == 0
          "
          color="primary"
          class="my-8 my-sm-9 my-md-10 text-caption text-sm-body-2 text-md-body-1"
          >GUARDAR</v-btn
        >
      </div>
    </v-form>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
  data() {
    return {
      valid: true,
      opinionRules: [
        (v) => !!v || 'Opinion es requerida',
        (v) =>
          (v && v.length >= 10) || 'Opinion debe de tener minimo 10 caracteres',
      ],
      valoracion: {
        fiabilidad: {
          title: 'Fiabilidad',
          value: null,
        },
        empatia: {
          title: 'Empatia',
          value: null,
        },
        confianza: {
          title: 'Confianza/Seguridad',
          value: null,
        },
        capacidad: {
          title: 'Capacidad de respuesta',
          value: null,
        },
        tangibles: {
          title: 'Tangibles',
          value: null,
        },
      },
      opinion: '',
    }
  },
  computed: {
    ...mapState({
      valoracionState: (state) => state.valoracion.valoracionDeServicio,
    }),
  },
  methods: {
    ...mapMutations(['updateValoracion']),
    submitForm(e) {
      if (this.$refs.form.validate()) {
        this.updateValoracion(this.opinion)

      }
    },
  },
}
</script>
<style></style>
