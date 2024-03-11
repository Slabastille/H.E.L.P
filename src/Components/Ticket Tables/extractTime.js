function extractTime(dateString) {
  const date = new Date(dateString);

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const formattedTime = `${hours}:${minutes}:${seconds}`;

  return formattedTime;
}

export default extractTime;
