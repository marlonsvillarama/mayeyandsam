let DEFAULT_DATA = {
    step: 1,
    submitted: false,
    checkIn: '2026-12-26',
    checkOut: '2026-12-28',
    roomName: '',
    roomType: 1,
    withTransfer: true,
};
let bookingData = $state(DEFAULT_DATA);
let roomTypes = [
    {
        name: 'Rooms',
        list: [
            { id: 1, name: 'Classic Queen' },
            { id: 2, name: 'Classic Twin' },
            { id: 3, name: 'Superior King' },
            { id: 4, name: 'Superior Twin' },
            { id: 5, name: 'Family Room' },
            { id: 6, name: 'Premium King' },
        ]
    },
    {
        name: 'Suites',
        list: [
            { id: 7, name: 'Junior Suite King' },
            { id: 8, name: 'Premium Suite King' },
            { id: 9, name: 'Sol Marina Beach Suite' },
        ]
    },
    {
        name: 'Villa',
        list: [
            { id: 10, name: 'Sol Marina Villa' }
        ]
    }
];
let allRooms = roomTypes.reduce(
    (all, next) => all.concat(next.list),
    []
);
// console.log('allRooms', allRooms);

export const createBookingData = () => {
    return {
        get name () { return bookingData.name || '' },
        get email () { return bookingData.email || '' },
        get checkIn () { return bookingData.checkIn || '2026-12-26' },
        get checkOut () { return bookingData.checkOut || '2026-12-28' },
        get roomType () { return bookingData.roomType },
        get roomCount () { return bookingData.roomCount || 1 },
        get guestCount () { return bookingData.guestCount || 1 },
        get requests () { return bookingData.requests || '' },
        get withTransfer () { return bookingData.withTransfer },
        get transferCount () { return bookingData.transferCount || 0 },
        get allRoomTypes () { return roomTypes },
        get roomName () { return allRooms.find(r => r.id.toString() === bookingData.roomType.toString())?.name || '' },
        get step () { return bookingData.step },
        get data () { return bookingData },
        get submitted () { return bookingData.submitted },

        set name (value) { bookingData.name = value },
        set email (value) { bookingData.email = value },
        set checkIn (value) { bookingData.checkIn = value },
        set checkOut (value) { bookingData.checkOut = value },
        set roomType (value) {
            bookingData.roomType = value;
            bookingData.roomName = allRooms.find(r => r.id.toString() === bookingData.roomType.toString())?.name;
        },
        set roomCount (value) { bookingData.roomCount = value },
        set guestCount (value) { bookingData.guestCount = value },
        set requests (value) { bookingData.requests = value },
        set withTransfer (value) { bookingData.withTransfer = value },
        set transferCount (value) { bookingData.transferCount = value },
        set step (value) { bookingData.step = value },
        set submitted (value) { bookingData.submitted = value },

        reset: () => { bookingData = DEFAULT_DATA }
    };
};