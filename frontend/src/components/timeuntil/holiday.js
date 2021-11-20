//Helpers
// these are logic you want to get from a backend, probably will do when I make a back end
const holidayHelper ={
    //logic to get the fourth thursday of November
    thanksgving_day: (year = new Date().getFullYear()) => {
        const first = new Date("November 1, " + year)
        const dayOfWeek = first.getDay()
        const dayOfMonth = (22 + (11 - dayOfWeek) % 7)
        return `November ${dayOfMonth}`
    },

    //logic to get the next upcoming holiday if already past get next year's
    upcoming: (holidayStr) => {
        const today = new Date()
        let holiday = new Date(`${holidayStr}, ${today.getFullYear()}`)
        if (today > holiday) {
            return (`${holidayStr}, ${today.getFullYear() + 1}`)
        } else {
            return (`${holidayStr}, ${today.getFullYear()}`)
        }
    },
}

//Actual list you are going to use to add holidays if you so choose
const holidaylist = {
    newYear : holidayHelper.upcoming('January 1'),
    christmas: holidayHelper.upcoming('December 25'),
    halloween: holidayHelper.upcoming('October 31'),
    thanksgving: holidayHelper.upcoming(holidayHelper.thanksgving_day())
}

export default holidaylist
