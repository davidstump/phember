use Mix.Config

# In this file, we keep production configuration that
# you likely want to automate and keep it away from
# your version control system.
config :phember_backend, PhemberBackend.Endpoint,
  secret_key_base: "xkerRQwhwJHDmhOnx8CHDwSfAihuLzX4DLtW2QVCdKXUF8iOp4CbFl8RXwf+bK6K"

# Configure your database
config :phember_backend, PhemberBackend.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "postgres",
  database: "phember_backend_prod",
  pool_size: 20
