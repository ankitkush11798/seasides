export const getDayColor = index => {
  const colors = ['bg-orange-500', 'bg-cyan-500', 'bg-purple-500'];
  return colors[index] || 'bg-gray-500';
};

export const getGradientStyle = branding => {
  if (!branding) {
    return {};
  }
  if (branding.primaryColor) {
    return {
      background: branding.primaryColor,
      backgroundImage: branding.gradient || undefined
    };
  }
  return {};
};

export const getSessionTypeBadgeClasses = type => {
  switch (type?.toLowerCase()) {
    case 'workshop':
      return 'bg-pink-100 text-pink-800 dark:bg-pink-900/50 dark:text-pink-200';
    case 'talk':
      return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200';
    case 'panel':
      return 'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200';
    case 'ctf':
    case 'competition':
    case 'tournament':
    case 'challenge':
      return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200';
    case 'track':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200';
    case 'activity':
    case 'info':
      return 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200';
    default:
      return 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200';
  }
};
