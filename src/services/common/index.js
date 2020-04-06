export const addAuthorizationHeader = headers => ({
    ...headers,
    Authorization : `Bearer ${localStorage.getItem('token')}`
})

export const getDate = timestamp => {
    const newDate = new Date(timestamp);
    return `${newDate.getFullYear()}/${`0${newDate.getMonth()+1}`.slice(-2)}/${`0${newDate.getDate()}`.slice(-2)}\t${`0${newDate.getHours()}`.slice(-2)}:${`0${newDate.getMinutes()}`.slice(-2)}`
}