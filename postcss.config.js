module.exports = {
    plugins: {
        'postcss-px-to-viewport': {
            unitToConvert: 'px', // The unit to be converted. The default is "px"
            viewportWidth: 375, // Viewport width of the draft
            unitPrecision: 7, // Precision retained after unit conversion
            propList: ['width', 'height','font-size','line-height','margin','margin-top','margin-right','margin-bottom','margin-left','bottom','top','left','right','padding','padding-top','padding-right','padding-bottom','padding-left','background-position','background-size'], // 能转化为vw的属性列表
            viewportUnit: 'vw', // Viewport units you want to use
            fontViewportUnit: 'vw', // Viewport units used by fonts
            selectorBlackList: [], // CSS selectors that need to be ignored will not be converted to viewport units, and the original PX and other units will be used.
            minPixelValue: 1, // Set the minimum conversion value. If it is 1, only values greater than 1 will be converted
            mediaQuery: false, // Whether the company in the media query needs to be converted
            replace: true, //  Whether to directly replace attribute values without adding alternate attributes
            exclude: undefined, // Ignore files in some folders or specific files, such as 'node_modules'
            include: [/src/], // If include is set, only the matching file will be converted
            landscape: false, // Add according to landscapeWidth Generated media query criteria @media (orientation: landscape)
            landscapeUnit: 'vw', // Units used when horizontal screen
            landscapeWidth: 812, // Viewport width used when horizontal
        },
        'postcss-preset-env': {}, // Automatically add browser compatibility
        // ...
    },
}
