import PasswordEyeVisible from "../assets/svg/eye_visible.svg";
import PasswordEyeInvisible from "../assets/svg/eye_invisible.svg";

export default {
  COLORS: {
    BACKGROUND: "#202020",
    FOREGROUND: "#383332",

    PRIMARY: "#FFC739",
    SECONDARY: "#806E42",
    TEXT: "#FFFFFF",

    TEXT_30: "rgba(255, 255, 255, 0.3)",
    TEXT_40: "rgba(255, 255, 255, 0.4)",
    TEXT_50: "rgba(255, 255, 255, 0.5)",
    TEXT_60: "rgba(255, 255, 255, 0.6)",
    TEXT_70: "rgba(255, 255, 255, 0.7)",
    TEXT_80: "rgba(255, 255, 255, 0.8)",

    ANCHOR_BUTTON_BACKGROUND: "#FFFFFF",
    ANCHOR_BUTTON_TEXT: "#333333",

    BORDER: "rgba(255, 255, 255, 0.08)",

    STATUSBAR: "rgba(32, 32, 32, 0.8)",

    TAB_BAR: "rgb(25, 25, 25)",
    TAB_BAR_OPACITY: "rgba(25, 25, 25, 0.6)",

    FILTER_BUTTON_BACKGROUND: "#383332",
    FILTER_BUTTON_TITLE: "#ffffff",

    TIMER_BACKGROUND: "#383332",
  },

  DIMENSIONS: {
    PADDING_VERTICAL: "15px",
    MARGIN_BOTTOM_TO_TAB_BAR: "60px",
  },

  IMAGES: {
    LOGIN_BACKGROUND: require("../assets/image/login-background.png"),
    PASSWORD_EYE_VISIBLE: PasswordEyeVisible,
    PASSWORD_EYE_INVISIBLE: PasswordEyeInvisible,
  },
};
