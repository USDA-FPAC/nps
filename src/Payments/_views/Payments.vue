<template>
  <div>

    <baseHeader NAV_TYPE="inline-help"></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fds-section">
        <div class="fds-section__bd">
          <div class="fds-m-t--l">
            <h1 class="fds-m--none">Payments Dashboard</h1>
          </div>

        </div>
      </div>
      <div class="fds-section">
        <div class="fds-section__bd">

          <!-- Tabs START-->
          <div class="fds-content-tabs fds-content-tabs--justified-equal">
            <ul class="fds-content-tabs__list">
              <li class="fds-content-tabs__item">
                <a class="fds-content-tabs__label fds-content-tabs__label--active" aria-current="step" href="#link">
                  <span class="fds-content-tabs__label-text">Manual Handling</span>
                </a>
              </li>
              <li class="fds-content-tabs__item">
                <a class="fds-content-tabs__label" href="#link">
                  <span class="fds-content-tabs__label-text">Certification</span>
                </a>
              </li>
              <li class="fds-content-tabs__item">
                <a class="fds-content-tabs__label" href="#link">
                  <span class="fds-content-tabs__label-text">Signing</span>
                </a>
              </li>
              <li class="fds-content-tabs__item">
                <a class="fds-content-tabs__label" href="#link">
                  <span class="fds-content-tabs__label-text">Reset Held Payment</span>
                </a>
              </li>
            </ul>
          </div>
          <!-- Tabs END-->

          <!-- SEARCH START-->
          <div class="fds-m-t--m">

          <!-- 
          stateField,
          countyField,
          addFiltersField,
          taxIdField,
          taxIdTypeField,
          stateData,
          countyData,
          addFiltersData,
          taxIdTypeData,
          -->


              <div class="fds-level fds-level--grow-even">
                
                  <selection
                    ID="state-123"
                    LABEL="State"
                    :DATA="stateData"
                    REQUIRED="true"
                    SELECT_CLASSES=""
                    EXTRA_CLASSES=""
                    FIELD_ERROR_CLASS=""
                    ARIA_REQUIRED="true"
                    HELP_MESSAGE=""
                    ERROR_MESSAGE="You must like walking!"
                    ref="stateField"
                  >
                  </selection>
                  <selection
                    ID="county-932"
                    LABEL="County"
                    :DATA="countyData"
                    REQUIRED="true"
                    SELECT_CLASSES=""
                    EXTRA_CLASSES=""
                    FIELD_ERROR_CLASS=""
                    ARIA_REQUIRED="true"
                    HELP_MESSAGE=""
                    ERROR_MESSAGE="You must like walking!"
                    ref="countyField"
                  >
                  </selection>
                
              </div>
              <div class="fds-level fds-level--grow-even">
                
                  <selection
                    ID="additional-filter-932"
                    LABEL="Additional Filter"
                    :DATA="addFiltersData"
                    REQUIRED="false"
                    SELECT_CLASSES=""
                    EXTRA_CLASSES=""
                    FIELD_ERROR_CLASS=""
                    ARIA_REQUIRED="true"
                    HELP_MESSAGE=""
                    ERROR_MESSAGE="You must like walking!"
                    ref="addFiltersField"
                  >
                  </selection>

                  <field
                    ID="tax-id-2323"
                    EXTRA_CLASSES=""
                    LABEL="Tax ID"
                    INPUT_VALUE=""
                    INPUT_TYPE="text"
                    REQUIRED="true"
                    ARIA_REQUIRED="false"
                    BEHAVIOR=""
                    ARIA_DESCRIBEDBY="tax-id-2323__help"
                    HELP_MESSAGE=""
                    ERROR_MESSAGE="Hey, you forgot your name, Buddy!"
                    HAS_ERROR="false"
                    ref="taxIdField"
                  >
                  </field>

                  <selection
                    ID="tax-id-type-2343"
                    LABEL="Tax ID Type"
                    :DATA="taxIdTypeData"
                    REQUIRED="false"
                    SELECT_CLASSES=""
                    EXTRA_CLASSES=""
                    FIELD_ERROR_CLASS=""
                    ARIA_REQUIRED="true"
                    HELP_MESSAGE=""
                    ERROR_MESSAGE="You must like walking!"
                    ref="taxIdTypeField"
                  >
                  </selection>
                  
                
              </div>
              
            <div class="fds-field">
              <button @click="searchPayments" type="submit" class="fds-btn fds-btn--primary">Search</button>
            </div>
          </div>
          <!-- SEARCH END-->

          <!-- Results Table START -->
          <table class="fds-table">
            <caption>
              <h3>Search Results</h3>
            </caption>
            <thead>
              <tr>
                <th scope="col" aria-sort="ascending" class="fds-text-align--left">
                  <button id="tableSort-1" @click="toggleSort($event)" class="fds-table__sort fds-table__sort--ascending" type="button">Name</button>
                </th>
                <th scope="col">Tax ID</th>
                <th scope="col">Payment ID</th>
                <th scope="col">Amount ($)</th>
                <th scope="col">Program</th>
                <th scope="col">Issue Date</th>
                <th scope="col">Primary Reference</th>
                <th scope="col">Recieved Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody v-if="searchData">
              <tr v-for="(results, paymentId) in searchData" v-bind:key="paymentId">
                <td><span class="fds-text-allcaps">{{ results.name }}</span></td>
                <td><span class="fds-text-allcaps">{{ results.taxId }}</span></td>
                <td><span class="fds-text-allcaps">{{ results.paymentId }}</span></td>
                <td><span class="fds-text-allcaps">{{ results.amount }}</span></td>
                <td><span class="fds-text-allcaps">{{ results.program }}</span></td>
                <td><span class="fds-text-allcaps">{{ results.issueDate }}</span></td>
                <td><span class="fds-text-allcaps">{{ results.primaryRef }}</span></td>
                <td><span class="fds-text-allcaps">{{ results.dateReceived }}</span></td>
                <td>
                  <button class="fds-btn fds-btn--small fds-btn--secondary">Certify</button>
                </td>
              </tr>
            </tbody>
          </table>

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
import { ref, computed, watch, defineAsyncComponent, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useNavigation } from '@/_composables/useNavigation';
import { useModalControls } from '@/_composables/useModalControls';
import { v4 as uuidv4 } from 'uuid';

