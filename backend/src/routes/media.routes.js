import express from "express";
import {
  discoverMovieController,
  trendingMultiMediaControler,
  discoverTvController,
} from "../controller/discoverAndTrendingMedia.controller.js";
import {
  searchMultiController,
  searchTvControler,
  searchMovieControler,
} from "../controller/searchMedia.controller.js";
import {
  detailedMovieController,
  detailedTvController,
} from "../controller/detailMedia.controller.js";

const mediaRouter = express.Router();

// Routes for trending media
mediaRouter.get("/media/trending/:page", trendingMultiMediaControler);

// Routes for discovering movies and TV shows
mediaRouter.get("/media/discover/movie/:page", discoverMovieController);
mediaRouter.get("/media/discover/tv/:page", discoverTvController);

// Routes for searching movies, TV shows, and multi media
mediaRouter.get("/media/search/movie/:searchQuery", searchMovieControler);
mediaRouter.get("/media/search/tv/:searchQuery", searchTvControler);
mediaRouter.get("/media/search/multi/:searchQuery", searchMultiController);

// Routes for getting details of movies and TV shows
mediaRouter.get("/media/detail/movie/:movieId", detailedMovieController);
mediaRouter.get("/media/detail/tv/:seriesId", detailedTvController);

export default mediaRouter;
