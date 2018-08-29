<template>
  <div class="column main-container container">
    <div class="column is-10 is-offset-1">
      <div class="columns">
        <div class="column">
          <h1>My app name</h1>

          <div class="topics-list">
            <topic-tag>Hello</topic-tag>
            <topic-tag>Hello</topic-tag>
            <topic-tag>Hello</topic-tag>
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

      <div>
        <div class="tabs">
          <ul>
            <li class="is-active"><a>Setup</a></li>
            <li><a>Usage</a></li>
            <li><a>More info</a></li>
            <li><a>Updates</a></li>
            <li><a>Configuration</a></li>
          </ul>
        </div>

        <div>
          Hello hello hello
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

export default {
  props: ['alias', 'owner', 'repo'],
  data() {
    return {
      app: {},
    };
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
</style>
