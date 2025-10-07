import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useDynamicNameIcon = () => {
  /* Getting last router path name */
  const location = useLocation().pathname.split("/").filter(Boolean).pop();

  useEffect(() => {
    /*Selecting link tag which has icon , if not then creating new one */
    const favicon =
      document.querySelector("link[rel~=icon]") ||
      document.createElement("link");
    favicon.rel = "icon";

    /* Assigning default values to title and icon*/
    let href = "/images/favicon.png";
    let title = "Movie List";

    /* Title and icons are changed according to path*/
    switch (location) {
      case "mcu":
        href = "/images/Marvel/marvelfav.png";
        title = "Marvel Cinematic Universe";
        break;
      case "harrypotter":
        href =
          "https://img.icons8.com/?size=100&id=HW150WXZyOKQ&format=png&color=000000";
        title = "Harry Potter";
        break;
      case "piratesofthecaribbean":
        href =
          "https://img.icons8.com/?size=100&id=MAtd2MbE865C&format=png&color=000000";
        title = "Pirates of the Caribbean";
        break;
      case "dc":
        href =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/900px-DC_Comics_logo.svg.png";
        title = "DC Comics";
        break;
      case "got":
        href =
          "https://static.wikia.nocookie.net/gameofthronesfanon/images/8/8a/House-Stark-Main-Shield.PNG";
        title = "Game of Thrones";
        break;
      case "tamil":
        title = "Tamil Movies";
        break;
      case "english":
        title = "English Movies";
        break;
      case "webseries":
        title = "Web Series";
        break;
      case "movieseries":
        title = "Movie Series";
        break;
    }
    favicon.href = href;
    document.title = title;
  }, [location]);
};

export default useDynamicNameIcon;
