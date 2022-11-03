<template>
  <div>

    <baseHeader NAV_TYPE="inline-help"></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fds-section">
        <div class="fds-section__bd">
          <div class="fds-m-t--l">
            <h1>Payments Dashboard</h1>
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
                    @emitInputUpdate="catchUpdate"
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
                    USE_POPOVER="true"
                    POPOVER_TYPE="help"
                    POPOVER_CLASSES="fds-popover--tr fds-popover--size-small"
                    POPOVER_ID="tax-id-popover-help1"
                    POPOVER_HEADER="Tax ID Help"
                    ref="taxIdField"
                  >
                    <div id="tax-id-popover-help1-body">
                    <p>A Tax ID must be provided in order to enable the "Search" button and perform a search.</p>
                  </div>
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
              <button @click="searchPayments" :id="searchButtonId" class="fds-btn fds-btn--primary" type="button" :disabled='isSearchDisabled'>Search</button>
            </div>
          </div>
          <!-- SEARCH END-->

          

          <!-- Results Table START -->
          <table class="fds-table">
            <caption>
              <div class="fds-level@m fds-level--justify-between">
                <h3>Search Results</h3>

                <inline-help
                  POPOVER_TYPE="help"
                  POPOVER_CLASSES="fds-popover--tr fds-popover--size-large"
                  :POPOVER_ID="tableInlineHelpId"
                  ICON_SIZE="fds-icon--size-2"
                  POPOVER_HEADER="Action Buttons Help">
                  <div id="pies-help-popup-body">
                    <p><strong>Other Agency Offset</strong> - Use this button to perform Aut illum nostrum, perspiciatis asperiores.</p>
                    <p><strong>Reset Payment</strong> - Use this button to perform Aut illum nostrum, perspiciatis asperiores esse eveniet earum</p>
                    <p><strong>Foreign Tax Withholding</strong> - Use this button to perform perspiciatis asperiores esse eveniet earum.</p>
                    <p><strong>Prompt Payment</strong> - Use this button to perform autsit tenetur adipisci. Eos facilis illum qui fug asperiores.</p>
                  </div>
                </inline-help>

              </div>
            </caption>
            <thead>
              <tr>
                <th scope="col" aria-sort="ascending" class="fds-text-align--left">
                  <button id="tableSort-1" @click="toggleSort($event)" class="fds-table__sort fds-table__sort--ascending" type="button">Name</button>
                </th>
                <th scope="col">Tax ID</th>
                <th scope="col">Payment ID</th>
                <th scope="col">Amount ($)</th>
                <th scope="col">Issue Date</th>
                <th scope="col">Recieved Date</th>
                <th scope="col" class="fds-text-align--right">Actions</th>
              </tr>
            </thead>
            <tbody v-if="searchData">
              <tr v-for="(results, paymentId) in searchData" v-bind:key="paymentId">
                <td><span class="fds-text-allcaps">{{ results.name }}</span></td>
                <td><span class="fds-text-allcaps">{{ results.taxId }}</span></td>
                <td><span class="fds-text-allcaps">{{ results.paymentId }}</span></td>
                <td><span class="fds-text-allcaps">{{ results.amount }}</span></td>
                <td><span class="fds-text-allcaps">{{ results.issueDate }}</span></td>
                <td><span class="fds-text-allcaps">{{ results.dateReceived }}</span></td>
                <td>
                  <div class="fds-level fds-level--justify-right fds-level--gutter-xs">
                    <button @click="doAction(action.action)" v-for="action in results.actions" :key="action.id" :class="'fds-btn fds-btn--small ' +action.btnClass">{{ action.label }}</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>

      

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
import { usePopoverControls } from '@/_composables/usePopoverControls';
import { v4 as uuidv4 } from 'uuid';

import baseHeader from '@/_partials/BaseHeader.vue';
import baseFooter from '@/_partials/BaseFooter.vue';

const field = defineAsyncComponent(() => import('@/_components/field/field.vue'));
const selection = defineAsyncComponent(() => import('@/_components/selection/selection.vue'));

const inlineHelp = defineAsyncComponent(() => import('@/_components/inline-help/inline-help.vue'));

const pageLevelHelpModal = defineAsyncComponent(() => import('@/Demos/_views/Help/Page-Level-Help-Modal.vue'));
 
export default {
  components: {
    baseHeader,
    baseFooter,
    field,
    selection,
    inlineHelp,
    pageLevelHelpModal
  },

  setup(props){
    const store = useStore();
    const { goto } = useNavigation();

    const { showPopover, hidePopover } = usePopoverControls();


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
    const searchButtonId = ref( uuidv4() );
    const isSearchDisabled = ref(true);
    let isSortAsc = ref(true);

    const tableInlineHelpId = ref(uuidv4());

    const getSearchData = () => {
      store.dispatch('search/setSearch', { type:'payments-inline' } );
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

    const enableSearchButton = () => { isSearchDisabled.value = false }
    const disableSearchButton = () => { isSearchDisabled.value = true }
    const searchPayments = () => { getSearchData() }
    const catchUpdate = (val) => {
      if(val != '') enableSearchButton();
      else disableSearchButton();
    }

    const doAction = (action) => {
      if(action!=null){
        let type = action.type;
        let val = action.val;
        switch(type){
          case 'goto':
            goto(val);
            break;
          case 'alert':
            alert(val);
            break;
          default:
            break;
        }
      }
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
      tableInlineHelpId,
      searchData,
      searchPayments,
      showPopover,
      hidePopover,
      searchButtonId,
      isSearchDisabled,
      catchUpdate,
      doAction
    }
  }

}
</script>