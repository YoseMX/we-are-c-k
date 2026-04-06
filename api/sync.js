let events = [];

export default function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;

        if (data) {
            events.push({
                ...data,
                t: Date.now()
            });
        }

        res.status(200).json({ ok: true });
    } else {
        res.status(200).json(events);
    }
}
