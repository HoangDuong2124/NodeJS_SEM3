const fortuneCookies = [
    "Hello my friend hahahahahahah.",
    "River need springs",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise."
]
exports.getFortune = () => {
    const idx = Math.floor(Math.random() * fortuneCookies.length)
    return fortuneCookies[idx]
}