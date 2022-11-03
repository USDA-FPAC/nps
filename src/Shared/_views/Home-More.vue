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
          <p>Please ignore the below testing examples below.</p>
          </div>

          <div class="fds-divider fds-divider--stronger fds-m-b--xl"></div>

          <h3>Testing Purposes Only</h3>
          <div class="fds-level fds-level--justify-between fds-level--align-top">
            <span>
              <field
                ID="name"
                EXTRA_CLASSES=""
                LABEL="Full Name"
                INPUT_VALUE=""
                INPUT_TYPE="text"
                REQUIRED="true"
                ARIA_REQUIRED="true"
                BEHAVIOR=""
                ARIA_DESCRIBEDBY="name__help"
                HELP_MESSAGE="Use your full name, please."
                ERROR_MESSAGE="Hey, you forgot your name, Buddy!"
                HAS_ERROR="false"
                USE_POPOVER="true"
                POPOVER_TYPE="help"
                POPOVER_CLASSES="fds-popover--rt fds-popover--size-medium"
                POPOVER_ID="full-name-help-popover-123-456"
                POPOVER_HEADER="Full Name Help"
                ref="nameField"
              >
                <div id="full-name-help-popup-body">
                  <p>Aut illum nostrum, perspiciatis asperiores esse eveniet earum rem cumque autsit tenetur adipisci. Eos facilis illum qui fugit perspiciatis asperiores esse eveniet earum rem cumque autsit.</p>
                </div>
              </field>
            </span>
            <span>
              <p class="fds-m-t--l">
                <button @click="setError('name')" class="fds-btn fds-btn--secondary">Toggle Name Error</button>
              </p>
            </span>
          </div>


          <div class="fds-level fds-level--justify-between fds-level--align-top">
            <span>
              <field-group
                GROUP_ID="pies"
                GROUP_TYPE="radio"
                DISPLAY=""
                LABEL="Pick a Pie"
                :DATA="pieData"
                REQUIRED=""
                BEHAVIOR=""
                EXTRA_CLASSES="fds-field--block"
                FIELD_ERROR_CLASS=""
                ARIA_REQUIRED="false"
                HELP_MESSAGE="Select your favorite."
                ERROR_MESSAGE="Why don't you like my pies?"
                USE_POPOVER="true"
                POPOVER_TYPE="help"
                POPOVER_CLASSES="fds-popover--rt fds-popover--size-small"
                POPOVER_ID="pies-help-popover-123-456"
                POPOVER_HEADER="Pies Help"
                ref="pieField"
              >
                <div id="pies-help-popup-body">
                  <p>Aut illum nostrum, perspiciatis asperiores esse eveniet earum rem cumque autsit tenetur adipisci. Eos facilis illum qui fugit perspiciatis asperiores esse eveniet earum rem cumque autsit.</p>
                </div>
              </field-group>
            </span>
            <span>
              <p class="fds-m-t--l">
                <button @click="setError('pies')" class="fds-btn fds-btn--secondary">Toggle Pie Error</button>
              </p>
            </span>
          </div>

          <div class="fds-level fds-level--justify-between fds-level--align-top">
            <span>
              <selection
                ID="vehicle"
                LABEL="What do you drive?"
                :DATA="vehicleData"
                REQUIRED="true"
                SELECT_CLASSES="fds-select--large"
                EXTRA_CLASSES=""
                FIELD_ERROR_CLASS=""
                ARIA_REQUIRED="true"
                HELP_MESSAGE="Select your ride."
                ERROR_MESSAGE="You must like walking!"
                USE_POPOVER="true"
                POPOVER_TYPE="info"
                POPOVER_CLASSES="fds-popover--tr fds-popover--size-small"
                POPOVER_ID="vehicle-help-popover-123-456"
                POPOVER_HEADER="Vehicles Information"
                ref="vehicleField"
              >
                <div id="vehicle-help-popup-body">
                  <p>Did you know the automobile was once slower than the horse?</p>
                </div>
              </selection>
            </span>
            <span>
              <p class="fds-m-t--l">
                <button @click="setError('vehicle')" class="fds-btn fds-btn--secondary">Toggle Vehicle Error</button>
              </p>
            </span>
          </div>

          <div class="fds-level fds-level--justify-between fds-level--align-top">
          
            <span>
              <selectMulti
                ID="animal"
                LABEL="Select large animals."
                :DATA="animalData"
                REQUIRED="false"
                EXTRA_CLASSES=""
                FIELD_ERROR_CLASS=""
                ARIA_REQUIRED="false"
                HELP_MESSAGE="Please don't feed them."
                ERROR_MESSAGE="Those are small ones, buddy!"
                ref="animalField"
              >
              </selectMulti>
            </span>
            <span>
              <p class="fds-m-t--l">
                <button @click="setError('animal')" class="fds-btn fds-btn--secondary">Toggle Animal Error</button>
              </p>
            </span>
          </div>

        </div>
      </div>
      <div class="fds-section">
        <div class="fds-section__bd">
          <h2>{{headerText}}</h2>
          
          <span class="fds-m-t--l">{{searchResults}}</span>
        </div>
      </div>

    </main>

    <baseFooter></baseFooter>
  </div>
</template>

<script>
import { ref, defineAsyncComponent, onMounted } from 'vue';
import { useStore } from 'vuex';


