import ApplicationController from './application_controller'
import Splide from '@splidejs/splide'
import lozad from 'lozad'

/* This is the custom StimulusReflex controller for the Lang Reflex.
 * Learn more at: https://docs.stimulusreflex.com
 */
export default class extends ApplicationController {
    static targets = ['primary']
    options = {
        fixedWith: 350,
        fixedHeight: 400,
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
    initialize(){
      document.addEventListener('cable-ready:after-morph', this.reconnect.bin(this))
      }
      reconnect(){
        this.initSplide()
      }

    initSplide(){
        const observer = lozad(); // lazy loads elements with default selector as '.lozad'
        observer.observe();

        let id = this.primaryTarget.getAttribute('id')
        let primarySlide = new Splide(`#${id}`, this.options)
        if (primarySlide){
            primarySlide.mount()
        }
    }
}