import baseHeader from '@/_partials/BaseHeader.vue';
import baseFooter from '@/_partials/BaseFooter.vue';

const field = defineAsyncComponent(() => import('@/_components/field/field.vue'));
const fieldGroup = defineAsyncComponent(() => import('@/_components/field-group/field-group.vue'));
const selection = defineAsyncComponent(() => import('@/_components/selection/selection.vue'));

const pageLevelHelpModal = defineAsyncComponent(() => import('@/Demos/_views/Help/Page-Level-Help-Modal.vue'));
 
export default {
  components: {
    baseHeader,
    baseFooter,
    field,
    selection,
    pageLevelHelpModal
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

    const stateField = ref(null);
    const countyField = ref(null);
    const addFiltersField = ref(null);
    const taxIdField = ref(null);
    const taxIdTypeField = ref(null);

    const stateData = [
      { id: "state1", label: "Alabama", name: "stateGroup" },
      { id: "state2", label: "Alaska", name: "stateGroup" },
      { id: "state3", label: "Arizona", name: "stateGroup" },
      { id: "state4", label: "Arkansas", name: "stateGroup" },
    ];

    const countyData = [
      { id: "county1", label: "Adair", name: "countyGroup" },
      { id: "county2", label: "Abner", name: "countyGroup" },
      { id: "county3", label: "Abner", name: "countyGroup" },
      { id: "county4", label: "Abner", name: "countyGroup" },
    ];

    const addFiltersData = [
      { id: "addFilter1", label: "Tax Id", name: "addFilterGroup" },
      { id: "addFilter2", label: "Name", name: "addFilterGroup" },
      { id: "addFilter3", label: "All", name: "addFilterGroup" },
    ];

    const taxIdTypeData = [
      { id: "addFilter1", label: "SSN(S)", name: "addFilterGroup" },
      { id: "addFilter2", label: "XYZ", name: "addFilterGroup" },
      { id: "addFilter3", label: "ABC", name: "addFilterGroup" },
    ];


    const searchResults = computed( () => store.getters['search/getSearchResults'] );

    let searchData = ref([]);
    let isSortAsc = ref(true);

    const getSearchData = () => {
      store.dispatch('search/setSearch', { type:'payments' } );
    }

    const toggleSort = (e) => {
      let id = e.currentTarget.id;
      isSortAsc.value = !isSortAsc.value;
      if(isSortAsc.value){
        users.value = usersData.value.sort( (a, b) => a.id - b.id );
        document.getElementById(id).classList.remove('fds-table__sort--descending')
        document.getElementById(id).classList.add('fds-table__sort--ascending')
        document.getElementById(id).ariaSort = 'ascending'
      } else {
        users.value = usersData.value.sort( (a, b) => b.id - a.id );
        document.getElementById(id).classList.remove('fds-table__sort--ascending')
        document.getElementById(id).classList.add('fds-table__sort--descending')
        document.getElementById(id).ariaSort = 'descending'
      }
    }

    const searchPayments = () => {
      console.log('searchPayments');
      getSearchData();
    }

    watch(searchResults, (val) => {
      searchData.value = val;
    })

    onMounted(()=>{
      console.log('Payments onMounted');
    });

    return {
      stateField,
      countyField,
      addFiltersField,
      taxIdField,
      taxIdTypeField,
      stateData,
      countyData,
      addFiltersData,
      taxIdTypeData,
      showModal,
      hideModal,
      helpModalId,
      searchData,
      searchPayments
    }
  }

}
</script>