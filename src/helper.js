
export const baseURL = 'http://localhost:4000/api'

export const isAuthentication = () => {
    const token = localStorage.getItem("token");
    return token;
}

export const getFirstLetterOfUser = () => {
    const First_letter = localStorage.getItem("first_letter_of_user_name");
    return First_letter.toLocaleUpperCase();
}

export const setToken = (token) => {
    localStorage.setItem('token', token)
}

export const setFirstLetterOfUser = (name) => {
    const letter = name.charAt(0)
    localStorage.setItem('first_letter_of_user_name', letter)
}

