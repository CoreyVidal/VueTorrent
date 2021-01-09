<template>
  <v-card
    flat
    style="margin-top: 30px"
    color="#121212"
    class="ml-2 mr-2"
  >
    <div class="sf-08pct">
      <v-layout row wrap class="pa-3 project nav_upload mx-auto">
        <v-flex md6>
          <div
            style="font-size: 0.95em; margin-top: 6px"
            class="text--secondary"
          >
            Free Space
          </div>
        </v-flex>
        <v-flex v-if="space" md5 class="ml-4">
          <span class="text--secondary title">
            {{ space | getDataValue }}
            <span class="font-weight-light caption">
              {{ space | getDataUnit }}
            </span>
          </span>
        </v-flex>
      </v-layout>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'FreeSpace',
  props: { space: String }
}
</script>
