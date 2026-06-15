let RSVP_DATA = $state({
    firstName: '',
    lastName: '',
    restriction: '',
    attending: true
});

let isRsvpOpen = $state(false);

export const createRSVPData = () => {
    return {
        get isOpen() { return isRsvpOpen },
        set isOpen(value) { isRsvpOpen = value; console.log('rsvp store isOpen', isRsvpOpen) }
    };
};
