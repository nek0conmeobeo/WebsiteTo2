(function () {
  const wishes = [
    "❤️ Sức khoẻ như voi",
    "💗 Phúc lộc trong tay",
    "🧡 Gia chủ phát tài",
    "❤️‍🩹 Vạn sự như ý",
    "💛 Làm ăn phát đạt",
    "💚 Vàng bạc cao sang",
    "💙 Sức khoẻ an nhàn",
    "🩵 Công danh hết ý",
    "💜 Cung hỷ cung hỷ",
    "🤎 Năm mới vui vẻ",
    "🩶 Sung sướng như tiên",
    "🤍 Cung hỉ phát tài",
    "❤️ Vợ đẹp con ngoan",
    "❤️‍🔥 Tài lộc vào nhà",
    "❤️ Sức khoẻ vô biên",
    "💛 Phú quý cát tường",
    "💛 Hạnh phúc mênh mang",
    "💛 Thông minh vượt trội",
    "💛 Túi tiền nặng kí",
    "💛 Sống khoẻ đón xuân",
    "💜 Đắc lộc toàn gia",
    "💜 Mã đáo thành công",
    "💜 Hạnh phúc gia an",
    "💜 Hạnh phúc triền miên",
    "💜 Sống thọ vô biên",
    "💗 Thi đâu đậu đó",
    "💙 Bảng vàng ghi danh",
    "💙 Học ít hiểu nhiều",
    "💙 Vượt vũ môn quan",
    "💙 Sớm làm đại gia",
    "💙 Tiền đầy túi quần",
    "💙 Sự nghiệp thăng hoa",
    "💗 Lộc lá quanh năm",
    "💗 Phú quý vinh hoa",
    "💗 Nhan sắc thăng hạng",
    "💗 Đẹp trai nhất xóm",
    "💗 Xinh gái nhất vùng",
    "🩵 Ăn ngon ngủ kỹ",
    "🩵 Cười tươi như hoa",
    "🩵 Bách chiến bách thắng",
    "❤️‍🔥 Cả tổ đoàn kết",
  ];

  const colors = [
    "#FF0000",
    "#FF4500",
    "#FF8C00",
    "#FFD700",
    "#FFFF00",
    "#32CD32",
    "#008000",
    "#00FA9A",
    "#00FFFF",
    "#00BFFF",
    "#1E90FF",
    "#0000FF",
    "#8A2BE2",
    "#9400D3",
    "#FF00FF",
    "#FF1493",
    "#FF69B4",
    "#DC143C",
    "#F4A460",
    "#FA8072",
    "#7FFF00",
    "#ADFF2F",
    "#20B2AA",
    "#9370DB",
    "#C71585",
    "#FF6347",
    "#40E0D0",
    "#EE82EE",
    "#DAA520",
    "#CD5C5C",
  ];

  document.addEventListener("click", function (e) {
    const target = e.target;

    // Hàm để giúp web chặn các click thừa
    if (
      target.closest("a") ||
      target.closest("button") ||
      target.closest("input") ||
      target.closest("label") ||
      target.closest(".gallery-card") ||
      target.tagName === "IMG" ||
      target.closest(".gallery-lightbox")
    ) {
      return;
    }

    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    //Tạo <div> -> gán text -> cho class là "click-wish-text" cho css trang trí
    const el = document.createElement("div");
    el.textContent = randomWish;
    el.className = "click-wish-text";

    el.style.left = e.clientX + 5 + "px";
    el.style.top = e.clientY + 5 + "px";

    el.style.color = colors[Math.floor(Math.random() * colors.length)];
// Tự huỷ cho đỡ nặng web, phía dưới là tự động thêm <div> vào thẻ <body>
    document.body.appendChild(el);

    setTimeout(() => {
      el.remove();
    }, 1500);
  });
})();
