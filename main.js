// Thay đổi nội dung bức thư ở đây
var letterContent = "Chúc mừng sinh nhật em yêu! 💖 Hôm nay là ngày đặc biệt khi thiên thần của anh đến với thế giới này, mang theo ánh sáng rực rỡ vào cuộc đời anh. Anh thật may mắn và hạnh phúc khi có em bên cạnh, người đã làm cho mỗi ngày của anh trở nên ý nghĩa. Mọi khoảnh khắc bên em, từ nụ cười đến những phút giận dỗi, đều là kỷ niệm anh trân trọng. Anh mong em luôn hạnh phúc, khỏe mạnh và tràn đầy yêu thương. Cảm ơn em đã đến và làm cho cuộc sống của anh thêm tươi đẹp. Yêu Trúc rất nhiều! 💕🎂✨💕";

// Tốc độ viết chữ (số càng nhỏ, tốc độ càng nhanh)
const durationWrite = 45;

// Hiệu ứng gõ chữ
function effectWrite() {
    let boxLetter = document.querySelector(".letterContent");
    boxLetter.innerHTML = ""; // Xóa nội dung trước khi gõ lại

    letterContent.split("").forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val;
        }, durationWrite * index);
    });
}

// Hiệu ứng khi trang tải xong
window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active");
    }, 500);
});

// Thêm audio vào trang
var audio = new Audio("audio/music.mp3");
audio.loop = true; // Lặp lại nhạc
audio.volume = 0.1; // Giảm âm lượng xuống 20%

// Xử lý sự kiện khi bấm mở thiệp
var openBtn = document.querySelector(".openBtn");
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active");
    document.querySelector(".container").classList.add("close");

    // Phát nhạc khi mở thiệp
    audio.play().catch(error => console.log("Tự động phát nhạc bị chặn:", error));
});

// Xử lý sự kiện khi bấm vào thiệp
var cardValentine = document.querySelector(".cardValentine");
cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open");

    if (cardValentine.classList.contains("open")) {
        setTimeout(effectWrite, 500);
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = "";
        }, 1000);

        // Dừng nhạc khi đóng thiệp
        audio.pause();
        audio.currentTime = 0;
    }
});
