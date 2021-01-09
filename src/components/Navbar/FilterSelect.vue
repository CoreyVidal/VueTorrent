<template>
  <div style="margin-top: 30px">
    <v-select
      v-model="selectedState"
      :value="selectedState"
      outlined
      class="ml-2 mr-2 side-select"
      label="STATUS"
      :items="options"
      item-text="name"
      item-value="value"
      item-color="primary"
      @input="setStatusFilter"
    />
    <v-select
      v-model="selectedCategory"
      :value="selectedCategory"
      outlined
      class="ml-2 mr-2 side-select"
      label="CATEGORIES"
      :items="availableCategories"
      item-color="primary"
      @input="setCategoryOrTrackerFilter"
    />
    <div v-if="showTrackerFilter">
      <v-select
        v-model="selectedTracker"
        :value="selectedTracker"
        outlined
        class="ml-2 mr-2 side-select"
        label="TRACKER"
        :items="availableTrackers"
        item-color="primary"
        @input="setCategoryOrTrackerFilter"
      />
    </div>
    <div
      style="font-size: 0.9em"
      class="primary--text text-uppercase text-center"
    >
      {{ torrentCountString }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'FilterSelect',
  props: ['showTrackerFilter'],
  data: () => ({
    options: [
      { value: 'all', name: 'All' },
      { value: 'downloading', name: 'Downloading' },
      { value: 'seeding', name: 'Seeding' },
      { value: 'completed', name: 'Completed' },
      { value: 'resumed', name: 'Resumed' },
      { value: 'paused', name: 'Paused' },
      { value: 'active', name: 'Active' },
      { value: 'inactive', name: 'Inactive' },
      { value: 'stalled', name: 'Stalled' },
      { value: 'stalled_uploading', name: 'Stalled Uploading' },
      { value: 'stalled_downloading', name: 'Stalled Downloading' },
      { value: 'errored', name: 'Errored' }
    ],
    selectedState: { value: 'all', name: 'All' },
    selectedCategory: null,
    selectedTracker: 'All'
  }),
  computed: {
    ...mapGetters(['getCategories', 'getTrackers', 'getTorrentCountString']),
    availableCategories() {
      const categories = ['All', 'Uncategorized']
      categories.push(...Object.keys(this.getCategories()))
      
      return categories
    },
    categoryFilter() {
      switch (this.selectedCategory) {
        case 'All':
          return null
        case 'Uncategorized':
          return ''
        default:
          return this.selectedCategory
      }
    },
    availableTrackers() {
      const trackers = ['All', 'Not working']
      if (this.showTrackerFilter) {
        trackers.push(...this.getTrackers())
      }
      
      return trackers
    },
    trackerFilter() {
      switch (this.selectedTracker) {
        case 'All':
          return null
        case 'Not working':
          return ''
        default:
          return this.selectedTracker
      }
    },
    torrentCountString() {
      return this.getTorrentCountString()
    }
  },
  mounted() {
    this.selectedCategory = this.availableCategories[0]
  },
  methods: {
    setStatusFilter(value) {
      this.$store.commit('UPDATE_SORT_OPTIONS', {
        filter: value,
        category: this.categoryFilter,
        tracker: this.trackerFilter
      })
    },
    setCategoryOrTrackerFilter() {
      this.$store.commit('UPDATE_SORT_OPTIONS', {
        filter: this.selectedState.value,
        category: this.categoryFilter,
        tracker: this.trackerFilter
      })
    }
  }
}
</script>
