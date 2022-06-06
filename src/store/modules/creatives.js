export default {
    namespaced: true,
    state:{
        isModalImageOpen:false,
        isModalVideoOpen:false,
        isModalAddCreativeOpen:false,
        creativesList: [
            {
                id:1,
                creativeName: "Creative one",
                bundleCode: '01234567',
                languages: 'English, Russian, Ukrainian, Chinese, Arabic, Spanish, French',
                types: 'Type',
                imagePreview: 4.13,
                videoPreview: 7.13,
                imageSRC:'https://cdnn21.img.ria.ru/images/151546/28/1515462835_0:0:1036:587_600x0_80_0_0_a75f922e8b052d966122e1c9dc40feb4.jpg',
                videoSRC:'https://www.youtube.com/embed/WSr93jBitwI',
            },
            {
                id:2,
                creativeName: "Creative two",
                bundleCode: '01234567',
                languages: 'English, Russian, Ukrainian',
                types: 'Type',
                imagePreview: 4.13,
                videoPreview: 7.13,
                imageSRC:'https://ilike.pet/upload/iblock/786/786fc0798233006257d41dc0132f6387.jpg',
                videoSRC:'https://www.youtube.com/embed/GxJWfNYOa2E',
            },
        ]
    },
    mutations:{
        closeModalImage(state){
            state.isModalImageOpen = false
        },
        openModalImage(state){
            state.isModalImageOpen = true
        },
        closeModalVideo(state){
            state.isModalVideoOpen = false
        },
        openModalVideo(state){
            state.isModalVideoOpen = true
        },
        openModalAddCreative(state){
            state.isModalAddCreativeOpen = true
        },
        closeModalAddCreative(state){
            state.isModalAddCreativeOpen =false
        }
    }
}
