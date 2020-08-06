export { default as CardFormComponent } from '../..\\components\\CardFormComponent.vue'

export const LazyCardFormComponent = import('../..\\components\\CardFormComponent.vue' /* webpackChunkName: "components_CardFormComponent" */).then(c => c.default || c)