import baseHeader from '@/_partials/BaseHeader.vue';
import baseFooter from '@/_partials/BaseFooter.vue';

const field = defineAsyncComponent(() => import('@/_components/field/field.vue'));
const fieldGroup = defineAsyncComponent(() => import('@/_components/field-group/field-group.vue'));
const selection = defineAsyncComponent(() => import('@/_components/selection/selection.vue'));
const selectMulti = defineAsyncComponent(() => import('@/_components/select-multi/select-multi.vue'));
const inlineHelp = defineAsyncComponent(() => import('@/_components/inline-help/inline-help.vue'));
 
export default {
  components: {
    baseHeader,
    baseFooter,
    field,
    fieldGroup,
    selection,
    selectMulti,
    inlineHelp
  },

  setup(props){
    const store = useStore();

    const nameField = ref(null);
    const pieField = ref(null);
    const vehicleField = ref(null);
    const animalField = ref(null);

    const pieData = [
      { id: "pie1", label: "Apple Pie", name: "piegroup" },
      { id: "pie2", label: "Pumpkin Pie", name: "piegroup" },
      { id: "pie3", label: "Keylime Pie", name: "piegroup" },
      { id: "pie4", label: "French Silk Pie", name: "piegroup" },
    ];

    const vehicleDataXYZ = [
      { id: "v1", label: "Motor Scooter", val: "scoot", name: "small"},
      { id: "v2", label: "Cafe Racer", val: "cf", name: "small"},
      { id: "v3", label: "Can-Am", val: "can", name: "small"},
      { id: "v4", label: "4-Door Sedan", val: "sedan", name: "medium"},
      { id: "v5", label: "Sports Coupe", isSelected: "selected", val: "Coupe", name: "medium"},
      { id: "v6", label: "Cross Over SUV", val: "xo", name: "medium"},
      { id: "v7", label: "Minivan", val: "van", name: "large"},
      { id: "v8", label: "Pickup Truck", val: "truck", name: "large"},
      { id: "v9", label: "7 Passenger SUV", val: "suv", name: "large"},
      { id: "v10", label: "15 Passenger Van", val: "bigvan", name: "large"}
    ];

    const vehicleData = [
      { 
        groupId: "g1",
        groupLabel: "Small Vehicales",
        groupData: [
          { id: "v1", label: "Motor Scooter", val: "scoot", name: "small"},
          { id: "v2", label: "Cafe Racer", val: "cf", name: "small"},
          { id: "v3", label: "Can-Am", val: "can", name: "small"},
        ]
      },
      { 
        groupId: "g2",
        groupLabel: "Medium Vehicales",
        groupData: [
          { id: "v4", label: "4-Door Sedan", val: "sedan", name: "medium"},
          { id: "v5", label: "Sports Coupe", isSelected: "selected", val: "Coupe", name: "medium"},
          { id: "v6", label: "Cross Over SUV", val: "xo", name: "medium"},
        ]
      },
      { 
        groupId: "g3",
        groupLabel: "Large Vehicales",
        groupData: [
          { id: "v7", label: "Minivan", val: "van", name: "large"},
          { id: "v8", label: "Pickup Truck", val: "truck", name: "large"},
          { id: "v9", label: "7 Passenger SUV", val: "suv", name: "large"},
          { id: "v10", label: "15 Passenger Van", val: "bigvan", name: "large"},
        ]
      },
    ];

    const animalData = [
      { id: "a0", label: "Select all", val: "", name: "a0", behavior: "select-multi-all"},
      { id: "a1", label: "Aligator", val: "", name: "a1", behavior: ""},
      { id: "a2", label: "Buffalo", val: "checked", name: "a2", behavior: ""},
      { id: "a3", label: "Cow", val: "", name: "a3", behavior: ""},
      { id: "a4", label: "Dolphin", val: "", name: "a4", behavior: ""},
      { id: "a5", label: "Elephant", val: "", name: "a5", behavior: ""},
      { id: "a6", label: "Frog", val: "", name: "a6", behavior: ""},
      { id: "a7", label: "Goose", val: "", name: "a7", behavior: ""},
    ];


    let nameHasError = ref(false);
    let piesHasError = ref(false);
    let vehicleHasError = ref(false);
    let animalHasError = ref(false);

    const setError = (type) => {
      if(type=='name'){
        nameHasError.value = nameHasError.value ? false : true;
        nameField.value.setHasError(nameHasError.value);
      } 
      if(type=='pies'){
        piesHasError.value = piesHasError.value ? false : true;
        pieField.value.setHasError(piesHasError.value);
      }
      if(type=='vehicle'){
        vehicleHasError.value = vehicleHasError.value ? false : true;
        vehicleField.value.setHasError(vehicleHasError.value);
      }
      if(type=='animal'){
        animalHasError.value = animalHasError.value ? false : true;
        animalField.value.setHasError(animalHasError.value);
      }  
    }

    const headerText = ref('Search Header Default');
    const searchResults = ref('');

    const submitSearch = ( obj ) => {
      headerText.value = 'Search Results:'
      searchResults.value = obj.phrase;
    };

    onMounted(()=>{
      console.log('Home onMounted');
    });

    return {
      nameField,
      pieField,
      vehicleField,
      animalField,
      setError,
      pieData,
      vehicleData,
      animalData,
      submitSearch,
      searchResults,
      headerText
    }
  }

}
</script>