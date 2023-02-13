import { useEffect, useCallback, useState } from 'react';
import { TIMER_ACTIONS, TIMER_STATUS } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  changeTimerStatus,
  changeTimerValues,
  updateActiveTimerTotalMinutes,
} from '../../store/timerSlice';
import Button from '../UI/Button';
import ProgressBar from './ProgressBar';
import Ringtone from '../../assets/Alarm.mp3';

const Timer = () => {
  const { timerMinutes, timerSeconds, timerStatus, totalMinutesActiveTimer } =
    useAppSelector((state) => state.timer);

  const dispatch = useAppDispatch();

  const chooseTimerAction = useCallback(() => {
    if (timerStatus === TIMER_STATUS.PAUSED) return TIMER_ACTIONS.START;
    if (timerStatus === TIMER_STATUS.COUNTING) return TIMER_ACTIONS.PAUSE;
    if (timerStatus === TIMER_STATUS.FINISHED) return TIMER_ACTIONS.RESTART;
  }, [timerStatus]);

  const [ringtone, setRingtone] = useState(new Audio(Ringtone))

  useEffect(() => {

    if (timerStatus === TIMER_STATUS.COUNTING) {
      if (timerMinutes === 0 && timerSeconds === 0) {
        ringtone.play();
        ringtone.loop = true;
        console.log('funfou')
        dispatch(changeTimerStatus(TIMER_STATUS.FINISHED));
        return;
      } else {
        ringtone.pause();
        console.log('parou')
      }

      let interval = setInterval(() => {
        dispatch(changeTimerValues());
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [timerMinutes, timerSeconds, timerStatus, dispatch]);

  const onChangeTimerStatusHandler = () => {
    if (timerStatus === TIMER_STATUS.COUNTING)
      dispatch(changeTimerStatus(TIMER_STATUS.PAUSED));
    if (timerStatus === TIMER_STATUS.PAUSED)
      dispatch(changeTimerStatus(TIMER_STATUS.COUNTING));
    if (timerStatus === TIMER_STATUS.FINISHED) {
      dispatch(updateActiveTimerTotalMinutes());
      dispatch(changeTimerStatus(TIMER_STATUS.COUNTING));
    }
  };

  const percentage =
    ((timerMinutes * 60 + timerSeconds) / (totalMinutesActiveTimer * 60)) * 100;

  return (
    <div className="timerContainer">
      <div className="timer">
        <ProgressBar percentage={percentage === 0 ? 100 : percentage} />
        <h1 className="timerValue">
          {timerMinutes.toString().padStart(2, '0')}:
          {timerSeconds.toString().padStart(2, '0')}
        </h1>
        <Button onClick={onChangeTimerStatusHandler.bind(null)}>
          <h3>{chooseTimerAction()}</h3>
        </Button>
      </div>
    </div>
  );
};

export default Timer;
