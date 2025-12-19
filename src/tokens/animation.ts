export const duration = {
  fast: "150ms",
  normal: "250ms",
  slow: "350ms",
  slower: "500ms",
};

export const easing = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
};

export const transition = {
  fast: `${duration.fast} ${easing.easeInOut}`,
  normal: `${duration.normal} ${easing.easeInOut}`,
  slow: `${duration.slow} ${easing.easeInOut}`,
  slower: `${duration.slower} ${easing.easeInOut}`,
  bouncy: `${duration.normal} ${easing.bounce}`,
  smooth: `${duration.normal} ${easing.smooth}`,
};

export const animation = {
  fadeIn: `fadeIn ${duration.normal} ${easing.easeInOut}`,
  fadeOut: `fadeOut ${duration.normal} ${easing.easeInOut}`,
  slideUp: `slideUp ${duration.normal} ${easing.smooth}`,
  slideDown: `slideDown ${duration.normal} ${easing.smooth}`,
  slideLeft: `slideLeft ${duration.normal} ${easing.smooth}`,
  slideRight: `slideRight ${duration.normal} ${easing.smooth}`,
  scaleIn: `scaleIn ${duration.fast} ${easing.bounce}`,
  scaleOut: `scaleOut ${duration.fast} ${easing.easeInOut}`,
  bounce: `bounce ${duration.slow} ${easing.bounce}`,
  pulse: `pulse ${duration.slow} ${easing.easeInOut} infinite`,
  spin: `spin ${duration.slow} ${easing.linear} infinite`,
};
