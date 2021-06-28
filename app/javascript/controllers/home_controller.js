import ApplicationController from './application_controller'
import Splide from '@splidejs/splide'

/* This is the custom StimulusReflex controller for the Lang Reflex.
 * Learn more at: https://docs.stimulusreflex.com
 */
export default class extends ApplicationController {
    static targets = ['primary']
    options = {
        fixedWith: 350,
        fixedHeight: 350,
        perPage: 3,
        gap: 30,
        pagination: false,
        autoplay: true,
        interval: 3000,
        type: 'slide',
        arrow: false,
        cover: true,
        lazyLoad: 'nearby'
    }
    connect () {
        super.connect()
        // add your code here, if applicable
        console.log("hello")
        this.initSplide()
    }
    initSplide(){
        let id = this.primaryTarget.getAttribute('id')
        let primarySlide = new Splide(`#${id}`, this.options)
        if (primarySlide){
            primarySlide.mount()
        }
    }
}
