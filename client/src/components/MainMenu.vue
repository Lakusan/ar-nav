<template>
  <v-app>
    <div>
      <v-row justify="center">
        <v-btn color="indigo" class="ma-2" dark @click="dialog = true">
          Open Comments Section
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
               

<template>
  <v-row justify="center">
    <v-dialog v-model="postDialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          dark
          v-bind="attrs"
          v-on="on"
        >
   <v-icon>mdi-comment-plus-outline</v-icon>      
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">New Post</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
            
              <v-col cols="12">
                <v-text-field label="Author*" ref="input" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Post*" ref="input" required></v-text-field>
              </v-col>
              
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="postDialog = false">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="postDialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
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
              >


     <template>
  <v-row justify="center">
    <v-dialog v-model="commentDialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Add Comment
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Write a Comment</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
            
              <v-col cols="12">
                <v-text-field label="Author*" name="author" v-model="author" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Comment*"  name="comment" v-model="comment" required></v-text-field>
              </v-col>
              
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="commentDialog = false">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="addComment(post._id)">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>



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
         
                </v-card-actions>
              </v-card>

      
            </v-card-text>



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
      activePosts: undefined,
      author: undefined,
      comment: undefined,
      
     
 

      


      dialog: false,
      commentDialog: false,
      postDialog: false,
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

    async getPostingsData() {
      try {
        await axios.get("http://127.0.0.1:3005/comments").then((response) => {
          this.postContent = response.data;
        });
      } catch (err) {
        alert("No Data or Connection to DB " + err);
      }
    },

    async getPostById(id) {
      try {
        await axios.get("http://127.0.0.1:3005/comments/" + id).then((response) => {
          this.activePosts = response.data;
          
        });
      } catch (err) {
        alert("No Data or Connection to DB " + err);
      }
    },

resetForm(){
  this.$refs.form.reset()
},

    addComment(e) {
      // alert(e);
//      axios({   method: 'put',   url: 'http://127.0.0.1:3005/comments/' + e ,   comments: {     author: this.author, comemnt: this.comment    } });
axios
        .put("http://127.0.0.1:3005/comments/" + e, 
        {
          comments: {
          author: this.author,
          comment: this.comment
          }
        }
        )
        .then((response) => {
          console.log(response);
          alert("Success !");
//  this.resetForm();

          this.commentDialog = false;
        })
        .catch((err) => {
          alert("Please check your inputs" + err);
        });
//console.log(this.author);
    },

    nope(){
      alert("Not implemented yet");
    },

     getEvent(e) {
      this.$data.selectedLocation = e;
      this.getPostById(e);
    },
     
  },
};
</script>


