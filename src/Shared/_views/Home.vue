<template>
  <div>

    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fds-section">
        <div class="fds-section__bd">
          <h1>Proto (UX Protyping Kit)</h1>

          <div class="fds-text--lead">
            This prototype site is designed to showcase high-fidelity UX process flow. Select from the above Demo links to begin a flow.
          </div>
          <div>
            <p>Currently, only the Other Agency Offset Demos are available to showcase the various Help examples. The Global Help will open a seperate page, while the Page-level and Inline Help buttons will perform as shown. </p>
            
          </div>
        </div>
      </div>
    </main>

    <baseFooter></baseFooter>
  </div>
</template>

<script>
import { onMounted } from 'vue';

import baseHeader from '@/_partials/BaseHeader.vue';
import baseFooter from '@/_partials/BaseFooter.vue';

 
export default {
  components: {
    baseHeader,
    baseFooter
  },

  setup(props){

    onMounted(()=>{
      console.log('Home onMounted');
    });

    return {

    }
  }

}
</script>