<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link to="home">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-logout-variant</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Home</v-toolbar-title>
    </v-app-bar>
    <v-container fluid>
      <v-row class="text-center">
        <v-col cols="12">
          <v-img
            :src="require('@/assets/logo.png')"
            class="my-4"
            contain
            height="200"
          />
        </v-col>
        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3">
            Welcome to
            <br />
            AR-Nav
          </h1>

          <p class="subheading font-weight-regular">
            This is a prototype for an location based AR-Webapp with
            <br />markerbased support for development reasons, <br />a Node.js
            Express REST API as backend <br />and a VueJS / AR.JS Frontend
          </p>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="indigo" dark flat>
              <v-toolbar-title>Sign in</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form id="LoginFormCompontent">
                <v-text-field
                  label="E-Mail"
                  name="email"
                  prepend-icon="mdi-account"
                  type="text"
                  v-model="email"
                ></v-text-field>

                <v-text-field
                  id="password"
                  label="Password"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                  v-model="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn to="signup" color="indigo" class="white--text"
                >Sign up</v-btn
              >
              <v-spacer></v-spacer>
              <v-btn color="indigo" class="white--text" @click="login()"
                >Login</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-footer color="indigo" app>
      <span class="white--text"
        >&copy; {{ new Date().getFullYear() }} by Andreas Lakus, SRH Hochschule
        HD</span
      >
    </v-footer>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    drawer: false,
    email: "",
    password: "",

    return: {
      email: "",
      password: "",
    },
  }),

  methods: {
    login() {
      axios
        .post("http://127.0.0.1:3005/auth/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
          alert("Login Success !");
        })
        .catch((err) => {
          alert("Please check your inputs" + err);
        });
    },
  },
};
</script>
