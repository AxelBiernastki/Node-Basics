import { sql } from "./db.js"

sql`
CREATE TABLE videos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    duration INTEGER NOT NULL
);
`.then(() => {
    console.log("Table created successfully")
})

