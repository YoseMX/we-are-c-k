let events = [];

export default function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;
        if (data && data.id) {
            events.push({
                ...data,
                t: Date.now()
            });
        }

        if (events.length > 500) {
            events = events.slice(-300);
        }

        res.status(200).json({ ok: true });
    } else {
        const now = Date.now();
        events = events.filter(e => now - e.t < 15000);
        res.status(200).json(events);
    }
}
