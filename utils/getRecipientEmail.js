//function that will take an array, taking user that is logged in, return string value of the recipient we are chatting with
const getRecipientEmail =  (users, userLoggedIn) => 
    users?.filter(userToFilter => userToFilter !== userLoggedIn?.email)[0];

export default getRecipientEmail;