<template>
  <div class="column main-container container">
    <div class="column is-10 is-offset-1">
      <div class="columns">
        <div class="column">
          <h1>My app name</h1>

          <div class="topics-list">
            <topic-tag class="topic-tag">Hello</topic-tag>
            <topic-tag class="topic-tag">Hello</topic-tag>
            <topic-tag class="topic-tag">Hello</topic-tag>
          </div>

          <p>Some short blurb here</p>
        </div>

        <div class="column">
          <div class="level level-right">
            <div class="level-left level">
              <div class="level-item">
                <a-button>Launch now</a-button>
              </div>

              <div class="level-item">
                <a-button>
                  <div class="level">
                    <div class="level-item">
                      <img class="view-github-icon" src="../../assets/github_logo.svg"/>
                    </div>

                    <div class="level-item">
                      <p>View on Github</p>
                    </diV>
                  </div>
                </a-button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="content">
        <div class="tabs">
          <ul>
            <li v-for="(tab, index) in tabs" :class="{ 'is-active': activeTabIndex === index}" :key="tab">
              <a @click="onClickTab(index)">
                {{ tab }}
              </a>
            </li>
          </ul>
        </div>

        <div v-if="isConfigurationTabActive">
          <p>Configuration values required for this app</p>

          <div>
            <table class="table config-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Reference</th>
                </tr>
              </thead>

              <tbody>
                <td>API KEY</td>
                <td>API key for Third party API</td>
              </tbody>
            </table>
          </div>
        </div>

        <div v-else-if="Boolean(this.tabs[this.activeTabIndex])">
          <p>Hello Hello</p>
        </div>
      </div>

      <section class="section">
        <h5>Services used</h5>

        <div class="services-list columns is-multiline">
          <div class="column is-4">
            <service-summary title="Hello" description="World"/>
          </div>

          <div class="column is-4">
            <service-summary title="Hello" description="World"/>
          </div>

          <div class="column is-4">
            <service-summary title="Hello" description="World"/>
          </div>
        </div>
      </section>

      <section class="section">
        <h5>Similar apps</h5>

        <div class="services-list columns is-multiline">
          <div class="column is-4">
            <app-summary title="My app name and long name" description="Brandchecking app to see if your brand is valid"/>
          </div>

          <div class="column is-4">
            <app-summary title="Hello" description="World"/>
          </div>

          <div class="column is-4">
            <app-summary title="Hello" description="World"/>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ServiceSummary from '../components/ServiceSummary';
import AppSummary from '../components/AppSummary';
import TopicTag from '../components/TopicTag';

const CONFIGURATION_TAB = 'Configuration';

export default {
  props: ['alias', 'owner', 'repo'],
  data() {
    return {
      activeTabIndex: 0,
    };
  },
  computed: {
    isConfigurationTabActive() {
      return this.tabs.indexOf(CONFIGURATION_TAB) === this.activeTabIndex;
    },
    tabs() {
      // Computed because the goal is to derive these topics from Markdown
      return ['Setup', 'Usage', 'More info', 'Updates'].concat(CONFIGURATION_TAB);
    },
  },
  methods: {
    onClickTab(tabIndex) {
      this.activeTabIndex = tabIndex;
    },
  },
  components: {
    ServiceSummary,
    AppSummary,
    TopicTag,
  },
};
</script>

<style scoped>
.container {
  text-align: left;
  padding: 40px 0;
}

.view-github-icon {
  height: 18px;
}

.topics-list {
  padding: 5px 0 20px 0;
}

.services-list {
  margin-top: 10px;
}

.section {
  padding: 20px 0;
}

.config-table th {
  font-weight: normal;
}

.content {
  padding-bottom: 80px;
}

.topic-tag {
  margin: 0 4px;
}
</style>
