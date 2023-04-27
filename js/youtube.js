// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
// onYouTubeIframeAPIReady 함수 이름은 변경 불가!
// 외부에서 가져온 유뷰트 라이브러리가 자동으로 onYouTubeIframeAPIReady 함수를 찾아서 실행하므로 이름을 변경해서는 안됨

function onYouTubeIframeAPIReady() {
  new YT.Player("player", {
    videoId: "An6LvWQuj_8", // 최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true,
      loop: true, // 반복 재생 유뮤 ** 필수조건 : 반복재생할 유튜브 영상 ID 목록을 재공해야함
      playlist: "An6LvWQuj_8", // 반복재생할 유튜브 영상 ID 목록
    },
    events: {
      onReady: (event) => {
        event.target.mute(); // 음소거
        event.target.playVideo(); // 재생
      },
    },
  });
}
