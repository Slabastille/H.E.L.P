function extractTime(dateString) {
  const date = new Date(dateString);

  let hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;

  const formattedTime = `${hours}:${minutes}:${seconds}`;

  return formattedTime;
}

export default extractTime;
