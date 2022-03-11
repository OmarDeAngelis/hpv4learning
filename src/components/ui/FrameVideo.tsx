import React from "react";
import { Skeleton, Box } from "@mui/material";
import styled from "@emotion/styled";

const StyledBox = styled(Box)`
  .video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const FrameVideo = ({ video }: { video: string }) => {
  const [load, setLoad] = React.useState<boolean>(true);

  return (
    <StyledBox
      width='100%'
      height='0'
      borderRadius='16px'
      overflow='hidden'
      position='relative'
      pb={load ? "0px" : "56.25%"}
    >
      <iframe
        style={{ display: "none" }}
        onLoad={() => setLoad(false)}
        src={video}
      ></iframe>
      {load ? (
        <Skeleton
          sx={{
            pb: "56.25%",
            height: "0",
            width: "inherit",
            transform: "none",
          }}
        />
      ) : (
        <iframe
          id='player'
          src={video + "?enablejsapi=1"}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          className='video'
        ></iframe>
      )}
    </StyledBox>
  );
};

export default FrameVideo;

//Permette di inviare EVENTI al play, stop e complete state del video
// function handleTagLoading() {
//   if (typeof window.YT !== "undefined" && typeof YT.Player !== "undefined") {
//     let player = new YT.Player("player", {
//       events: {
//         "onStateChange": onPlayerStateChange,
//       },
//     });
//   }

//   function onPlayerStateChange(event: YT.OnStateChangeEvent) {
//     switch (event.data) {
//       case 0:
//         //Video Finito
//         break;
//       case 1:
//         //Play Video
//         createGAEvent("click_cta", "play_video")();
//         break;
//       case 2:
//         //Stop Video
//         break;
//     }
//   }
// }

// React.useEffect(() => {
//   if (typeof window !== "undefined") {
//     const allTags = document.getElementsByTagName("script");
//     const hasApi = Array.from(allTags).some(
//       (el) => el.getAttribute("ready") === "1"
//     );
//     if (!hasApi) {
//       const tag = document.createElement("script");
//       tag.setAttribute("ready", "1");
//       tag.src = "https://www.youtube.com/iframe_api";
//       allTags[0].parentNode?.insertBefore(tag, allTags[0]);
//       tag.onload = handleTagLoading;
//     } else {
//       handleTagLoading();
//     }
//   }
// }, [load]);
