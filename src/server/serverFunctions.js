let tripInfo = {
    destination: 'Texas'
};

const saveTripInfo = (destination, date, timezone, max_temp, min_temp) => {
    tripInfo.destination = destination;
    tripInfo.date = date;
    tripInfo.timezone = timezone;
    tripInfo.max_temp = max_temp;
    tripInfo.min_temp = min_temp;

    return tripInfo;
}

const findTrip = () => {
    return tripInfo;
}

export {
    saveTripInfo,
    findTrip
}