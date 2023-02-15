module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfg1m69gp3jjseaon070-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_h98w'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'DMT1EB7GbU63oSlek4SnGrlFj4WRAikl'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
