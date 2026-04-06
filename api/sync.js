let lastData = {};

export default function handler(req, res) {
    if (req.method === "POST") {
        try {
            lastData = req.body;
            res.status(200).json({ status: "ok" });
        } catch (e) {
            res.status(500).json({ error: "fail" });
        }
    } else if (req.method === "GET") {
        res.status(200).json(lastData);
    }
}
