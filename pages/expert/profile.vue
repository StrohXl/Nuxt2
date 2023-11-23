<template>
  <v-container class="mt-md-14">
    <div v-if="$vuetify.breakpoint.mdAndUp" class="d-flex justify-space-between mt-md-2">
      <v-card
        class="label cursor-pointer"
        :class="{ 'mb-2' : !$vuetify.breakpoint.mdAndUp }"
        width="120"
        height="25"
        flat
        @click="$router.go(-1)"
      >
        <v-icon class="ml-n2 mt-n1 mr-1 label" color="#003566" small>
          fa-solid fa-angle-left
        </v-icon>
        <span class="barlowc-m ">Volver atrás</span>
      </v-card>
      <v-btn
        height="38"
        width="281"
        dark
        class="text-none barlow-m capr"
        color="#1a67b3"
        style="letter-spacing:normal;"
        elevation="0"
        @click="$router.push('/client/expertProfile/5')"
      >
        Seleccionar y continuar
      </v-btn>
    </div>
    <v-row class="mt-4">
      <v-col cols="12" md="3" class="d-flex justify-center align-center">
        <v-avatar size="174" class="mx-auto mx-md-4 my-auto">
          <v-img :src="'https://randomuser.me/api/portraits/women/81.jpg'" />
        </v-avatar>
      </v-col>
      <v-col cols="12" md="5">
        <div class="colorBlue barlowc-sb rh">
          {{ "expert.name" }}
        </div>
        <div class="labelGray barlow-m capr">
          <!-- {{ ItemParamPage.category }} -->
        </div>
        <div class="mt-2 labelGray rubik-r">
          <v-icon small color="#7dd4f7">
            mdi-check-circle-outline
          </v-icon>
          <!-- {{ expert.count }} servicios realizados en CoEx -->
        </div>
        <div class="mt-2 labelGray rubik">
          <v-icon small color="#7dd4f7">
            mdi-account-group
          </v-icon>
          {{ "expert.workers_count "}} trabajadores/ayudantes a cargo
        </div>
        <div class="mt-2 labelGray rubik-r">
          <v-icon small color="#7dd4f7">
            mdi-calendar-month
          </v-icon>
          Experto en CoEx desde {{ "expert.created_at" }}
        </div>
      </v-col>
      <v-col cols="12" md="4" class="d-flex flex-column align-md-end justify-md-center">
        <div class="mt-md-1 mb-md-1 ml--md3 colorBlue f16 rubik-r">
          Nivel de calificación de los clientes
        </div>
       <!--  <v-rating
          dense
          color="#FFC60A"
          :value="commentsExpert.rating"
          empty-icon="far fa-star"
          full-icon="fa-star"
          half-icon="fa-solid fa-star-half-stroke"
          size="15"
          half-increments
          background-color="#A3ADB7"
          readonly
        >
          <v-btn
            height="38"
            width="281"
            dark
            class="text-none barlow-m capr"
            color="#1a67b3"
            style="letter-spacing:normal;"
            elevation="0"
            @click="$router.push({ path: `/client/quoteRequest/${expert.id}`})"
          >
            Seleccionar y continuar
          </v-btn>
          <v-row v-if="!$store.state.expert.loading" class="mt-4">
            <v-col cols="3">
              <v-avatar size="174" class="mx-4 my-auto">
                <v-img :src="'https://randomuser.me/api/portraits/women/81.jpg'" />
              </v-avatar>
            </v-col>
            <v-col cols="5">
              <div class="colorBlue barlowc-sb rh">
                {{ expert.name }}
              </div>
              <div class="labelGray barlow-m capr">
                <!-- {{ expert.category }} -->
              </div>
              <div class="mt-2 labelGray rubik-r">
                <v-icon small color="#7dd4f7">
                  mdi-check-circle-outline
                </v-icon>
                <!-- {{ ItemParamPage.count }}  -->servicios realizados en CoEx
              </div>
              <div class="mt-2 labelGray rubik">
                <v-icon small color="#7dd4f7">
                  mdi-account-group
                </v-icon>
                {{ "expert.worker_count" }} trabajadores/ayudantes a cargo
              </div>
              <div class="mt-2 labelGray rubik-r">
                <v-icon small color="#7dd4f7">
                  mdi-calendar-month
                </v-icon>
                Experto en CoEx desde {{ "expert.created_at" }}
              </div>
            </v-col>
            <v-col cols="12" md="4" class="d-flex flex-column align-end justify-end">
              <div class="mt-1 mb-1 ml-3 colorBlue capr rubik-r">
                Nivel de calificación de los clientesaaaaaaaa
              </div>
              <!--  <v-rating
                  dense
                  color="#FFC60A"
                  :value="ItemParamPage.rating"
                  empty-icon="far fa-star"
                  full-icon="fa-star"
                  half-icon="fa-solid fa-star-half-stroke"
                  size="15"
                  half-increments
                  background-color="#A3ADB7"
                  readonly
                /> -->
              <div class="mt-4 labelGray rubik-r capr">
                <v-icon color="#6CCFF6" size="18" class="pa-2">
                  far fa-comment-dots
                </v-icon>
                <span><!-- {{ ItemParamPage.comments.length }}  -->comentario(s)</span>
              </div>
            </v-col>
          </v-row>
          
          <v-divider color="#DEE2E6" class="mt-10 mb-5"></v-divider>
          <v-row>
            <v-col cols="7">
              <span class="ml-1 colorBlue capr barlow-m">Fotografias de sus trabajos realizados</span>
              <v-slide-group
                class="mt-11 ml-n3"
                show-arrows
              >
                <!-- <v-slide-item
                  v-for="n in galleryExpert.length/2"
                  :key="n"
                  class="mr-3"
                >
                  <div>
                    <v-card height="115" width="145" class="mb-3">
                      <v-img height="115" width="145" :src="galleryExpert[n*2-2]" />
                    </v-card>
                    <v-card height="115" width="145">
                      <v-img height="115" width="145" :src="galleryExpert[n*2-1]" />
                    </v-card>
                  </div>
                </v-slide-item> -->
                <template #next>
                  <v-icon size="35" color="#A3ADB7">
                    mdi-chevron-right
                  </v-icon>
                </template>
                <template #prev>
                  <v-icon size="35" color="#A3ADB7">
                    mdi-chevron-left
                  </v-icon>
                </template>
              </v-slide-group>
            </v-col>
            <v-col cols="5">
              <div class="d-flex justify-space-between">
                <span class="colorBlue capr barlow-m">Calificaciones de los clientes</span>
                <span class="colorLightGray capr rubik-r">(1.0 - 5.0)</span>
              </div>
              <div class="my-4">
                <div class="labelGray barlow-m capr">
                  Fiabilidad
                </div>
                <div class="d-flex">
                  <v-progress-linear
                    rounded
                    color="#6CCFF6"
                    background-color="#F4F4F4"
                    height="8"
                    value="80"
                    class="my-auto mr-6"
                  />
                  <label class="colorBlueDarkest rubik-r capr">4.0</label>
                </div>
              </div>
              <div class="my-4">
                <div class="labelGray barlow-m capr">
                  Empatía
                </div>
                <div class="d-flex">
                  <v-progress-linear
                    rounded
                    color="#6CCFF6"
                    background-color="#F4F4F4"
                    height="8"
                    value="100"
                    class="my-auto mr-6"
                  />
                  <label class="colorBlueDarkest rubik-r capr">5.0</label>
                </div>
              </div>
              <div class="my-4">
                <div class="labelGray barlow-m capr">
                  Confianza/Seguridad
                </div>
                <div class="d-flex">
                  <v-progress-linear
                    rounded
                    color="#6CCFF6"
                    background-color="#F4F4F4"
                    height="8"
                    value="80"
                    class="my-auto mr-6"
                  />
                  <label class="colorBlueDarkest rubik-r capr">4.0</label>
                </div>
              </div>
              <div class="my-4">
                <div class="labelGray barlow-m capr">
                  Capacidad de respuesta
                </div>
                <div class="d-flex">
                  <v-progress-linear
                    rounded
                    color="#6CCFF6"
                    background-color="#F4F4F4"
                    height="8"
                    value="60"
                    class="my-auto mr-6"
                  />
                  <label class="colorBlueDarkest rubik-r capr">3.0</label>
                </div>
              </div>
              <div class="my-4">
                <div class="labelGray barlow-m capr">
                  Tangibles
                </div>
                <div class="d-flex">
                  <v-progress-linear
                    rounded
                    color="#6CCFF6"
                    background-color="#F4F4F4"
                    height="8"
                    value="20"
                    class="my-auto mr-6"
                  />
                  <label class="colorBlueDarkest rubik-r capr">1.0</label>
                </div>
              </div>
            </v-col>
          </v-row>
          <hr color="#DEE2E6" class="mt-3 mb-6">
          <div class="d-flex justify-space-between mb-5">
            <label class="colorBlue barlow-m capr">Comentarios</label>
            <div>
              <v-select style="width: 90px" :value="4" :items="asd" outlined dense>
                <template #label>
                  <label style="color: #003566">Mostrar</label>
                </template>
              </v-select>
            </div>
          </div>
          <!-- <div v-for="(item, n) in ItemParamPage.comments" :key="n" style="width: 100%">
            <div class="d-flex">
              <v-avatar size="55">
                <v-img :src="item.avatar" />
              </v-avatar>
              <div class="ml-6 mt-n1">
                <div class="d-flex justify-space-between">
                  <div class="mr-5 colorBlue rubik-r f13">
                    {{ item.name }}
                  </div>
                  <div class="comAndDate colorBlue">
                    {{ item.date }}
                  </div>
                </div>
                <div class="labelGray f13 rubik-l mt-1 mb-5">
                  {{ item.comment }}
                </div>
              </div>
            </div>
          </div> -->
          <v-card-actions class="my-2">
            <v-spacer />
            <v-pagination
              v-model="page"
              :length="pageCount"
              :total-visible="6"
              circle
              color="#6CCFF6"
            >
              <div class="mt-4 labelGray rubik-r capr">
                <v-icon color="#6CCFF6" size="18" class="pa-2">
                  far fa-comment-dots
                </v-icon>
                <span><!-- {{ ItemParamPage.comments.length }} --> comentario(s)</span>
              </div>
            </v-pagination>
          </v-card-actions>
        </v-rating> -->
      </v-col>
    </v-row>
    <v-divider color="#DEE2E6" class="mt-10 mb-5"></v-divider>
    <v-row>
      <v-col cols="7">
        <span class="ml-1 colorBlue capr barlow-m">Fotografias de sus trabajos realizados</span>
        <v-slide-group
          class="mt-11 ml-n3"
          show-arrows
        >
          <!-- <v-slide-item
                v-for="n in imagesWork.length/2"
                :key="n"
                class="mr-3"
              >
                <div>
                  <v-card height="115" width="145" class="mb-3">
                    <v-img height="115" width="145" :src="imagesWork[n*2-2]" />
                  </v-card>
                  <v-card height="115" width="145">
                    <v-img height="115" width="145" :src="imagesWork[n*2-1]" />
                  </v-card>
                </div>
              </v-slide-item> -->
          <template #next>
            <v-icon size="35" color="#A3ADB7">
              mdi-chevron-right
            </v-icon>
          </template>
          <template #prev>
            <v-icon size="35" color="#A3ADB7">
              mdi-chevron-left
            </v-icon>
          </template>
        </v-slide-group>
      </v-col>
      <v-col cols="5">
        <div class="d-flex justify-space-between">
          <span class="colorBlue capr barlow-m">Calificaciones de los clientes</span>
          <span class="colorLightGray capr rubik-r">(1.0 - 5.0)</span>
        </div>
        <div class="my-4">
          <div class="labelGray barlow-m capr">
            Fiabilidad
          </div>
          <div class="d-flex">
            <v-progress-linear
              rounded
              color="#6CCFF6"
              background-color="#F4F4F4"
              height="8"
              :value="5 * 100 / 5"
              class="my-auto mr-6"
            />
            <label class="colorBlueDarkest rubik-r capr">{{ "qualificationExpert.reliability" }}</label>
          </div>
        </div>
        <div class="my-4">
          <div class="labelGray barlow-m capr">
            Empatía
          </div>
          <div class="d-flex">
            <v-progress-linear
              rounded
              color="#6CCFF6"
              background-color="#F4F4F4"
              height="8"
              :value="5 * 100 / 5"
              class="my-auto mr-6"
            />
            <label class="colorBlueDarkest rubik-r capr">{{ "qualificationExpert.empathy" }}</label>
          </div>
        </div>
        <div class="my-4">
          <div class="labelGray barlow-m capr">
            Confianza/Seguridad
          </div>
          <div class="d-flex">
            <v-progress-linear
              rounded
              color="#6CCFF6"
              background-color="#F4F4F4"
              height="8"
              :value="5 * 100 / 5"
              class="my-auto mr-6"
            />
            <label class="colorBlueDarkest rubik-r capr">{{ "qualificationExpert.security "}}</label>
          </div>
        </div>
        <div class="my-4">
          <div class="labelGray barlow-m capr">
            Capacidad de respuesta
          </div>
          <div class="d-flex">
            <v-progress-linear
              rounded
              color="#6CCFF6"
              background-color="#F4F4F4"
              height="8"
              :value="5 / 5"
              class="my-auto mr-6"
            />
            <label class="colorBlueDarkest rubik-r capr">{{ "qualificationExpert.response" }}</label>
          </div>
        </div>
        <div class="my-4">
          <div class="labelGray barlow-m capr">
            Tangibles
          </div>
          <div class="d-flex">
            <v-progress-linear
              rounded
              color="#6CCFF6"
              background-color="#F4F4F4"
              height="8"
              :value="5 * 100 / 5"
              class="my-auto mr-6"
            />
            <label class="colorBlueDarkest rubik-r capr">{{ "qualificationExpert.tangible" }}</label>
          </div>
        </div>
      </v-col>
    </v-row>
    <hr color="#DEE2E6" class="mt-3 mb-6">
    <div class="d-flex justify-space-between mb-5">
      <label class="colorBlue barlow-m capr">Comentarios</label>
      <div>
        <v-select style="width: 90px" :value="4" :items="asd" outlined dense>
          <template #label>
            <label style="color: #003566">Mostrar</label>
          </template>
        </v-select>
      </div>
    </div>
    <div v-for="(item, n) in commentsExpert" :key="n" style="width: 100%">
      <div class="d-flex">
        <v-avatar size="55">
          <v-img :src="item.person.avatar" />
        </v-avatar>
        <div class="ml-6 mt-n1">
          <div class="d-flex justify-space-between">
            <div class="mr-5 colorBlue rubik-r f13">
              {{ item.person.name }}
            </div>
            <div class="comAndDate colorBlue">
              {{ item.created_at }}
            </div>
          </div>
          <div class="labelGray f13 rubik-l mt-1 mb-5">
            {{ item.text }}
          </div>
        </div>
      </div>
    </div>
    <v-card-actions class="my-2">
      <v-spacer />
      <v-pagination
        v-model="page"
        :length="pageCount"
        :total-visible="6"
        circle
        color="#6CCFF6"
      />
    </v-card-actions>
    <v-divider class="mb-10"></v-divider>
    <div class="d-flex flex-column-reverse align-center flex-md-row justify-md-space-between mt-md-auto">
      <sharedBackButton></sharedBackButton>
      <v-btn
        height="38"
        width="281"
        dark
        class="text-none barlow-m capr"
        color="#1a67b3"
        style="letter-spacing:normal;"
        elevation="0"
        @click="$router.push({ path: `/client/quoteRequest/${expert.id}`})"
      >
        Seleccionar y continuar
      </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      page: 1,
      pageCount: 4,
      asd: [1, 2, 3, 4, 5]
    }
  },
  computed: {
    /* imagesWork () {
        console.log(this.ItemParamPage.photos)
        if (this.ItemParamPage.photos.length % 2 === 0) {
          console.log('si')
          return this.ItemParamPage.photos
        } else {
          const images = this.ItemParamPage.photos
          images.push('')
          console.log('no', images)
          return images
        }
      }, */
    expert () {
      return this.$store.getters['expert/expert']
    },
   
    qualificationExpert () {
      return this.$store.getters['qualification/QualificationExpert']
    },
    commentsExpert () {
      return this.$store.getters['comments/CommentsExpert']
    }
  },
  created () {
    this.$store.dispatch('gallery/getGalleryByExpert', this.$route.params.id)
    this.$store.dispatch('qualification/getQualificationByExpert', this.$route.params.id)
    this.$store.dispatch('comments/getCommentsByExpert', this.$route.params.id)
    this.$store.dispatch('expert/getExpertByIdClient', this.$route.params.id)
  }
  // methods: {
  //   redirect () {
  //     if (this.$store.state.auth.loggedIn) {
  //       switch (this.$store.state.auth.user.role_id) {
  //         case 1: this.$router.push('/admin/registeredExperts/1')
  //           break
  //         case 3: this.$router.push('/client/expertProfile/1')
  //           break
  //         default: this.$router.push('/register/createClient')
  //           break
  //       }
  //     } else {
  //       this.$router.push('/client/expertProfile/1')
  //       // this.$router.push('/login-register')
  //     }
  //   }
  // }
}
</script>

  <style scoped>

  </style>
