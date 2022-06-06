export default {
    namespaced: true,
    state:{
        mediationTableHeaders: [
            { text: "App",value: "appName", align: "start" },
            { text: "DAU", value: "dau", align: "end" },
            { text: "ARPU", value: "arpu", align: "end" },
            { text: "Immersions", value: "immersions", align: "end" },
            { text: "ECPM", value: "ecpm", align: "end" },
            { text: "Est. Earnings", value: "est", align: "end" },
        ],
        applicationsTableHeaders: [
            { text: 'App', value: 'appName', align: 'start', sortable:false},
            { text: 'Platform', value: 'platform',align: 'center', sortable:false },
            { text: 'Orientation', value: 'orientation',align: 'start', sortable:false },
            { text: 'Published', value: 'published',align: 'center', sortable:false },
            { text: 'Use Banner', value: 'useBanner',align: 'center', sortable:false },
            { text: 'Use Intertitial', value: 'useIntertitial',align: 'center', sortable:false },
            { text: 'Use Rewarded', value: 'useRewarded',align: 'center', sortable:false },
            { text: 'Coppa', value: 'coppa',align: 'center', sortable:false },
            { text: 'Cross promo', value: 'crossPromo',align: 'center', sortable:false },
            { text: '', value: 'appTableActions',align: 'center', sortable:false },
        ],
        paymentsTableHeaders: [
            { text: 'Year', value: 'year', align: 'start',  sortable:false},
            { text: 'Month', value: 'month', align: 'start', sortable:false },
            { text: 'Accural sum', value: 'accuralSum',align: 'start', sortable:false },
            { text: 'Payment date', value: 'paymentDate',align: 'start', sortable:false },
            { text: 'Payment sum', value: 'paymentSum',align: 'start', sortable:false },
            { text: 'Current balance', value: 'currentBalance',align: 'start', sortable:false },
            { text: 'Comment', value: 'comment',align: 'start', sortable:false },
        ],
        creativesTableHeaders: [
            { text: 'Creative name', value: 'creativeName', align: 'start',  sortable:false},
            { text: 'Bundle Code', value: 'bundleCode', align: 'start', sortable:false },
            { text: 'Languages', value: 'languages',align: 'start', sortable:false },
            { text: 'Types', value: 'types',align: 'start', sortable:false },
            { text: 'Image Preview', value: 'imagePreview',align: 'center', sortable:false },
            { text: 'Video Preview', value: 'videoPreview',align: 'center', sortable:false },
        ],
        campaignsTableHeaders: [
            { text: 'Status', value: 'status', align: 'start',  sortable:false},
            { text: 'Campaign Name', value: 'campaignName', align: 'start', sortable:false },
            { text: 'Start date', value: 'startDate',align: 'start', sortable:false },
            { text: 'Languages', value: 'languages',align: 'start', sortable:false },
            { text: 'Creatives count', value: 'creativesCount',align: 'center', sortable:false },
            { text: 'Premium Id', value: 'premiumId',align: 'center', sortable:false },
            { text: 'Applications', value: 'applications',align: 'start', sortable:false },
            { text: 'Creatives', value: 'creatives', align: 'start', sortable:false },
            { text: 'Frequency', value: 'frequency',align: 'center', sortable:false },
        ],
    },
    mutations:{},
    getters: {},
    actions:{},
}




