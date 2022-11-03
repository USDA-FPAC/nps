import { createStore } from 'vuex';

import { navigation } from '@/Shared/_store/navigation.module.js';
import { alerts } from '@/Shared/_store/alerts.module.js';
import { search } from '@/Shared/_store/search.module.js';

export const store = createStore({
  modules: {
    navigation: navigation,
    alerts: alerts,
    search: search
  }
});