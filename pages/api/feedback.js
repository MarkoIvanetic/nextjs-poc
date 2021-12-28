import fs from 'fs'
import path from 'path'

function handler(req, res) {
    if (req.method === 'POST') {

        const { email, text } = JSON.parse(req.body)

        const newFeedback = {
            id: new Date().toISOString(),
            email,
            text
        }

        const filePath = path.join(process.cwd(), 'data', 'feedback.json')
        const fileData = JSON.parse(fs.readFileSync(filePath))

        console.log("newFeedback:", newFeedback);

        const data = [...fileData, newFeedback]

        fs.writeFileSync(filePath, JSON.stringify(data, null, 4))

        res.status(201).json({ message: "success", feedback: newFeedback })

    } else {

        const filePath = path.join(process.cwd(), 'data', 'feedback.json')
        const fileData = JSON.parse(fs.readFileSync(filePath))

        res.status(200).json({ message: "success", data: fileData })

    }
}

export default handler