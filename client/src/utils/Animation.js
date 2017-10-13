class Animation {
    constructor(selector){
        this.selector = selector || null; //selector being targeted
        this.element = null; // actual DOM element
    }

    init = function() {

        switch (this.selector[0]) {
            case '<':
                var matches = this.selector.match(/<([\w-]*)>/);
                if (matches === null || matches === undefined) {
                    throw 'Invalid Selector / Node';
                    return false;
                }
                var nodeName = matches[0].replace('<', '').replace('>', '');
                this.element = document.createElement(nodeName);
                break;
            default:
            this.element = document.querySelector(this.selector);
        }
    }
       

    eventHandler = {
        events: [], //Array of events & calls back that the element subscribe to

        bindEvent: function(event,callback,target){
            // remove any duplicate event
            this.unbindEvent(event,target)

            // bind event listener to DOM element
            target.addEventListener(event,callback,false);

            // push event into array
            this.events.push({
                type: event,
                event: callback,
                target: target
            })
        },

        findEvent: function(event){
            return this.events.filter(function(evt){
                return(evt.type === event); // if event type match, return
            }, event)[0];
        },

        unbindEvent: function(event,target){
            // search event
            let foundEvent = this.findEvent(event);

            // remove event listener if found
            if(foundEvent !== undefined){
                target.removeEventListener(event,foundEvent.event,false);
            }

            // update event array
            this.events = this.events.filter(function(evt){
                return (evt.type !== event);
            },event);
        }
    }

    val = function(newVal) {
        return (newVal !== undefined ? this.element.value = newVal : this.element.value);
    }

    $ = function(selector){
        let el = Animation(selector);
        el.init();
        return el
    }
}

export default Animation;