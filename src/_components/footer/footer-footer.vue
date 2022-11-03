<template>
  <div class="fds-footer">
    <div class="fds-footer__bd">
      <div class="fds-grid">
        <div class="fds-footer__primary fds-grid__1/1 fds-grid__9/12@l">
          <div class="fds-grid">
            <div class="fds-grid__1/1 fds-grid__1/3@m">
              <h3 class="fds-footer__cat-header">Program Information</h3>
              <ul class="fds-footer__list">
                <li class="fds-footer__list-item"><a to="/" target="_blank">About {{APP_ABBR_NAME}}</a></li>
                <li class="fds-footer__list-item"><a href="/" target="_blank">{{APP_ABBR_NAME}} - Handbook 1</a></li>
                <li class="fds-footer__list-item"><a href="/" target="_blank">{{APP_ABBR_NAME}} - Handbook 2</a></li>
              </ul>
            </div>
            <div class="fds-grid__1/1 fds-grid__1/3@m">
              <h3 class="fds-footer__cat-header">Agency Guidelines</h3>
              <ul class="fds-footer__list">
                <li class="fds-footer__list-item"><a href="/" target="_blank">Publications</a></li>
                <li class="fds-footer__list-item"><a href="/" target="_blank">Handbooks</a></li>
                <li class="fds-footer__list-item"><a href="/" target="_blank">Notices</a></li>
                <li class="fds-footer__list-item"><a href="/" target="_blank">FFAS Employee Forms</a></li>
                <li class="fds-footer__list-item"><a href="/" target="_blank">Software Transmittals</a></li>
              </ul>
            </div>
            <div class="fds-grid__1/1 fds-grid__1/3@m">
              <h3 class="fds-footer__cat-header">Resources</h3>
              <ul class="fds-footer__list">
                <li class="fds-footer__list-item"><a href="/" target="_blank">Inside FSA</a></li>
                <li class="fds-footer__list-item"><a href="/" target="_blank">Policies and Links</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="fds-footer__secondary fds-grid__1/1 fds-grid__3/12@l">
          <ul class="fds-footer__list fds-footer__secondary-list">
            <li class="fds-footer__list-item fds-footer__secondary-list-item">
              <button @click="goto('/help')" class="fds-btn fds-footer__btn" type="button">
                <svg class="fds-icon fds-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></svg>
                Help
              </button>
            </li>
            <li class="fds-footer__list-item fds-footer__secondary-list-item"><a href="tel:+8005551234" target="_blank">1-800-555-1234</a></li>
            <li class="fds-footer__list-item fds-footer__secondary-list-item"><a href="//www.fsa.usda.gov/" target="_blank">FSA Website</a></li>
            <li class="fds-footer__list-item fds-footer__secondary-list-item"><a href="//www.usda.gov/" target="_blank">USDA Website</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useNavigation } from '@/_composables/useNavigation'

export default {
  props: {
    APP_ABBR_NAME: String
  },
  setup(props){
    const { goto } = useNavigation();

    return {
      goto
    }
  }
}
</script>