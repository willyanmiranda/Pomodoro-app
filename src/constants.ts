const TIMERS = {
  POMODORO: {
    NAME: 'Pomodoro',
    MINUTES: 25,
  },
  SHORT_BREAK: {
    NAME: 'Intervalo curto',
    MINUTES: 5,
  },
  LONG_BREAK: {
    NAME: 'Intervalo longo',
    MINUTES: 15,
  },
};

const TIMER_STATUS = {
  COUNTING: 'contando',
  PAUSED: 'parado',
  FINISHED: 'finalizado',
};

const TIMER_ACTIONS = {
  START: 'iniciar',
  PAUSE: 'parar',
  RESTART: 'reiniciar',
};

const COLORS = {
  ORANGE_RED: '#f87070',
  TEAL: '#70F3F8',
  PURPLE: '#d881f8',
};

const FONTS = {
  KUMBH_SANS: 'Kumbh Sans',
  ROBOTO_SLAB: 'Roboto Slab',
  SPACE_MONO: 'Space Mono',
};

export { TIMERS, TIMER_STATUS, TIMER_ACTIONS, COLORS, FONTS };
