import React from 'react';

import moment from 'moment';
import 'moment/min/locales';

import { createCalendar, capitalise, isToday, isActualMonth } from '../../utils/calendar';
import { weekDaysName, monthName } from '../../data';

import './index.css';

export const Calendar = ({ date }) => {
  const m = moment();
  m.locale('ru');
  m.set({
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    millisecond: date.getMilliseconds(),
  });

  const startDay = m.clone().startOf('month').startOf('week');
  const day = startDay.clone().subtract(1, 'day');
  const calendar = createCalendar(day);

  return (
    <div className='ui-datepicker'>
      <div className='ui-datepicker-material-header'>
        <div className='ui-datepicker-material-day'>{weekDaysName[m.isoWeekday() - 1]}</div>
        <div className='ui-datepicker-material-date'>
          <div className='ui-datepicker-material-day-num'>{m.format('D')}</div>
          <div className='ui-datepicker-material-month'>{`${monthName[m.format('M') - 1].rod}`}</div>
          <div className='ui-datepicker-material-year'>{m.format('YYYY')}</div>
        </div>
      </div>
      <div className='ui-datepicker-header'>
        <div className='ui-datepicker-title'>
          <span className='ui-datepicker-month'>{capitalise(`${monthName[m.format('M') - 1].im}`)}</span>&nbsp;<span className='ui-datepicker-year'>{m.format('YYYY')}</span>
        </div>
      </div>
      <table className='ui-datepicker-calendar'>
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className='ui-datepicker-week-end' />
          <col className='ui-datepicker-week-end' />
        </colgroup>
        <thead>
          <tr>
            <th scope='col' title='Понедельник'>
              Пн
            </th>
            <th scope='col' title='Вторник'>
              Вт
            </th>
            <th scope='col' title='Среда'>
              Ср
            </th>
            <th scope='col' title='Четверг'>
              Чт
            </th>
            <th scope='col' title='Пятница'>
              Пт
            </th>
            <th scope='col' title='Суббота'>
              Сб
            </th>
            <th scope='col' title='Воскресенье'>
              Вс
            </th>
          </tr>
        </thead>
        <tbody>
          {calendar.map((week) => {
            return (
              <tr>
                {week.map((day) => {
                  return isToday(m, day) ? <td className='ui-datepicker-today'>{day.format('D')}</td> : !isActualMonth(m, day) ? <td className='ui-datepicker-other-month'>{day.format('D')}</td> : <td>{day.format('D')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
