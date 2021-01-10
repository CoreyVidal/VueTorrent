<template>
  <v-list>
    <v-list-item link @click="resume">
      <v-icon>mdi-play</v-icon>
      <v-list-item-title
        class="ml-2"
      >
        Resume
      </v-list-item-title>
    </v-list-item>
    <v-list-item link @click="pause">
      <v-icon>mdi-pause</v-icon>
      <v-list-item-title
        class="ml-2"
        style="font-size: 12px"
      >
        Pause
      </v-list-item-title>
    </v-list-item>
    <v-divider />
    <v-list-item link @click="deleteWithoutFiles">
      <v-icon color="red">
        mdi-delete
      </v-icon>
      <v-list-item-title
        class="ml-2"
        style="font-size: 12px; color: red"
      >
        Delete
      </v-list-item-title>
    </v-list-item>
    <v-list-item link @click="deleteWithFiles">
      <v-icon color="red">
        mdi-delete-forever
      </v-icon>
      <v-list-item-title
        class="ml-2"
        style="font-size: 12px; color: red"
      >
        Delete with files
      </v-list-item-title>
    </v-list-item>
    <v-divider />
    <v-list-item link @click="location">
      <v-icon>mdi-folder</v-icon>
      <v-list-item-title
        class="ml-2"
        style="font-size: 12px"
      >
        Change location
      </v-list-item-title>
    </v-list-item>
    <v-list-item link @click="rename">
      <v-icon>mdi-rename-box</v-icon>
      <v-list-item-title
        class="ml-2"
        style="font-size: 12px"
      >
        Rename
      </v-list-item-title>
    </v-list-item>
    <v-list-item link @click="recheck">
      <v-icon>mdi-playlist-check</v-icon>
      <v-list-item-title
        class="ml-2"
        style="font-size: 12px;"
      >
        Force recheck
      </v-list-item-title>
    </v-list-item>
    <v-list-item link @click="reannounce">
      <v-icon>mdi-bullhorn</v-icon>
      <v-list-item-title
        class="ml-2"
        style="font-size: 12px"
      >
        Force reannounce
      </v-list-item-title>
    </v-list-item>
    <v-menu
      open-on-hover
      top
    >
      <template #activator="{ on }">
        <v-list-item link v-on="on">
          <v-icon>mdi-priority-high</v-icon>
          <v-list-item-title
            class="ml-2"
            style="font-size: 12px"
          >
            Set Priority
          </v-list-item-title>
          <v-icon>mdi-chevron-right</v-icon>
        </v-list-item>
      </template>
      <v-list dense rounded>
        <v-list-item
          v-for="(item, index) in priority_options"
          :key="index"
          link
          @click="setPriority(item.action)"
        >
          <v-icon>{{ item.icon }}</v-icon>
          <v-list-item-title class="ml-2" style="font-size: 12px">
            {{ item.name }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-divider />
    <v-list-item link @click="showInfo">
      <v-icon>mdi-folder-information</v-icon>
      <v-list-item-title
        class="ml-2"
        style="font-size: 12px"
      >
        Show Info
      </v-list-item-title>
    </v-list-item>
    <v-list-item link @click="selectTorrent(hash)">
      <v-icon>mdi-select</v-icon>
      <v-list-item-title
        class="ml-2"
      >
        Select
      </v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script>
import qbit from '@/services/qbit'
import { General, TorrentSelect } from '@/mixins'
export default {
  name: 'TorrentRightClickMenu',
  mixins: [General, TorrentSelect],
  props: {
    hash: String
  },
  data: () => ({
    priority_options: [
      { name: 'top', icon: 'mdi-priority-high', action: 'topPrio' },
      { name: 'increase', icon: 'mdi-arrow-up', action: 'increasePrio' },
      { name: 'decrease', icon: 'mdi-arrow-down', action: 'decreasePrio' },
      { name: 'bottom', icon: 'mdi-priority-low', action: 'bottomPrio' }
    ]
  }),
  computed: {
    dark() {
      return this.$vuetify.dark
    }
  },
  methods: {
    resume() {
      qbit.resumeTorrents([this.hash])
    },
    pause() {
      qbit.pauseTorrents([this.hash])
    },
    location() {
      this.createModal('ChangeLocationModal', { hash: this.hash })
    },
    rename() {
      this.createModal('RenameModal', { hash: this.hash })
    },
    reannounce() {
      qbit.reannounceTorrents([this.hash])
    },
    deleteWithoutFiles() {
      qbit.deleteTorrents([this.hash], false)
    },
    deleteWithFiles() {
      qbit.deleteTorrents([this.hash], true)
    },
    recheck() {
      qbit.recheckTorrents([this.hash])
    },
    showInfo() {
      this.createModal('TorrentDetailModal', { hash: this.hash })
    },
    setPriority(priority) {
      qbit.setTorrentPriority(this.hash, priority)
    }
  }
}
</script>
