const formatDate = (date) => {
    const d = new Date(date);
    let month = `${d.getMonth() + 1}`;
    const year = d.getFullYear();
    let day = `${d.getDate()}`;

    if (month.length < 2) {
        month = `0${month}`;
    }

    if (month.length < 2) {
        day = `0${day}`;
    }

    return [year, month, day].join("-");
};

export default formatDate;
