<template>
  <div>

    <baseHeader NAV_TYPE="page-level-help"></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fds-section">
        <div class="fds-section__bd">
          <div class="fds-m-t--l">
            <div class="fds-level@m fds-level--justify-between">
              <h1 class="fds-m--none">Payments Dashboard</h1>
              <div class="fds-level fds-level--justify-between fds-level--grow-auto">
                <span>
                  <button @click="showModal(helpModalId)" class="fds-btn fds-btn--block fds-btn--flat" type="button">
                    <svg class="fds-icon fds-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></svg>
                    Help
                  </button>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="fds-section">
        <div class="fds-section__bd">

          <!-- App Data START-->
          <app-data></app-data>
          <!-- App Data END-->
          <div class="fds-divider"></div>

          <div>
            <div class="fds-m-t--s fds-level fds-level--grow-even">
              <div><span class="fds-text-size--3">Last Updated: <strong><span class="fds-text-allcaps">NPSToolTest on 10/10/2021</span></strong></span></div>
              <div><span class="fds-text-size--3">Original Payment Amount($): <strong><span class="fds-text-allcaps">139.20</span></strong></span></div>

              <div><span class="fds-text-size--3">Remaining Payment Amount($): <strong><span class="fds-text-allcaps">29.20</span></strong></span></div>
            </div>
          </div>
        </div>
      </div>

      <div class="fds-section fds-m-t--m">
        <div class="fds-section__bd">
          <div class="fds-text-size--4 fds-m-b--s">Add Other Agency Offest to payment:</div>

          <div class="fds-level fds-level--grow-even">
            <field
              :ID="offsetAmountId"
              EXTRA_CLASSES=""
              LABEL="Offset Amount($)"
              INPUT_VALUE=""
              INPUT_TYPE="text"
              REQUIRED="true"
              ARIA_REQUIRED="true"
              BEHAVIOR=""
              :ARIA_DESCRIBEDBY="offsetAmountId+ '__help'"
              HELP_MESSAGE=""
              ERROR_MESSAGE="Hey, you forgot the amount"
              HAS_ERROR="false"
              ref="offsetAmountField"
            >
            </field>

            <field
              :ID="payeeNameId"
              EXTRA_CLASSES=""
              LABEL="Payee Name"
              INPUT_VALUE=""
              INPUT_TYPE="text"
              REQUIRED="true"
              ARIA_REQUIRED="true"
              BEHAVIOR=""
              :ARIA_DESCRIBEDBY="payeeNameId +'__help'"
              HELP_MESSAGE=""
              ERROR_MESSAGE="Hey, you forgot the amount"
              HAS_ERROR="false"
              ref="payeeNameField"
            >
            </field>

          </div>
          <div class="fds-level fds-level--grow-even">

            <field
              :ID="address1Id"
              EXTRA_CLASSES=""
              LABEL="Address 1"
              INPUT_VALUE=""
              INPUT_TYPE="text"
              REQUIRED="true"
              ARIA_REQUIRED="true"
              BEHAVIOR=""
              :ARIA_DESCRIBEDBY="address1Id + '__help'"
              HELP_MESSAGE=""
              ERROR_MESSAGE="Hey, you forgot the amount"
              HAS_ERROR="false"
              ref="address1Field"
            >
            </field>

            <field
              :ID="address2Id"
              EXTRA_CLASSES=""
              LABEL="Address 2"
              INPUT_VALUE=""
              INPUT_TYPE="text"
              REQUIRED="true"
              ARIA_REQUIRED="true"
              BEHAVIOR=""
              :ARIA_DESCRIBEDBY="address2Id + '__help'"
              HELP_MESSAGE=""
              ERROR_MESSAGE="Hey, you forgot the amount"
              HAS_ERROR="false"
              ref="address2Field"
            >
            </field>

          </div>
          <div class="fds-level fds-level--grow-even">

            <field
              :ID="cityId"
              EXTRA_CLASSES=""
              LABEL="City"
              INPUT_VALUE=""
              INPUT_TYPE="text"
              REQUIRED="true"
              ARIA_REQUIRED="true"
              BEHAVIOR=""
              :ARIA_DESCRIBEDBY="cityId + '__help'"
              HELP_MESSAGE=""
              ERROR_MESSAGE="Hey, you forgot the amount"
              HAS_ERROR="false"
              ref="cityField"
            >
            </field>

            <div class="fds-grid">
              <div class="fds-grid__1 fds-grid__6/12@m">

                <selection
                  :ID="stateId"
                  LABEL="State"
                  :DATA="stateData"
                  REQUIRED="true"
                  SELECT_CLASSES="fds-select--large fds-select--block"
                  EXTRA_CLASSES=""
                  FIELD_ERROR_CLASS=""
                  ARIA_REQUIRED="true"
                  HELP_MESSAGE=""
                  ERROR_MESSAGE=""
                  ref="stateField"
                >
                </selection>

                
              </div>
              <div class="fds-grid__1 fds-grid__3/12@m">
                <field
                  :ID="zipId"
                  EXTRA_CLASSES=""
                  LABEL="Zip Code"
                  INPUT_VALUE=""
                  INPUT_TYPE="text"
                  REQUIRED="true"
                  ARIA_REQUIRED="true"
                  BEHAVIOR=""
                  :ARIA_DESCRIBEDBY="zipId + '__help'"
                  HELP_MESSAGE=""
                  ERROR_MESSAGE="Hey, you forgot the amount"
                  HAS_ERROR="false"
                  ref="zipField"
                >
                </field>
              </div>
              <div class="fds-grid__1 fds-grid__3/12@m">

              </div>
            </div>

          </div>

          <div>
            <span class="fds-level">
              <input @change="toggleDoNotApplyPayment" class="fds-checkbox" :id="doNotApplyPaymentId" type="checkbox" name="doNotApplyPaymentId">
              <label :for="doNotApplyPaymentId">Do not Apply Payment to Other Agency Offset</label>
            </span>
          </div>

          <div class="fds-level fds-m-t--m">
            <button @click="addToPayment" :disabled="isAddPaymentDisabled" class="fds-btn fds-btn--secondary" type="button">Add to Payment</button>
          </div>

        </div>
      </div>

      <div class="fds-section fds-m-t--s">
        <div class="fds-section__bd">

          <!-- Results Table START -->
          <table class="fds-table">
            <caption>
              <div class="fds-level@m fds-level--justify-between">
                <h3>Other Agency Offset List</h3>

              </div>
            </caption>
            <thead>
              <tr>
                <th scope="col" aria-sort="ascending" class="fds-text-align--left">
                  <button id="tableSort-1" @click="toggleSort($event)" class="fds-table__sort fds-table__sort--ascending" type="button">Agency Name</button>
                </th>
                <th scope="col">Offset Amount ($)</th>
                <th scope="col">Address</th>
                <th scope="col" class="fds-text-align--right">Actions</th>
              </tr>
            </thead>
            <tbody v-if="offsetListData">
              <tr v-for="item in offsetListData" :key="item.id" :id="item.id">
                <td><span class="fds-text-allcaps">{{ item.payeeName }}</span></td>
                <td><span class="fds-text-allcaps">{{ item.offsetAmount }}</span></td>
                <td>
                  <span class="fds-text-allcaps">{{ item.address1 }}</span>
                  <span class="fds-text-allcaps">{{ item.address2 }}</span>
                  <div class="fds-level">
                    <span class="fds-text-allcaps">{{ item.city }}</span>
                    <span class="fds-text-allcaps">{{ item.state }}</span>
                    <span class="fds-text-allcaps">{{ item.zip }}</span>
                  </div>
                </td>
                <td>
                  <div class="fds-level fds-level--justify-right fds-level--gutter-xs">
                    <button @click="modifyOffset(item)" class="fds-btn fds-btn--secondary fds-btn--small">Modify</button>
                    <button @click="deleteOffset(item)" class="fds-btn fds-btn--secondary fds-btn--small">Delete</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>

      
      <div class="fds-section">
        <div class="fds-section__bd">

          <stepped-control
            EXTRA_CLASSES="fds-stepped-control--sticky"
            DISPLAY_MESSAGE="true"
            CURRENT_STEP="1"
            TOTAL_STEPS="2"
            BACK_LABEL="Back"
            BACK_URL="/"
            USE_GROWL_ON_CANCEL="true"
            GROWL_ID="stepped-control-growl-id"
            URL_PREFIX="fsa"
            USE_GROWL_ON_SUBMIT="true"
            ON_SUBMIT_GROWL_ID="stepped-control-submit-growl-id"
            CONTINUE_LABEL="Save"
            CONTINUE_URL="/demo/modal-growl/">
          </stepped-control>

        </div>
      </div>

      
      <page-level-help-modal :MODAL_ID="helpModalId"></page-level-help-modal>

      <!-- PLACE JUST BELOW BODY START TAG AT THE BEGINNING OF DOCUMENT -->
      <div class="fds-whiteout" tabindex="-1" id="fds-whiteout" aria-hidden="true"></div>
      <!-- END WHITEOUT -->

      <div class="fds-growl-container fds-growl-container--centered">
        <div class="fds-growl fds-growl--error fds-growl--centered" id="UNIQUE-ID-9469E21387FAF609" aria-hidden="true" tabindex="0" role="alertdialog">
          <div class="fds-growl__hd">
            <button class="fds-growl__close" data-behavior="growl-dismiss whiteout-dismiss" type="button">
              <svg class="fds-icon fds-icon--size-3" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </button>
            <h2 class="fds-growl__title">Cancel Process</h2>
          </div>
          <div class="fds-growl__bd">
            <p>Message goes here if you like or something, <a href="link.html">with a link</a> if necessary.</p>
            <p>And another line here for kicks.</p>
            <p>
              <button data-behavior="growl-dismiss whiteout-dismiss" class="fds-btn fds-btn--small fds-btn--secondary" type="button">Button</button>
              <a class="fds-btn fds-btn--small fds-btn--secondary" href="link.html">Button link</a>
            </p>
          </div>
        </div>
      </div>
      

    </main>

    <baseFooter></baseFooter>
  </div>
