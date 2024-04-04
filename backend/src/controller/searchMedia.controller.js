import { customizedMediaData } from "../utils/customizeMediaResponse.js";
import { fetchData } from "../utils/fetchData.utils.js";

import {
  searchMovieMedia,
  searchMultiMedia,
  searchTvMedia,
} from "../utils/medialUrlsConstant.utils.js";

export const searchMultiController = async (req, res) => {
  try {
    const { searchQuery } = req.params;

    const data = await fetchData(
      searchMultiMedia.replace("query_Text", searchQuery.toString())
    );

    if (data.results.length === 0) {
      return res.status(204).json({
        success: false,
        message: "Page Not Found",
      });
    }

    res.json({
      success: true,
      data: customizedMediaData(data.results.slice(0, 14)),
    });
  } catch (error) {
    console.error("Error in searchMultiController:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error in searchMultiController",
    });
  }
};

export const searchMovieControler = async (req, res) => {
  try {
    const { searchQuery } = req.params;

    const data = await fetchData(
      searchMovieMedia.replace("query_Text", searchQuery.toString())
    );

    if (data.results.length === 0) {
      return res.status(204).json({
        success: false,
        message: "Page Not Found",
      });
    }

    res.json({
      success: true,
      data: customizedMediaData(data.results.slice(0, 14), "movie"),
    });
  } catch (error) {
    console.error("Error in searchMovieControler:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error in searchMovieControler",
    });
  }
};

export const searchTvControler = async (req, res) => {
  try {
    const { searchQuery } = req.params;

    const data = await fetchData(
      searchTvMedia.replace("query_Text", searchQuery.toString())
    );

    if (data.results.length === 0) {
      return res.status(204).json({
        success: false,
        message: "Page Not Found",
      });
    }

    res.json({
      success: true,
      data: customizedMediaData(data.results.slice(0, 14)),
    });
  } catch (error) {
    console.error("Error in searchTvControler:", error);
    res.status(500).json({
      success: false,
      error: "Internal server error in searchTvControler",
    });
  }
};
