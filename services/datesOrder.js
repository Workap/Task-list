const orderDates = (dates) => {
  return dates.sort((a, b) => {
    const dateFirst = moment(a, "DD/MM/YYYY");
    const dateSecond = moment(b, "DD/MM/YYYY");
    return dateFirst - dateSecond;
  });
};

export { orderDates };
