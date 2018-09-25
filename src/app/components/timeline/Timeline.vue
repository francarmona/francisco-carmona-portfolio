<template>
  <div class="time-line">
    <div class="time-line-bar">
      <i class="material-icons beginning">adjust</i>
      <i class="material-icons end">bookmark_border</i>
    </div>
    <div v-for="(group, index) in groupsProcessed" class="row group">
      <div class="col-sm-12">
        <div class="col-sm-12 events-group" v-bind:style="{ padding: index === 0 ? '0 0 3rem 0' : '' }">
          <div v-html="group.groupTitle"></div>
        </div>
        <TimelineEvents v-bind:events="group.events"></TimelineEvents>
      </div>
    </div>
  </div>
</template>

<script>
import TimelineEvents from './TimelineEvents.vue';
export default {
  name: 'Timeline',
  props: {
    groups: {
      type: Array,
      required: true
    }
  },
  computed: {
    groupsProcessed() {
      let eventCounter = 0;
      return this.groups.map((group) => {
        const events = group.hasOwnProperty('events') ? group.events.map((event) => {
          const parity = eventCounter % 2 === 0 ? 'even' : 'odd';
          eventCounter++;
          return Object.assign({}, event, { parity });
        }) : [];
        return Object.assign({}, group, { events: events});
      });
    }
  },
  components: {TimelineEvents}
}
</script>

<style lang="scss" scoped>
  @import '../../scss/theme/variables';
  .time-line {
    position: relative;
    .time-line-bar {
      width: 4px;
      margin-left: -2px;
      position: absolute;
      left: 50%;
      top: 15px;
      background-color: #dddddd;
      opacity: .5;
      min-height: 100%;
      > i {
        position: absolute;
        left: -16px;
        background: white;
        font-size: 2.25rem;
        color: #dddddd;
        &.beginning {
          top: -3px;
        }
        &.end {
          bottom: 0;
        }
      }
    }

    .group {
      > div {
        z-index: 9999;
      }
    }

    .events-group {
      > div {
        background-color: $body-bg;
        padding: 5px;
      }
      z-index: 9999;
      text-align: center;
      padding: 2.5rem 0;
    }

    @media screen and (min-width: $md-breakpoint) {
      .time-line-bar {
        background-color: #b7b7b7;
        > i {
          color: #b7b7b7;
        }
      }
    }
  }
</style>
