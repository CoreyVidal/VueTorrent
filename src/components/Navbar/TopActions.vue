<template>
  <div :class="mobile ? '' : 'flex-shrink-0 ml-0'">
    <v-btn
      icon
      :text="!mobile"
      class="mr-0 ml-0"
      @click="addModal('AddModal')"
    >
      <v-icon color="grey">
        mdi-plus-network
      </v-icon>
    </v-btn>
    <v-btn
      icon
      :text="!mobile"
      class="mr-0 ml-0"
      @click="addModal('SearchModal')"
    >
      <v-icon color="grey">
        mdi-cloud-search
      </v-icon>
    </v-btn>
    <v-btn
      icon
      :text="!mobile"
      class="mr-0 ml-0"
      @click="addModal('SettingsModal')"
    >
      <v-icon color="grey">
        mdi-cog
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
import { General } from '@/mixins'
import { mapState } from 'vuex'
import qbit from '@/services/qbit'

export default {
  name: 'TopActions',
  mixins: [General],
  props: ['mobile', 'showAll'],
  data() {
    return {
      fab: false
    }
  },
  computed: {
    ...mapState(['selected_torrents'])
  },
  methods: {
    pauseTorrents() {
      qbit.pauseTorrents(this.selected_torrents)
    },
    resumeTorrents() {
      qbit.resumeTorrents(this.selected_torrents)
    },
    removeTorrents() {
      if (!this.selected_torrents.length) return

      return this.createModal('ConfirmDeleteModal')
    },
    addModal(name) {
      this.createModal(name)
    }
  }
}
</script>
