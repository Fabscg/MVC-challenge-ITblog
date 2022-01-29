module.exports = {
    format_data: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`

    },
    format_plural: (word, amout) => {
        if (amount !== 1) {
            return `${word}s`
        }
        return word;
    }
}