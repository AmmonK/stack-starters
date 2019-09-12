commands:

- npm install
- npm start

routes:

- GET /tasks
  -- gets a list of tasks
- POST /tasks
  -- create a task from body of request {"name":"sample","complete":false}
- PUT /tasks/id
  -- update a task by id from body of request
- DELETE /tasks/id
  -- delete a task by id, tasks/1 would delete task with id 1

Task model:

- id (numeric primary key auto incrementing)
- name (string)
- complete (boolean)
