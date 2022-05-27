import { App, watch } from 'vue'
import { createI18n } from 'vue-i18n'
import messages from '../language/index'

const i18n = createI18n({
    locale: localStorage.getItem('lang') || 'us', // default language
    fallbackLocale: 'us',
    // silentFallbackWarn: true, // 默认情况下回退到 fallbackLocale 会产生两个控制台警告
    messages
})

export default (app: App) => app.use(i18n)

// export default i18n;