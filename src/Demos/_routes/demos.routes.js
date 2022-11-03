
export const demosRoutes = [
  { 
    path: '/demos',
    component: () => import('@/Demos/_views/Demos.vue')
  },
  { 
    path: '/help',
    component: () => import('@/Demos/_views/help/Help.vue')
  },
  { 
    path: '/demos/help/page-level-oao',
    component: () => import('@/Demos/_views/help/Page-Level-OAO.vue')
  },
  { 
    path: '/demos/help/inline-oao',
    component: () => import('@/Demos/_views/help/Inline-OAO.vue')
  },
  { 
    path: '/demos/help/page-level-pca',
    component: () => import('@/Demos/_views/help/Page-Level-PCA.vue')
  },
  { 
    path: '/demos/help/inline-pca',
    component: () => import('@/Demos/_views/help/Inline-PCA.vue')
  },
  { 
    path: '/demos/help/inline-other-agency-offset',
    component: () => import('@/Demos/_views/help/Inline-Other-Agency-Offset.vue')
  },
  { 
    path: '/demos/help/page-level-other-agency-offset',
    component: () => import('@/Demos/_views/help/Page-Level-Other-Agency-Offset.vue')
  },
  { 
    path: '/demos/help/manual-handling-worklist',
    component: () => import('@/Demos/_views/help/Manual-Handling-Worklist.vue')
  }
]