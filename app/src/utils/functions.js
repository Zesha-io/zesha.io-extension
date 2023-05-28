const toMinutes = (seconds) => {
    return Math.floor(seconds / 60);
};

const toDate = (date) => {
    const d = new Date(date);

    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
};

const convertTimeToVideoTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.ceil(seconds % 60);

    return (
        hours ? [hours, minutes, remainingSeconds] : [minutes, remainingSeconds]
    )
        .map((value) => value.toString().padStart(2, "0"))
        .join(":");
};

export { toMinutes, toDate, convertTimeToVideoTime };
