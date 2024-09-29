// given a date data, returns how much time has passed since that date
export const timeSince = (dateString) => {
    const now = new Date();
    const pastDate = new Date(dateString);
    const diffInMs = now - pastDate;

    const seconds = Math.floor(diffInMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years > 0) return `Hace ${years} años`;
    if (months > 0) return `Hace ${months} meses`;
    if (days > 0) return `Hace ${days} días`;
    if (hours > 0) return `Hace ${hours} horas`;
    if (minutes > 0) return `Hace ${minutes} minutos`;
    return `${seconds} segundos`;
};