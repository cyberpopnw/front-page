import { App, watch } from 'vue'
import { createI18n } from 'vue-i18n'
import messages from '../language/index'

const i18n = createI18n({
    locale: localStorage.getItem('lang') || 'us', // default language
    fallbackLocale: 'us',
    // silentFallbackWarn: true, // By default, fallback to fallbacklocale generates two console warnings
    messages
})

export default (app: App) => app.use(i18n)

// export default i18n;