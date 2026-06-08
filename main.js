window.onload = () => {

    const yesButton = document.getElementById("yes-button");
    const noButton = document.getElementById("no-button");

    const video1 = document.getElementById("v1");
    const video2 = document.getElementById("v2");

    const audio1 = document.getElementById("a1");
    const audio2 = document.getElementById("a2");

    const albumGif = document.getElementById("album-gif");
    const banner = document.getElementById("info-banner");

    albumGif.addEventListener("click", () => {
    banner.classList.toggle("show");
});

    yesButton.addEventListener("click", () => {

        let cover = document.getElementById("cover");

        cover.classList.add("fade");

        setTimeout(() => {
            cover.style.display = "none";
        }, 200);

        audio1.volume = 0.5;

        audio1.play();
        video1.play();
        if (document.getElementById("main").requestFullscreen) {
            document.getElementById("main").requestFullscreen();
        }
        
        video1.addEventListener("ended", () => {
        
        audio1.pause();
        audio1.currentTime = 0;

        video1.style.display = "none";
        video2.style.display = "block";
    
        video2.currentTime = 0;
        audio2.currentTime = 0;
        
        audio2.volume = 0.5;

        video2.play();
        audio2.play();

        setTimeout(() => {
            document.getElementById("player-card")
                .classList.add("show");
            }, 3000);
        });
    });

    noButton.addEventListener("click", () => {
        alert("I know what you need d-(^_^)z");
        window.location.href = "https://en.wikipedia.org/wiki/Puppy";
    });

};