</template>

<script>
import { ref, defineAsyncComponent, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useNavigation } from '@/_composables/useNavigation';
import { useModalControls } from '@/_composables/useModalControls';
import { v4 as uuidv4 } from 'uuid';

import baseHeader from '@/_partials/BaseHeader.vue';
import baseFooter from '@/_partials/BaseFooter.vue';

const field = defineAsyncComponent(() => import('@/_components/field/field.vue'));
const fieldGroup = defineAsyncComponent(() => import('@/_components/field-group/field-group.vue'));
const selection = defineAsyncComponent(() => import('@/_components/selection/selection.vue'));
const appData = defineAsyncComponent(() => import('@/Shared/_views/App-Data.vue'));

const pageLevelHelpModal = defineAsyncComponent(() => import('@/Demos/_views/Help/Page-Level-Help-Modal.vue'));

const steppedControl = defineAsyncComponent(() => import('@/_components/stepped-control/stepped-control.vue'));

 
export default {
  components: {
    baseHeader,
    baseFooter,
    field,
    fieldGroup,
    selection,
    appData,
    pageLevelHelpModal,
    steppedControl,
  },

  setup(props){
    const store = useStore();
    const { goto } = useNavigation();
    const {
      setModalId,
      getModalId,
      showModal,
      hideModal
    } = useModalControls();

    const helpModalId = ref( uuidv4() );
    setModalId(helpModalId.value);
    
    const offsetAmountField = ref(null);
    const offsetAmountId = ref(uuidv4());

    const payeeNameField = ref(null);
    const payeeNameId = ref(uuidv4());

    const address1Field = ref(null);
    const address1Id = ref(uuidv4());

    const address2Field = ref(null);
    const address2Id = ref(uuidv4());

    const cityField = ref(null);
    const cityId = ref(uuidv4());

    const stateField = ref(null);
    const stateId = ref(uuidv4());
    const stateData = [
      { id: "state0", label: "Select a State", name: "stateGroup", val: 0, isDisabled: true, isSelected: true },
      { id: "state1", label: "Alabama", name: "stateGroup" },
      { id: "state2", label: "Alaska", name: "stateGroup" },
      { id: "state3", label: "Arizona", name: "stateGroup" },
      { id: "state4", label: "Arkansas", name: "stateGroup" },
      { id: "state5", label: "Missouri", name: "stateGroup" }
    ];

    const zipField = ref(null);
    const zipId = ref(uuidv4());

    const doNotApplyPaymentId = ref(uuidv4());
    const toggleDoNotApplyPayment = () => {
      let cb = document.getElementById(doNotApplyPaymentId.value);
      if(cb.checked) disableAddPaymentButton()
      else enableAddPaymentButton()
    }
    const doNotApplyPaymentPopoverId = ref(uuidv4());
    
    const addToPaymentButtonId = ref(uuidv4());
    const isAddPaymentDisabled = ref(false);
    const enableAddPaymentButton = () => { isAddPaymentDisabled.value = false }
    const disableAddPaymentButton = () => { isAddPaymentDisabled.value = true }

    const tableOffsetAgencyListId = ref(uuidv4());
    const showAddedOffset = ref(false);

    const offsetListData = ref([]);

    const addToPayment = () => {
      let obj = {
        id: uuidv4(),
        payeeName: document.getElementById(payeeNameId.value).value,
        offsetAmount: document.getElementById(offsetAmountId.value).value,
        address1: document.getElementById(address1Id.value).value,
        address2: document.getElementById(address2Id.value).value,
        city: document.getElementById(cityId.value).value,
        state: document.getElementById(stateId.value).value != 0 ? document.getElementById(stateId.value).value : '',
        zip: document.getElementById(zipId.value).value,
      }
      document.getElementById(payeeNameId.value).value = '';
      document.getElementById(offsetAmountId.value).value = '';
      document.getElementById(address1Id.value).value = '';
      document.getElementById(address2Id.value).value = '';
      document.getElementById(cityId.value).value = '';
      document.getElementById(stateId.value).value = 0;
      document.getElementById(zipId.value).value = '';

      offsetListData.value.push(obj)
      showAddedOffset.value = true;
    }

    const modifyOffset = (obj) => {
      let id = obj.id;
      alert('SHOW MODAL FOR '+obj.payeeName);
    }

    const deleteOffset = (obj) => {
      let id = obj.id;
      if( confirm( 'Delete Offset Entry for '+ obj.payeeName + '?' )){
        let arr = offsetListData.value;
        offsetListData.value = arr.filter( item => item.id != id );
      }
    }

    onMounted(()=>{
      console.log('Payments onMounted');
    });

    return {
      helpModalId,
      showModal,
      hideModal,
      offsetAmountField,
      offsetAmountId,
      payeeNameField,
      payeeNameId,
      address1Field,
      address1Id,
      address2Field,
      address2Id,
      cityField,
      cityId,
      stateField,
      stateId,
      stateData,
      zipField,
      zipId,
      tableOffsetAgencyListId,
      showAddedOffset,
      addToPayment,
      offsetListData,
      toggleDoNotApplyPayment,
      doNotApplyPaymentId,
      doNotApplyPaymentPopoverId,
      isAddPaymentDisabled,
      addToPaymentButtonId,
      modifyOffset,
      deleteOffset
    }
  }

}
</script>