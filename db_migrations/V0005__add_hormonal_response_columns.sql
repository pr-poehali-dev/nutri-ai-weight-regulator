ALTER TABLE products ADD COLUMN IF NOT EXISTS insulin_index DECIMAL(10,2) DEFAULT 0;
ALTER TABLE products ADD COLUMN IF NOT EXISTS cortisol_index DECIMAL(10,2) DEFAULT 0;
ALTER TABLE products ADD COLUMN IF NOT EXISTS leptin_index DECIMAL(10,2) DEFAULT 0;
ALTER TABLE products ADD COLUMN IF NOT EXISTS ghrelin_index DECIMAL(10,2) DEFAULT 0;
ALTER TABLE products ADD COLUMN IF NOT EXISTS glucagon_index DECIMAL(10,2) DEFAULT 0;
ALTER TABLE products ADD COLUMN IF NOT EXISTS serotonin_index DECIMAL(10,2) DEFAULT 0;
ALTER TABLE products ADD COLUMN IF NOT EXISTS telomeres_index DECIMAL(10,2) DEFAULT 0;

CREATE INDEX IF NOT EXISTS idx_products_insulin ON products(insulin_index);
CREATE INDEX IF NOT EXISTS idx_products_hormonal ON products(cortisol_index, leptin_index);