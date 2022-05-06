module.exports = {
    apps : [
      {
        name: "ciyuandao-dev",
        script: "npm",
        args: "run dev"
      },
      {
        name: "ciyuandao-test",
        script: "npm",
        args: "run start"
      },
      {
        name: "ciyuandao-h5-prod",
        script: "npm",
        args: "run start_server",
        // watch: false,
      }
    ]
  }