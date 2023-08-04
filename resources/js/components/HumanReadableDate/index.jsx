import React from 'react';
import moment from 'moment';
import 'moment-timezone';

function HumanReadableDate(props) {
    const { timestamp } = props;

    // Convert UTC timestamp to local timezone
    const localDate = moment.utc(timestamp).local();

    // Format date
    const humanDate = localDate.format('MMMM D, YYYY, h:mm a');

    return <span>{humanDate}</span>;
}

export default HumanReadableDate;
