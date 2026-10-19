CREATE TABLE stops (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    address TEXT,
    latitude NUMERIC(10, 7)
        CHECK (latitude IS NULL OR latitude BETWEEN -90 AND 90),
    longitude NUMERIC(10, 7)
        CHECK (longitude IS NULL OR longitude BETWEEN -180 AND 180)
);