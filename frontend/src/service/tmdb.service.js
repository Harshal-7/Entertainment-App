import axios from "axios";
import { tmdbActionUrl } from "../utils/constant.utils";

export const useFetchTrendingMedia = async (page, setMediaData) => {
  try {
    const { data } = await axios.get(`${tmdbActionUrl}/trending/${page}`);
    setMediaData(data.data);
  } catch (error) {}
};

export const useFetchMultiMedia = async (page, setMediaData, mediaType) => {
  try {
    const { data } = await axios.get(
      `${tmdbActionUrl}/discover/${mediaType}/${page}`
    );
    setMediaData(data.data);
  } catch (error) {}
};

export const useSearchMultiMedia = async (
  searchQuery,
  setMediaData,
  mediaType
) => {
  try {
    if (searchQuery && mediaType) {
      const { data } = await axios.get(
        `${tmdbActionUrl}/search/${mediaType}/${searchQuery}`
      );
      setMediaData(data.data);
    }
  } catch (error) {}
};

export const useFetchMediaDetail = async (
  mediaId,
  setMediaDetail,
  mediaType
) => {
  try {
    if (mediaId && mediaType) {
      const { data } = await axios.get(
        `${tmdbActionUrl}/detail/${mediaType}/${mediaId}`
      );
      setMediaDetail(data.data);
    }
  } catch (error) {}
};
