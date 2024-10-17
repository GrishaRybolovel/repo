CREATE TABLE IF NOT EXISTS  users(
    user_id serial primary key,
    username text not null unique,
    password text not null,
    rate text default 'Free',
    balance integer default 0,
    refferer text,
    credit_count int not null default 5,
    analytics_count int not null default 0,
    subscription_date timestamp with time zone default now(),
    activated bool not null default false
);

CREATE TABLE IF NOT EXISTS codes(
    code_id serial PRIMARY KEY,
    code integer not null,
    user_id integer REFERENCES users
);

CREATE TABLE IF NOT EXISTS  payments(
    order_id serial,
    customer text not null,
    amount integer,
    create_date timestamp with time zone default now()
);

create table if not exists completions(
    completion_id text,
    owner_id      integer
        references users,
    keywords      text,
    status        boolean                  default false,
    filename      text                     default ''::text,
    createdate    timestamp with time zone default now(),
    query         text                     default ''::text,
    trends         text                     default ''::text,
    not_trends         text                     default ''::text,
    ideas         text                     default ''::text,
    content_strategy         text                     default ''::text,
    average_views         text                     default ''::text
);

-- Add new fields if they do not exist
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM information_schema.columns
        WHERE table_name='completions' AND column_name='trends'
    ) THEN
        ALTER TABLE completions ADD COLUMN trends text default ''::text;
    END IF;

    IF NOT EXISTS (
        SELECT 1
        FROM information_schema.columns
        WHERE table_name='completions' AND column_name='not_trends'
    ) THEN
        ALTER TABLE completions ADD COLUMN not_trends text default ''::text;
    END IF;

    IF NOT EXISTS (
        SELECT 1
        FROM information_schema.columns
        WHERE table_name='completions' AND column_name='ideas'
    ) THEN
        ALTER TABLE completions ADD COLUMN ideas text default ''::text;
    END IF;

    IF NOT EXISTS (
        SELECT 1
        FROM information_schema.columns
        WHERE table_name='completions' AND column_name='content_strategy'
    ) THEN
        ALTER TABLE completions ADD COLUMN content_strategy text default ''::text;
    END IF;

    IF NOT EXISTS (
        SELECT 1
        FROM information_schema.columns
        WHERE table_name='completions' AND column_name='average_views'
    ) THEN
        ALTER TABLE completions ADD COLUMN average_views text default ''::text;
    END IF;
END $$;

CREATE TABLE IF NOT EXISTS subscription_warning(
    subscription_warning_id serial PRIMARY KEY,
    user_id integer REFERENCES users,
    subscription_warning_date timestamp with time zone default now(),
    CONSTRAINT unique_user_date UNIQUE (user_id, subscription_warning_date)
);
