import dayjs from "dayjs";

export const getGoogleCalendarLink = (data) => {
  const timeStart = data?.events[0].time_start.split(":")[0];
  const timeEnd = data?.events[0].time_end.split(":")[0];

  return `https://www.google.com/calendar/render?action=TEMPLATE&text=Pernikahan ${
    data.bride_nickname
  } dan ${data.groom_nickname}&dates=${dayjs(data?.events[0].date)
    .set("hour", timeStart)
    .set("minutes", "00")
    .format("YYYYMMDDTHHmmss")}/${dayjs(data?.events[0].date)
    .set("hour", timeEnd)
    .set("minutes", "00")
    .format("YYYYMMDDTHHmmss")}&details=For+details,+link+here:+${
    data?.web_url
  }&location=${data?.events[0].location_detail}&sf=true&output=xml`;
};
