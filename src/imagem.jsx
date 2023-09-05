function Profile () {
    return (
        <img class = "imagem" src="https://miro.medium.com/v2/resize:fit:400/1*JXllyTpADBo4YeEGqBNWlA.jpeg" alt = "Joseph Joestar"/>
    );
}

export default function PrintJoseph () {
    return (
        <section className = "joseph">
        <Profile />
        <Profile />
        <Profile />
        </section>
    )
}