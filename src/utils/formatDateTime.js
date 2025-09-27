export function formatDateTime(datetimeStr) {
    try {
        const date = new Date(datetimeStr);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");

        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, "0");

        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;

        return `${year}-${month}-${day} ${hours}:${minutes} ${ampm}`;
    } catch (err) {
        throw new Error("Invalid datetime string format", err);
    }
}