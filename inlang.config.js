const { default: plugin } = require("@sveltejs/adapter-auto");

return {
    referenceLanguage: 'en',
    plugins:[
        jsonPlugin({pathPattern: "./language/{language}.json"}),
        sdkPlugin({
            languageNegotiation:{
                strategies:[
                    {type: "url"},
                    {type:"accept-languege-header"}
                ],
            },
        }),
    ],
},