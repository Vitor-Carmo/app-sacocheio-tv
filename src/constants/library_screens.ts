import Downloads from "../screens/Downloads";
import Likes from "../screens/Likes";

export default [
  {
    title: "Baixados",
    filterLabel: "Todos os episódios baixados",
    screen: {
      name: "Downloads",
      component: Downloads,
    },
  },
  {
    title: "Curtidas",
    filterLabel: "Todos os episódios curtidos",
    screen: {
      name: "Likes",
      component: Likes,
    },
  },
];
