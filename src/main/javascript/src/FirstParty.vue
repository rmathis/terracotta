<template>
  <v-app class="app">
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <v-img
              class="mx-auto mb-5"
              src="@/assets/terracotta_logo.svg"
              alt="Terracotta Logo"
              max-width="173"
            />
            <v-card class="first-party-card mx-auto" max-width="700">
              <v-card-title class="text-h5"
                >You need to establish a first-party interaction with
                Terracotta.</v-card-title
              >
              <v-card-text class="first-party-card__text">
                <p>
                  Click the button below to establish the connection. This will
                  return you to
                  {{ isAssignment ? "your Canvas assignment" : "Canvas" }}, and
                  you'll see the same pop-up window as before. It may look like
                  nothing has changed, but please click
                  {{
                    isAssignment ? '"Launch Assignment"' : '"Launch Terracotta"'
                  }}
                  again.
                </p>

                <v-tooltip
                  top
                  color="#373d3f"
                  transition="slide-y-transition"
                  max-width="360px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <p class="has-tooltip" v-bind="attrs" v-on="on">
                      What is a first party interaction and why am I being asked
                      this?
                    </p>
                  </template>
                  <div>
                    <h3>First-party interaction</h3>
                    <div>
                      A first-party interaction allows the site you're visiting
                      to create a cookie. This makes it possible for the browser
                      to remember your login information and to keep the session
                      open. Establishing this kind of interaction will make it
                      possible for you to use Terracotta with your current
                      browser.
                    </div>
                  </div>
                </v-tooltip>
              </v-card-text>
              <v-card-actions>
                <v-btn :href="platformRedirectUrl" color="primary" elevation="0"
                  >Return to Canvas</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col></v-row
        ></v-container
      >
    </v-main>
  </v-app>
</template>

<script>
export default {
  props: ["platformRedirectUrl", "assignmentId"],
  computed: {
    isAssignment() {
      return !!this.assignmentId;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./styles/custom";

.app {
  background-color: map-get($map: $grey, $key: "lighten-4") !important;
}
.has-tooltip {
  text-decoration-style: dashed;
  text-decoration-line: underline;
  color: map-get($map: $blue, $key: "base");
}
.first-party-card {
  padding: 32px;
}
.first-party-card__text {
  color: rgba(0, 0, 0, 0.87) !important;
}
.v-tooltip__content {
  opacity: 1 !important;
}
</style>
