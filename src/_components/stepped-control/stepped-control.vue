<template>
  <div :class="'fds-stepped-control ' + EXTRA_CLASSES">
    <div class="fds-stepped-control__bd">

      <div v-if="DISPLAY_MESSAGE=='true'" class="fds-stepped-control__message" role="status">
        <strong>{{ CURRENT_STEP }}</strong> of <strong>{{ TOTAL_STEPS }}</strong> Steps
      </div>

      <div class="fds-stepped-control__list">
        <div class="fds-stepped-control__shim"></div>

        <div class="fds-stepped-control__item">
          <a @click.prevent="goto(BACK_URL)" role="button" href="#" class="fds-btn fds-btn--alt fds-btn--large fds-stepped-control__btn" type="button">
            {{ BACK_LABEL }}
          </a>
        </div>
        <div class="fds-stepped-control__item">
          <button v-if="USE_GROWL_ON_CANCEL=='true'" class="fds-btn fds-btn--secondary fds-btn--large"
            data-behavior="growl-show whiteout-show"
            :aria-controls="GROWL_ID"
            aria-expanded="false"
            type="button">
            Cancel
          </button>
          <a @click.prevent="goto(URL_PREFIX +'index.html')" v-if="USE_GROWL_ON_CANCEL=='false'" role="button" href="#" class="fds-btn fds-btn--alt fds-btn--large fds-stepped-control__btn" type="button">
            Cancel
          </a>
        </div>
        <div class="fds-stepped-control__item">
          <button v-if="USE_GROWL_ON_SUBMIT=='true'" role="button"
            data-behavior="growl-show whiteout-show"
            :aria-controls="ON_SUBMIT_GROWL_ID"
            aria-expanded="false"
            class="fds-btn fds-btn--primary fds-btn--large fds-stepped-control__btn"
            type="button">
            {{ CONTINUE_LABEL }}
          </button>
          <a @click.prevent="goto(URL_PREFIX+CONTINUE_URL)" v-if="USE_GROWL_ON_SUBMIT=='false'" id="demoNextButton" role="button" :href="URL_PREFIX+CONTINUE_URL" class="fds-btn fds-btn--primary fds-btn--large fds-stepped-control__btn" type="button">
            <span class="fds-stepped-control__btn-label">{{ CONTINUE_LABEL }}</span>
          </a>
        </div>

      </div>
    </div>
  </div>  
</template>

<script>
import { ref } from 'vue';
import { useNavigation } from '@/_composables/useNavigation';

export default {
  props: {
    EXTRA_CLASSES: String,
    DISPLAY_MESSAGE: String,
    CURRENT_STEP: String,
    TOTAL_STEPS: String,
    BACK_LABEL: String,
    BACK_URL: String,
    USE_GROWL_ON_CANCEL: String,
    GROWL_ID: String,
    URL_PREFIX: String,
    USE_GROWL_ON_SUBMIT: String,
    ON_SUBMIT_GROWL_ID: String,
    CONTINUE_LABEL: String,
    CONTINUE_URL: String
  },

  setup(props){
    const { goto } = useNavigation();

    return{
      goto
    }
  }
}
</script>>