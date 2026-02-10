import { randomUUID } from 'node:crypto'

export class DatabaseMemory {
    #videos = new Map()

    list(search) {
        return Array.from(this.#videos.entries())
            .map((videoArray) => {
                const id = videoArray[0]
                const data = videoArray[1]

                return {
                    id,
                    ...data
                }
            })
            .filter(video => {
                if (!search) {
                    return true
                }

                return video.title.includes(search)
            })
    }

    create(video) {
        const videoId = randomUUID()

        // UUID é um identificador único universal, ou seja, é um número de 128 bits que é gerado de forma aleatória e é praticamente impossível de ser repetido. Ele é usado para identificar de forma única um recurso, como um vídeo, em um sistema.

        this.#videos.set(videoId, video)
    }

    update(id, video) {
        this.#videos.set(id, video)
    }

    delete(id) {
        this.#videos.delete(id)
    }
}