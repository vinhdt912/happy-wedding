import React, { useEffect, useState } from "react";
import { TextDescription } from "../../libs";
import "./Hope.scss";
import { Card } from "antd";
import dayjs from "dayjs";

export default function Hope() {
  const [date, setDate] = useState(dayjs("01/12/2023", "DD/MM/YYYY"));
  useEffect(() => {
    setInterval(() => {
      setDate(dayjs());
    }, 1000);
  }, []);
  return (
    <div className="Hope">
      <TextDescription className="text-center">
        Mình cùng đếm ngược thời gian
        <div className="countdown">
          <Card>{date.get("d")}</Card>
          <Card>{date.get("h")}</Card>
          <Card>{date.get("m")}</Card>
          <Card>{date.get("s")}</Card>
        </div>
      </TextDescription>

      <TextDescription className="note text-center">
        Đám cưới của chúng tôi chắc chắn sẽ kém vui đi rất nhiều nếu thiếu đi sự
        hiện diện của bạn. Cảm ơn bạn vì đã trở thành một phần quan trọng trong
        ngày đặc biệt của chúng tôi!
      </TextDescription>
    </div>
  );
}
