<template>
  <nav class="navbar">
    <!--title-->
    <v-app-bar app>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
      />
      <v-toolbar-title
        v-if="!$vuetify.breakpoint.xs"
        :class="[
          'grey--text',
          { 'subheading ml-0': $vuetify.breakpoint.smAndDown }
        ]"
      >
        <span class="font-weight-light">Vue</span>
        <span>Torrent</span>
      </v-toolbar-title>
      <v-spacer />

      <TopMenu :show-all="webuiSettings.showGlobalRemoveResumePause" />
    </v-app-bar>
    <!--navigation drawer itself -->
    <v-navigation-drawer
      v-model="drawer"
      app
      color="navdrawer"
      style="position: fixed;"
      width="256"
      disable-resize-watcher
    >
      <v-flex
        v-if="status"
        style="height: 98vh; display: flex; flex-direction: column;"
        class="mt-3"
      >
        <CurrentSpeed
          v-if="webuiSettings.showCurrentSpeed"
          :status="status"
        />

        <SpeedGraph v-if="webuiSettings.showSpeedGraph" />

        <div class="mt-4" />
        <SessionStats
          v-if="webuiSettings.showSessionStat"
          :status="status"
        />

        <FreeSpace
          v-if="webuiSettings.showFreeSpace"
          :space="status.freeDiskSpace"
        />
        <FilterSelect :show-tracker-filter="webuiSettings.showTrackerFilter" />
        <div class="mt-auto">
          <BottomActions />
        </div>
      </v-flex>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  BottomActions,
  TopMenu,
  SpeedGraph,
  FreeSpace,
  SessionStats,
  CurrentSpeed,
  FilterSelect
} from './index'

export default {
  name: 'Navbar',
  components: {
    FreeSpace,
    BottomActions,
    TopMenu,
    SpeedGraph,
    SessionStats,
    CurrentSpeed,
    FilterSelect
  },
  data() {
    return {
      drawer: this.$vuetify.breakpoint.mdAndUp
    }
  },
  computed: {
    ...mapGetters(['getTheme', 'getWebuiSettings', 'getStatus']),
    webuiSettings() {
      return this.getWebuiSettings()
    },
    status() {
      return this.getStatus()
    }
  },
  created() {
    this.$vuetify.theme.dark = this.getTheme()
  }
}
</script>

<style lang="scss">
#app > div > nav > nav > div.v-navigation-drawer__content {
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #56718c;
    border-radius: 20px;
  }
}

.v-app-bar > .v-toolbar__content{
 padding-right: 0;
}

.navbar {
  @media screen and (max-width: 480px) {
    .v-toolbar__title { display: none; }
    .spacer { display: none; }
  }
}
</style>
