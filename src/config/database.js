module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'sistemadeagendamento'
  define: {
    timestamps: true,
    undercored: true,
    undercoredAll: true,
  }
}