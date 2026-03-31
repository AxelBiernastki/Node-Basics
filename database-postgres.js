import { randomUUID } from 'node:crypto'
import { sql } from './db.js'

export class DatabasePostgres {
    async list(search) {
        let videos
        
        if (search) {
            videos = await sql`
                SELECT 
                    *
                FROM 
                    videos 
                WHERE 
                    title ILIKE ${'%' + search + '%'}
            `
        } else {
            videos = await sql`
                SELECT 
                    *
                FROM 
                    videos
            `
        }

        return videos
    }

    async create(video) {
        const videoId = randomUUID()

        await sql`
            INSERT INTO videos (id, title, description, duration) 
            VALUES (${videoId}, ${video.title}, ${video.description}, ${video.duration})
        `
    }

    async patch(id, video) {
        const title = video.title ?? null
        const description = video.description ?? null
        const duration = video.duration ?? null

        const updated = await sql`
            UPDATE videos
            SET
                title = COALESCE(${title}, title),
                description = COALESCE(${description}, description),
                duration = COALESCE(${duration}, duration)
            WHERE id = ${id}
            RETURNING *
            `

        return updated?.[0] ?? null
    }

    async update(id, video) {
        const { title, description, duration } = video

        await sql`
            UPDATE videos 
            SET 
                title = ${title},
                description = ${description},
                duration = ${duration}
            WHERE id = ${id}
        `
    }

    async delete(id) {
        await sql`
            DELETE FROM videos WHERE id = ${id}
        `
    }
}
