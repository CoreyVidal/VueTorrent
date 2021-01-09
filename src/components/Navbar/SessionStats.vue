<template>
  <div v-if="status">
    <div class="text--secondary text-uppercase caption ml-4">
      Session Status
    </div>
    <v-card flat color="#121212" class="mr-2 ml-2">
      <div class="sf-08pct">
        <v-layout row wrap class="pa-3 project nav_download mx-auto">
          <v-flex md6>
            <div
              style="font-size: 0.95em; margin-top: 6px"
              class="download--text"
            >
              Downloaded
            </div>
          </v-flex>
          <v-flex md5 class="ml-4">
            <span class="download--text title">
              {{ status.downloaded | getDataValue }}
              <span class="font-weight-light caption">
                {{ status.downloaded | getDataUnit }}
              </span>
            </span>
          </v-flex>
        </v-layout>
      </div>
    </v-card>
    <v-card flat color="#121212" class="ml-2 mr-2 mt-1">
      <div class="sf-08pct">
        <v-layout row wrap class="pa-3 project nav_upload mx-auto">
          <v-flex md6>
            <div
              style="font-size: 0.95em; margin-top: 6px"
              class="upload--text"
            >
              Uploaded
            </div>
          </v-flex>
          <v-flex md5 class="ml-4">
            <span class="upload--text title">
              {{ status.uploaded | getDataValue }}
              <span class="font-weight-light caption">
                {{ status.uploaded | getDataUnit }}
              </span>
            </span>
          </v-flex>
        </v-layout>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'SessionStats',
  props: ['status']
}
</script>

