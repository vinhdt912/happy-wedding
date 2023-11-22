import { FloatButton } from "antd";
import { useState } from "react";
import Sound from "react-sound";

//@ts-ignore
import soundUrl from "../../assets/audio/bg-audio.mp3";
import { MusicIcon, MusicMuteIcon } from "../../assets/icons";

function PlaySound() {
  const [soundStatus, setSoundStatus] = useState<
    "PLAYING" | "STOPPED" | "PAUSED"
  >("PAUSED");

  const handleClickToggleMusic = () => {
    switch (soundStatus) {
      case "PLAYING":
        setSoundStatus("PAUSED");
        break;
      case "PAUSED":
        setSoundStatus("PLAYING");
        break;
    }
  };

  return (
    <>
      <FloatButton
        style={{ width: 60, height: 60 }}
        className="custom-float-button"
        icon={
          soundStatus === "PAUSED" ? (
            <MusicMuteIcon style={{ width: 32, height: "auto" }} />
          ) : (
            <MusicIcon style={{ width: 32, height: "auto" }} />
          )
        }
        shape="circle"
        onClick={handleClickToggleMusic}
      />
      <Sound url={soundUrl} playStatus={soundStatus} loop autoLoad volume={5} />
    </>
  );
}

export default PlaySound;
