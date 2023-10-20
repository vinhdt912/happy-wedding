import { Avatar, TextColor, TextDescription, Title } from "../../libs";

export default function LoveStory() {
  return (
    <div className="LoveStory" style={{ marginTop: 120 }}>
      <Title>Câu Chuyện Tình Yêu</Title>
      <Avatar
        avtName="avt-man-1.png"
        style={{ rotate: "-7deg", width: "40%", left: "0", margin: "0 auto" }}
      />
      <TextColor style={{ textAlign: "center" }}>Lần Đầu Gặp Mặt</TextColor>
      <TextDescription style={{ textAlign: "center", marginTop: 0 }}>
        Tôi đã từng không tin vào tình yêu online. Đã từng nghĩ làm sao có thể
        thích một người chưa từng gặp mặt? Ngày ấy vu vơ đăng một dòng status
        trên facebook than thở, vu vơ đùa giỡn nói chuyện với một người xa lạ
        chưa từng quen. Mà nào hay biết, 4 năm sau người ấy lại là chồng mình.
      </TextDescription>
      <Avatar
        avtName="avt-man-1.png"
        style={{ rotate: "-7deg", width: "40%", left: "0", margin: "0 auto" }}
      />
      <TextColor style={{ textAlign: "center" }}>Bắt Đầu Hẹn Hò</TextColor>
      <TextDescription style={{ textAlign: "center", marginTop: 0 }}>
        Ngày ấy, tôi 25! Một mình giữa phố thị nấp tập. Mỗi chiều cuối tuần
        thường chạy xe vòng quanh qua những con phố, len lỏi trong từng dòng
        người tấp nập. Nhưng rồi một ngày đẹp trời, người con trai ấy xuất hiện,
        nắm tay rồi thủ thỉ vào tai: “Hy vọng sau này anh được làm những điều ấy
        cùng em”.
      </TextDescription>
    </div>
  );
}
