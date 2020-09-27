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
                <v-form ref="form" v-model="valid" lazy-validation >
                  <v-text-field
                    label="Name"
                    name="name"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="name"
                    required
                    :rules="nameRules"
                  ></v-text-field>
                   <v-text-field
                    label="E-Mail"
                    name="email"
                    prepend-icon="mdi-email"
                    type="text"
                     v-model="email"
                     required
                     :rules="emailRules"
                  ></v-text-field>
                  

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                     v-model="password"
                     required
                     :rules="passwordRules"
                  ></v-text-field>
                    <v-text-field
                    id="confirmPassword"
                    label="Confirm Password"
                    name="passwordComfirmation"
                    prepend-icon="mdi-repeat"
                    type="password"
                     v-model="passwordConfirmation"
                     :rules="[passwordConfirmationRule, passwordRules ]"
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
   
     valid: true,
    
     passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must be more than 6 characters',
      ],
 nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length >= 3) || 'Name must be more than 3 characters',
      ],

    emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],



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
            this.reset();
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
reset () {
        this.$refs.form.reset()
      },

      validate () {
        if(this.$refs.form.validate()){
          this.signUp();
        }
      },

    },
    computed: {
passwordConfirmationRule() {
      return () => (this.password === this.passwordConfirmation) || 'Password must match'
    }
    }
  
}
</script>