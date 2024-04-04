import { customizedMediaData } from "../utils/customizeMediaResponse.js";
import { fetchData } from "../utils/fetchData.utils.js";

import {
  discoverMovieMedia,
  discoverTvMedia,
  trendingMultiMedia,
} from "../utils/medialUrlsConstant.utils.js";

export const trendingMultiMediaControler = async (req, res) => {
  try {
    const { page } = req.params;

    const data = await fetchData(trendingMultiMedia + page);

    res.status(200).json({
      success: true,
      data: customizedMediaData(data.results),
      totalPages: data.total_pages,
    });
  } catch (error) {
    console.error("Error in trendingMultiMediaControler:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error in trendingMultiMediaControler",
    });
  }
};

export const discoverMovieController = async (req, res) => {
  try {
    const { page } = req.params;

    const data = await fetchData(discoverMovieMedia + page);

    res.json({
      success: true,
      data: customizedMediaData(data.results, "movie"),
      totalPages: data.total_pages,
    });
  } catch (error) {
    console.error("Error in discoverMovieController:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error in discoverMovieController",
    });
  }
};
export const discoverTvController = async (req, res) => {
  try {
    const { page } = req.params;

    const data = await fetchData(discoverTvMedia + page);

    res.json({
      success: true,
      data: customizedMediaData(data.results, "tv"),
      totalPages: data.total_pages,
    });
  } catch (error) {
    console.error("Error in discoverTvController:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error in discoverTvController",
    });
  }
};
