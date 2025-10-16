CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    calories DECIMAL(10,2) NOT NULL,
    protein DECIMAL(10,2) NOT NULL,
    fat DECIMAL(10,2) NOT NULL,
    carbs DECIMAL(10,2) NOT NULL,
    fiber DECIMAL(10,2) DEFAULT 0,
    water DECIMAL(10,2) DEFAULT 0,
    vitamin_a DECIMAL(10,2) DEFAULT 0,
    vitamin_c DECIMAL(10,2) DEFAULT 0,
    vitamin_e DECIMAL(10,2) DEFAULT 0,
    calcium DECIMAL(10,2) DEFAULT 0,
    iron DECIMAL(10,2) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_products_name ON products(name);
CREATE INDEX idx_products_calories ON products(calories);