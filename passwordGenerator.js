function generateRandomPassword(len) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?";
    let pass = "";
    for (let i = 0; i < len; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        pass += characters[randomIndex];
    }

    return pass;
}

console.log(generateRandomPassword(12));
