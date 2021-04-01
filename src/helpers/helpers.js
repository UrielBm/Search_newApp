export const SetFormatDate = (date) => {
  let NewDate = date.split("T");
  NewDate = NewDate[0];
  NewDate = new Date(NewDate);
  NewDate = NewDate.toDateString();
  return NewDate;
};
