import { useRef } from 'react';
import classes from './events-search.module.css';
import Button from '../ui/buttons/button';

export default function EventsSearch(props) {
    const inputYearRef= useRef();
    const inputMonthRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        const selectedYear = inputYearRef.current.value;
        const selectedMonth = inputMonthRef.current.value;

        props.onSearch(selectedYear, selectedMonth);
    }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={inputYearRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={inputMonthRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">Dicember</option>
          </select>
        </div>
        <Button>Find Events</Button>
      </div>
    </form>
  );
}
