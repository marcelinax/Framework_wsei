import { Photo } from "../types/Photo";

const initState: Photo[] = [];

type GET_PHOTOS = "GET_PHOTOS";
type PhotoStoreActions = GET_PHOTOS;

export const getPhotos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const photos = await response.json();
  return {
    type: "GET_PHOTOS",
    payload: photos,
  };
};

const photosReducer = (
  state: Photo[] = initState,
  action: {
    type: PhotoStoreActions;
    payload: Photo[];
  }
): Photo[] => {
  switch (action.type) {
    case "GET_PHOTOS":
      return action.payload;
    default:
      return state;
  }
};

export default photosReducer;
