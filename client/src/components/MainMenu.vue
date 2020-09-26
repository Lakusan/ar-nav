<template>
  <v-app>
    <div>
      <v-row justify="center">
        <v-btn color="indigo" class="ma-2" dark @click="dialog = true">
          Open Comments
        </v-btn>

        <v-dialog
          v-model="dialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
          scrollable
        >
          <v-card tile>
            <v-toolbar dense dark max-height="50px" color="indigo">
              <v-btn icon dark @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>Comment Section</v-toolbar-title>
              <v-spacer></v-spacer>

              <v-toolbar-items>
                  <v-btn dark text @click="addPost = true">
                <v-icon>mdi-comment-plus-outline</v-icon>
                </v-btn>
                      <v-btn dark text @click="nope()">
                      <v-icon>mdi-map-marker-radius</v-icon>
                </v-btn>
              </v-toolbar-items>

              <v-menu bottom right offset-y> </v-menu>
            </v-toolbar>




            <v-card-text v-for="post in activePosts"
            :key="post._id">
              <v-card
                class="d-flex pr-1 py-1 pa-1 mb-4 mt-4"
                max-width="100%"
               v-if="selectedLocation == post.locationID"
                >
                <v-card-text>
                  <p class="display-1 text--primary">
                    {{ post.title }}
                  </p>
                  <p>{{ post.author }}</p>
                  <div class="text--primary">
                    {{ post.content }}
                  </div>
                  <v-card-text
                    v-for="comment in post.comments"
                    :key="comment._id"
                    class= "pr-0 pl-0 pt-1 pb-1"
                  >
                    <v-list-item>
                      <p>{{ comment.author }}: {{ comment.comment }}</p>
                    </v-list-item>
                  </v-card-text>
                </v-card-text>

                <v-card-actions>
                  <v-btn
                    dark
                    color="indigo"
                    class="ma-2"
                    @click="addComment(post._id)"
                  >
                    Add Comment
                  </v-btn>
                </v-card-actions>
              </v-card>

      
            </v-card-text>

<p>{{activePosts}}</p>

            <v-card-text>
              <v-layout row wrap>
                <v-flex xs4 v-for="location in locations" :key="location._id">
                  <v-card
                    @click="getEvent(location._id)"
                    class="pr-1 py-1 pa-1 mb-2 mt-2 mr-2 ml-2"
                    max-width="100%"
                  >
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">{{ location.name }}</div>
                        <span class="grey--text"
                          >Latitude: {{ location.lat }}&deg; <br />
                          Longitude: {{ location.lat }}&deg;
                        </span>
                      </div>
                    </v-card-title>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-card-text>

            <div style="flex: 1 1 auto"></div>
          </v-card>
        </v-dialog>

        <!-- <v-dialog v-model="dialog2" max-width="500px">
          <v-card v-if="locations">
            <v-card-title> Select Location </v-card-title>
            <v-card-text>
              <v-select 
              label="Selected Location"
              :items="locations"
              v-model="selectedLocation"
              name="locations"
              item-text="name"
              >
        </v-select>

            </v-card-text>
            <v-card-actions>
              <v-btn color="indigo" text @click="dialog2 = false">
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog> -->
      </v-row>
    </div>
  </v-app>
</template>

<script>
import axios from "axios";


export default {
  data: () => {
    return {
      locations: undefined,
      selectedLocation: undefined,
      title: undefined,
      postContent: undefined,
 

      commentDialog: false,


      dialog: false,
      dialog2: false,
    };
  },

  mounted() {
    this.getLocationData();
    this.getPostingsData();
  },

  methods: {
    async getLocationData() {
      try {
        await axios.get("http://127.0.0.1:3005/locations").then((response) => {
          this.locations = response.data;
        });
      } catch (err) {
        alert("No Data or Connection to DB " + err);
      }
    },

   

    showPost() {
      // if (this.$data.selectedLocation === e) {return true;}
     return this.$data.selectedLocation;
      // console.log("locationID from Element: " + e);
      // console.log("selectedLocation: " + this.$data.selectedLocation);
    },

    
    async getPostingsData() {
      try {
        await axios.get("http://127.0.0.1:3005/comments").then((response) => {
          this.postContent = response.data;
          //console.log(this.postContent);
        });
      } catch (err) {
        alert("No Data or Connection to DB " + err);
      }
    },

    addComment(e) {
      alert(e);
    },

    nope(){
      alert("Not implemented yet");
    },
    filterPosts(){
      
      
      },
     getEvent(e) {
      this.$data.selectedLocation = e;
      this.filterPosts(this.$data.selectedLocation);
      console.log(this.activePosts);
      
      //alert(this.$data.selectedLocation);     
    },
  },
  computed: {
    activePosts() {
    var x = this.postContent
    
   
    //x = x.filter(y => y.locationID == this.$data.selectedLocation)
    // console.log(x)
    // }
    return x

    }

  }
};
</script>


