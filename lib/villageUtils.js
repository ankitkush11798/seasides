/**
 * Utility functions for village card styling and branding
 */

/**
 * Get card styling based on design style
 * @param {string} designStyle - One of: modern, playful, corporate, technical
 * @returns {Object} Style properties
 */
export const getCardStyles = designStyle => {
  const styles = {
    modern: {
      borderRadius: 'rounded-3xl',
      shadow: 'shadow-lg',
      transition: 'transition-all duration-300',
      hover: 'hover:-translate-y-1'
    },
    playful: {
      borderRadius: 'rounded-[2rem]',
      shadow: 'shadow-2xl',
      transition: 'transition-all duration-500',
      hover: 'hover:rotate-1 hover:-translate-y-2'
    },
    corporate: {
      borderRadius: 'rounded-xl',
      shadow: 'shadow-md',
      transition: 'transition-all duration-300',
      hover: 'hover:-translate-y-1'
    },
    technical: {
      borderRadius: 'rounded-2xl',
      shadow: 'shadow-lg shadow-slate-900/50',
      transition: 'transition-all duration-300',
      hover: 'hover:-translate-y-1 hover:shadow-2xl'
    }
  };

  return styles[designStyle] || styles.modern;
};

/**
 * Get gradient background from branding colors
 * @param {Object} branding - Village branding object
 * @returns {Object} Inline style object
 */
export const getGradientStyle = branding => {
  if (!branding || !branding.primaryColor || !branding.secondaryColor) {
    return {};
  }

  return {
    background: `linear-gradient(to right, ${branding.primaryColor}, ${branding.secondaryColor})`
  };
};

/**
 * Get accessible text color based on background color
 * Uses simple luminance calculation to determine if white or black text should be used
 * @param {string} hexColor - Hex color code
 * @returns {string} 'text-white' or 'text-slate-900'
 */
export const getTextColor = hexColor => {
  if (!hexColor) {
    return 'text-white';
  }

  // Remove # if present
  const hex = hexColor.replace('#', '');

  // Convert to RGB
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Return white for dark backgrounds, dark for light backgrounds
  return luminance > 0.5 ? 'text-slate-900' : 'text-white';
};

/**
 * Convert Tailwind gradient class to inline CSS gradient
 * @param {string} gradientClass - Tailwind gradient class (e.g., 'from-violet-600 to-indigo-600')
 * @param {Object} branding - Branding object with primaryColor and secondaryColor
 * @returns {Object} Inline style object
 */
export const gradientToStyle = (gradientClass, branding) => {
  // If we have branding colors, use them
  if (branding?.primaryColor && branding?.secondaryColor) {
    return getGradientStyle(branding);
  }

  // Otherwise, return empty object and let Tailwind classes handle it
  return {};
};

/**
 * Get difficulty badge color classes
 * @param {string} difficulty - Beginner, Intermediate, or Advanced
 * @returns {string} Tailwind classes for badge
 */
export const getDifficultyBadgeClasses = difficulty => {
  const classes = {
    Beginner: 'bg-green-500/10 text-green-500',
    Intermediate: 'bg-amber-500/10 text-amber-500',
    Advanced: 'bg-red-500/10 text-red-500'
  };

  return classes[difficulty] || classes.Intermediate;
};

/**
 * Get session type badge color
 * @param {string} type - Talk or Workshop
 * @returns {string} Tailwind classes for session badge
 */
export const getSessionTypeBadgeClasses = type => {
  const classes = {
    Workshop: 'bg-purple-500/10 text-purple-500',
    Talk: 'bg-blue-500/10 text-blue-500'
  };

  return classes[type] || classes.Talk;
};

/**
 * Format time range for display
 * @param {Object} schedule - Schedule object with start and end times
 * @returns {string} Formatted time range
 */
export const formatTimeRange = schedule => {
  if (!schedule || !schedule.start || !schedule.end) {
    return '';
  }
  return `${schedule.start} - ${schedule.end}`;
};

/**
 * Check if village has detailed sessions
 * @param {Object} village - Village object
 * @returns {boolean} True if village has sessions
 */
export const hasSessions = village => {
  return village.sessions && Object.keys(village.sessions).length > 0;
};

/**
 * Get day color indicator
 * @param {number} dayIndex - 0 for day1, 1 for day2, 2 for day3
 * @returns {string} Tailwind background color class
 */
export const getDayColor = dayIndex => {
  const colors = ['bg-orange-500', 'bg-cyan-500', 'bg-purple-500'];
  return colors[dayIndex] || colors[0];
};
