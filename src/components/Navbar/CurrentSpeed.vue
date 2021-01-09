<template>
  <div v-if="status">
    <div class="text--secondary text-uppercase caption ml-4">
      Current Speed
    </div>
    <v-card flat color="#121212" class="mr-2 ml-2">
      <div class="sf-08pct">
        <v-layout row wrap class="pa-3 project nav_download mx-auto">
          <v-icon color="download">
            mdi-progress-download
          </v-icon>
          <span class="download--text title">
            {{ status.dlspeed | getDataValue }}
            <span class="font-weight-light caption">
              {{ status.dlspeed | getDataUnit }}/s
            </span>
          </span>
          <v-icon class="pl-5" color="upload">
            mdi-progress-upload
          </v-icon>
          <span class="upload--text title">
            {{ status.upspeed | getDataValue }}
            <span class="font-weight-light caption">
              {{ status.upspeed | getDataUnit }}/s
            </span>
          </span>
        </v-layout>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'CurrentSpeed',
  props: ['status']
}
</script>
