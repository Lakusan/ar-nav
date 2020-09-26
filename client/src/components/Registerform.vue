<template>
    <v-app>
        <v-container>
         <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="indigo"
                dark
                flat
              >
                <v-toolbar-title>{{title}}</v-toolbar-title>
                
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Name"
                    name="name"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="name"
                    
                  ></v-text-field>
                   <v-text-field
                    label="E-Mail"
                    name="email"
                    prepend-icon="mdi-email"
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
                    <v-text-field
                    id="confirmPassword"
                    label="Confirm Password"
                    name="passwordComfirmation"
                    prepend-icon="mdi-repeat"
                    type="password"
                     v-model="passwordConfirmation"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn to="home" color="indigo" class="white--text">Cancel</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="indigo" class="white--text" @click="signUp()">Confirm</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
  </v-container>  
    </v-app>
</template>


<script>
  import axios from 'axios'

   export default {

    data: () => ({
      title: 'Register as New User',
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
   
      return: {
        name: "",
        email: "",
        password: "",
        passwordConfirmation: ""
      }
    }),
    
    methods: {
       signUp() {

      if (this.password == this.passwordConfirmation){
        axios
        .post("http://127.0.0.1:3005/auth/register", {
            name: this.name,
            email: this.email,
            password: this.password
          
        })
        .then(response => {
          alert(response);
          if(response) {
            this.$router.push('/home')
            }
            //handle response and save JWT
            // this.$router.push('/signup')
        })
        .catch(err => {
          alert("Please check your inputs"  + err);
        });
      } else {
        alert("Passwords dont match");
      }
      
    },
    }
  
}
</script>