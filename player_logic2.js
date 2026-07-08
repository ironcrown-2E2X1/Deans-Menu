let scheduleData = null;
let activeImages = [];
let currentImageIndex = 0;
let slideshowTimer = null;
let scheduleCheckTimer = null;

const slideshowImage = document.getElementById("slideshowImage");



import { scheduleJson } from './Content/schedule.js';
console.log(scheduleJson);

/**
 * Load schedule JSON from a JavaScript object.
 */
function loadSchedule(scheduleJson) {
  scheduleData = scheduleJson;

  refreshActiveImages();
  startSlideshow();

  // Re-check the schedule every minute in case the hour/day changes.
  if (scheduleCheckTimer) {
    clearInterval(scheduleCheckTimer);
  }

  scheduleCheckTimer = setInterval(() => {
    refreshActiveImages();
    startSlideshow();
  }, 60 * 1000);
}


/**
 * Find images that should currently be shown based on day and hour.
 */
function refreshActiveImages() {
  if (!scheduleData || !Array.isArray(scheduleData.schedule)) {
    activeImages = [];
    return;
  }

  const now = new Date();
  const currentDay = getCurrentDayName(now);
  const currentHour = now.getHours();

  const matchingRules = scheduleData.schedule.filter(rule => {
    const dayMatches = rule.days.includes(currentDay);
    const hourMatches = rule.hours.includes(currentHour);

    return dayMatches && hourMatches;
  });

  activeImages = matchingRules.flatMap(rule => rule.images || []);

  currentImageIndex = 0;

  console.log("Current day:", currentDay);
  console.log("Current hour:", currentHour);
  console.log("Active images:", activeImages);
}

/**
 * Start or restart the slideshow.
 */
function startSlideshow() {
  if (slideshowTimer) {
    clearTimeout(slideshowTimer);
    slideshowTimer = null;
  }

  if (!activeImages.length) {
    showNoScheduledImage();
    return;
  }

  showNextImage();
}

/**
 * Show the next image and schedule the following one.
 */
function showNextImage() {
  if (!activeImages.length) {
    showNoScheduledImage();
    return;
  }

  const image = activeImages[currentImageIndex];

  slideshowImage.src = image.path;
  slideshowImage.alt = image.name || image.fileName || "Scheduled image";

  const durationMilliseconds =
    image.durationMilliseconds ||
    image.durationSeconds * 1000 ||
    10000;

  currentImageIndex = (currentImageIndex + 1) % activeImages.length;

  slideshowTimer = setTimeout(() => {
    showNextImage();
  }, durationMilliseconds);
}

/**
 * Display fallback behavior when no rule matches the current time.
 */
function showNoScheduledImage() {
  slideshowImage.removeAttribute("src");
  slideshowImage.alt = "No image scheduled for the current time";

  console.log("No images scheduled for the current day/hour.");
}

/**
 * Convert current Date into the same day names used by the JSON.
 */
function getCurrentDayName(date) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  return days[date.getDay()];
}

loadSchedule(scheduleJson);
