import HawkCatcher from '@hawk.so/javascript'
import type { HawkModuleConfig } from '../types'
import { defineNuxtPlugin, useRuntimeConfig } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()
  const hawkConfig = runtimeConfig.public.hawk as HawkModuleConfig

  const hawkInstance = new HawkCatcher({
    token: hawkConfig.tokenClient,
    vue: nuxtApp.vueApp,
  })

  /**
   * @todo use NuxtApp to extract useful information:
   * - current route
   * - is SSR
   * - Vue Component
   * - SSR Request headers ?
   */

  /**
   * Add Hawk instance to the global context
   */
  nuxtApp.$hawk = hawkInstance
})
