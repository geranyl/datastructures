//http://johndyer.name/native-browser-get-set-properties-in-javascript/

// Super amazing, cross browser property function, based on http://thewikies.com/

/**
 *
 * SK: Feb 3, 2013 - Modified if setter is mandatory.
 */

function addProperty(obj, name, onGet, onSet) {

    // wrapper functions
    var
        oldValue = obj[name],
        getFn = function () {
            return onGet.apply(obj, [oldValue]);
        },
        setFn = function (newValue) {
            if(onSet){
                return oldValue = onSet.apply(obj, [newValue]);
            }else{
                console.log('No setter has been defined for this object: '+name+'.');
                return false;
            }
        };

    // Modern browsers, IE9+, and IE8 (must be a DOM object),
    if (Object.defineProperty) {

        Object.defineProperty(obj, name, {
            get: getFn,
            set: setFn
        });

        // Older Mozilla
    } else if (obj.__defineGetter__) {

        obj.__defineGetter__(name, getFn);
        obj.__defineSetter__(name, setFn);

        // IE6-7
        // must be a real DOM object (to have attachEvent) and must be attached to document (for onpropertychange to fire)
    } else {

        var onPropertyChange = function (e) {

            if (event.propertyName == name) {
                // temporarily remove the event so it doesn't fire again and create a loop
                obj.detachEvent("onpropertychange", onPropertyChange);

                // get the changed value, run it through the set function
                var newValue = setFn(obj[name]);

                // restore the get function
                obj[name] = getFn;
                obj[name].toString = getFn;

                // restore the event
                obj.attachEvent("onpropertychange", onPropertyChange);
            }
        };

        obj[name] = getFn;
        obj[name].toString = getFn;
        obj.attachEvent("onpropertychange", onPropertyChange);

    }
}

//// must be a DOM object (even if it's not a real tag) attached to document
//var myObject = document.createElement('fake');
//document.body.appendChild(myObject);
//
//// create property
//myObject.firstName = 'John';
//myObject.lastName = 'Dyer';
//addProperty(myObject, 'fullname',
//    function() {
//        return this.firstName + ' ' + this.lastName;
//    },
//    function(value) {
//        var parts = value.split(' ');
//        this.firstName = parts[0];
//        this.lastName = (parts.length > 1) ? parts[1] : '';
//    });
//
//console.log(myObject.fullname); // returns 'John Dyer'