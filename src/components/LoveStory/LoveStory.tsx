import { ArrowIcon1, Heart2Icon, RingIcon } from "../../assets/icons";
import { Avatar, TextColor, TextDescription, Title } from "../../libs";
import "./LoveStory.scss";

export default function LoveStory() {
  return (
    <div className="LoveStory" style={{ marginTop: 80 }}>
      <Title>Câu Chuyện Tình Yêu</Title>

      <div style={{ marginTop: 30 }}>
        <div className="card FirstTimeStory">
          <Avatar
            avtName="story-1.png"
            pos3={
              <div className="pos-3">
                <ArrowIcon1 />
              </div>
            }
            pos4={
              <div className="pos-4">
                <RingIcon />
              </div>
            }
          />
          <TextDescription className="date">23.10.2022</TextDescription>
          <TextColor className="text-center" style={{ lineHeight: 1.8 }}>
            Lần Đầu Gặp Mặt
          </TextColor>
          <TextDescription className="text-center">
            Sau vài lần lỡ hẹn, ngày hôm ấy mình đã được gặp nhau. Ngỡ xa lạ
            nhưng lại thân quen đến lạ thường. Ngày gặp đầu tiên mà cảm giác như
            gặp được tri kỷ.
          </TextDescription>
        </div>

        <div className="card BeginDate">
          <Avatar
            avtName="story-2.png"
            pos3={
              <div className="pos-3">
                <ArrowIcon1 />
              </div>
            }
            pos4={
              <div className="pos-4">
                <Heart2Icon />
              </div>
            }
          />
          <TextDescription className="date">26.11.2022</TextDescription>
          <TextColor className="text-center" style={{ lineHeight: 1.8 }}>
            Bắt Đầu Hẹn Hò
          </TextColor>
          <TextDescription className="text-center">
            Khi em còn lo sợ về một cuộc tình không bền lâu. Anh đã đến dùng
            hành động của mình để nói em biết rằng: tin tưởng vào tình yêu của
            chúng mình là điều vô cùng đúng đắn.
          </TextDescription>
        </div>

        <div className="card FirstTimeStory">
          <Avatar
            avtName="story-3.png"
            pos3={
              <div className="pos-3">
                <ArrowIcon1 />
              </div>
            }
            pos4={
              <div className="pos-4">
                <RingIcon />
              </div>
            }
          />
          <TextDescription className="date">24.09.2023</TextDescription>
          <TextColor className="text-center" style={{ lineHeight: 1.8 }}>
            Giây Phút Cầu Hôn
          </TextColor>
          <TextDescription className="text-center">
            Thời gian không ngắn cũng không dài nhưng đủ cho chúng ta nhận ra
            được rất nhiều điều. Từ 2 con người xa lạ mình bước vào đời nhau
            viết lên câu chuyện tình yêu. Và giờ đây chúng ta tiếp tục cùng nhau
            sang trang mới. Giây phút anh ngỏ lời “Làm vợ anh nhé!”, em đã
            nguyện ý đời này, đi đâu cũng được, miễn là cùng anh.
          </TextDescription>
        </div>

        <div className="card BeginDate">
          <Avatar
            avtName="story-4.png"
            pos3={
              <div className="pos-3">
                <ArrowIcon1 />
              </div>
            }
            pos4={
              <div className="pos-4">
                <Heart2Icon />
              </div>
            }
          />
          <TextDescription className="date">02.12.2023</TextDescription>
          <TextColor className="text-center" style={{ lineHeight: 1.8 }}>
            Ngày Chung Đôi
          </TextColor>
          <TextDescription className="text-center">
            Ngày hôm nay, em mặc lên mình chiếc váy xinh đẹp nhất, trở thành cô
            dâu của anh. <br />
            Duyên số cho ta gặp nhau. Sự cố gắng của cả hai đã viết lên câu
            chuyện happy ending và đôi ta sẽ viết tiếp những trang ngoại truyện
            bằng chuỗi tháng ngày ấm êm và hạnh phúc. Cảm ơn anh, cảm ơn em, cảm
            ơn mình vì đã luôn là một phần trong cuộc sống của nhau.
          </TextDescription>
        </div>
      </div>
    </div>
  );
}
